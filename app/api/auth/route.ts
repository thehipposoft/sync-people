import { NextResponse, NextRequest } from "next/server";
import { getJWTToken } from "@/lib/api";

type LoginType = {
    email: string;
    password: string;
};

export async function POST(request: NextRequest) {
    const data: LoginType = await request.json();
    const token = await getJWTToken(data.email, data.password);

    if (!token) {
        return NextResponse.json({
            message: 'Failed to retrieve token'
        },
        { status: 500 });
    }


    // Fetch user data with the obtained token
    const userResponse = await fetch('https://admin.insyncx.co/wp-json/wp/v2/users/me', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!userResponse.ok) {
        const errorData = await userResponse.json();
        return NextResponse.json({
            message: errorData.message || 'Failed to retrieve user data'
        },
        { status: userResponse.status });
    }

    const userData = await userResponse.json();

    return NextResponse.json({
        message: "Login success",
        userData
    }, { status: 200 });
}
