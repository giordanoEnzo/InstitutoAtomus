import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const text = await req.text();
        const body = JSON.parse(text);
        const cookieHeader = req.headers.get('cookie');

        let sessionId = null;
        if (cookieHeader) {
            const match = cookieHeader.match(/atomus_session_id=([^;]+)/);
            if (match) sessionId = match[1];
        }

        if (!sessionId) {
            sessionId = Math.random().toString(36).substring(2, 15);
        }

        await prisma.analyticsEvent.create({
            data: {
                eventType: body.eventType || 'pageview',
                path: body.path || '/',
                device: body.device || 'unknown',
                sessionId: sessionId,
                duration: body.duration ? parseInt(body.duration, 10) : null,
            }
        });

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
