'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ExternalLink, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Publication } from '@/types/sanity';

type PublicationType = 'conference' | 'journal' | 'workshop';

const ITEMS_PER_PAGE = 10;

export default function PublicationsList({ publications }: { publications: Publication[] }) {
    const [selectedType, setSelectedType] = useState<PublicationType | 'all'>('all');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [sortBy, setSortBy] = useState<'date' | 'citations'>('date');
    const [currentPage, setCurrentPage] = useState(1);

    // Get unique years
    const years = useMemo(() => {
        const yearSet = new Set(publications.map(pub => pub.year));
        return Array.from(yearSet).sort((a, b) => b - a);
    }, [publications]);

    // Filter and sort publications
    const filteredPublications = useMemo(() => {
        let filtered = [...publications];

        // Filter by type
        if (selectedType !== 'all') {
            filtered = filtered.filter(pub => pub.type === selectedType);
        }

        // Filter by year
        if (selectedYear !== 'all') {
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
    }, [selectedType, selectedYear, sortBy, publications]);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedType, selectedYear, sortBy]);

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(filteredPublications.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPublications = filteredPublications.slice(startIndex, endIndex);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | '...')[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of the publications list
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const typeColors: Record<PublicationType, string> = {
        conference: 'bg-primary-100 text-primary-800',
        journal: 'bg-secondary-100 text-secondary-800',
        workshop: 'bg-accent-100 text-accent-800',
    };

    const typeLabels: Record<PublicationType, string> = {
        conference: 'Conference',
        journal: 'Journal',
        workshop: 'Workshop',
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
                            onChange={(e) => setSelectedType(e.target.value as PublicationType | 'all')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="all">All Types</option>
                            <option value="conference">Conference</option>
                            <option value="journal">Journal</option>
                            <option value="workshop">Workshop</option>
                        </select>
                    </div>

                    {/* Year Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="all">All Years</option>
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

                {/* Showing info */}
                {filteredPublications.length > 0 && (
                    <div className="mb-4 text-sm text-gray-500">
                        Showing {startIndex + 1}–{Math.min(endIndex, filteredPublications.length)} of {filteredPublications.length}
                    </div>
                )}

                {/* Publications List */}
                <div className="space-y-6">
                    {paginatedPublications.map((pub) => {
                        const venue = pub.venue || 'Unknown Venue';

                        return (
                            <article key={pub._id} className="academic-card">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[pub.type as PublicationType] || 'bg-gray-100 text-gray-800'}`}>
                                                {typeLabels[pub.type as PublicationType] || pub.type || 'Other'}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                            {pub.title}
                                        </h2>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4" />
                                        <span>{pub.authors}</span>
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
                                    <span className="font-medium">{venue}</span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {pub.pdfUrl && (
                                        <a
                                            href={pub.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                        >
                                            <FileText className="h-4 w-4 mr-1" />
                                            PDF
                                        </a>
                                    )}
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-1" />
                                            Link
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
                                </div>
                            </article>
                        );
                    })}

                    {filteredPublications.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No publications found with the selected filters.
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <nav className="mt-12 flex items-center justify-center gap-1" aria-label="Pagination">
                        {/* Previous button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                                disabled:opacity-40 disabled:cursor-not-allowed
                                text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Prev
                        </button>

                        {/* Page numbers */}
                        <div className="flex items-center gap-1">
                            {getPageNumbers().map((page, idx) =>
                                page === '...' ? (
                                    <span key={`dots-${idx}`} className="px-3 py-2 text-sm text-gray-400">
                                        …
                                    </span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`min-w-[2.5rem] px-3 py-2 text-sm font-medium rounded-md transition-colors
                                            ${currentPage === page
                                                ? 'bg-primary-600 text-white shadow-sm'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                            }`}
                                        aria-label={`Page ${page}`}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                    >
                                        {page}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Next button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                                disabled:opacity-40 disabled:cursor-not-allowed
                                text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Next page"
                        >
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                    </nav>
                )}
            </div>
        </div>
    );
}
