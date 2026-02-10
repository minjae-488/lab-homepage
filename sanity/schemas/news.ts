export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Award', value: 'Award' },
                    { title: 'Publication', value: 'Publication' },
                    { title: 'News', value: 'News' },
                    { title: 'Announcement', value: 'Announcement' },
                    { title: 'Event', value: 'Event' },
                ],
            },
            initialValue: 'News',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
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
            title: 'Main image',
            type: 'image',
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
    },
    orderings: [
        {
            title: 'Published at Descending',
            name: 'publishedAtDesc',
            by: [{ field: 'publishedAt', direction: 'desc' }],
        },
    ],
}
