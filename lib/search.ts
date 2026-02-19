import { safeFetch } from './sanity/client';
import { globalSearchQuery } from './sanity/queries';
import type { SearchResults } from '@/types';

interface SanityDoc {
    _id: string;
    _type: string;
    title: string;
    description: string;
    link: string;
    category?: string;
    date?: string;
}

// Search across all data sources from Sanity
export async function searchAll(query: string): Promise<SearchResults> {
    if (!query.trim()) {
        return {
            query,
            total: 0,
            publications: [],
            members: [],
            research: [],
            news: [],
            events: [],
        };
    }

    const results = await safeFetch<SanityDoc>(globalSearchQuery, {
        searchTerm: `${query}*`, // Add wildcard for partial matching
    });

    const publications = results
        .filter((item: SanityDoc) => item._type === 'publication')
        .map((item: SanityDoc) => ({
            id: item._id,
            type: 'publication' as const,
            title: item.title,
            description: item.description,
            link: item.link,
            metadata: { category: item.category, date: item.date },
        }));

    const members = results
        .filter((item: SanityDoc) => item._type === 'member')
        .map((item: SanityDoc) => ({
            id: item._id,
            type: 'member' as const,
            title: item.title,
            description: item.description,
            link: item.link,
            metadata: { category: item.category },
        }));

    const research = results
        .filter((item: SanityDoc) => item._type === 'research')
        .map((item: SanityDoc) => ({
            id: item._id,
            type: 'research' as const,
            title: item.title,
            description: item.description,
            link: item.link,
            metadata: { category: item.category },
        }));

    const news = results
        .filter((item: SanityDoc) => item._type === 'news')
        .map((item: SanityDoc) => ({
            id: item._id,
            type: 'news' as const,
            title: item.title,
            description: item.description,
            link: item.link,
            metadata: { category: item.category, date: item.date },
        }));

    const events = results
        .filter((item: SanityDoc) => item._type === 'event')
        .map((item: SanityDoc) => ({
            id: item._id,
            type: 'event' as const,
            title: item.title,
            description: item.description,
            link: item.link,
            metadata: { category: item.category, date: item.date },
        }));

    const total = results.length;

    return {
        query,
        total,
        publications,
        members,
        research,
        news,
        events,
    };
}
