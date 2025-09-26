import React from 'react';
import { TalentTypeAcf, IndustryType, WorkExperienceType } from '@/types';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
  Link,
  StyleSheet,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { parseISO, format } from 'date-fns';
import { handleRenderTimeInJobs } from '@/lib/utils';

Font.register({ family: 'Poppins', fonts: [
    { src: '/assets/fonts/Poppins-Regular.ttf' },
    { src: '/assets/fonts/Poppins-Bold.ttf', fontWeight: 'bold' },
    { src: '/assets/fonts/Poppins-Light.ttf', fontWeight: 'light' },
]});

const tw = createTw({
    theme: {
        fontFamily: {
            sans: ["Poppins"],
        },
        extend: {
            colors: {
                primary: '#1A335D',
                secondary: '#6B7280',
                accent: '#F59E0B',
            },
        },
    },
});

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        fontSize: 11,
        color: '#1A335D',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#1A335D',
        padding: 32,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: '#fff',
        objectFit: 'cover',
        marginRight: 16,
    },
    nameBlock: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 4,
        color: '#fff',
    },
    about: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#fff',
        maxWidth: '90%',
    },
    qr: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },
    section: {
        marginBottom: 16,
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 6,
        paddingBottom: 3,
    },
    value: {
        fontSize: 11,
    },
    link: {
        fontSize: 10,
        color: '#1A335D',
        textDecoration: 'underline',
        marginBottom: 2,
    },
});

type Props = {
    talentData: TalentTypeAcf;
    selectedIndustry: IndustryType;
    selectedIndustryWorkExperience: WorkExperienceType[];
    userId: string;
};

