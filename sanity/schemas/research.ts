export default {
    name: 'research',
    title: 'Research (연구 프로젝트)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (프로젝트 제목)',
            type: 'string',
            description: 'Research 페이지에 표시되는 연구 프로젝트 이름',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description (프로젝트 설명)',
            type: 'text',
            description: '연구 내용 및 목표를 소개하는 상세 설명',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image (대표 이미지)',
            type: 'image',
            description: 'Research 페이지에 표시되는 프로젝트 대표 이미지 (선택사항)',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'status',
            title: 'Status (진행 상태)',
            type: 'string',
            description: '"Ongoing" → 진행 중 탭에 표시 / "Completed" → 완료 탭에 표시',
            options: {
                list: [
                    { title: 'Ongoing (진행 중)', value: 'ongoing' },
                    { title: 'Completed (완료)', value: 'completed' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
            initialValue: 'ongoing',
        },
        {
            name: 'startDate',
            title: 'Start Date (시작일)',
            type: 'date',
            description: '프로젝트 시작 연월 (예: 2023-03)',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date (종료일)',
            type: 'date',
            description: '프로젝트 종료 연월. 상태가 "Ongoing"이면 자동으로 숨겨집니다.',
            options: {
                dateFormat: 'YYYY-MM',
            },
            hidden: ({ document }: any) => document?.status === 'ongoing',
        },
        {
            name: 'fundingAgency',
            title: 'Funding Agency (지원 기관)',
            type: 'string',
            description: '연구비 지원 기관 이름 (예: 한국연구재단, IITP)',
        },
        {
            name: 'keywords',
            title: 'Keywords (키워드)',
            type: 'array',
            of: [{ type: 'string' }],
            description: '연구 분야 키워드. Enter로 구분하여 입력. 태그 형태로 페이지에 표시됨.',
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'relatedPublications',
            title: 'Related Publications (관련 논문)',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'publication' } }],
            description: '이 연구와 관련된 논문을 선택하면 Research 페이지에서 함께 표시됩니다',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'status',
            media: 'mainImage',
        },
        prepare(selection: any) {
            const { title, subtitle, media } = selection;
            return {
                title: title,
                subtitle: subtitle === 'ongoing' ? '진행 중' : '완료',
                media: media,
            };
        },
    },
}
