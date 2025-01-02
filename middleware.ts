import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./app/constants";

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("wp_accessToken")?.value;
    const path = request.nextUrl.pathname;

    if (!authToken && request.nextUrl.pathname.startsWith('/dashboard')) {
        const loginUrl = new URL(ROUTES.LOGIN, request.url);

        return NextResponse.redirect(loginUrl);
    }

    if (authToken && (path === ROUTES.LOGIN)) {
        return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }

    if (authToken && (path === ROUTES.SIGN_UP)) {
        return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
