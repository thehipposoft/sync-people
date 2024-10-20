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
            industries: {
                industry: string;
            }[];
            current_status: string;
        };
        working_rights: {
            visa_number: string;
            visa_doc: string;
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
