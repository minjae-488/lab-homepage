import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset } from './lib/sanity/env'

const previewUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000'

export default defineConfig({
    basePath: '/studio',
    name: 'Lab_Homepage_Studio',
    title: 'Lab Homepage Studio',

    projectId,
    dataset,

    // 인증 설정: Sanity 계정으로 로그인한 프로젝트 멤버만 접근 가능
    auth: {
        mode: 'replace',
        redirectOnSingle: true,
    },

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('콘텐츠 관리')
                    .items([
                        S.listItem()
                            .title('⚙️ Site Settings (사이트 설정)')
                            .child(
                                S.editor()
                                    .id('siteSettingsEditor')
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                                    .title('Site Settings')
                            ),
                        S.divider(),
                        S.documentTypeListItem('professor').title('👨‍🏫 Professor (PI)'),
                        S.documentTypeListItem('member').title('👥 Members (구성원)'),
                        S.divider(),
                        S.documentTypeListItem('research').title('🔬 Research (연구)'),
                        S.documentTypeListItem('publication').title('📄 Publications (논문)'),
                        S.divider(),
                        S.documentTypeListItem('news').title('📰 News (소식)'),
                        S.documentTypeListItem('event').title('🗓️ Events (행사)'),
                    ]),
        }),

        // 라이브 미리보기: Studio 편집 중 실시간으로 웹사이트 확인
        presentationTool({
            previewUrl: previewUrl,
            name: 'preview',
            title: '🖥️ 미리보기',
        }),

        visionTool()
    ],

    schema: {
        types: schemaTypes,
    },
})
