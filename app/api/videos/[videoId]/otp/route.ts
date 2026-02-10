import { NextResponse } from "next/server";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ videoId: string }> }
) {
    try {
        const { videoId } = await params;
        const secretKey = process.env.API_SECRET_KEY;

        if (!secretKey) {
            return NextResponse.json(
                { error: "VdoCipher API Secret Key is not configured" },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://dev.vdocipher.com/api/videos/${videoId}/otp`,
            {
                method: "POST",
                headers: {
                    Authorization: `Apisecret ${secretKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ttl: 300, // Time to live in seconds
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("VdoCipher API Error:", errorData);
            return NextResponse.json(
                { error: "Failed to fetch OTP from VdoCipher", details: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
