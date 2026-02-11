
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { safeFetch } from '@/lib/sanity/client';
import { eventsQuery } from '@/lib/sanity/queries';
import { Event } from '@/types/sanity';
import EventsList from './EventsList';

export const dynamic = 'force-static';

export default async function EventsPage() {
    const events: Event[] = await safeFetch(eventsQuery);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="page-header bg-gray-50 border-b border-gray-200">
                <div className="section-container">
                    <div className="mb-4">
                        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-primary-600 transition-colors">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Link>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Events</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                        Seminars, workshops, and social activities at our lab.
                    </p>
                </div>
            </div>

            <EventsList events={events} />
        </div>
    );
}
