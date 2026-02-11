export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Seminar', value: 'Seminar' },
                    { title: 'Workshop', value: 'Workshop' },
                    { title: 'Defense', value: 'Defense' },
                    { title: 'Symposium', value: 'Symposium' },
                    { title: 'Social', value: 'Social' },
                    { title: 'Conference', value: 'Conference' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
            initialValue: 'Seminar',
        },
        {
            name: 'startDate',
            title: 'Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'speaker',
            title: 'Speaker',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'registrationLink',
            title: 'Registration / Details Link',
            type: 'url',
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
    ],
    orderings: [
        {
            title: 'Date Descending',
            name: 'dateDesc',
            by: [{ field: 'startDate', direction: 'desc' }],
        },
        {
            title: 'Date Ascending',
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
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
            };
        },
    },
}
