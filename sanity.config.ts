import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset } from './lib/sanity/env'

export default defineConfig({
    basePath: '/studio',
    name: 'Lab_Homepage_Studio',
    title: 'Lab Homepage Studio',

    projectId,
    dataset,

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Site Settings')
                            .child(
                                S.editor()
                                    .id('siteSettingsEditor')
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                                    .title('Site Settings')
                            ),
                        S.divider(),
                        S.documentTypeListItem('member').title('Member'),
                        S.documentTypeListItem('publication').title('Publication'),
                        S.documentTypeListItem('news').title('News'),
                        S.documentTypeListItem('research').title('Research'),
                        S.documentTypeListItem('event').title('Event'),
                        S.documentTypeListItem('professor').title('Professor (PI)'),
                    ]),
        }),
        visionTool()
    ],

    schema: {
        types: schemaTypes,
    },
})
