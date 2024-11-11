"use server"

import { cookies } from "next/headers";

interface StoreTokenRequest {
    token: string
}

interface UserTypeRequest {
    userType: string
}

export async function storeToken(request: StoreTokenRequest) {
    cookies().set({
        name: "wp_accessToken",
        value: request.token,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return true;
}

export async function storeUserType(request: UserTypeRequest) {
    cookies().set({
        name: "userType",
        value: request.userType,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return true;
}

export async function getToken() {
    return cookies().get('wp_accessToken')?.value;
};

export async function cleanCookies() {
    cookies().delete('wp_accessToken');
    cookies().delete('userType');
};
