import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const data: any = await request.json();
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';

    const formData = new FormData();
    formData.append('file', data.blob);
    formData.append('upload_preset', 'presentation_videos');

    const apiResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/video/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!apiResponse) {
        return NextResponse.json({ message: 'Media not uploaded' }, { status: 500 });
    }

    const responseData = await apiResponse.json();

    return NextResponse.json({ message: "Media uploaded" }, {
        status: 200,

    });
}
