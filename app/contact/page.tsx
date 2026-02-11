import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { safeFetchSingleton } from '@/lib/sanity/client';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { SiteSettings } from '@/types/sanity';

export const dynamic = 'force-static';

export default async function ContactPage() {
    const settings = await safeFetchSingleton<SiteSettings>(siteSettingsQuery);

    const address = settings?.address || 'Science Building, Room 501\nSeoul 02841, South Korea';
    const email = settings?.email || 'contact@ainlp-lab.ac.kr';
    const phone = settings?.phone || '+82-2-1234-5678';
    const officeHours = settings?.officeHours || [
        { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
        { days: 'Saturday', hours: 'By Appointment' },
        { days: 'Sunday', hours: 'Closed' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="page-header">
                <div className="section-container">
                    <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
                    <p className="mt-2 text-lg text-gray-600">Get in touch with our research group</p>
                </div>
            </div>

            <div className="section-container py-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                        {settings?.contactMessage || 'Get in touch with our research group for collaboration opportunities, student applications, and general inquiries.'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="academic-card h-full">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
                                Contact Information
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Address</p>
                                        <p className="text-gray-600 whitespace-pre-line mt-1">
                                            {address}
                                        </p>
                                        {settings?.directions && (
                                            <div className="mt-3 text-sm text-gray-500 bg-gray-50 p-3 rounded-md">
                                                <p className="font-medium text-gray-900 mb-1">Directions:</p>
                                                {settings.directions}
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <a href={`tel:${phone}`} className="text-primary-600 hover:text-primary-700 mt-1 block font-medium">
                                            {phone}
                                        </a>
                                        <p className="text-sm text-gray-400 mt-1">Mon-Fri, 9am-6pm</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <a href={`mailto:${email}`} className="text-primary-600 hover:text-primary-700 mt-1 block font-medium">
                                            {email}
                                        </a>
                                        <p className="text-sm text-gray-400 mt-1">For general inquiries</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="academic-card h-full flex flex-col">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
                                Lab Hours
                            </h2>
                            <div className="flex-grow">
                                <ul className="space-y-4">
                                    {officeHours.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                            <span className="font-medium text-gray-700">{item.days}</span>
                                            <span className="text-primary-700 font-semibold bg-primary-50 px-3 py-1 rounded-full text-sm">
                                                {item.hours}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Optional: Add a small call to action or additional info here */}
                            <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
                                <p>Visiting researchers and students are welcome to drop by during office hours.</p>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    {settings?.googleMapsUrl && (
                        <div className="academic-card p-0 overflow-hidden relative h-96 w-full">
                            <iframe
                                src={settings.googleMapsUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
