import {
    getToken,
} from "./actions";
import { getJWTToken } from "./api";
import { redirect } from "next/navigation";
import { ROUTES } from "@/app/constants";

type ApiType = {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    isFormData?: boolean;
    headers?: any;
    token?: string;
};

export const api = async ({
    endpoint = "/login",
    method = "GET",
    body,
    token,
    isFormData,
}: ApiType) => {
    const baseURL = 'https://admin.insyncx.com/wp-json/wp/v2';
    const accessToken = token ? token : await getToken();

    const config: any = {
        method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body: isFormData ? body : JSON.stringify(body),
    };

    if (body && !isFormData) {
        config.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(baseURL + endpoint, config);

    if (response.status === 401) {
        redirect(ROUTES.SESSION_EXPIRED);
    };

    return response;
};

export const getUserProfile = async (token?: string) => {
    const response = await api({
        endpoint: '/users/me',
        method: 'GET',
        token: token,
    });

    const data = await response.json();

    return data;
}

export const updateProfile = async (userId: string, body: any,) => {
    const response = await api({
        endpoint: `/talents/${userId}`,
        method: 'PUT',
        body: {
            ...body,
            talentId: userId,
        },
    });

    const data = await response.json();

    return data;
};

export const uploadMedia = async (file: FormData) => {
    const adminToken = await getJWTToken();
    const tokenData = await adminToken.json();

    const response = await api({
        endpoint: '/media',
        method: 'POST',
        body: file,
        token: tokenData.token,
        isFormData: true,
    });

    const data = await response.json();

    return {
        id: data.id,
        url: data.source_url,
    };
};
