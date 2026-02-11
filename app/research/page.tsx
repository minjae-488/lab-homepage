
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { safeFetch } from '@/lib/sanity/client';
import { researchProjectsQuery } from '@/lib/sanity/queries';
import { ResearchProject } from '@/types/sanity';
import ResearchList from './ResearchList';

export default async function ResearchPage() {
    const projects: ResearchProject[] = await safeFetch(researchProjectsQuery);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="page-header">
                <div className="section-container">
                    <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">Research</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Exploring cutting-edge AI and NLP technologies
                    </p>
                </div>
            </div>

            <ResearchList projects={projects} />
        </div>
    );
}
