import { getJWTToken } from '@/lib/api'; // Adjust the import path as needed
import { NextResponse, NextRequest } from "next/server";

type ComingSoonEmailType = {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    industry: string;
    lookingFor: string;
    password: string;
};

// To handle a POST request to /api
export async function POST(request: NextRequest) {
    const data: ComingSoonEmailType = await request.json();
    const token = await getJWTToken();

    if (!token) {
        return NextResponse.json({
            message: 'Failed to retrieve token'
        },
        { status: 500 });
    }
    const apiResponse = await fetch('https://admin.insyncx.com/custom-api/v1/create-talent-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
    });

    if (!apiResponse) {
        return NextResponse.json({ message: 'User not created' }, { status: 500 });
    }

    return NextResponse.json({ message: "Talent Created" }, { status: 200 });
}
