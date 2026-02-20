import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from './env'

// 일반 클라이언트 (게시된 콘텐츠용, CDN 사용)
export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

// Draft 클라이언트 (미리보기용 — Studio Presentation Tool에서만 사용됨)
export const draftClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false, // draft는 CDN 캐시 우회 필요
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: 'previewDrafts', // 미게시 초안 우선 표시
})

export const safeFetch = async <T>(
    query: string,
    params: Record<string, any> = {},
    isDraftMode = false
): Promise<T[]> => {
    try {
        if (!projectId || projectId === 'dummy-project') {
            console.warn('Sanity Project ID is missing or dummy. Returning empty array.');
            return [];
        }
        const activeClient = isDraftMode ? draftClient : client;
        return await activeClient.fetch(query, params);
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return [];
    }
}

export const safeFetchSingleton = async <T>(
    query: string,
    params: Record<string, any> = {},
    isDraftMode = false
): Promise<T | null> => {
    try {
        if (!projectId || projectId === 'dummy-project') {
            console.warn('Sanity Project ID is missing or dummy. Returning null.');
            return null;
        }
        const activeClient = isDraftMode ? draftClient : client;
        return await activeClient.fetch(query, params);
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return null;
    }
}
