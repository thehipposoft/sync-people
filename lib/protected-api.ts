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
    console.log(">>API")
    //const apiURL = 'https://admin.insyncx.co/wp-json/wp/v2/';
    const baseURL = 'https://admin.insyncx.co/wp-json/wp/v2';
    const accessToken = token ? token : await getToken();

    console.log(">>accessToken", accessToken);
    //const baseURL = "http://localhost:9000/.netlify/functions/api";

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
    console.log(">>getUserProfile token", token);
    const response = await api({
        endpoint: '/users/me',
        method: 'GET',
        token: token,
    });

    return response;
}
