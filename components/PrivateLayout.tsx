import Image from "next/image";
import SideNav from "./SideNav";
import Link from "next/link";
import { ROUTES } from "@/app/constants";
import { TalentTypeAcf } from '@/types';

type Props = {
    children: React.ReactNode;
    user: TalentTypeAcf;
};

const PrivateLayout = ({
    children,
    user,
}: Props) => {
    return (
        <div className='flex'>
            <SideNav />
            <div className='flex grow flex-col'>
                <div className='flex justify-between items-center px-8 py-2 w-full bg-white'>
                    <Link href={ROUTES.HOME} className='hidden md:block'>
                        <Image src={'/assets/logo.svg'} alt='Insyncx logo' width={180} height={140} />
                    </Link>
                    <div className='flex justify-end gap-6 py-1'>
                        <Link href={'/training-and-licenses'} className='green-btn'>
                            Training and Licenses
                        </Link>
                        <Link href={'/business-market'} className='green-btn'>
                            Search Jobs
                        </Link>
                        <Link href={`/${ROUTES.MY_PROFILE}/${user.id}`}>
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
                {children}
            </div>
        </div>
    )
};

export default PrivateLayout;
