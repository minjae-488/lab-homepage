'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, FileText, Users, Lightbulb, Newspaper, Calendar, ArrowLeft } from 'lucide-react';
import { searchAll } from '@/lib/search';
import type { SearchResult } from '@/types';

const categoryIcons = {
    publication: FileText,
    member: Users,
    research: Lightbulb,
    news: Newspaper,
    event: Calendar,
};

const categoryLabels = {
    publication: 'Publications',
    member: 'Members',
    research: 'Research',
    news: 'News',
    event: 'Events',
};

export default function SearchPage() {
    const searchParams = useSearchParams();
    const queryParam = searchParams.get('q') || '';

    const [query, setQuery] = useState(queryParam);
    const [activeCategory, setActiveCategory] = useState<'all' | 'publication' | 'member' | 'research' | 'news' | 'event'>('all');

    // Update query when URL changes
    useEffect(() => {
        setQuery(queryParam);
    }, [queryParam]);

    // Perform search
    const results = useMemo(() => {
        if (!query.trim()) {
            return {
                query: '',
                total: 0,
                publications: [],
                members: [],
                research: [],
                news: [],
                events: [],
            };
        }
        return searchAll(query);
    }, [query]);

    // Filter results by category
    const displayResults = useMemo(() => {
        if (activeCategory === 'all') {
            return [
                ...results.publications,
                ...results.members,
                ...results.research,
                ...results.news,
                ...results.events,
            ];
        }
        const categoryKey = activeCategory === 'publication' ? 'publications' :
            activeCategory === 'member' ? 'members' :
                activeCategory === 'research' ? 'research' :
                    activeCategory === 'news' ? 'news' : 'events';
        return results[categoryKey];
    }, [results, activeCategory]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Update URL to trigger search
        window.history.pushState({}, '', `/search?q=${encodeURIComponent(query)}`);
    };

    const ResultCard = ({ result }: { result: SearchResult }) => {
        const Icon = categoryIcons[result.type];

        return (
            <Link href={result.link} className="block academic-card hover:shadow-card-hover transition-shadow">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                        <Icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {categoryLabels[result.type]}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-primary-600 transition-colors">
                            {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{result.description}</p>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="page-header">
                <div className="section-container">
                    <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">Search</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Find publications, members, research, news, and events
                    </p>
                </div>
            </div>

            <div className="section-container py-12">
                {/* Search Form */}
                <form onSubmit={handleSearch} className="mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search across all content..."
                            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            autoFocus
                        />
                    </div>
                </form>

                {/* Results Summary */}
                {query && (
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Found <span className="font-semibold text-gray-900">{results.total}</span> results for &quot;
                            <span className="font-semibold text-gray-900">{query}</span>&quot;
                        </p>
                    </div>
                )}

                {/* Category Filters */}
                {query && results.total > 0 && (
                    <div className="mb-8 flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'all'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All ({results.total})
                        </button>
                        {results.publications.length > 0 && (
                            <button
                                onClick={() => setActiveCategory('publication')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'publication'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Publications ({results.publications.length})
                            </button>
                        )}
                        {results.members.length > 0 && (
                            <button
                                onClick={() => setActiveCategory('member')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'member'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Members ({results.members.length})
                            </button>
                        )}
                        {results.research.length > 0 && (
                            <button
                                onClick={() => setActiveCategory('research')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'research'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Research ({results.research.length})
                            </button>
                        )}
                        {results.news.length > 0 && (
                            <button
                                onClick={() => setActiveCategory('news')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'news'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                News ({results.news.length})
                            </button>
                        )}
                        {results.events.length > 0 && (
                            <button
                                onClick={() => setActiveCategory('event')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeCategory === 'event'
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Events ({results.events.length})
                            </button>
                        )}
                    </div>
                )}

                {/* Results */}
                {query && results.total > 0 && (
                    <div className="space-y-4">
                        {displayResults.map((result) => (
                            <ResultCard key={`${result.type}-${result.id}`} result={result} />
                        ))}
                    </div>
                )}

                {/* No Results */}
                {query && results.total === 0 && (
                    <div className="text-center py-12">
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-lg text-gray-600 mb-2">No results found</p>
                        <p className="text-sm text-gray-500">
                            Try different keywords or check your spelling
                        </p>
                    </div>
                )}

                {/* Empty State */}
                {!query && (
                    <div className="text-center py-12">
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-lg text-gray-600 mb-2">Start searching</p>
                        <p className="text-sm text-gray-500">
                            Enter keywords to search across publications, members, research, news, and events
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
