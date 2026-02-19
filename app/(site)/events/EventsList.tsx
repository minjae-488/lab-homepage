'use client';

import { useState } from 'react';
import { Calendar, MapPin, Loader2 } from 'lucide-react';
import { Event } from '@/types/sanity';

interface EventsListProps {
    events: Event[];
}

export default function EventsList({ events }: EventsListProps) {
    const [selectedType, setSelectedType] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const eventTypes = ['All', ...Array.from(new Set(events.map(event => event.type)))];

    const filteredEvents = events.filter(event => {
        const matchesType = selectedType === 'All' || event.type === selectedType;
        const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (event.speaker && event.speaker.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesType && matchesSearch;
    });

    const isUpcoming = (dateString: string) => {
        return new Date(dateString) >= new Date();
    };

    const upcomingEvents = filteredEvents.filter(event => isUpcoming(event.startDate));
    const pastEvents = filteredEvents.filter(event => !isUpcoming(event.startDate)).reverse(); // Show recent past events first

    return (
        <div className="section-container py-12">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-12">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                    <div className="flex flex-wrap gap-2">
                        {eventTypes.map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedType(type)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Calendar className="mr-2 h-6 w-6 text-primary-600" />
                        Upcoming Events
                    </h2>
                    <div className="grid gap-6">
                        {upcomingEvents.map(event => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                </div>
            )}

            {/* Past Events */}
            {pastEvents.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center text-gray-500">
                        <Calendar className="mr-2 h-6 w-6" />
                        Past Events
                    </h2>
                    <div className="grid gap-6 opacity-80 hover:opacity-100 transition-opacity">
                        {pastEvents.map(event => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                </div>
            )}

            {filteredEvents.length === 0 && (
                <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
                    No events found matching your criteria.
                </div>
            )}
        </div>
    );
}

function EventCard({ event }: { event: Event }) {
    const startDate = new Date(event.startDate);
    const endDate = event.endDate ? new Date(event.endDate) : null;

    const formattedDate = startDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const formattedTime = startDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="academic-card group hover:border-primary-200 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date Badge */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-primary-50 rounded-lg text-primary-700 font-bold border border-primary-100">
                    <span className="text-sm uppercase tracking-wide">{startDate.toLocaleString('en-US', { month: 'short' })}</span>
                    <span className="text-3xl">{startDate.getDate()}</span>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {event.type}
                        </span>
                        {event.tags && (
                            <div className="flex gap-2">
                                {event.tags.map(tag => (
                                    <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {event.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formattedDate} • {formattedTime}
                            {endDate && ` - ${endDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`}
                        </div>
                        {event.location && (
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                {event.location}
                            </div>
                        )}
                    </div>

                    {event.speaker && (
                        <p className="text-sm font-medium text-gray-900 mb-2">
                            Speaker: <span className="text-gray-700 font-normal">{event.speaker}</span>
                        </p>
                    )}

                    {event.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                            {event.description}
                        </p>
                    )}

                    {event.registrationLink && (
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                        >
                            More Details / Register &rarr;
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
