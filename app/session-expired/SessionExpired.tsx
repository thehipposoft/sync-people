'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ROUTES } from "@/app/constants";
import { cleanCookies } from "@/lib/actions";

const SessionExpired = () => {
    useEffect(() => {
        const clearCookies = async () => {
            await cleanCookies();
        };
        //clearCookies();
    }, []);

    return (
        <div className="flex flex-col w-full">
            <h3 className="text-center mb-3">
                Your session has expired.
            </h3>
            <h3 className="text-center">
                Please login again to continue.
            </h3>
            <Link
                className="mt-5 primary-btn mx-auto"
                href={ROUTES.LOGIN}
            >
                Login
            </Link>
        </div>
    )
};

export default SessionExpired;
