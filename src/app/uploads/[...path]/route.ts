import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
    request: NextRequest,
    props: { params: Promise<{ path: string[] }> }
) {
    const params = await props.params;
    const filePathArray = params.path;
    const rootDir = process.platform === 'linux' ? '/home/hwadmin/InstitutoAtomus' : process.cwd();
    const fullPath = path.join(rootDir, 'public/uploads', ...filePathArray);

    if (!fs.existsSync(fullPath)) {
        return new NextResponse('Arquivo não encontrado', { status: 404 });
    }

    try {
        const fileBuffer = fs.readFileSync(fullPath);
        const fileName = filePathArray[filePathArray.length - 1];
        const ext = path.extname(fileName).toLowerCase();
        
        const mimeTypes: { [key: string]: string } = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
            '.doc': 'application/msword',
            '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        };

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': mimeTypes[ext] || 'application/octet-stream',
                'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('Erro ao servir arquivo:', error);
        return new NextResponse('Erro interno ao carregar arquivo', { status: 500 });
    }
}
