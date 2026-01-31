import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MembersPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="page-header">
                <div className="section-container">
                    <h1 className="text-4xl font-bold text-gray-900">Members</h1>
                    <p className="mt-2 text-lg text-gray-600">Meet our research team</p>
                </div>
            </div>

            <div className="section-container py-12">
                <div className="max-w-4xl">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                        <p className="text-sm text-yellow-800">
                            <strong>Note:</strong> This page is currently under development. Content will be added soon.
                        </p>
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
