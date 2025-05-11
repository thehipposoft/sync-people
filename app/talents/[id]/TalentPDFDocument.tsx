import React from 'react';
import { TalentTypeAcf, IndustryType } from '@/types';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
} from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { INDUSTRIES_BANNER } from '@/app/constants';

const tw = createTw({
    theme: {
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

const TalentPDFDocument = ({ talentData, selectedIndustry }:Props) => {
  return (
    <Document>
        <Page size="A4" style={tw('bg-white px-6 py-8')}>
            {/* Banner */}
            <View style={tw('rounded-t-2xl overflow-hidden h-40')}>
                <Image
                    style={tw('object-cover w-full h-full')}
                    src={INDUSTRIES_BANNER[selectedIndustry.industry]}
                />
            </View>

            {/* Profile section */}
            <View style={tw('flex flex-col mt-6')}>
                {/* Profile pic and about */}
                <View style={tw('flex-row items-start gap-4 mb-4')}>
                <Image
                    style={tw('rounded-full border-4 border-white w-36 h-36')}
                    src={talentData.personal_information.profile_pic || ''}
                />
                <Text style={tw('text-base italic')}>
                    {talentData.personal_information.about_myself
                    ? `" ${talentData.personal_information.about_myself} "`
                    : ''}
                </Text>
                </View>

                {/* Name and role */}
                <Text style={tw('text-2xl font-bold mb-2')}>
                {talentData.personal_information.first_name} - {selectedIndustry.position}
                </Text>

                {/* Current Location & Birth Country */}
                <View style={tw('flex-row justify-between mb-4')}>
                    <View>
                        <Text style={tw('text-lg font-bold text-primary')}>Current Location</Text>
                        <Text style={tw('text-sm text-primary')}>
                        {talentData.personal_information.current_location?.suburb}, {talentData.personal_information.current_location?.state}
                        </Text>
                    </View>
                    <View>
                        <Text style={tw('text-lg font-bold text-primary')}>Country of Birth</Text>
                        <Text style={tw('text-sm text-primary')}>
                        {talentData.personal_information.country_of_birth || '-'}
                        </Text>
                    </View>
                </View>

                {/* Availability and Licenses */}
                <View style={tw('flex-row justify-between mb-4')}>
                <View>
                    <Text style={tw('text-lg font-bold')}>Licenses</Text>
                    <Text style={tw('text-sm')}>
                    {selectedIndustry.certificates && selectedIndustry.certificates?.map(c => c.name).join(', ') || '-'}
                    </Text>
                </View>
                <View>
                    <Text style={tw('text-lg font-bold')}>Availability</Text>
                    <Text style={tw('text-sm capitalize')}>
                    {talentData.professional_information.work_preference || '-'}
                    </Text>
                </View>
                </View>

                {/* Contact Info */}
                <View style={tw('mt-4')}>
                <Text style={tw('text-lg font-bold mb-2')}>Contact me</Text>
                {talentData.personal_information.mobile && (
                    <Text style={tw('text-sm')}>{talentData.personal_information.mobile}</Text>
                )}
                {talentData.personal_information.email && (
                    <Text style={tw('text-sm')}>{talentData.personal_information.email}</Text>
                )}
                </View>

                {/* Work Experience */}
                {talentData.work_experience?.length > 0 && (
                <View style={tw('mt-8')}>
                    <Text style={tw('text-xl font-bold mb-2')}>Work Experience</Text>
                    {talentData.work_experience.map((exp, idx) => (
                    <View key={idx} style={tw('mb-3')}>
                        <Text style={tw('text-lg font-semibold')}>{exp.position}</Text>
                        <Text style={tw('text-sm opacity-70')}>{exp.company_name}</Text>
                        <Text style={tw('text-sm opacity-70')}>
                        {exp.start_date} - {exp.currently_working ? 'Current' : exp.end_date}
                        </Text>
                        <Text style={tw('text-sm')}>{exp.description}</Text>
                    </View>
                    ))}
                </View>
                )}

                {/* Extras */}
                <View style={tw('mt-6')}>
                    <Text style={tw('text-xl font-bold mb-2')}>Extras</Text>
                    <Text style={tw('text-lg')}>Level of English</Text>
                    <Text style={tw('capitalize mb-2')}>{talentData.extras.level_of_english || '-'}</Text>

                    {talentData.extras.transport && (
                        <>
                            <Text style={tw('text-lg')}>Own Transport</Text>
                            <Text style={tw('capitalize')}>{talentData.extras.transport}</Text>
                        </>
                    )}
                </View>
            </View>
        </Page>
    </Document>
  );
};

export default TalentPDFDocument;
