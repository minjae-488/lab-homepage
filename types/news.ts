export type NewsCategory = 'Award' | 'Publication' | 'News' | 'Announcement' | 'Event';

export interface NewsItem {
    id: string;
    date: string; // ISO 8601 format
    title: string;
    category: NewsCategory;
    summary: string;
    content?: string;
    image?: string;
    link?: string;
    author?: string;
    tags?: string[];
}

export interface NewsFilter {
    category?: NewsCategory;
    year?: number;
    tag?: string;
}
