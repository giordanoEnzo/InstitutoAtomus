import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/admin')) {
        // Permitir acesso à página de login livremente
        if (pathname === '/admin/login') {
            return NextResponse.next();
        }

        // Verificar cookie
        const token = request.cookies.get('atomus_admin_auth');
        if (!token || token.value !== 'autenticado') {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}
