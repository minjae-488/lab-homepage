export default {
    name: 'publication',
    title: 'Publication (논문)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (논문 제목)',
            type: 'string',
            description: 'Publications 페이지에 표시되는 논문 제목 (전체 제목 입력)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'authors',
            title: 'Authors (저자)',
            type: 'string',
            description: '저자 목록을 쉼표로 구분하여 입력 (예: Kim, J., Lee, S., Park, H.)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Type (논문 종류)',
            type: 'string',
            description: '논문 유형 — Publications 페이지 필터 탭에 사용됩니다',
            options: {
                list: [
                    { title: 'Conference Paper (학술대회)', value: 'conference' },
                    { title: 'Journal Article (저널)', value: 'journal' },
                    { title: 'Workshop Paper (워크숍)', value: 'workshop' },
                ],
            },
            initialValue: 'conference',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'year',
            title: 'Year (출판 연도)',
            type: 'number',
            description: '논문이 발표된 연도 (예: 2024)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'venue',
            title: 'Venue (발표 학회/저널명)',
            type: 'string',
            description: '학회 또는 저널 이름 + 연도 (예: NeurIPS 2024, ACL 2023)',
        },
        {
            name: 'link',
            title: 'Link (DOI / 논문 URL)',
            type: 'url',
            description: '논문 원문 링크 또는 DOI URL (예: https://arxiv.org/abs/...)',
        },
        {
            name: 'pdf',
            title: 'PDF File (PDF 파일)',
            type: 'file',
            description: '논문 PDF를 직접 업로드하면 다운로드 링크가 생성됩니다',
        },
        {
            name: 'image',
            title: 'Thumbnail (대표 이미지)',
            type: 'image',
            description: '논문을 대표하는 그림 또는 결과 이미지 (선택사항)',
            options: {
                hotspot: true,
            },
        },
    ],
    orderings: [
        {
            title: 'Year Descending (최신 연도순)',
            name: 'yearDesc',
            by: [{ field: 'year', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'venue',
            media: 'image',
        },
    },
}
