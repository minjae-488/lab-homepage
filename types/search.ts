export type SearchResultType = 'publication' | 'member' | 'research' | 'news' | 'event';

export interface SearchResult {
    id: string;
    type: SearchResultType;
    title: string;
    description: string;
    link: string;
    metadata?: Record<string, any>;
    score?: number; // For ranking results
}

export interface SearchResults {
    query: string;
    total: number;
    publications: SearchResult[];
    members: SearchResult[];
    research: SearchResult[];
    news: SearchResult[];
    events: SearchResult[];
}
