export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
            description: 'The title of your site (e.g. AI & NLP Lab)',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'institution',
            title: 'Institution Name',
            type: 'string',
            description: 'Your university or organization name',
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text',
            description: 'A short description of your lab (used for SEO and footer)',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'email',
            title: 'Contact Email',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 3,
        },
        {
            name: 'officeHours',
            title: 'Office / Lab Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'days', type: 'string', title: 'Days' },
                        { name: 'hours', type: 'string', title: 'Hours' },
                    ],
                },
            ],
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                { name: 'github', type: 'url', title: 'GitHub URL' },
                { name: 'twitter', type: 'url', title: 'Twitter/X URL' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
                { name: 'youtube', type: 'url', title: 'YouTube URL' },
            ],
        },
        {
            name: 'footerText',
            title: 'Custom Footer Text',
            type: 'string',
            description: 'Override the default copyright text if needed',
        },
        {
            name: 'contactMessage',
            title: 'Contact Page Message',
            type: 'text',
            rows: 3,
            description: 'Message displayed below the Contact title (e.g., "Get in touch with our research group")',
        },
        {
            name: 'googleMapsUrl',
            title: 'Google Maps Embed URL',
            type: 'url',
            description: 'The "Embed a map" URL from Google Maps (src attribute in iframe code)',
        },
        {
            name: 'directions',
            title: 'Directions',
            type: 'text',
            rows: 4,
            description: 'Instructions on how to get to the lab (e.g., subway, bus info)',
        },
    ],
}
