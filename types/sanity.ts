export interface Member {
    _id: string;
    name: string;
    role: 'Professor' | 'Post Doc' | 'PhD Student' | 'Masters Student' | 'Undergraduate' | 'Alumni';
    degree?: string;
    imageUrl?: string;
    bio?: string;
    email?: string;
    researchInterest?: string[];
    links?: { title: string; url: string }[];
}

export interface Publication {
    _id: string;
    title: string;
    authors: string;
    year: number;
    venue?: string;
    link?: string;
    pdfUrl?: string;
    imageUrl?: string;
    type: 'conference' | 'journal' | 'workshop';
    doi?: string;
    citations?: number;
}

export interface NewsItem {
    _id: string;
    title: string;
    slug: string;
    date: string;
    excerpt?: string;
    imageUrl?: string;
    category: 'Award' | 'Publication' | 'News' | 'Announcement' | 'Event';
    tags?: string[];
    link?: string;
    content?: string;
}
