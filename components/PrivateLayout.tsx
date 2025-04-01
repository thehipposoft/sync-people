'use client';
import Image from "next/image";
import SideNav from "./SideNav";
import { Link } from 'next-view-transitions';
import { ROUTES } from "@/app/constants";
import { TalentTypeAcf } from '@/types';
import Footer from "@/components/Footer";
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    user: TalentTypeAcf;
    userId: string;
    hideSideNav?: boolean;
};

const PrivateLayout = ({
    children,
    user,
    userId,
    hideSideNav,
}: Props) => {
    const router = useRouter();

    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 200) {
            router.push(ROUTES.HOME);
        }
    };

    return (
        <div className='flex'>
            {
                hideSideNav ? null : <SideNav />
            }
            <div className='flex grow flex-col'>
                <div className='flex justify-between pt-4 md:pt-0 items-center md:px-8 md:w-full w-[80vw] mx-auto bg-white'>
                    <Link href={ROUTES.HOME} className='hidden md:block'>
                        <Image src={'/assets/logo.svg'} alt='Insyncx logo' width={220} height={150} />
                    </Link>
                    <div className='flex md:justify-end justify-between items-center md:gap-6 gap-4 py-1 w-full md:w-auto'>
                        <Link href={'/training-and-licenses'} className='green-btn hidden'>
                            Training and Licenses
                        </Link>
                        <Link href={`/talents/${userId}`} className='green-btn lg:px-4 text-sm px-3 py-3 md:py-2'>
                            View Public Profile
                        </Link>
                        <button
                            className="primary-btn mx-0 rounded-md text-sm px-4 w-auto lg:px-6 py-3 md:py-2"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <Link href={`${ROUTES.MY_PROFILE}/${userId}`}>
                            <Image
                                src={user.personal_information.profile_pic ? user.personal_information.profile_pic : '/assets/images/profile-avatar.png'}
                                alt={`${user.personal_information.first_name} ${user.personal_information.last_name}`}
                                className='rounded-full w-12 h-12 object-cover'
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
                <div className={'bg-white md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 md:my-8 my-4 flex-grow'}>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default PrivateLayout;
