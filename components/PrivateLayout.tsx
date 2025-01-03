'use client';
import Image from "next/image";
import SideNav from "./SideNav";
import Link from "next/link";
import { ROUTES } from "@/app/constants";
import { TalentTypeAcf } from '@/types';
import Footer from "@/components/Footer";
import { logout } from "@/lib/api";
import { useRouter } from "next/navigation";

type Props = {
    children: React.ReactNode;
    user: TalentTypeAcf;
    userId: string;
};

const PrivateLayout = ({
    children,
    user,
    userId,
}: Props) => {
    console.log(">>userId", userId);
    const router = useRouter();

    const handleLogout = async () => {
        const response = await logout();
        if (response.status === 200) {
            router.push(ROUTES.HOME);
        }
    };

    return (
        <div className='flex'>
            <SideNav />
            <div className='flex grow flex-col'>
                <div className='flex justify-between items-center px-8 py-2 w-full bg-white'>
                    <Link href={ROUTES.HOME} className='hidden md:block'>
                        <Image src={'/assets/logo.svg'} alt='Insyncx logo' width={180} height={140} />
                    </Link>
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/training-and-licenses'} className='green-btn hidden'>
                            Training and Licenses
                        </Link>
                        <Link href={`/talents/${userId}`} className='green-btn'>
                            View Public Profile
                        </Link>
                        <button
                            className="primary-btn mx-0 rounded-md"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <Link href={`/${ROUTES.MY_PROFILE}/${userId}`}>
                            <Image
                                src={user.personal_information.profile_pic}
                                alt={`${user.personal_information.first_name} ${user.personal_information.last_name}`}
                                className='rounded-full'
                                width={40}
                                height={40}
                            />
                        </Link>

                    </div>
                </div>
                <div className='bg-white md:w-full w-[80vw] mx-auto md:mx-0 md:flex justify-center gap-12 my-8 flex-grow'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default PrivateLayout;
