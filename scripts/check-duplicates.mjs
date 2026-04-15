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

const docs = await client.fetch('*[_type == "publication"]{_id, title, year, authors}');
console.log(`\n📚 전체 논문 수: ${docs.length}건\n`);

// 1. 제목 정규화 후 중복 체크
const normalize = (s) => s?.toLowerCase().replace(/[^a-z0-9가-힣]/g, '').trim() ?? '';

const titleMap = {};
for (const doc of docs) {
    const key = normalize(doc.title);
    if (!titleMap[key]) titleMap[key] = [];
    titleMap[key].push(doc);
}

const duplicates = Object.values(titleMap).filter(g => g.length > 1);

if (duplicates.length === 0) {
    console.log('✅ 중복 논문 없음! 모든 데이터가 고유합니다.\n');
} else {
    console.log(`⚠️  중복 의심 그룹: ${duplicates.length}건\n`);
    for (const group of duplicates) {
        console.log(`  📄 제목: "${group[0].title}"`);
        for (const d of group) {
            console.log(`     _id: ${d._id}  |  year: ${d.year}  |  authors: ${d.authors?.slice(0, 40)}`);
        }
        console.log('');
    }
}
