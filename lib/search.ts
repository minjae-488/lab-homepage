import publicationsData from '@/data/publications.json';
import membersData from '@/data/members.json';
import researchData from '@/data/research.json';
import newsData from '@/data/news.json';
import eventsData from '@/data/events.json';
import type { SearchResult, SearchResults } from '@/types';

// Simple search function that checks if query matches text
function matchesQuery(text: string | undefined, query: string): boolean {
    if (!text) return false;
    return text.toLowerCase().includes(query.toLowerCase());
}

// Search across all data sources
export function searchAll(query: string): SearchResults {
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

    const normalizedQuery = query.toLowerCase();

    // Search Publications
    const publications = publicationsData
        .filter((pub: any) => {
            return (
                matchesQuery(pub.title, normalizedQuery) ||
                matchesQuery(pub.abstract, normalizedQuery) ||
                pub.authors?.some((author: string) => matchesQuery(author, normalizedQuery)) ||
                pub.keywords?.some((keyword: string) => matchesQuery(keyword, normalizedQuery)) ||
                matchesQuery(pub.conference, normalizedQuery) ||
                matchesQuery(pub.journal, normalizedQuery)
            );
        })
        .map((pub: any) => ({
            id: pub.id,
            type: 'publication' as const,
            title: pub.title,
            description: `${pub.authors.join(', ')} - ${pub.conference || pub.journal || ''} ${pub.year}`,
            link: `/publications#${pub.id}`,
            metadata: { year: pub.year, type: pub.type },
        }));

    // Search Members
    const members = membersData
        .filter((member: any) => {
            return (
                matchesQuery(member.name, normalizedQuery) ||
                matchesQuery(member.bio, normalizedQuery) ||
                matchesQuery(member.degree, normalizedQuery) ||
                member.researchInterest?.some((interest: string) => matchesQuery(interest, normalizedQuery))
            );
        })
        .map((member: any) => ({
            id: member.id,
            type: 'member' as const,
            title: member.name,
            description: member.degree || member.role || '',
            link: `/members#${member.id}`,
            metadata: { role: member.role },
        }));

    // Search Research
    const research = researchData
        .filter((project: any) => {
            return (
                matchesQuery(project.title, normalizedQuery) ||
                matchesQuery(project.description, normalizedQuery) ||
                project.keywords?.some((keyword: string) => matchesQuery(keyword, normalizedQuery)) ||
                project.members?.some((member: string) => matchesQuery(member, normalizedQuery))
            );
        })
        .map((project: any) => ({
            id: project.id,
            type: 'research' as const,
            title: project.title,
            description: project.description.substring(0, 150) + '...',
            link: `/research#${project.id}`,
            metadata: { status: project.status },
        }));

    // Search News
    const news = newsData
        .filter((item: any) => {
            return (
                matchesQuery(item.title, normalizedQuery) ||
                matchesQuery(item.summary, normalizedQuery) ||
                matchesQuery(item.content, normalizedQuery) ||
                item.tags?.some((tag: string) => matchesQuery(tag, normalizedQuery))
            );
        })
        .map((item: any) => ({
            id: item.id,
            type: 'news' as const,
            title: item.title,
            description: item.summary,
            link: `/news#${item.id}`,
            metadata: { category: item.category, date: item.date },
        }));

    // Search Events
    const events = eventsData
        .filter((event: any) => {
            return (
                matchesQuery(event.title, normalizedQuery) ||
                matchesQuery(event.description, normalizedQuery) ||
                matchesQuery(event.speaker, normalizedQuery) ||
                matchesQuery(event.location, normalizedQuery) ||
                event.tags?.some((tag: string) => matchesQuery(tag, normalizedQuery))
            );
        })
        .map((event: any) => ({
            id: event.id,
            type: 'event' as const,
            title: event.title,
            description: event.description.substring(0, 150) + '...',
            link: `/events#${event.id}`,
            metadata: { type: event.type, date: event.date, status: event.status },
        }));

    const total = publications.length + members.length + research.length + news.length + events.length;

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
