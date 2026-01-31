export enum PublicationType {
    Journal = 'journal',
    Conference = 'conference',
    Workshop = 'workshop'
}

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal?: string;
    conference?: string;
    year: number;
    type: PublicationType;
    doi?: string;
    link?: string;
    abstract?: string;
    keywords?: string[];
    citations?: number;
}

export interface PublicationFilter {
    year?: number;
    type?: PublicationType;
    keyword?: string;
}

export type PublicationSortOrder = 'year-desc' | 'year-asc' | 'title-asc';
