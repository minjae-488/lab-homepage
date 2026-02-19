export default {
    name: 'event',
    title: 'Event (이벤트/행사)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title (행사 제목)',
            type: 'string',
            description: 'Events 페이지에 표시되는 행사 이름',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Type (행사 유형)',
            type: 'string',
            description: '행사 종류 선택 — 이 값으로 필터링이 가능합니다',
            options: {
                list: [
                    { title: 'Seminar (세미나)', value: 'Seminar' },
                    { title: 'Workshop (워크숍)', value: 'Workshop' },
                    { title: 'Defense (논문 심사)', value: 'Defense' },
                    { title: 'Symposium (심포지엄)', value: 'Symposium' },
                    { title: 'Social (친목 행사)', value: 'Social' },
                    { title: 'Conference (학회)', value: 'Conference' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
            initialValue: 'Seminar',
        },
        {
            name: 'startDate',
            title: 'Start Date & Time (시작 일시)',
            type: 'datetime',
            description: '행사 시작 날짜와 시간. 현재 시간 기준으로 Upcoming/Past 자동 분류.',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date & Time (종료 일시, 선택)',
            type: 'datetime',
            description: '행사 종료 시간. 하루짜리 행사면 비워도 됩니다.',
        },
        {
            name: 'location',
            title: 'Location (장소)',
            type: 'string',
            description: '행사 장소 (예: 공학관 302호, Zoom Online)',
        },
        {
            name: 'speaker',
            title: 'Speaker (발표자)',
            type: 'string',
            description: '발표자 이름. 세미나/특강이 아닌 경우 비워도 됩니다.',
        },
        {
            name: 'description',
            title: 'Description (행사 설명)',
            type: 'text',
            description: '행사 내용 소개. Events 페이지 카드에 표시됩니다.',
        },
        {
            name: 'registrationLink',
            title: 'Registration / Details Link (등록 또는 상세 링크)',
            type: 'url',
            description: '참가 신청 링크 또는 관련 공지글 URL',
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
    ],
    orderings: [
        {
            title: 'Date Descending (최신순)',
            name: 'dateDesc',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
        {
            title: 'Date Ascending (오래된순)',
            name: 'dateAsc',
            by: [{ field: 'startDate', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'startDate',
        },
        prepare(selection: any) {
            const { title, subtitle } = selection;
            return {
                title: title,
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString('ko-KR') : '날짜 미정',
            };
        },
    },
}
