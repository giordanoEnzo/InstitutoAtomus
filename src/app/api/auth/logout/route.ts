import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ success: true });

    // Clear the auth cookie
    response.cookies.set({
        name: 'atomus_admin_auth',
        value: '',
        path: '/',
        httpOnly: true,
        maxAge: 0,
    });

    return response;
}
