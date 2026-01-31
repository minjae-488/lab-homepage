export type EventType = 'Seminar' | 'Workshop' | 'Conference' | 'Symposium' | 'Defense' | 'Social';
export type EventStatus = 'Upcoming' | 'Ongoing' | 'Past';

export interface Event {
    id: string;
    title: string;
    type: EventType;
    date: string; // ISO 8601 format
    endDate?: string; // For multi-day events
    time?: string;
    location: string;
    speaker?: string;
    description: string;
    registrationLink?: string;
    status: EventStatus;
    tags?: string[];
}

export interface EventFilter {
    type?: EventType;
    status?: EventStatus;
    month?: number;
    year?: number;
}
