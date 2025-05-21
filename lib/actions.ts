'use server'

import { cookies } from "next/headers";

interface StoreTokenRequest {
    token: string
}

interface UserTypeRequest {
    userType: string
}

export async function storeToken(request: StoreTokenRequest) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "wp_accessToken",
        value: request.token,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return true;
}

export async function storeUserType(request: UserTypeRequest) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "userType",
        value: request.userType,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });

    return true;
}

export async function getToken() {
    const cookieStore = await cookies();
    return cookieStore.get('wp_accessToken')?.value;
}

export async function cleanCookies() {
    console.log(">>cleanCookies");
    const cookieStore = await cookies();
    cookieStore.delete('wp_accessToken');
    cookieStore.delete('userType');
}
