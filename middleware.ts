import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./app/constants";

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("wp_accessToken")?.value;
    const talentId = request.cookies.get("talentId")?.value;
    const path = request.nextUrl.pathname;

    console.log(">>authToken", authToken);

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authToken) {
        const loginUrl = new URL(ROUTES.LOGIN, request.url);

        return NextResponse.redirect(loginUrl);
    }

    if (path === ROUTES.LOGIN && authToken && talentId) {
        return NextResponse.redirect(new URL(`${ROUTES.MY_PROFILE}/${talentId}`, request.url));
    }

    if (path === ROUTES.SIGN_UP && authToken && talentId) {
        return NextResponse.redirect(new URL(`${ROUTES.MY_PROFILE}/${talentId}`, request.url));
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
