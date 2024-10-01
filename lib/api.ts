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
    first_name: string;
    last_name: string;
    phone_number?: string;
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

export const getJWTToken = async () => {
    const response = await fetch('https://admin.insyncx.co/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'apiUser',
            password: '$VqcO0k*)MtmI@&F&@FaoagA',
        })
    });

    if (response.ok) {
        const data = await response.json();
        return data.token;
    } else {
        console.error('Failed to retrieve token');
    }
};

export const createTalent = async (data: ComingSoonEmailType) => {
    const token = await getJWTToken();

    const response = await fetch('https://admin.insyncx.co/wp-json/wp/v2/talents', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acf: {
                personal_information: {
                    name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone_number: data.phone_number,
                },
                professional_information: {
                    industry: data.industry,
                },
            },
            status: 'publish',
        })
    });

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        return {
            message: 'Failed to create talent',
        };
    }
};
