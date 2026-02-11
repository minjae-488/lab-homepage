export default {
    name: 'professor',
    title: 'Professor (PI)',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Academic Title',
            type: 'string',
            description: 'e.g. Associate Professor',
        },
        {
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'greeting',
            title: 'Introduction / Greeting',
            type: 'text',
            rows: 5,
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'researchInterests',
            title: 'Research Interests',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'education',
            title: 'Education',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'degree', type: 'string', title: 'Degree' },
                        { name: 'university', type: 'string', title: 'University' },
                        { name: 'year', type: 'string', title: 'Year / Period' },
                    ],
                },
            ],
        },
        {
            name: 'career',
            title: 'Academic Positions / Career',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'position', type: 'string', title: 'Position' },
                        { name: 'institution', type: 'string', title: 'Institution' },
                        { name: 'period', type: 'string', title: 'Period' },
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
            title: 'Honors & Awards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Award Title' },
                        { name: 'organization', type: 'string', title: 'Organization' },
                        { name: 'year', type: 'string', title: 'Year' },
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
