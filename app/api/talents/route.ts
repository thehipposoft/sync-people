import { getJWTToken, sendComingSoonEmail } from '@/lib/api'; // Adjust the import path as needed
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

    // Step 1: Create User
    const userResponse = await fetch('https://admin.insyncx.co/wp-json/wp/v2/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.email, // Assuming email as username for simplicity
            email: data.email,
            password: data.password, // Ensure this is securely generated or captured
            roles: ['subscriber'], // Set appropriate role if needed
            first_name: data.first_name,
            last_name: data.last_name
        })
    });

    if (!userResponse.ok) {
        const userError = await userResponse.json();
        return NextResponse.json({ message: userError.message }, { status: userResponse.status });
    }

    const createdUser = await userResponse.json();

    if (!createdUser.id) {
        return NextResponse.json({ message: 'User not created' }, { status: 500 });
    }

    const response = await fetch('https://admin.insyncx.co/wp-json/wp/v2/talents', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            acf: {
                personal_information: {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    mobile: data.phone_number,
                },
                professional_information: {
                    industries: [
                        {industry: data.industry},
                    ],
                },
                user_id: createdUser.id.toString(),
            },
            status: 'publish',
        })
    });

    if (response.status === 500) {
        return NextResponse.json({
            message: 'Internal Server Error'
        },
        { status: 500 });
    };

    if (response.status >= 400 && response.status < 500) {
        const data = await response.json();

        return NextResponse.json({
            message: data.data.params.acf ? data.data.params.acf : data.message,
        },
        { status: response.status });
    }

    //const emailSentResponse = sendComingSoonEmail(data);

    return NextResponse.json({ message: "Talent Created" }, { status: 200 });
}
