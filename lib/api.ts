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
    company_name?: string;
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
    console.log('process.env.NEXT_PUBLIC_USERNAME', process.env.NEXT_PUBLIC_USERNAME);
    console.log('process.env.NEXT_PUBLIC_PASS', process.env.NEXT_PUBLIC_PASS);
    
    const response = await fetch('https://admin.insyncx.co/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: process.env.NEXT_PUBLIC_USERNAME,
            password: process.env.NEXT_PUBLIC_PASS,
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
    const response = await fetch('/api/talents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status >= 200 && response.status < 300) {
        return {
            status: 200,
            message: 'Talent Created',
        };
    } else {
        const data = await response.json();

        return {
            message: data.message,
        };
    }
};

export const createClient = async (data: ComingSoonEmailType) => {
    const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status >= 200 && response.status < 300) {
        return {
            status: 200,
            message: 'Client Created',
        };
    } else {
        const data = await response.json();

        return {
            message: data.message,
        };
    }
};
