'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ExternalLink, Calendar, Users } from 'lucide-react';
import publicationsData from '@/data/publications.json';

type PublicationType = 'Conference' | 'Journal' | 'Workshop' | 'Preprint';

export default function PublicationsPage() {
    const [selectedType, setSelectedType] = useState<PublicationType | 'All'>('All');
    const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
    const [sortBy, setSortBy] = useState<'date' | 'citations'>('date');

    // Get unique years
    const years = useMemo(() => {
        const yearSet = new Set(publicationsData.map(pub => pub.year));
        return Array.from(yearSet).sort((a, b) => b - a);
    }, []);

    // Filter and sort publications
    const filteredPublications = useMemo(() => {
        let filtered = [...publicationsData];

        // Filter by type
        if (selectedType !== 'All') {
            filtered = filtered.filter(pub => pub.type === selectedType);
        }

        // Filter by year
        if (selectedYear !== 'All') {
            filtered = filtered.filter(pub => pub.year === selectedYear);
        }

        // Sort
        filtered.sort((a, b) => {
            if (sortBy === 'date') {
                return b.year - a.year;
            } else {
                return (b.citations || 0) - (a.citations || 0);
            }
        });

        return filtered;
    }, [selectedType, selectedYear, sortBy]);

    const typeColors: Record<PublicationType, string> = {
        Conference: 'bg-primary-100 text-primary-800',
        Journal: 'bg-secondary-100 text-secondary-800',
        Workshop: 'bg-accent-100 text-accent-800',
        Preprint: 'bg-gray-100 text-gray-800',
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
                    <h1 className="text-4xl font-bold text-gray-900">Publications</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'}
                    </p>
                </div>
            </div>

            <div className="section-container py-12">
                {/* Filters */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Type Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value as PublicationType | 'All')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="All">All Types</option>
                            <option value="Conference">Conference</option>
                            <option value="Journal">Journal</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Preprint">Preprint</option>
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

                    {/* Sort */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'date' | 'citations')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="date">Date (Newest First)</option>
                            <option value="citations">Citations (Most First)</option>
                        </select>
                    </div>
                </div>

                {/* Publications List */}
                <div className="space-y-6">
                    {filteredPublications.map((pub) => (
                        <article key={pub.id} className="academic-card">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[pub.type as PublicationType]}`}>
                                            {pub.type}
                                        </span>
                                        {pub.award && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                🏆 {pub.award}
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                        {pub.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>{pub.authors.join(', ')}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{pub.year}</span>
                                </div>
                                {pub.citations !== undefined && (
                                    <div className="flex items-center gap-1">
                                        <FileText className="h-4 w-4" />
                                        <span>{pub.citations} citations</span>
                                    </div>
                                )}
                            </div>

                            <div className="text-sm text-gray-700 mb-4">
                                <span className="font-medium">{pub.venue}</span>
                                {pub.pages && <span className="text-gray-500"> • pp. {pub.pages}</span>}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {pub.pdf && (
                                    <a
                                        href={pub.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        <FileText className="h-4 w-4 mr-1" />
                                        PDF
                                    </a>
                                )}
                                {pub.doi && (
                                    <a
                                        href={`https://doi.org/${pub.doi}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-1" />
                                        DOI
                                    </a>
                                )}
                                {pub.code && (
                                    <a
                                        href={pub.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-1" />
                                        Code
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No publications found with the selected filters.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
