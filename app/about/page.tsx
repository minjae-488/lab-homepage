import Link from 'next/link';
import { ArrowLeft, Mail, Briefcase, GraduationCap, Award } from 'lucide-react';
import professorData from '@/data/professor.json';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="page-header">
                <div className="section-container">
                    <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-4">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl font-bold text-gray-900">About</h1>
                    <p className="mt-2 text-lg text-gray-600">Principal Investigator</p>
                </div>
            </div>

            <div className="section-container py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Professor Profile */}
                    <div className="academic-card mb-12">
                        <div className="flex flex-col md:flex-row gap-8">
                            {professorData.photo && (
                                <div className="w-48 h-48 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={professorData.photo}
                                        alt={professorData.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{professorData.name}</h2>
                                <p className="text-xl text-gray-600 mb-4">{professorData.title}</p>
                                <p className="text-gray-700 mb-6 leading-relaxed">{professorData.bio}</p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={`mailto:${professorData.email}`}
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        {professorData.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Interests */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary-600" />
                            Research Interests
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {professorData.researchInterests.map((interest, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-primary-600" />
                            Education
                        </h3>
                        <div className="space-y-4">
                            {professorData.education.map((edu, idx) => (
                                <div key={idx} className="border-l-4 border-primary-600 pl-4 py-2">
                                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                                    <div className="text-gray-700">{edu.institution}</div>
                                    <div className="text-sm text-gray-600">{edu.year}</div>
                                    {edu.thesis && (
                                        <div className="text-sm text-gray-600 mt-1 italic">Thesis: {edu.thesis}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Career */}
                    <section className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Briefcase className="h-6 w-6 text-primary-600" />
                            Academic Positions
                        </h3>
                        <div className="space-y-4">
                            {professorData.career.map((position, idx) => (
                                <div key={idx} className="border-l-4 border-secondary-600 pl-4 py-2">
                                    <div className="font-semibold text-gray-900">{position.position}</div>
                                    <div className="text-gray-700">{position.institution}</div>
                                    <div className="text-sm text-gray-600">{position.period}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Awards */}
                    {professorData.awards && professorData.awards.length > 0 && (
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Award className="h-6 w-6 text-primary-600" />
                                Honors & Awards
                            </h3>
                            <div className="space-y-3">
                                {professorData.awards.map((award, idx) => (
                                    <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 pl-4 py-3 rounded-r">
                                        <div className="font-semibold text-gray-900">{award.title}</div>
                                        <div className="text-sm text-gray-700">{award.organization}</div>
                                        <div className="text-sm text-gray-600">{award.year}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}
