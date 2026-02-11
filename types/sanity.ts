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

export interface ResearchProject {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    status: 'ongoing' | 'completed';
    startDate: string;
    endDate?: string;
    fundingAgency?: string;
    keywords?: string[];
    relatedPublications?: Publication[];
}

export interface Event {
    _id: string;
    title: string;
    type: 'Seminar' | 'Workshop' | 'Defense' | 'Symposium' | 'Social' | 'Conference';
    startDate: string;
    endDate?: string;
    location?: string;
    speaker?: string;
    description?: string;
    registrationLink?: string;
    tags?: string[];
}

export interface Professor {
    _id: string;
    name: string;
    title: string;
    imageUrl?: string;
    greeting?: string;
    email?: string;
    researchInterests?: string[];
    education?: {
        degree: string;
        university: string;
        year: string;
    }[];
    career?: {
        position: string;
        institution: string;
        period: string;
    }[];
    awards?: {
        title: string;
        organization: string;
        year: string;
    }[];
}

export interface SiteSettings {
    title: string;
    institution?: string;
    description?: string;
    logoUrl?: string; // Using image asset URL
    email?: string;
    phone?: string;
    address?: string;
    officeHours?: {
        days: string;
        hours: string;
    }[];
    socialLinks?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        youtube?: string;
    };
    footerText?: string;
    contactMessage?: string;
    googleMapsUrl?: string;
    directions?: string;
}