const TalentPDFDocument = ({
    talentData,
    selectedIndustry,
    selectedIndustryWorkExperience,
    userId
}:Props) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        style={styles.avatar}
                        src={talentData.personal_information.profile_pic || '/assets/images/profile-avatar.png'}
                    />
                    <View style={styles.nameBlock}>
                        <Text style={styles.name}>
                            {talentData.personal_information.first_name}{' '}
                            {talentData.personal_information.last_name} –{' '}
                            {talentData.personal_information.country_of_birth}
                        </Text>
                        {talentData.personal_information.about_myself && (
                        <Text style={styles.about}>
                            {talentData.personal_information.about_myself}
                        </Text>
                        )}
                    </View>
                    <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://insyncx.com/talents/${userId}?industry=${selectedIndustry.industry}&margin=30`}
                        style={styles.qr}
                    />
                </View>

                <View style={[{ paddingHorizontal: 32 }]}>
                    {/* Location & Work Preference */}
                    <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View>
                            <Text style={styles.sectionHeader}>Current Location</Text>
                            <Text style={styles.value}>
                                {talentData.personal_information.current_location?.suburb},{' '}
                                {talentData.personal_information.current_location?.state}
                            </Text>
                        </View>
                        <View style={[styles.section, { flexDirection: 'column', alignItems: 'flex-end' }]}>
                            <Text style={styles.sectionHeader}>Work Preferences</Text>
                            <Text style={styles.value}>
                                {talentData.professional_information.work_preference.join(', ') || '-'}
                            </Text>
                        </View>
                    </View>

                    {/* Licenses & Contact */}
                    <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View>
                            <Text style={tw('text-xl text-primary font-bold')}>
                                Licenses
                            </Text>
                            <Text style={tw('text-sm text-primary')}>
                                {talentData.professional_information.certificates && talentData.professional_information.certificates.filter(c => c.visible_for.includes(selectedIndustry.industry)).map(c => c.name).join(', ') || '-'}
                            </Text>
                        </View>
                        <View style={[styles.section, { flexDirection: 'column', alignItems: 'flex-end' }]}>
                            <Text style={tw('text-xl text-primary font-bold text-right')}>
                                Contact
                            </Text>
                            {talentData.personal_information.mobile && (
                                <Link
                                    style={tw('text-sm text-primary underline text-right mb-2')}
                                    href={`tel:${talentData.personal_information.mobile}`}
                                >
                                        {talentData.personal_information.mobile}
                                </Link>
                            )}
                            {talentData.personal_information.email && (
                                <Text style={tw('text-sm text-primary text-right')}>{talentData.personal_information.email}</Text>
                            )}
                        </View>
                    </View>

                    {/* Work Experience */}
                    {selectedIndustryWorkExperience?.length > 0 && (
                        <View style={tw('my-2')}>
                            <Text style={tw('text-2xl font-bold text-primary')}>
                                Work Experience
                            </Text>
                            {
                                [...selectedIndustryWorkExperience]
                                    .map((experience, index) => {
                                        const startDate = parseISO(experience.start_date);
                                        const endDate = experience.currently_working ? new Date() : parseISO(experience.end_date);

                                        return (
                                            <View key={index} style={tw('flex flex-col mb-2')}>
                                                <Text style={tw('text-xl font-bold text-primary')}>
                                                    {experience.position} - <Text style={tw('text-lg font-normal')}>{experience.company_name}</Text>
                                                </Text>
                                                <Text style={tw('text-base text-primary')}>
                                                    {format(experience.start_date, 'dd/MM/yyyy')} - {experience.currently_working ? 'Current ' : format(experience.end_date, 'dd/MM/yyyy')}
                                                    <Text style={tw('ml-1 text-sm')}>
                                                        ({handleRenderTimeInJobs(startDate, endDate)})
                                                    </Text>
                                                </Text>
                                                <Text style={tw('text-sm text-primary')}>{experience.description}</Text>
                                            </View>
                                        );
                                    })
                            }
                        </View>
                    )}

                    {/* Skills */}
                    {talentData.professional_information.skills_set?.length > 0 && (
                        <View style={tw('my-2')}>
                            <Text style={tw('text-2xl font-bold text-primary font-bold')}>
                                Key Skills
                            </Text>
                            <View style={tw('flex-col flex-wrap gap-2')}>
                                {talentData.professional_information.skills_set.map((skill, index) => (
                                    <Text key={index} style={tw('text-sm text-primary')}>
                                        - {skill.skill}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Extras */}
                    <View style={tw('my-2')}>
                        <Text style={tw('text-2xl font-bold text-primary')}>
                            Extras
                        </Text>
                        <View style={styles.section}>
                            <Text style={styles.sectionHeader}>
                                Level of English
                            </Text>
                            <Text style={tw('capitalize text-sm text-primary')}>
                                {talentData.extras.level_of_english || '-'}
                            </Text>
                        </View>

                        {talentData.extras.transport && (
                            <View style={styles.section}>
                                <Text style={styles.sectionHeader}>
                                    Own Transport
                                </Text>
                                <Text style={tw('capitalize text-sm text-primary')}>
                                    {talentData.extras.transport}
                                </Text>
                            </View>
                        )}

                        {
                            talentData.extras.languages?.length > 0 && (
                                <View style={styles.section}>
                                    <Text style={styles.sectionHeader}>
                                        Languages
                                    </Text>
                                    <Text style={tw('capitalize text-sm text-primary')}>
                                        {talentData.extras.languages?.length
                                        ? talentData.extras.languages.join(', ')
                                        : '-'}
                                    </Text>
                                </View>
                            )
                        }

                        <View style={styles.section}>
                            <Text style={styles.sectionHeader}>
                                Education Level
                            </Text>
                            <Text style={tw('capitalize text-sm text-primary')}>
                                {talentData.extras.education_level || '-'}
                            </Text>
                        </View>

                        {/* Links */}
                        {talentData.extras.other_urls?.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.sectionHeader}>
                                    Other URLs
                                </Text>
                                {talentData.extras.other_urls.map((u, i) => (
                                    <Link key={i} src={u.url} style={styles.link}>
                                        {u.name}
                                    </Link>
                                ))}
                            </View>
                        )}

                        {talentData.extras.social_media_links?.length > 0 && (
                            <View style={styles.section}>
                                <Text style={styles.sectionHeader}>
                                    Social Media
                                </Text>
                                {talentData.extras.social_media_links.map((u, i) => (
                                    <Text key={i} style={styles.link}>{u.url}</Text>
                                ))}
                            </View>
                        )}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TalentPDFDocument;
