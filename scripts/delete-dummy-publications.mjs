import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env.local');

const envVars = {};
for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [k, ...v] = trimmed.split('=');
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

const ids = await client.fetch('*[_type == "publication"]._id');
const dummy = ids.filter(id => /^pub-0/.test(id));
const real = ids.filter(id => /^pub-real-/.test(id));
const other = ids.filter(id => !/^pub-/.test(id));

console.log(`\n📊 Sanity 논문 데이터 현황`);
console.log(`   전체: ${ids.length}건`);
console.log(`   실제 논문 (pub-real-xxx): ${real.length}건`);
console.log(`   더미 데이터 (pub-0xx):    ${dummy.length}건 → ${dummy.join(', ')}`);
console.log(`   기타:                      ${other.length}건`);

if (dummy.length > 0) {
    console.log(`\n🗑️  더미 데이터 ${dummy.length}건 삭제 중...`);
    for (const id of dummy) {
        await client.delete(id);
        console.log(`   ✅ 삭제됨: ${id}`);
    }
    console.log(`\n🎉 완료! 더미 데이터가 모두 삭제되었습니다.`);
} else {
    console.log(`\n✅ 더미 데이터가 없습니다.`);
}
