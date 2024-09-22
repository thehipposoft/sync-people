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
  }: ApiType) => {
    const apiURL = process.env.ENV_HOST || process.env.NEXT_PUBLIC_API;
    const baseURL = apiURL + "/api";
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

type ComingSoonEmailType = {
    email: string;
    name: string;
    industry: string;
    lookingFor: string;
};

export const sendComingSoonEmail = async (data: ComingSoonEmailType) => {
    const response: any = await api({
        endpoint: "/insyncx-email-soon",
        method: "POST",
        body: data,
    });

    if (response.status === 500) {
        return {
            status: 500,
            message: 'Something went wrong. Please try again later.',
        };
    } else {
        return {
            status: 200,
            message: 'Ok',
        };
    }
};
