import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

export const safeFetch = async <T>(query: string, params: Record<string, any> = {}): Promise<T[]> => {
    try {
        if (!projectId || projectId === 'dummy-project') {
            console.warn('Sanity Project ID is missing or dummy. Returning empty array.');
            return [];
        }
        return await client.fetch(query, params);
    } catch (error) {
        console.error('Error fetching data from Sanity:', error);
        return [];
    }
}
