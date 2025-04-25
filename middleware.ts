import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./app/constants";

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("wp_accessToken")?.value;
    const path = request.nextUrl.pathname;

    console.log(">>authToken", authToken);

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authToken) {
        const loginUrl = new URL(ROUTES.LOGIN, request.url);

        return NextResponse.redirect(loginUrl);
    }

    if (path === ROUTES.LOGIN && authToken) {
        return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }

    if (path === ROUTES.SIGN_UP && authToken) {
        return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
