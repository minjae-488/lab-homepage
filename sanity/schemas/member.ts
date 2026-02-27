export default {
    name: 'member',
    title: 'Member (구성원)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name (이름)',
            type: 'string',
            description: '구성원 전체 이름 (Members 페이지 프로필 카드에 표시)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role (직책)',
            type: 'string',
            description: '구성원의 역할 — 이 값에 따라 카테고리별로 분류됩니다',
            options: {
                list: [
                    { title: 'Professor (교수)', value: 'Professor' },
                    { title: 'Post Doc (박사후연구원)', value: 'Post Doc' },
                    { title: 'PhD Student (박사과정)', value: 'PhD Student' },
                    { title: 'Masters Student (석사과정)', value: 'Masters Student' },
                    { title: 'Undergraduate (학부연구생)', value: 'Undergraduate' },
                    { title: 'Alumni (졸업생)', value: 'Alumni' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'degree',
            title: 'Degree (학위 표기)',
            type: 'string',
            description: '프로필 카드에 표시되는 학위 표기 (예: Ph.D. Student, M.S.)',
        },
        {
            name: 'researchInterest',
            title: 'Research Interests (연구 관심 분야)',
            type: 'array',
            of: [{ type: 'string' }],
            description: '프로필 카드에 태그 형태로 표시. Enter로 구분하여 입력',
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'image',
            title: 'Profile Image (프로필 사진)',
            type: 'image',
            description: '정사각형(1:1) 비율 사진 권장. Members 페이지 프로필 카드에 표시.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio / Status (소개 또는 현재 상태)',
            type: 'text',
            rows: 3,
            description: '짧은 소개 문장 또는 현재 연구 주제. 졸업생이면 현재 소속 등 기록.',
        },
        {
            name: 'email',
            title: 'Email (이메일)',
            type: 'string',
            description: '프로필 카드에 표시되는 이메일 주소',
        },
        {
            name: 'links',
            title: 'Links (외부 링크)',
            type: 'array',
            description: 'Google Scholar, GitHub, Personal Website 등 외부 링크',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '링크 이름 (예: Google Scholar)' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        },
        {
            name: 'education',
            title: 'Education (학력)',
            type: 'array',
            description: '학력 사항 (최신순 입력 권장)',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'degree', type: 'string', title: '학위 (예: Ph.D., M.S., B.S.)' },
                        { name: 'institution', type: 'string', title: '학교 이름' },
                        { name: 'year', type: 'string', title: '연도 (예: 2020, 2018–2022)' },
                    ],
                    preview: {
                        select: { title: 'degree', subtitle: 'institution' },
                    },
                },
            ],
        },
        {
            name: 'awards',
            title: 'Awards (수상 이력)',
            type: 'array',
            description: '수상 및 장학금 등',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: '수상명' },
                        { name: 'organization', type: 'string', title: '수여 기관' },
                        { name: 'year', type: 'string', title: '연도' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'year' },
                    },
                },
            ],
        },
        {
            name: 'workExperiences',
            title: 'Work Experiences (경력)',
            type: 'array',
            description: '인턴십, 산업체 경험 등',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'position', type: 'string', title: '직책/역할' },
                        { name: 'organization', type: 'string', title: '기관/회사명' },
                        { name: 'period', type: 'string', title: '기간 (예: 2023.06–2023.08)' },
                    ],
                    preview: {
                        select: { title: 'position', subtitle: 'organization' },
                    },
                },
            ],
        },
        {
            name: 'publications',
            title: 'Publications (논문)',
            type: 'array',
            description: '이 멤버가 참여한 논문 (Publication 목록에서 선택)',
            of: [{ type: 'reference', to: { type: 'publication' } }],
        },
        {
            name: 'order',
            title: 'Display Order (정렬 순서)',
            type: 'number',
            description: '숫자가 낮을수록 앞에 표시됩니다. (예: 1 → 가장 먼저 표시)',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'image',
        },
    },
}
