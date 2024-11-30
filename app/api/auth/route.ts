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
    return NextResponse.json({
        token: token,
        message: "Login success",
    }, { status: 200 });
}
