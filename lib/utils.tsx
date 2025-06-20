import React from "react";
import Image from "next/image";
import { SocialMediaLinksType, IndustriesAvailable } from "@/types";
import { differenceInYears, differenceInMonths, differenceInDays } from "date-fns";

export const getAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
};

export const handleRenderTimeInJobs = (startDate: Date, endDate: Date) => {
    const diffInYears = differenceInYears(endDate, startDate);
    const diffInMonths = differenceInMonths(endDate, startDate) % 12;
    const diffInDays = differenceInDays(endDate, startDate) % 30;

    if (diffInYears > 0) {
        return `${diffInYears} year${diffInYears > 1 ? 's' : ''}, ${diffInMonths} month${diffInMonths > 1 ? 's' : ''}, ${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    }

    if (diffInMonths > 0) {
        return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}, ${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
    }
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`;
};

export const renderSocialMediaIcon = (platform: SocialMediaLinksType) => {
    switch (platform) {
        case 'facebook':
            return <Image src={'/assets/images/vectors/facebook.svg'} alt='icon' width={35} height={35} />;
        case 'tiktok':
            return <svg
                width={35} height={35}
                fill="#1A335D"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg" stroke="#1A335D"
            >
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z">
                </path>
            </svg>;
        case 'instagram':
            return <svg
                width={35} height={35}
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#1A335D">
                    </path>
                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#1A335D"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#1A335D">
                    </path>
                </g>
            </svg>;
        case 'linkedin':
            return <Image src={'/assets/images/vectors/linkedin.svg'} alt='icon' width={35} height={35} />;
        case 'twitter':
            return <svg
                width={35} height={35}
                fill="#1A335D"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 509.64"
            >
                <rect width="512" height="509.64" rx="115.61" ry="115.61"/>
                <path
                    fill="#fff"
                    fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
            </svg>;
        case 'youtube':
            return <svg
                width={35} height={35}
                viewBox="0 -3 20 20"
                version="1.1" xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#1A335D">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>;
        case 'other':
            return <svg
                    width={35} height={35}
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2399.000000)" fill="#1A335D">
                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                <path d="M336.311,2256.66477 C337.577,2254.61206 338.313,2252.32917 338.507,2250.00323 L341.93,2250.00323 C341.533,2253.16786 339.289,2255.76302 336.311,2256.66477 M334.005,2256.50564 C332.565,2254.55702 331.719,2252.30815 331.495,2250.00323 L336.506,2250.00323 C336.285,2252.30715 335.442,2254.55602 334.005,2256.50564 M326.069,2250.00323 L329.493,2250.00323 C329.689,2252.33017 330.429,2254.61507 331.699,2256.66777 C328.716,2255.76903 326.467,2253.17187 326.069,2250.00323 M331.288,2241.47915 C330.176,2243.51284 329.574,2245.7457 329.467,2248.00157 L326.069,2248.00157 C326.448,2244.98106 328.512,2242.48499 331.288,2241.47915 M333.967,2240.99675 C333.976,2240.98474 333.985,2240.97273 333.994,2240.96072 C334.003,2240.97273 334.011,2240.98474 334.02,2240.99675 C335.555,2243.08749 336.393,2245.52551 336.532,2248.00157 L331.467,2248.00157 C331.603,2245.52651 332.437,2243.08949 333.967,2240.99675 M341.93,2248.00157 L338.532,2248.00157 C338.422,2245.74369 337.816,2243.50984 336.699,2241.47415 C339.482,2242.47798 341.551,2244.97606 341.93,2248.00157 M334.855,2239.03712 C328.942,2238.5347 324,2243.19858 324,2249.0024 C324,2254.43892 328.335,2258.84258 333.71,2258.99571 C339.387,2259.15984 344,2254.59505 344,2249.0024 C344,2243.84011 340.068,2239.48249 334.855,2239.03712" id="globe_network-[#1294]">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>;
        case 'personal_website':
            return <svg
                width={35} height={35}
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
            >
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-380.000000, -2399.000000)" fill="#1A335D">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M336.311,2256.66477 C337.577,2254.61206 338.313,2252.32917 338.507,2250.00323 L341.93,2250.00323 C341.533,2253.16786 339.289,2255.76302 336.311,2256.66477 M334.005,2256.50564 C332.565,2254.55702 331.719,2252.30815 331.495,2250.00323 L336.506,2250.00323 C336.285,2252.30715 335.442,2254.55602 334.005,2256.50564 M326.069,2250.00323 L329.493,2250.00323 C329.689,2252.33017 330.429,2254.61507 331.699,2256.66777 C328.716,2255.76903 326.467,2253.17187 326.069,2250.00323 M331.288,2241.47915 C330.176,2243.51284 329.574,2245.7457 329.467,2248.00157 L326.069,2248.00157 C326.448,2244.98106 328.512,2242.48499 331.288,2241.47915 M333.967,2240.99675 C333.976,2240.98474 333.985,2240.97273 333.994,2240.96072 C334.003,2240.97273 334.011,2240.98474 334.02,2240.99675 C335.555,2243.08749 336.393,2245.52551 336.532,2248.00157 L331.467,2248.00157 C331.603,2245.52651 332.437,2243.08949 333.967,2240.99675 M341.93,2248.00157 L338.532,2248.00157 C338.422,2245.74369 337.816,2243.50984 336.699,2241.47415 C339.482,2242.47798 341.551,2244.97606 341.93,2248.00157 M334.855,2239.03712 C328.942,2238.5347 324,2243.19858 324,2249.0024 C324,2254.43892 328.335,2258.84258 333.71,2258.99571 C339.387,2259.15984 344,2254.59505 344,2249.0024 C344,2243.84011 340.068,2239.48249 334.855,2239.03712" id="globe_network-[#1294]">
                            </path>
                        </g>
                    </g>
                </g>
            </svg>;
    }
};

export const renderDescriptionPlaceholderByIndustry = (industry: IndustriesAvailable) => {
    if (industry === 'construction') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Supervised site operations, ensured safety compliance, and assisted in building residential structures.";
    }

    if (industry === 'cleaning') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Maintained high cleanliness standards, handled industrial cleaning equipment, and improved sanitation efficiency";
    }

    if (industry === 'warehousing') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Managed inventory, operated forklifts, and optimized storage space to improve efficiency.";
    }

    if (industry === 'logistics') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Coordinated shipments, tracked deliveries, and reduced transport delays";
    };

    if (industry === 'farming') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Operated machinery, harvested crops, and implemented sustainable farming techniques.";
    };

    if (industry === 'hospitality') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Provided excellent customer service, managed reservations, and increased guest satisfaction ratings.";
    };

    if (industry === 'retail') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Assisted customers, managed stock, and boosted sales through personalized recommendations.";
    };

    if (industry === 'age_care') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Assisted elderly residents with daily tasks, provided companionship, and ensured high-quality care.";
    };

    if (industry === 'other') {
        return "Briefly describe your responsibilities, achievements, and key projects. Example: Adapted to various tasks, collaborated with teams, and contributed to overall business success.";
    };

    return "Briefly describe your responsibilities, achievements, and key projects. Example: Managed a team of 5, increased sales by 20%, and led a successful product launch.";
};

export const handleDownloadQR = (url: string, first_name: string, last_name: string) => {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url}&margin=30`)
        .then(response => {
            response.blob()
            .then((blob) => {
                let blobUrl = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.download = `Insyncx-${first_name}-${last_name}-QR`;
                a.href = blobUrl;
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
        })
        .catch(error => {
            console.log(">>error", error);
        })
};
