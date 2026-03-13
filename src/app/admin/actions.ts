'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function createNews(formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const subtitle = formData.get('subtitle') as string;
        const content = formData.get('content') as string;
        const author = formData.get('author') as string;
        const metaDesc = formData.get('metaDesc') as string;
        const publishedAtStr = formData.get('publishedAt') as string;

        let imageUrl = null;
        const image = formData.get('image');

        if (image instanceof File && image.name && image.size > 0) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            imageUrl = `/uploads/${fileName}`;
        }

        await prisma.news.create({
            data: {
                title,
                subtitle: subtitle || null,
                content,
                author: author || null,
                imageUrl: imageUrl,
                metaDesc: metaDesc || null,
                publishedAt: publishedAtStr ? new Date(publishedAtStr) : null,
            }
        });
    } catch (error) {
        console.error('SERVER_ACTION_ERROR (createNews):', error);
        throw error; // Rethrow so Next.js handles the redirect error correctly if it's a redirect
    }

    revalidatePath('/admin/noticias');
    revalidatePath('/noticias');
    redirect('/admin/noticias');
}

export async function updateNews(formData: FormData) {
    try {
        const id = parseInt(formData.get('id') as string, 10);
        const title = formData.get('title') as string;
        const subtitle = formData.get('subtitle') as string;
        const content = formData.get('content') as string;
        const author = formData.get('author') as string;
        const metaDesc = formData.get('metaDesc') as string;
        const publishedAtStr = formData.get('publishedAt') as string;

        const currentNews = await prisma.news.findUnique({ where: { id } });
        let imageUrl = currentNews?.imageUrl || null;

        const image = formData.get('image');
        if (image instanceof File && image.name && image.size > 0) {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }
            
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            imageUrl = `/uploads/${fileName}`;
        }

        await prisma.news.update({
            where: { id },
            data: {
                title,
                subtitle: subtitle || null,
                content,
                author: author || null,
                imageUrl: imageUrl,
                metaDesc: metaDesc || null,
                publishedAt: publishedAtStr ? new Date(publishedAtStr) : null,
            }
        });
    } catch (error) {
        console.error('SERVER_ACTION_ERROR (updateNews):', error);
        throw error;
    }

    revalidatePath('/admin/noticias');
    revalidatePath('/noticias');
    revalidatePath(`/noticias/${formData.get('id')}`);
    redirect('/admin/noticias');
}

export async function deleteNews(id: number) {
    await prisma.news.delete({
        where: { id }
    });
    revalidatePath('/admin/noticias');
    revalidatePath('/noticias');
}

export async function createEbook(formData: FormData) {
    try {
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;

        let coverUrl = null;
        const cover = formData.get('cover');
        const uploadDir = path.join(process.cwd(), 'public/uploads');
        
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        if (cover instanceof File && cover.name && cover.size > 0) {
            const bytes = await cover.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-cover-${cover.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            coverUrl = `/uploads/${fileName}`;
        }

        let fileUrl = '';
        const file = formData.get('file');
        if (file instanceof File && file.name && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-file-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            fileUrl = `/uploads/${fileName}`;
        }

        await prisma.ebook.create({
            data: {
                title,
                description: description || null,
                coverUrl,
                fileUrl,
            }
        });
    } catch (error) {
        console.error('SERVER_ACTION_ERROR (createEbook):', error);
        throw error;
    }

    revalidatePath('/admin/ebooks');
    revalidatePath('/biblioteca');
    redirect('/admin/ebooks');
}

export async function updateEbook(formData: FormData) {
    try {
        const id = parseInt(formData.get('id') as string, 10);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;

        const currentEbook = await prisma.ebook.findUnique({ where: { id } });
        let coverUrl = currentEbook?.coverUrl || null;
        let fileUrl = currentEbook?.fileUrl || '';

        const uploadDir = path.join(process.cwd(), 'public/uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const cover = formData.get('cover');
        if (cover instanceof File && cover.name && cover.size > 0) {
            const bytes = await cover.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-cover-${cover.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            coverUrl = `/uploads/${fileName}`;
        }

        const file = formData.get('file');
        if (file instanceof File && file.name && file.size > 0) {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-file-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, buffer);
            fileUrl = `/uploads/${fileName}`;
        }

        await prisma.ebook.update({
            where: { id },
            data: {
                title,
                description: description || null,
                coverUrl,
                fileUrl,
            }
        });
    } catch (error) {
        console.error('SERVER_ACTION_ERROR (updateEbook):', error);
        throw error;
    }

    revalidatePath('/admin/ebooks');
    revalidatePath('/biblioteca');
    redirect('/admin/ebooks');
}

export async function deleteEbook(id: number) {
    await prisma.ebook.delete({
        where: { id }
    });
    revalidatePath('/admin/ebooks');
    revalidatePath('/biblioteca');
}


export async function captureLead(formData: FormData) {
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const position = formData.get('position') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const source = formData.get('source') as string || 'Página de Contato';

    await prisma.lead.create({
        data: {
            name,
            company,
            position,
            phone,
            email,
            source
        }
    });

    revalidatePath('/admin/leads');
    redirect('/contato?sucesso=true');
}

export async function deleteLead(id: number) {
    await prisma.lead.delete({
        where: { id }
    });
    revalidatePath('/admin/leads');
}
