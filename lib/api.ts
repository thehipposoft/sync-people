import { storeToken, cleanCookies } from "./actions";
import { getUserProfile } from "./protected-api";

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
    const apiURL = process.env.NEXT_PUBLIC_API;
    const baseURL = apiURL + "/api";

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

export const getJWTToken = async (email?: string, password?: string) => {
    const response = await fetch(`https://admin.insyncx.com/wp-json/jwt-auth/v1/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email ? email : process.env.NEXT_PUBLIC_USERNAME,
            password: password ? password : process.env.NEXT_PUBLIC_PASS,
        })
    });

    if (response.ok) {
        const data = await response.json();

        return data.token;
    } else {
        console.error('Failed to retrieve token');
    }
};

type LoginType = {
    email: string;
    password: string;
};

export const login = async (data: LoginType) => {
    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        const savedToken = await storeToken({token: data.token});
        const getUserProfileResponse = await getUserProfile(data.token);

        return {
            status: 200,
            message: 'Login success',
            talent_id: getUserProfileResponse.meta.talent_id,
        };
    } else {
        const data = await response.json();

        return {
            message: data.message,
        };
    }
};

export const logout = async () => {
    await cleanCookies();

    return {
        status: 200,
        message: 'Logout success',
    };
};

/*
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
};*/

type CreateTalentBodyType = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    lookingFor: string;
};

export const createTalentNew = async (data: CreateTalentBodyType) => {
    const response = await fetch('https://admin.insyncx.com/wp-json/custom/v1/create-talent-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

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
            message: data.error,
            details: data.details,
        };
    }
};

export const getTalent = async (id: string) => {
    const apiURL = process.env.NEXT_PUBLIC_WP_URL;
    const response = await fetch(`${apiURL}/talents/${id}?acf_format=standard`)

    if (!response.ok) {
        throw new Error('failed to fetch talent')
    }

    const talent = await response.json();

    return talent;
};

export const getTalents = async () => {
    const apiURL = process.env.NEXT_PUBLIC_WP_URL;
    const response = await fetch(`${apiURL}/talents/?acf_format=standard`)
    if (!response.ok) {
        throw new Error('failed to fetch talents')
    }

    const talents = await response.json();
    const cleanTalents = talents.map((t:any) => {
        return {
            ...t.acf,
            id: t.id,
            status: t.status
        }
    })

    return cleanTalents
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
