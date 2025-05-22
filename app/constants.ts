import { LevelOfEnglishType, LanguagesType, SocialMediaLinksType } from "@/types";

export const ROUTES = {
    HOME: '/',
    ABOUT: '/#about',
    CATEGORIES_TOURISM: '/categories/tourism',
    CATEGORIES_WAREHOUSING: '/categories/warehousing',
    CATEGORIES_CONSTRUCTION: '/categories/construction',
    CATEGORIES_CLEANING: '/categories/cleaning',
    CATEGORIES_HOSPITALITY: '/categories/hospitality',
    CONTACT: '/#contact',
    LOGIN: '/login',
    BLOG: '/blog',
    FAQS: '/faqs',
    ENTRY: '/blog/entry',
    SIGN_UP: '/sign-up',
    TERMS: '/terms',
    TALENTS: '/talents',
    PRIVACY_POLICY: '/privacy-policy',
    PRESENTATION_VIDEO: '/blog/why-create-a-presentation-video',
    CURRENT_TALENT_NOT_FOUND: '/current-talent-not-found',
    SESSION_EXPIRED: '/session-expired',
    //Private routes
    DASHBOARD: '/dashboard',
    MY_PROFILE: '/dashboard/my-profile',
}

type IndustriesBannerType = {
    [key in IndustriesAvailable]: string;
};

export const INDUSTRIES_BANNER:IndustriesBannerType = {
    construction: '/assets/images/industries-banners/construction.jpg',
    cleaning: '/assets/images/industries-banners/cleaning.webp',
    warehousing: '/assets/images/industries-banners/warehousing.jpg',
    logistics: '/assets/images/industries-banners/logistic.webp',
    farming: '/assets/images/industries-banners/farming.avif',
    hospitality: '/assets/images/industries-banners/hospitality.webp',
    retail: '/assets/images/industries-banners/retail.jpeg',
    age_care: '/assets/images/industries-banners/age-care.webp',
    other: '/assets/images/industries-banners/other.jpg',
}

export type IndustriesAvailable = 'construction' | 'cleaning' | 'warehousing' | 'logistics' | 'farming' | 'hospitality' | 'retail' | 'age_care' | 'other';

export const INDUSTRIES: {
    name: string;
    value: IndustriesAvailable;
}[] = [
    {
        name: 'Construction',
        value: 'construction',
    },
    {
        name: 'Cleaning',
        value: 'cleaning',
    },
    {
        name: 'Warehousing',
        value: 'warehousing',
    },
    {
        name: 'Logistics',
        value: 'logistics',
    },
    {
        name: 'Farming / Solar farming',
        value: 'farming',
    },
    {
        name: 'Hospitality',
        value: 'hospitality',
    },
    {
        name: 'Retail',
        value: 'retail',
    },
    {
        name: 'Age Care',
        value: 'age_care',
    },
];

export const LEVEL_OF_ENGLISH: {
    name: string;
    value: LevelOfEnglishType;
}[] = [
    {
        name: 'Beginner',
        value: 'beginner',
    },
    {
        name: 'Elementary',
        value: 'elementary',
    },
    {
        name: 'Intermediate',
        value: 'intermediate',
    },
    {
        name: 'Upper Intermediate',
        value: 'upper_intermediate',
    },
    {
        name: 'Advanced',
        value: 'advanced',
    },
    {
        name: 'Proficient',
        value: 'proficient',
    },
    {
        name: 'Native',
        value: 'native',
    }
];

export const EDUCATION_LEVEL = [
    'No Formal Education',
    'Primary Education',
    'Secondary Education',
    'High School Diploma',
    'Associate Degree',
    'Bachelor’s Degree',
    'Master’s Degree',
    'Doctorate (PhD)',
    'Vocational Training',
    'Other',
]

export const LANGUAGES: LanguagesType[] = [
    'English',
    'Spanish',
    'French',
    'Italian',
    'Japanese',
    'Cantonese',
    'Mandarin',
    'Dutch',
    'German',
    'Hebrew',
    'Portuguese',
    'Other',
];

type SocialMediaPlatformsType = {
    name: string;
    value: SocialMediaLinksType;
};

export const SOCIAL_MEDIA_PLATFORMS: SocialMediaPlatformsType[] = [
    {
        name: 'LinkedIn',
        value: 'linkedin',
    },
    {
        name: 'Facebook',
        value: 'facebook',
    },
    {
        name: 'Twitter',
        value: 'twitter',
    },
    {
        name: 'Instagram',
        value: 'instagram',
    },
    {
        name: 'YouTube',
        value: 'youtube',
    },
    {
        name: 'TikTok',
        value: 'tiktok',
    },
    {
        name: 'Personal Website',
        value: 'personal_website',
    },
    {
        name: 'Other',
        value: 'other',
    },
];

export const AUSTRALIAN_STATES = [
    'Victoria',
    'New South Wales',
    'Queensland',
    'Western Australia',
    'South Australia',
    'Tasmania',
    'Australian Capital Territory',
    'Northern Territory',
];

export const TALENT_CURRENT_STATUS_DROPDOWN = [
    {
        label: 'Available',
        value: 'available',
    },
    {
        label: 'Working',
        value: 'working',
    },
    {
        label: 'Offline',
        value: 'offline',
    }
];

export const TALENT_WORK_PREFERENCE_DROPDOWN = [
    {
        label: 'Part-time',
        value: 'part-time',
    },
    {
        label: 'Full-time',
        value: 'full-time',
    },
    {
        label: 'Casual',
        value: 'casual',
    },
    {
        label: 'Contract',
        value: 'contract',
    },
    {
        label: 'Internship',
        value: 'internship',
    },
];
