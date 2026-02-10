export default {
    name: 'publication',
    title: 'Publication',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Conference', value: 'conference' },
                    { title: 'Journal', value: 'journal' },
                    { title: 'Workshop', value: 'workshop' },
                ],
            },
            initialValue: 'conference',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
            description: 'e.g. NeurIPS 2024, ICML 2023',
        },
        {
            name: 'link',
            title: 'Link (DOI / URL)',
            type: 'url',
        },
        {
            name: 'pdf',
            title: 'PDF File',
            type: 'file',
        },
        {
            name: 'image',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    orderings: [
        {
            title: 'Year Descending',
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
