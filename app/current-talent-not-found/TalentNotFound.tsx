"use client";
import { useEffect } from "react";
import { Link } from "next-view-transitions";
import { ROUTES } from "../constants";
import { cleanCookies } from "@/lib/actions";

const TalentNotFound = () => {
    useEffect(() => {
        const cleanCookiesFunc = async () => {
            await cleanCookies();
        };

        cleanCookiesFunc();
    }, []);
    
    return (
        <div className="flex flex-col w-full">
            <h3 className="text-center">
                We couldn't fetch your talent profile
            </h3>
            <p className="text-center mt-4">
                Please try again later. Or contact us
            </p>
            <Link
                className="mt-5 primary-btn mx-auto"
                href={ROUTES.HOME}
            >
                Home
            </Link>
        </div>
    )
};

export default TalentNotFound;
