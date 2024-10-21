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

export type TalentType = {
    id: number;
    date: string;
    modified: string;
    status: string;
    acf: {
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
        };
        working_rights: {
            visa_number: string;
            visa_doc: string;
            current_visa: {
                label: string;
                value: string;
            };
        };
        extras: {
            level_of_english: string;
            prefered_language: string;
            other_languages: string;
            more_about_myself: string;
            education_level: string;
            other_credentials: string[];
            transport: string;
            presentation_video: string;
            social_media_links: string[];
            profile_header_image: string;
        }
    }
};
