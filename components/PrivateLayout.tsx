'use client';
import Image from "next/image";
import SideNav from "./SideNav";
import { Link } from 'next-view-transitions';
import { ROUTES } from "@/app/constants";
import { TalentTypeAcf } from '@/types';
import Footer from "@/components/Footer";
import { logout } from "@/lib/api";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";

type Props = {
    children: React.ReactNode;
    user: TalentTypeAcf;
    userId: string;
    hideSideNav?: boolean;
    noTalentProfile?: boolean,
};

const PrivateLayout = ({
    children,
    user,
    userId,
    hideSideNav,
    noTalentProfile
}: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 200) {
            router.push(ROUTES.HOME);
        }
    };

    return (
        <div className='flex'>
            {
                hideSideNav || (pathname && pathname.includes('create-talent-profile'))
                    ? null
                    : <SideNav userId={userId} userName={user.personal_information.first_name} userLastName={user.personal_information.last_name} />
            }
            <div className='flex grow flex-col'>
                <div className={`${noTalentProfile ? 'px-8 w-full' : 'w-full px-8 header-glass md:h-auto'} flex fixed md:relative z-40 justify-between items-end md:items-center md:px-8 md:w-full mx-auto `}>
                    <Link href={ROUTES.HOME} className='hidden md:block'>
                        <Image
                            src={'/assets/logo.png'}
                            alt='Insyncx logo'
                            width={593}
                            height={337}
                            className='max-w-[12rem] md:max-w-lg w-[200px] '
                        />
                    </Link>
                    <div className={`${noTalentProfile ? 'justify-end gap-4' : 'justify-between'} flex md:justify-end items-center md:gap-6 gap-2 py-1 w-[95vw] mx-auto md:mx-0 md:w-auto`}>
                        <Link href={`/talents/${userId}`} className={`${noTalentProfile ? 'hidden' : ''} md:block hidden green-btn lg:px-4 text-sm px-2 py-3 md:py-2`}>
                            View Public Profile
                        </Link>
                        <button
                            className="primary-btn mx-0 rounded-md text-sm px-3 w-auto lg:px-6 py-3 md:py-2 md:block hidden"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                        <Link href={`${ROUTES.MY_PROFILE}/${userId}`} className={`${noTalentProfile ? 'hidden' : 'h-[96px] md:h-auto flex items-center'}`}>
                            <Image
                                src={user.personal_information.profile_pic ? user.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                alt={`${user.personal_information.first_name} ${user.personal_information.last_name}`}
                                className='rounded-full w-12 h-12 object-cover'
                                width={40}
                                height={40}
                            />
                        </Link>
                        <Header userId={userId} inDashboard />
                    </div>
                </div>
                <div className={`${hideSideNav ? 'w-[90vw]' : 'w-[80vw]'} bg-white mx-auto md:mx-0 md:flex justify-center gap-12 md:my-8 flex-grow w-full`}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default PrivateLayout;
