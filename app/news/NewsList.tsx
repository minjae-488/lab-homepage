'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Search, ExternalLink } from 'lucide-react';
import { NewsItem } from '@/types/sanity';

type NewsCategory = 'Award' | 'Publication' | 'News' | 'Announcement' | 'Event';

export default function NewsList({ news }: { news: NewsItem[] }) {
    const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'All'>('All');
    const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Get unique years
    const years = useMemo(() => {
        const yearSet = new Set(news.map(item => new Date(item.date).getFullYear()));
        return Array.from(yearSet).sort((a, b) => b - a);
    }, [news]);

    // Filter news
    const filteredNews = useMemo(() => {
        let filtered = [...news];

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }

        // Filter by year
        if (selectedYear !== 'All') {
            filtered = filtered.filter(item => new Date(item.date).getFullYear() === selectedYear);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(query) ||
                (item.excerpt && item.excerpt.toLowerCase().includes(query)) ||
                item.tags?.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // Sort by date (newest first)
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return filtered;
    }, [selectedCategory, selectedYear, searchQuery, news]);

    const categoryColors: Record<NewsCategory, string> = {
        Award: 'bg-yellow-100 text-yellow-800',
        Publication: 'bg-blue-100 text-blue-800',
        News: 'bg-green-100 text-green-800',
        Announcement: 'bg-purple-100 text-purple-800',
        Event: 'bg-pink-100 text-pink-800',
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
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
                    <h1 className="text-4xl font-bold text-gray-900">News & Updates</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {filteredNews.length} {filteredNews.length === 1 ? 'item' : 'items'}
                    </p>
                </div>
            </div>

            <div className="section-container py-12">
                {/* Search and Filters */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search news, announcements, and events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Category Filter */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as NewsCategory | 'All')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option value="All">All Categories</option>
                                <option value="Award">Awards</option>
                                <option value="Publication">Publications</option>
                                <option value="News">News</option>
                                <option value="Announcement">Announcements</option>
                                <option value="Event">Events</option>
                            </select>
                        </div>

                        {/* Year Filter */}
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : parseInt(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                                <option value="All">All Years</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* News List */}
                <div className="space-y-6">
                    {filteredNews.map((item) => (
                        <article key={item._id} className="academic-card hover:shadow-card-hover transition-shadow">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[item.category as NewsCategory]}`}>
                                            {item.category}
                                        </span>
                                        <span className="flex items-center text-sm text-gray-500">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            {formatDate(item.date)}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                                        {item.link ? (
                                            <Link href={item.link}>{item.title}</Link>
                                        ) : (
                                            item.title
                                        )}
                                    </h2>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4 leading-relaxed">{item.excerpt}</p>

                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                        >
                                            <Tag className="h-3 w-3 mr-1" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {item.link && (
                                <div className="mt-4">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-1" />
                                        Learn more
                                    </Link>
                                </div>
                            )}
                        </article>
                    ))}

                    {filteredNews.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <p className="text-lg mb-2">No news items found</p>
                            <p className="text-sm">Try adjusting your filters or search query</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
