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

    console.log(">>apiResponse", apiResponse);
    /*
    const response = await fetch('https://admin.insyncx.com/wp-json/wp/v2/talents', {
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

    const talentCreatedData = await response.json();

    if (response.status >= 400 && response.status < 500) {
        return NextResponse.json({
            message: talentCreatedData.data.params.acf ? talentCreatedData.data.params.acf : talentCreatedData.message,
        },
        { status: response.status });
    }

    const userResponse = await fetch('https://admin.insyncx.com/wp-json/wp/v2/users', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: data.email,
            email: data.email,
            password: data.password, // Ensure this is securely generated or captured
            roles: ['subscriber'],
            first_name: data.first_name,
            last_name: data.last_name,
            meta: {
                talent_id: talentCreatedData.id.toString(),
            }
        })
    });

    const apiResponse = await userResponse.json();

    if (!userResponse.ok) {
        return NextResponse.json({ message: apiResponse.message }, { status: userResponse.status });
    }
*/
    if (!apiResponse) {
        return NextResponse.json({ message: 'User not created' }, { status: 500 });
    }

    return NextResponse.json({ message: "Talent Created" }, { status: 200 });
}
