import { NextResponse, NextRequest } from "next/server";
import { getJWTToken } from "@/lib/api";

type LoginType = {
    email: string;
    password: string;
};

export async function POST(request: NextRequest) {
    const data: LoginType = await request.json();
    const tokenResponse = await getJWTToken(data.email, data.password);
    const responseData = await tokenResponse.json();

    if (tokenResponse.ok) {
        return NextResponse.json({
            token: responseData.token,
            message: "Login success",
        }, { status: 200 });
    }

    return NextResponse.json({
        message: responseData.message,
    },
    { status: 500 });
}
