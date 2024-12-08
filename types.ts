export type IndustryType = {
    industry: string;
    other_industry: string;
    preferred_salary: string;
    rol: string;
    certificates: {
        certificate: string;
        name: string;
    }[];
};

export type TalentTypeAcf = {
    personal_information: {
        first_name: string;
        last_name: string;
        email: string;
        mobile: string;
        date_of_birth: string;
        country: string;
        profile_pic: string;
        gender: string;
    };
    professional_information: {
        industries: IndustryType[];
        current_status: string;
        work_preference: string;
    };
    working_rights: {
        visa_number: string;
        visa_doc: string;
        current_visa: {
            label: string;
            value: string;
        };
    };
    current_location: {
        address_1: string,
        suburb: string,
        state: string,
        postcode: string,
    };
    extras: {
        level_of_english: string;
        prefered_language: string;
        other_languages: string;
        more_about_myself: string;
        education_level: string;
        other_credentials: {
            certificate: string;
            name: string;
        }[];
        transport: string;
        presentation_video: string;
        social_media_links: {
            platform: 'linkedin' | 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'other';
            url: string;
        }[];
        profile_header_image: string;
        languages: string[];
    };
    work_experience: {
        experience: {
            company_name: string;
            position: string;
            start_date: string;
            end_date: string;
            currently_working: boolean;
            rol: string;
            description: string;
        }[];
    }
};

export type TalentType = {
    id: number;
    date: string;
    modified: string;
    status: string;
    acf: TalentTypeAcf;
};
