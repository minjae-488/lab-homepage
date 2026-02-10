export default {
    name: 'member',
    title: 'Member',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: [
                    { title: 'Professor', value: 'Professor' },
                    { title: 'Post Doc', value: 'Post Doc' },
                    { title: 'PhD Student', value: 'PhD Student' },
                    { title: 'Masters Student', value: 'Masters Student' },
                    { title: 'Undergraduate', value: 'Undergraduate' },
                    { title: 'Alumni', value: 'Alumni' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
            description: 'e.g. "Ph.D. Student"',
        },
        {
            name: 'researchInterest',
            title: 'Research Interests',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio / Status',
            type: 'text',
            rows: 3,
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Link Title' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Used for sorting members (lower number appears first)',
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
