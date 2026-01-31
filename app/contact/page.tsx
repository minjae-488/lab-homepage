import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="page-header">
                <div className="section-container">
                    <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
                    <p className="mt-2 text-lg text-gray-600">Get in touch with our research group</p>
                </div>
            </div>

            <div className="section-container py-12">
                <div className="max-w-4xl">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                        <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> This page is currently under development. Full contact form and map will be added soon.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="academic-card">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Address</p>
                                        <p className="text-sm text-gray-600">
                                            Science Building, Room 501<br />
                                            145 Anam-ro, Seongbuk-gu<br />
                                            Seoul 02841, South Korea
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <a href="tel:+82-2-1234-5678" className="text-sm text-primary-600 hover:text-primary-700">
                                            +82-2-1234-5678
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <a href="mailto:contact@ainlp-lab.ac.kr" className="text-sm text-primary-600 hover:text-primary-700">
                                            contact@ainlp-lab.ac.kr
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="academic-card">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Lab Hours</h2>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="font-medium text-gray-900">By Appointment</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="font-medium text-gray-900">Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
