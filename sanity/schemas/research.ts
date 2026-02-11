export default {
    name: 'research',
    title: 'Research',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Ongoing', value: 'ongoing' },
                    { title: 'Completed', value: 'completed' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
            initialValue: 'ongoing',
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            hidden: ({ document }: any) => document?.status === 'ongoing',
        },
        {
            name: 'fundingAgency',
            title: 'Funding Agency',
            type: 'string',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'relatedPublications',
            title: 'Related Publications',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'publication' } }],
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
                subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : '',
                media: media,
            };
        },
    },
}
