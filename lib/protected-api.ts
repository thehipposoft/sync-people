import {
    getToken,
} from "./actions";

type ApiType = {
    endpoint: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: any;
    token: string;
};

export const api = async ({
    endpoint = "/login",
    method = "GET",
    body,
}: ApiType) => {
    const apiURL = process.env.ENV_HOST || process.env.NEXT_PUBLIC_API;
    const baseURL = apiURL + "/api";
    const accessToken = await getToken();
    //const baseURL = "http://localhost:9000/.netlify/functions/api";

    const config: any = {
        method,
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            referer: apiURL,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
        config.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(baseURL + endpoint, config);

    return response;
};
