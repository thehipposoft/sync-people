import React from 'react';
import { TalentTypeAcf, IndustryType } from '@/types';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
  Link,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { INDUSTRIES_BANNER } from '@/app/constants';
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

type Props = {
    talentData: TalentTypeAcf;
    selectedIndustry: IndustryType;
};

const TalentPDFDocument = ({
    talentData,
    selectedIndustry
}:Props) => {
    console.log(">>talentData", talentData);
    return (
        <Document>
            <Page size="A4" style={tw('bg-white px-6 py-8 font-sans')}>
                {/* <View style={tw('rounded-t-2xl overflow-hidden h-20')}>
                    <Image
                        style={tw('object-cover w-full h-full')}
                        src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                    />
                </View> */}

                <View style={tw('flex flex-col mt-6')}>
                    <View style={tw('flex-row items-start gap-4 mb-4')}>
                        <Image
                            style={tw('rounded-full border-4 border-white w-24 h-24')}
                            src={talentData.personal_information.profile_pic
                                ? talentData.personal_information.profile_pic
                                : '/assets/images/profile-avatar.png'
                            }
                        />
                        <View style={tw('mb-4')}>
                            <Text style={tw('text-3xl font-bold text-primary')}>
                                {talentData.personal_information.first_name} {talentData.personal_information.last_name} - {selectedIndustry.position}
                            </Text>
                            <Text style={tw('text-base text-primary')}>
                                {talentData.personal_information.about_myself
                                ? `" ${talentData.personal_information.about_myself} "`
                                : ''}
                            </Text>
                        </View>
                    </View>

                    <View style={tw('flex-row justify-between mb-4')}>
                        <View>
                            <Text style={tw('text-xl text-primary')}>Current Location</Text>
                            <Text style={tw('text-sm text-primary')}>
                                {talentData.personal_information.current_location?.suburb}, {talentData.personal_information.current_location?.state}
                            </Text>
                        </View>
                        <View style={tw('min-w-[150px]')}>
                            <Text style={tw('text-xl text-primary')}>Country of Birth</Text>
                            <Text style={tw('text-sm text-primary')}>
                                {talentData.personal_information.country_of_birth || '-'}
                            </Text>
                        </View>
                    </View>

                    <View style={tw('flex-row justify-between mb-4')}>
                        <View >
                            <Text style={tw('text-xl text-primary')}>Licenses</Text>
                            <Text style={tw('text-sm text-primary')}>
                            {selectedIndustry.certificates && selectedIndustry.certificates?.map(c => c.name).join(', ') || '-'}
                            </Text>
                        </View>
                        <View style={tw('min-w-[150px]')}>
                            <Text style={tw('text-xl text-primary')}>
                                Work Preference
                            </Text>
                            <Text style={tw('text-sm capitalize text-primary')}>
                                {talentData.professional_information.work_preference || '-'}
                            </Text>
                        </View>
                    </View>

                    <View style={tw('mt-4')}>
                        <Text style={tw('text-xl mb-2 text-primary')}>Contact me</Text>
                        {talentData.personal_information.mobile && (
                            <Text style={tw('text-sm text-primary')}>{talentData.personal_information.mobile}</Text>
                        )}
                        {talentData.personal_information.email && (
                            <Text style={tw('text-sm text-primary')}>{talentData.personal_information.email}</Text>
                        )}
                    </View>

                    {talentData.work_experience?.length > 0 && (
                    <View style={tw('mt-8')}>
                        <Text style={tw('text-2xl font-bold mb-2 text-primary')}>Work Experience</Text>
                        {
                            [...talentData.work_experience]
                                .sort((a, b) => parseISO(b.start_date).getTime() - parseISO(a.start_date).getTime())
                                .map((experience, index) => {
                                    const startDate = parseISO(experience.start_date);
                                    const endDate = experience.currently_working ? new Date() : parseISO(experience.end_date);

                                    return (
                                        <View key={index} style={tw('flex flex-col gap-2 mb-2')}>
                                            <Text style={tw('text-xl font-bold text-primary')}>
                                                {experience.position} - <Text style={tw('text-lg')}>{experience.company_name}</Text>
                                            </Text>
                                            <Text style={tw('text-base text-primary')}>
                                                {format(experience.start_date, 'dd/MM/yyyy')} - {experience.currently_working ? 'Current ' : format(experience.end_date, 'dd/MM/yyyy')}
                                                <Text style={tw('ml-1 text-sm')}>
                                                    ({handleRenderTimeInJobs(startDate, endDate)})
                                                </Text>
                                            </Text>
                                            <Text style={tw('text-sm')}>{experience.description}</Text>
                                        </View>
                                    );
                                })
                        }
                    </View>
                    )}

                    <View style={tw('mt-6')}>
                        <Text style={tw('text-2xl font-bold mb-2 text-primary')}>Extras</Text>
                        <Text style={tw('text-lg text-primary')}>
                            Level of English
                        </Text>
                        <Text style={tw('capitalize text-sm mb-5 text-primary')}>
                            {talentData.extras.level_of_english || '-'}
                        </Text>
                        {talentData.extras.transport && (
                            <>
                                <Text style={tw('text-lg text-primary')}>Own Transport</Text>
                                <Text style={tw('capitalize mb-5 text-sm text-primary')}>{talentData.extras.transport}</Text>
                            </>
                        )}
                        {
                            talentData.extras.languages?.length > 0 && (
                                <>
                                    <Text style={tw('text-lg text-primary')}>
                                        Languages
                                    </Text>
                                    <Text style={tw('capitalize text-sm text-primary')}>
                                        {talentData.extras.languages?.length
                                        ? talentData.extras.languages.join(', ')
                                        : '-'}
                                    </Text>
                                </>
                            )
                        }
                        <Text style={tw('text-lg text-primary')}>
                            Education Level
                        </Text>
                        <Text style={tw('capitalize text-sm text-primary')}>
                            {talentData.extras.education_level || '-'}
                        </Text>
                        {
                            talentData.extras.other_urls?.length > 0 && (
                            <View style={tw('mt-6')}>
                                <Text style={tw('text-xl mb-2 text-primary')}>Other URLs</Text>
                                {talentData.extras.other_urls && talentData.extras.other_urls.length > 0 ? (
                                    <View style={tw('flex-row flex-wrap gap-2')}>
                                            {talentData.extras.other_urls.map((item, index) => (
                                                <View key={index} style={tw('mr-2 mb-2')}>
                                                    <Link
                                                        src={item.url}
                                                        style={tw('text-sm text-primary underline')}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </View>
                                            ))}
                                            </View>
                                        ) : (
                                            <Text style={tw('text-sm text-primary')}>-</Text>
                                        )}
                                    </View>
                                )
                        }
                        {
                            talentData.extras.social_media_links?.length > 0 && (
                            <View style={tw('mt-6')}>
                                <Text style={tw('text-xl mb-2 text-primary')}>Other URLs</Text>
                                {talentData.extras.social_media_links && talentData.extras.social_media_links.length > 0 ? (
                                    <View style={tw('flex-row flex-wrap gap-2')}>
                                            {talentData.extras.social_media_links.map((item, index) => (
                                                <View key={index} style={tw('mr-2 mb-2')}>
                                                    <Text style={tw('text-lg text-primary')}>
                                                        {item.url}
                                                    </Text>
                                                </View>
                                            ))}
                                            </View>
                                        ) : (
                                            <Text style={tw('text-sm text-primary')}>-</Text>
                                        )}
                                    </View>
                                )
                        }
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TalentPDFDocument;
