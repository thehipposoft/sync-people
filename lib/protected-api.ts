import {
    getToken,
} from "./actions";

type ApiType = {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: any;
    token?: string;
};

export const api = async ({
    endpoint = "/login",
    method = "GET",
    body,
    token,
}: ApiType) => {
    const baseURL = 'https://admin.insyncx.com/wp-json/wp/v2';
    const accessToken = token ? token : await getToken();

    const config: any = {
        method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
        config.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(baseURL + endpoint, config);

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

export const updateProfile = async (body: any, userId: string) => {
    if (body.personal_information.profile_pic) {
        if (body.personal_information.profile_pic.includes('http')) {
            delete body.personal_information.profile_pic;
        }
    };

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
