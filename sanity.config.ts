import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset } from './lib/sanity/env'

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
                    .id('root')
                    .items([
                        S.listItem()
                            .title('Site Settings (사이트 설정)')
                            .child(
                                S.editor()
                                    .id('siteSettingsEditor')
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                                    .title('Site Settings')
                            ),
                        S.divider(),
                        S.documentTypeListItem('professor').title('Professor (PI)'),
                        S.documentTypeListItem('member').title('Members (구성원)'),
                        S.divider(),
                        S.documentTypeListItem('research').title('Research (연구)'),
                        S.documentTypeListItem('publication').title('Publications (논문)'),
                        S.divider(),
                        S.documentTypeListItem('news').title('News (소식)'),
                        S.documentTypeListItem('event').title('Events (행사)'),
                    ]),
        }),

        // 라이브 미리보기: Studio에서 초안 콘텐츠 실시간 확인
        presentationTool({
            previewUrl: {
                draftMode: {
                    enable: '/api/draft',
                },
            },
            name: 'preview',
            title: '미리보기',
        }),

        visionTool()
    ],

    schema: {
        types: schemaTypes,
    },

    // publication 문서 편집 화면에서 기본 액션(Delete 포함)을 모두 표시
    // Sanity Studio v3의 기본 액션에는 이미 Delete가 포함되어 있으며
    // 문서 상단 오른쪽의 "..." 드롭다운 메뉴에서 접근 가능합니다
    document: {
        actions: (prev, { schemaType }) => {
            if (schemaType === 'publication') {
                return prev  // 기본 액션 전체 유지 (Publish, Delete 등 모두 포함)
            }
            return prev
        },
    },
})
