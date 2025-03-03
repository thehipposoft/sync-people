export type IndustryType = {
    industry: IndustriesAvailable;
    other_industry?: string;
    preferred_salary: string;
    position: string;
    industry_description: string;
    certificates: {
        certificate?: string;
        name: string;
        file_url: string;
    }[];
};

export type IndustriesAvailable = 'construction' | 'cleaning' | 'warehousing' | 'logistics' | 'farming' | 'hospitality' | 'retail' | 'age_care' | 'other';

export type PersonalInformationType = {
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    date_of_birth: string;
    country_of_birth: string;
    profile_pic: string;
    gender: string;
    current_location: {
        address_1: string,
        suburb: string,
        state: string,
        postcode: string,
    };
};

export type professional_information = {
    industries: IndustryType[];
    current_status: 'available' | 'working' | 'offline';
    work_preference: 'parti-time' | 'full-time' | 'casual' | 'contract' | 'internship';
};

export type WorkExperienceType = {
    company_name: string;
    position: string;
    start_date: string;
    end_date: string;
    currently_working: boolean;
    description: string;
    industry: IndustriesAvailable;
};

export type LevelOfEnglishType =  'beginner' | 'elementary' | 'intermediate' | 'upper_intermediate' | 'advanced' | 'proficient' | 'native';

export type EducationLevelType = 'No Formal Education' | 'Primary Education' | 'Secondary Education' | 'High School Diploma' | 'Associate Degree' | 'Bachelor’s Degree' | 'Master’s Degree' | 'Doctorate (PhD)' | 'Vocational Training' | 'Other';

export type LanguagesType = 'English' | 'Spanish' | 'French' | 'Italian' | 'Japanese' | 'Cantonese' | 'Mandarin' | 'Dutch' | 'German' | 'Hebrew'
    | 'Portuguese' | 'Other';

export type SocialMediaLinksType = 'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'personal_website' | 'other';

export type ExtraInformationType = {
    level_of_english: LevelOfEnglishType;
    preferred_language: string;
    other_languages: string;
    more_about_myself: string;
    education_level: EducationLevelType;
    other_credentials: {
        file_url: string;
        certificate: string;
        name: string;
    }[];
    transport: string;
    presentation_video: string;
    social_media_links: {
        platform: SocialMediaLinksType;
        url: string;
    }[];
    profile_header_image: string;
    languages: LanguagesType[];
};

export type TalentTypeAcf = {
    id: number;
    personal_information: PersonalInformationType;
    professional_information: professional_information;
    working_rights: {
        visa_number: string;
        visa_doc: string;
        current_visa: {
            label: string;
            value: string;
        };
    };
    extras: ExtraInformationType;
    work_experience: WorkExperienceType[];
};

export type TalentType = {
    id: number;
    date: string;
    modified: string;
    status: string;
    acf: TalentTypeAcf;
};
