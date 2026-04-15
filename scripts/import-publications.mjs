/**
 * import-publications.mjs
 * 교수님 Google Scholar 논문 데이터를 Sanity에 업로드하는 스크립트
 * 
 * 사용법:
 *   node scripts/import-publications.mjs
 *
 * 필요한 환경변수 (.env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID
 *   NEXT_PUBLIC_SANITY_DATASET
 *   SANITY_API_WRITE_TOKEN  (새로 생성 필요 - Sanity 관리 콘솔에서 발급)
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// .env.local 수동 파싱 (dotenv 없이)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const envPath = join(__dirname, '..', '.env.local');

const envVars = {};
try {
  const envFile = readFileSync(envPath, 'utf-8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex > 0) {
        const key = trimmed.slice(0, eqIndex).trim();
        const value = trimmed.slice(eqIndex + 1).trim();
        envVars[key] = value;
      }
    }
  }
} catch (e) {
  console.error('❌ .env.local 파일을 읽을 수 없습니다:', e.message);
  process.exit(1);
}

const projectId = envVars['NEXT_PUBLIC_SANITY_PROJECT_ID'];
const dataset = envVars['NEXT_PUBLIC_SANITY_DATASET'];
const token = envVars['SANITY_API_WRITE_TOKEN'];

if (!projectId || !dataset) {
  console.error('❌ NEXT_PUBLIC_SANITY_PROJECT_ID 또는 NEXT_PUBLIC_SANITY_DATASET 환경변수가 없습니다.');
  process.exit(1);
}

if (!token) {
  console.error('❌ SANITY_API_WRITE_TOKEN 환경변수가 없습니다.');
  console.error('');
  console.error('📋 Write Token 발급 방법:');
  console.error('  1. https://www.sanity.io/manage 접속');
  console.error('  2. 해당 프로젝트 선택 → API → Tokens');
  console.error('  3. "Add API token" 클릭 → 이름 입력 → Permissions: "Editor" 선택');
  console.error('  4. 발급된 토큰을 .env.local에 추가:');
  console.error('     SANITY_API_WRITE_TOKEN=sk...');
  console.error('  5. 다시 실행: node scripts/import-publications.mjs');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-02-10',
  token,
  useCdn: false,
});

// 교수님 논문 데이터 (Google Scholar 류민호 교수 프로필에서 수집)
// Scholar URL: https://scholar.google.com/citations?user=i3GHL3kAAAAJ
// 수집일: 2026-03-10
const publications = [
  { id: 'pub-real-001', title: "Understanding the factors affecting online elderly user's participation in video UCC services", authors: "MH Ryu, S Kim, E Lee", type: "journal", year: 2009, venue: "Computers in Human Behavior 25 (3), 619-632", link: "https://scholar.google.com/citations?view_op=view_citation&user=i3GHL3kAAAAJ&citation_for_view=i3GHL3kAAAAJ:u5HHmVD_uO8C" },
  { id: 'pub-real-002', title: "A study on the reciprocal relationship between user perception and retailer perception on platform-based mobile payment service", authors: "J Lee, MH Ryu, D Lee", type: "journal", year: 2019, venue: "Journal of Retailing and Consumer Services 48, 7-15", link: "https://scholar.google.com/citations?view_op=view_citation&user=i3GHL3kAAAAJ&citation_for_view=i3GHL3kAAAAJ:2osOgNQ5qMEC" },
  { id: 'pub-real-003', title: "What do consumers prefer for music streaming services?: A comparative study between Korea and US", authors: "J Kim, C Nam, MH Ryu", type: "journal", year: 2017, venue: "Telecommunications Policy 41 (4), 263-272", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-004', title: "Factors affecting application developers' loyalty to mobile platforms", authors: "MH Ryu, J Kim, S Kim", type: "journal", year: 2014, venue: "Computers in Human Behavior 40, 78-85", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-005', title: "Exploring sustainability management for telecommunications services: A case study of two Korean companies", authors: "Y Kang, MH Ryu, S Kim", type: "journal", year: 2010, venue: "Journal of World Business 45 (4), 415-421", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-006', title: "Should small-scale online retailers diversify distribution channels into offline channels? Focused on the clothing and fashion industry", authors: "MH Ryu, Y Cho, D Lee", type: "journal", year: 2019, venue: "Journal of Retailing and Consumer Services 47, 74-77", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-007', title: "How much are sellers willing to pay for the features offered by their e-commerce platform?", authors: "S Lee, SY Lee, MH Ryu", type: "journal", year: 2019, venue: "Telecommunications Policy 43 (10), 101832", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-008', title: "Exploring characteristics of online news comments and commenters with machine learning approaches", authors: "SY Lee, MH Ryu", type: "journal", year: 2019, venue: "Telematics and Informatics 43, 101249", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-009', title: "An optimal strategic business model for small businesses using online platforms", authors: "H Kim, D Lee, MH Ryu", type: "journal", year: 2018, venue: "Sustainability 10 (3), 579", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-010', title: "Should a small-sized store have both online and offline channels? An efficiency analysis of the O2O platform strategy", authors: "H Kim, MH Ryu, D Lee, JH Kim", type: "journal", year: 2022, venue: "Journal of Retailing and Consumer Services 64, 102823", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-011', title: "Towards entrepreneurial organization: from the case of organizational process innovation in Naver", authors: "YK Kim, MH Ryu", type: "conference", year: 2017, venue: "Procedia Computer Science 122, 663-670", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-012', title: "IPTV vs. emerging video services: Dilemma of telcos to upgrade the broadband", authors: "J Kim, C Nam, MH Ryu", type: "journal", year: 2020, venue: "Telecommunications Policy 44 (4), 101889", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-013', title: "Factors affecting user participation in video UCC (User-Created Contents) services", authors: "S Kim, EK Na, MH Ryu", type: "conference", year: 2007, venue: "Communities and Technologies 2007 Conference Proceedings", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-014', title: "The effects of extrinsic cues on online sales of fresh produce: A focus on geographical indications", authors: "D Lee, J Moon, MH Ryu", type: "journal", year: 2019, venue: "Cahiers Agricultures 28, 13", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-015', title: "The economic effects of domestic search engines on the development of the online advertising market", authors: "SW Ji, Y Choi, MH Ryu", type: "journal", year: 2016, venue: "Telecommunications Policy 40 (10-11), 982-995", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-016', title: "The value co-creation strategy for telecommunication carriers: Focusing on the assessment of potential strategic alliance partners", authors: "MH Ryu", type: "conference", year: 2018, venue: "Procedia Computer Science 139, 338-346", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-017', title: "How offline retailers adopt O2O: Neighboring star shops and their proximity effect", authors: "MH Ryu, E Kim, SY Lee", type: "journal", year: 2022, venue: "Telecommunications Policy 46 (3), 102278", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-018', title: "Online review based IPA and IPCA: the case of Korean mobile banking apps", authors: "S Kim, MH Ryu", type: "journal", year: 2025, venue: "International Journal of Bank Marketing 43 (4), 731-756", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-019', title: "A Comparative Study on the Performance of Machine Learning Models for the Prediction of Fine Dust", authors: "SH Sung, SJ Kim, MH Ryu", type: "journal", year: 2020, venue: "Journal of Korea Society of Innovation 15 (4), 339-357", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-020', title: "Drivers of mobile banking super-app adoption: Across different service integration levels", authors: "D Kim, S Hong, Y Je, MH Ryu", type: "journal", year: 2025, venue: "Journal of Theoretical and Applied Electronic Commerce Research 20 (2), 143", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-021', title: "Interoperability of online loyalty and offline loyalty in omnichannel retailing service", authors: "J Lee, M Yoo, MH Ryu, D Nan, JH Kim, D Lee", type: "journal", year: 2023, venue: "Asian Journal of Technology Innovation 31 (1), 27-48", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-022', title: "An analysis of IoT service using sentiment analysis on online reviews", authors: "MH Ryu, H Cho", type: "journal", year: 2020, venue: "Journal of Korea Society of Industrial Information Systems 25 (5), 91-102", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-023', title: "Real estate service app review analysis using text mining", authors: "SA Kang, DY Kim, MH Ryu", type: "journal", year: 2021, venue: "The Journal of Information Systems 30 (4), 227-245", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-024', title: "Crisis communication on social media during COVID-19 pandemic", authors: "S Kim, D Kim, MH Ryu", type: "journal", year: 2021, venue: "Journal of Korea Society of Industrial Information Systems 26 (6), 47-60", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-025', title: "Do telecom carrier takeovers create value? Longitudinal analysis of US telecom carrier takeovers from 1996 to 2005", authors: "MH Ryu, S Yang, S Kim", type: "journal", year: 2018, venue: "Telecommunications Policy 42 (5), 395-408", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-026', title: "A study on the performance of Korea's traditional market support project using eWOM: Focusing on Busan", authors: "G Sin, MH Ryu", type: "conference", year: 2024, venue: "International Telecommunications Society (ITS) 2024", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-027', title: "User's preferences on Bank Channels", authors: "MG Kim, S Kim, MH Ryu", type: "journal", year: 2023, venue: "Journal of Korea Society of Industrial Information Systems 28 (5), 55-66", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-028', title: "Mobile commerce applications", authors: "S Kim, MH Ryu", type: "journal", year: 2015, venue: "The International Encyclopedia of Digital Communication and Society, 1-8", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-029', title: "The characteristics of online gerontophobia expressions in South Korea", authors: "S Kim, MH Ryu", type: "journal", year: 2023, venue: "Frontiers in Psychology 14, 1290443", link: "https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1290443" },
  { id: 'pub-real-030', title: "Strategic use of online review of mobile app", authors: "S Kim, MH Ryu", type: "conference", year: 2023, venue: "AI in Information 2023", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-031', title: "A Study on the Role of Private-led Information Provision: Case of COVID-19 Pandemic", authors: "H Cho, M Jang, MH Ryu", type: "journal", year: 2021, venue: "The Journal of the Korea Contents Association 21 (4), 1-13", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-032', title: "Joint Ventures between Online Portals and News Publishers", authors: "MH Ryu, J Park, KT Kwak", type: "journal", year: 2020, venue: "Sustainability 12 (8), 3296", link: "https://www.mdpi.com/2071-1050/12/8/3296" },
  { id: 'pub-real-033', title: "Convergence between mobile and UCC media: The potential of mobile video UCC service", authors: "SC Kim, EK Na, MH Ryu", type: "journal", year: 2010, venue: "Communication & Convergence Review 2 (1), 26-35", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-034', title: "Quantifying the Carbon Neutrality Impact of ICT Solutions", authors: "M Kim, S Kim, MH Ryu", type: "journal", year: 2025, venue: "International Journal of Internet, Broadcasting and Communication 17 (1), 53-69", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-035', title: "Analysis of customer characteristics according to the bank's new customer inflow channel", authors: "김성재, 류민호", type: "journal", year: 2024, venue: "정보사회와 미디어, 47-74", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-036', title: "The Role of Internet Platforms in Voluntary Participation of Users for the Social Innovation Activities", authors: "M Kim, MH Ryu", type: "conference", year: 2024, venue: "International Telecommunications Society (ITS) 2024", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-037', title: "How will online platforms facilitate the digital transformation of traditional markets?", authors: "S Kim, MH Ryu", type: "conference", year: 2024, venue: "International Telecommunications Society (ITS) 2024", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-038', title: "Do Online Data about a TV Episode Predict the Performance of Its Online Video Clips?", authors: "SY Lee, W Han, MH Ryu", type: "journal", year: 2023, venue: "미디어 경제와 문화 21 (4), 33-61", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-039', title: "Rethinking bank branch closure strategies through omni-channel usage data analysis", authors: "MG Kim, SA Kang, MH Ryu", type: "conference", year: 2023, venue: "AI in Information 2023", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-040', title: "Comparison of machine learning methods using time series data: focusing on inverter data", authors: "SH Sung, CS Seo, MH Ryu, S Kim", type: "journal", year: 2023, venue: "International Journal of Environment, Workplace and Employment 7 (1), 13-33", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-041', title: "Alternatives for New Internet Interconnection Policy", authors: "H Cho, H Shin, MH Ryu", type: "journal", year: 2020, venue: "Journal of Internet Computing and Services 21 (1), 1-15", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-042', title: "Beyond the boundaries: Challenges for business, policy and society", authors: "S Kim, C Nam, MH Ryu", type: "journal", year: 2019, venue: "Telecommunications Policy 43 (10), 101887", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-043', title: "Who leads the IoT ecosystem? a Meta-frontier Approach", authors: "H Cho, MH Ryu", type: "conference", year: 2019, venue: "International Telecommunications Society (ITS) 2019", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-044', title: "What are important factors for the successful implementation of IPTV across countries?", authors: "J Kim, C Nam, MH Ryu", type: "conference", year: 2018, venue: "PTC'18", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-045', title: "Where do you sell your products online? A seller perspective on online shopping platforms", authors: "S Lee, MH Ryu, SY Lee, DH Kwak", type: "conference", year: 2018, venue: "International Telecommunications Society (ITS) 2018", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-046', title: "Adoption of Fixed-mobile Convergence in the US Telecommunication Industry", authors: "S Kim, C Nam, HK Jung, MH Ryu", type: "journal", year: 2010, venue: "Journal of Research and Practice in IT 42 (3), 207-218", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-047', title: "The firm-level impacts of NGN regulatory changes: the Korean case", authors: "MH Ryu, S Kim, H Eun", type: "conference", year: 2006, venue: "COIN-NGNCON 2006", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-048', title: "딥러닝 기반 흰다리새우 성장단계 추론을 통한 급이량 및 출하시기 최적화 모델 개발", authors: "신건율, 류민호", type: "conference", year: 2025, venue: "한국산업정보학회 춘계학술대회 2025", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-049', title: "Evaluating the Impact of Enhanced Connectivity on Carbon Emission Reduction", authors: "M Kim, S Kim, MH Ryu", type: "journal", year: 2024, venue: "SSRN Working Paper", link: "https://ssrn.com/abstract=4921441" },
  { id: 'pub-real-050', title: "Analysis of Telecommunication Operators' Net Carbon Emissions", authors: "M Kim, MH Ryu, S Kim", type: "journal", year: 2024, venue: "SSRN Working Paper", link: "https://ssrn.com/abstract=4799801" },
  { id: 'pub-real-051', title: "Realizing the coexistence of portability and large sized displays in your portable device", authors: "SH Kwon, MH Ryu, S Kim", type: "conference", year: 2006, venue: "COIN-NGNCON 2006", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
  { id: 'pub-real-052', title: "Being a Digital Prosumer with Mobile Self-video Service", authors: "EK Na, SC Kim, MH Ryu", type: "conference", year: 2005, venue: "한국경영정보학회 정기 학술대회", link: "https://scholar.google.com/citations?user=i3GHL3kAAAAJ" },
];

async function checkExisting() {
  const existing = await client.fetch(`*[_type == "publication" && _id in $ids]._id`, {
    ids: publications.map(p => p.id),
  });
  return new Set(existing);
}

async function importPublications() {
  console.log('🔍 Sanity에 연결 중...');
  console.log(`   Project ID: ${projectId}`);
  console.log(`   Dataset: ${dataset}`);
  console.log('');

  try {
    const existing = await checkExisting();
    console.log(`📚 총 ${publications.length}건 논문 처리 시작...`);
    console.log(`   기존 존재: ${existing.size}건 (건너뜀)`);
    console.log(`   새로 추가: ${publications.length - existing.size}건`);
    console.log('');

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const pub of publications) {
      if (existing.has(pub.id)) {
        console.log(`  ⏭️  건너뜀: ${pub.title.slice(0, 60)}...`);
        skipped++;
        continue;
      }

      try {
        const doc = {
          _id: pub.id,
          _type: 'publication',
          title: pub.title,
          authors: pub.authors,
          type: pub.type,
          year: pub.year,
          venue: pub.venue,
          ...(pub.link ? { link: pub.link } : {}),
        };

        await client.createOrReplace(doc);
        console.log(`  ✅ 추가됨: [${pub.year}] ${pub.title.slice(0, 60)}${pub.title.length > 60 ? '...' : ''}`);
        created++;
      } catch (err) {
        console.error(`  ❌ 오류: ${pub.title.slice(0, 50)} - ${err.message}`);
        errors++;
      }
    }

    console.log('');
    console.log('🎉 완료!');
    console.log(`   ✅ 새로 추가: ${created}건`);
    console.log(`   ⏭️  이미 존재 (건너뜀): ${skipped}건`);
    if (errors > 0) console.log(`   ❌ 오류: ${errors}건`);
    console.log('');
    console.log('📊 Sanity Studio에서 확인: https://www.sanity.io/manage');
  } catch (err) {
    console.error('❌ 연결 오류:', err.message);
    console.error('   - 토큰 권한이 Editor 이상인지 확인하세요');
    process.exit(1);
  }
}

importPublications();
