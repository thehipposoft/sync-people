import React from 'react';
import { TalentTypeAcf, IndustryType } from '@/types';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { INDUSTRIES_BANNER } from '@/app/constants';

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
            // Add more custom colors here
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
    selectedIndustry }:Props) => {
    return (
        <Document>
            <Page size="A4" style={tw('bg-white px-6 py-8 font-sans')}>
                <View style={tw('rounded-t-2xl overflow-hidden h-40')}>
                    <Image
                        style={tw('object-cover w-full h-full')}
                        src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                    />
                </View>

                <View style={tw('flex flex-col mt-6')}>
                    <View style={tw('flex-row items-start justify-between gap-4 mb-4')}>
                        <Image
                            style={tw('rounded-full border-4 border-white w-36 h-36')}
                            src={'/assets/images/profile-avatar.png'}
                            
                        />
                        <Text style={tw('text-base max-w-[420px] text-primary')}>
                            {talentData.personal_information.about_myself
                            ? `" ${talentData.personal_information.about_myself} "`
                            : ''}
                        </Text>
                    </View>

                    <View style={tw('flex-row items-center justify-between mb-4')}>
                        <Text style={tw('text-3xl font-bold mb-2 text-primary')}>
                            {talentData.personal_information.first_name} - {selectedIndustry.position}
                        </Text>
                        <Text style={tw('text-xl font-bold mb-2 text-primary')}>
                            {selectedIndustry.industry} {selectedIndustry.industry}
                        </Text>
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
                            <Text style={tw('text-xl text-primary')}>Availability</Text>
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
                        {talentData.work_experience.map((exp, idx) => (
                        <View key={idx} style={tw('mb-3')}>
                            <Text style={tw('text-lg font-semibold text-primary')}>{exp.position}</Text>
                            <Text style={tw('text-sm opacity-70 text-primary')}>{exp.company_name}</Text>
                            <Text style={tw('text-sm opacity-70 text-primary')}>
                            {exp.start_date} - {exp.currently_working ? 'Current' : exp.end_date}
                            </Text>
                            <Text style={tw('text-sm text-primary')}>{exp.description}</Text>
                        </View>
                        ))}
                    </View>
                    )}

                    <View style={tw('mt-6')}>
                        <Text style={tw('text-2xl font-bold mb-2 text-primary')}>Extras</Text>
                        <Text style={tw('text-lg text-primary')}>Level of English</Text>
                        <Text style={tw('capitalize text-sm mb-2 text-primary')}>{talentData.extras.level_of_english || '-'}</Text>
                        {talentData.extras.transport && (
                            <>
                                <Text style={tw('text-lg text-primary')}>Own Transport</Text>
                                <Text style={tw('capitalize text-sm text-primary')}>{talentData.extras.transport}</Text>
                            </>
                        )}
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default TalentPDFDocument;
