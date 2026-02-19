export default {
    name: 'news',
    title: 'News (소식)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (소식 제목)',
            type: 'string',
            description: 'News 페이지 및 홈 화면 "Latest News"에 표시되는 제목',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category (분류)',
            type: 'string',
            description: '소식 종류 선택 — 색깔 태그로 페이지에 표시됩니다',
            options: {
                list: [
                    { title: '🏆 Award (수상)', value: 'Award' },
                    { title: '📄 Publication (논문 발표)', value: 'Publication' },
                    { title: '📰 News (일반 소식)', value: 'News' },
                    { title: '📢 Announcement (공지)', value: 'Announcement' },
                    { title: '🎉 Event (행사)', value: 'Event' },
                ],
            },
            initialValue: 'News',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'tags',
            title: 'Tags (태그)',
            type: 'array',
            of: [{ type: 'string' }],
            description: '검색·필터용 태그. Enter로 구분하여 입력.',
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'slug',
            title: 'Slug (URL 식별자)',
            type: 'slug',
            description: '"Generate" 버튼을 누르면 제목을 기반으로 자동 생성됩니다',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at (발행일)',
            type: 'datetime',
            description: '소식이 발행된 날짜와 시간. News 페이지 정렬 기준.',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Excerpt (요약 문구)',
            type: 'text',
            rows: 3,
            description: 'News 페이지 목록에서 카드 미리보기로 표시되는 짧은 요약 (2~3문장)',
        },
        {
            name: 'body',
            title: 'Body (본문)',
            type: 'array',
            description: '소식 상세 내용. 이미지와 텍스트를 혼합하여 작성 가능.',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                },
            ],
        },
        {
            name: 'image',
            title: 'Main Image (대표 이미지)',
            type: 'image',
            description: '소식 카드를 대표하는 이미지 (선택사항)',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'publishedAt',
            media: 'image',
        },
        prepare(selection: any) {
            const { title, subtitle, media } = selection;
            return {
                title,
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ko-KR') : '날짜 미정',
                media,
            };
        },
    },
    orderings: [
        {
            title: 'Published at Descending (최신순)',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
}
