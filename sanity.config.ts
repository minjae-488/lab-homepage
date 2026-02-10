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

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
