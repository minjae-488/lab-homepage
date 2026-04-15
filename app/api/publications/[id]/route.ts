import { createClient } from '@sanity/client';
import { NextRequest, NextResponse } from 'next/server';

const writeClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-02-10',
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
});

// DELETE /api/publications/[id]
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: 'ID가 필요합니다.' }, { status: 400 });
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
        return NextResponse.json({ error: 'Write Token이 설정되지 않았습니다.' }, { status: 500 });
    }

    try {
        await writeClient.delete(id);
        return NextResponse.json({ success: true, deletedId: id });
    } catch (err: any) {
        console.error('[DELETE publication]', err);
        return NextResponse.json(
            { error: err?.message ?? '삭제 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
