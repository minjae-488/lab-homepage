'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, CheckCircle, Clock, DollarSign } from 'lucide-react';
import researchData from '@/data/research.json';

type ProjectStatus = 'ongoing' | 'completed';

export default function ResearchPage() {
    const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'all'>('all');

    const filteredProjects = selectedStatus === 'all'
        ? researchData
        : researchData.filter(project => project.status === selectedStatus);

    const ongoingProjects = researchData.filter(p => p.status === 'ongoing');
    const completedProjects = researchData.filter(p => p.status === 'completed');

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

            <div className="section-container py-12">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="academic-card text-center">
                        <div className="text-4xl font-bold text-primary-600 mb-2">{ongoingProjects.length}</div>
                        <div className="text-gray-600">Ongoing Projects</div>
                    </div>
                    <div className="academic-card text-center">
                        <div className="text-4xl font-bold text-secondary-600 mb-2">{completedProjects.length}</div>
                        <div className="text-gray-600">Completed Projects</div>
                    </div>
                </div>

                {/* Filter */}
                <div className="mb-8">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSelectedStatus('all')}
                            className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedStatus === 'all'
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            All Projects
                        </button>
                        <button
                            onClick={() => setSelectedStatus('ongoing')}
                            className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedStatus === 'ongoing'
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Ongoing
                        </button>
                        <button
                            onClick={() => setSelectedStatus('completed')}
                            className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedStatus === 'completed'
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Completed
                        </button>
                    </div>
                </div>

                {/* Projects List */}
                <div className="space-y-8">
                    {filteredProjects.map((project) => {
                        const duration = project.endDate
                            ? `${project.startDate} - ${project.endDate}`
                            : `${project.startDate} - Present`;

                        return (
                            <article key={project.id} className="academic-card">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                                    <span
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${project.status === 'ongoing'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {project.status === 'ongoing' ? (
                                            <Clock className="h-3 w-3 mr-1" />
                                        ) : (
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                        )}
                                        {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                                    </span>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                            <Calendar className="h-4 w-4" />
                                            <span className="font-medium">Duration</span>
                                        </div>
                                        <p className="text-gray-900 ml-6">{duration}</p>
                                    </div>

                                    {project.fundingAgency && (
                                        <div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                                <DollarSign className="h-4 w-4" />
                                                <span className="font-medium">Funding</span>
                                            </div>
                                            <p className="text-gray-900 ml-6">{project.fundingAgency}</p>
                                        </div>
                                    )}
                                </div>

                                {project.keywords && project.keywords.length > 0 && (
                                    <div className="mb-6">
                                        <div className="text-sm text-gray-600 mb-2 font-medium">Keywords</div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.keywords.map((keyword, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.relatedPublications && project.relatedPublications.length > 0 && (
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="text-sm font-medium text-gray-700 mb-2">Related Publications</div>
                                        <ul className="space-y-1">
                                            {project.relatedPublications.map((pubId, idx) => (
                                                <li key={idx} className="text-sm text-primary-600 hover:text-primary-700">
                                                    <Link href={`/publications#${pubId}`}>
                                                        Publication #{pubId}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                        );
                    })}

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No projects found with the selected filter.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
