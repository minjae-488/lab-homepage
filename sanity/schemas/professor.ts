export default {
    name: 'professor',
    title: 'Professor (PI)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name (이름)',
            type: 'string',
            description: '교수님 성함 (About 페이지에 표시됩니다)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Academic Title (직위)',
            type: 'string',
            description: '직위 (예: Associate Professor, Assistant Professor)',
        },
        {
            name: 'image',
            title: 'Profile Image (프로필 사진)',
            type: 'image',
            description: '교수님 프로필 사진. About 페이지에 표시됩니다.',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'greeting',
            title: 'Introduction / Greeting (소개 인사말)',
            type: 'text',
            rows: 5,
            description: 'About 페이지에 표시되는 연구실 소개 또는 인사말. 한국어로 작성하셔도 됩니다.',
        },
        {
            name: 'email',
            title: 'Email (이메일)',
            type: 'string',
            description: '교수님 이메일 주소 (About 페이지 연락처에 표시)',
        },
        {
            name: 'researchInterests',
            title: 'Research Interests (연구 관심 분야)',
            type: 'array',
            of: [{ type: 'string' }],
            description: '관심 연구 분야 키워드. Enter로 구분하여 입력 (예: Natural Language Processing, Machine Learning)',
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'education',
            title: 'Education (학력)',
            type: 'array',
            description: '학위 이력. 최신 학위부터 입력 권장.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'degree', type: 'string', title: 'Degree (학위명)', description: '예: Ph.D., M.S., B.S.' },
                        { name: 'university', type: 'string', title: 'University (대학교)', description: '대학교 이름 (예: Seoul National University)' },
                        { name: 'year', type: 'string', title: 'Year / Period (기간)', description: '예: 2010–2015 또는 2015' },
                    ],
                },
            ],
        },
        {
            name: 'career',
            title: 'Academic Positions / Career (경력)',
            type: 'array',
            description: '주요 경력 및 이전 소속. 최신 경력부터 입력 권장.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'position', type: 'string', title: 'Position (직위)', description: '예: Assistant Professor, Research Scientist' },
                        { name: 'institution', type: 'string', title: 'Institution (기관)', description: '소속 기관 이름' },
                        { name: 'period', type: 'string', title: 'Period (기간)', description: '예: 2018–2022' },
                    ],
                    preview: {
                        select: {
                            title: 'position',
                            subtitle: 'institution',
                        },
                    },
                },
            ],
        },
        {
            name: 'awards',
            title: 'Honors & Awards (수상 및 수혜)',
            type: 'array',
            description: '수상 내역 및 주요 연구비 수혜. 최신 순으로 입력 권장.',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Award Title (수상명)', description: '수상 또는 수혜 이름' },
                        { name: 'organization', type: 'string', title: 'Organization (수여 기관)', description: '수상 기관 또는 펀딩 기관 이름' },
                        { name: 'year', type: 'string', title: 'Year (연도)', description: '예: 2023' },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
}
