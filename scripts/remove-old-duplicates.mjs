import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envVars = {};
for (const line of readFileSync(join(__dirname, '..', '.env.local'), 'utf-8').split('\n')) {
    const t = line.trim();
    if (t && !t.startsWith('#') && t.includes('=')) {
        const [k, ...v] = t.split('=');
        envVars[k.trim()] = v.join('=').trim();
    }
}

const client = createClient({
    projectId: envVars['NEXT_PUBLIC_SANITY_PROJECT_ID'],
    dataset: envVars['NEXT_PUBLIC_SANITY_DATASET'],
    apiVersion: '2024-02-10',
    token: envVars['SANITY_API_WRITE_TOKEN'],
    useCdn: false,
});

const toDelete = [
    '3113e337-2bb0-42b1-800a-3b8cd7c5ff59',
    'ab5ae6d7-69f8-4eb0-ad7d-b31770001b9d',
    'c8612aef-bd8e-4734-ba21-e3a29baf8b40',
    'de2021d5-9a09-4035-bd9d-1bc38061867f',
];

console.log(`\n🔍 참조 관계 확인 중...\n`);

// 각 ID를 참조하는 다른 문서 찾기
for (const id of toDelete) {
    const refs = await client.fetch(
        `*[references($id)]{_id, _type, title}`,
        { id }
    );
    if (refs.length > 0) {
        console.log(`  ⚠️  ${id} 를 참조하는 문서 ${refs.length}건:`);
        for (const ref of refs) {
            console.log(`     - [${ref._type}] ${ref._id}: ${ref.title?.slice(0, 50) ?? '(no title)'}`);
            // 참조하는 문서에서 해당 publication 참조 제거
            // member.publications 배열에서 해당 _ref 제거
            const doc = await client.fetch(`*[_id == $refId][0]`, { refId: ref._id });
            if (doc?.publications) {
                const filtered = doc.publications.filter(p => p._ref !== id);
                await client.patch(ref._id).set({ publications: filtered }).commit();
                console.log(`     ✅ 참조 제거 완료: ${ref._id}`);
            }
        }
    } else {
        console.log(`  ✅ ${id.slice(0, 8)}... 참조 없음`);
    }
}

console.log(`\n🗑️  중복 논문 ${toDelete.length}건 삭제 중...\n`);
for (const id of toDelete) {
    try {
        await client.delete(id);
        console.log(`  ✅ 삭제됨: ${id}`);
    } catch (err) {
        // draft 버전도 시도
        try {
            await client.delete(`drafts.${id}`);
            await client.delete(id);
            console.log(`  ✅ 삭제됨 (draft 포함): ${id}`);
        } catch (err2) {
            console.log(`  ❌ 삭제 실패: ${id} - ${err2.message?.slice(0, 80)}`);
        }
    }
}

const remaining = await client.fetch('*[_type == "publication"]');
console.log(`\n📚 최종 논문 수: ${remaining.length}건`);
console.log('🎉 완료!\n');
