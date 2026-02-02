'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, MapPin, User, ExternalLink } from 'lucide-react';
import eventsData from '@/data/events.json';

type EventType = 'Seminar' | 'Workshop' | 'Conference' | 'Symposium' | 'Defense' | 'Social';
type EventStatus = 'Upcoming' | 'Ongoing' | 'Past';

export default function EventsPage() {
    const [selectedType, setSelectedType] = useState<EventType | 'All'>('All');
    const [selectedStatus, setSelectedStatus] = useState<EventStatus | 'All'>('Upcoming');

    // Filter events
    const filteredEvents = useMemo(() => {
        let filtered = [...eventsData];

        if (selectedType !== 'All') {
            filtered = filtered.filter(event => event.type === selectedType);
        }

        if (selectedStatus !== 'All') {
            filtered = filtered.filter(event => event.status === selectedStatus);
        }

        // Sort by date
        filtered.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return selectedStatus === 'Past' ? dateB - dateA : dateA - dateB;
        });

        return filtered;
    }, [selectedType, selectedStatus]);

    const typeColors: Record<EventType, string> = {
        Seminar: 'bg-blue-100 text-blue-800',
        Workshop: 'bg-green-100 text-green-800',
        Conference: 'bg-purple-100 text-purple-800',
        Symposium: 'bg-pink-100 text-pink-800',
        Defense: 'bg-yellow-100 text-yellow-800',
        Social: 'bg-gray-100 text-gray-800',
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const isMultiDay = (event: typeof eventsData[0]) => {
        return event.endDate && event.endDate !== event.date;
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
                    <h1 className="text-4xl font-bold text-gray-900">Events</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Seminars, workshops, and lab activities
                    </p>
                </div>
            </div>

            <div className="section-container py-12">
                {/* Filters */}
                <div className="mb-8 flex flex-col md:flex-row gap-4">
                    {/* Status Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <div className="flex gap-2">
                            {(['Upcoming', 'Past', 'All'] as const).map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setSelectedStatus(status)}
                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedStatus === status
                                        ? 'bg-primary-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Type Filter */}
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value as EventType | 'All')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="All">All Types</option>
                            <option value="Seminar">Seminars</option>
                            <option value="Workshop">Workshops</option>
                            <option value="Conference">Conferences</option>
                            <option value="Symposium">Symposia</option>
                            <option value="Defense">Thesis Defenses</option>
                            <option value="Social">Social Events</option>
                        </select>
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-6">
                    {filteredEvents.map((event) => (
                        <article key={event.id} className="academic-card">
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[event.type as EventType]}`}>
                                            {event.type}
                                        </span>
                                        {event.status === 'Upcoming' && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Upcoming
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                                </div>
                            </div>

                            <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 flex-shrink-0" />
                                    <span>
                                        {formatDate(event.date)}
                                        {isMultiDay(event) && ` - ${formatDate(event.endDate!)}`}
                                    </span>
                                </div>

                                {event.time && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 flex-shrink-0" />
                                        <span>{event.time}</span>
                                    </div>
                                )}

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 flex-shrink-0" />
                                    <span>{event.location}</span>
                                </div>

                                {event.speaker && (
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4 flex-shrink-0" />
                                        <span>{event.speaker}</span>
                                    </div>
                                )}
                            </div>

                            {event.registrationLink && event.status === 'Upcoming' && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <Link
                                        href={event.registrationLink}
                                        className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                                    >
                                        {event.registrationLink.startsWith('http') ? (
                                            <>
                                                Register Now <ExternalLink className="h-3 w-3 ml-1" />
                                            </>
                                        ) : (
                                            'Contact for Registration →'
                                        )}
                                    </Link>
                                </div>
                            )}

                            {event.tags && event.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {event.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <p className="text-lg mb-2">No events found</p>
                            <p className="text-sm">Try adjusting your filters</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
