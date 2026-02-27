import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Basic hardcoded check
    if (username === 'merylin' && password === 'matomus@2026') {
        const response = NextResponse.json({ success: true });

        // Set 7-day cookie
        response.cookies.set({
            name: 'atomus_admin_auth',
            value: 'autenticado',
            path: '/',
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
    }

    return NextResponse.json(
        { success: false, message: 'Credenciais inválidas.' },
        { status: 401 }
    );
}
