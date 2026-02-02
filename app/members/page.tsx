'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, GraduationCap, Building } from 'lucide-react';
import membersData from '@/data/members.json';

type MemberRole = 'PI' | 'PhD' | 'MS' | 'Undergrad';

export default function MembersPage() {
    const groupedMembers = {
        PI: membersData.filter(m => m.role === 'PI'),
        PhD: membersData.filter(m => m.role === 'PhD'),
        MS: membersData.filter(m => m.role === 'MS'),
        Undergrad: membersData.filter(m => m.role === 'Undergrad'),
    };

    const roleLabels: Record<MemberRole, string> = {
        PI: 'Principal Investigator',
        PhD: 'Ph.D. Students',
        MS: "Master's Students",
        Undergrad: 'Undergraduate Students',
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
                    <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Meet the researchers advancing AI and NLP
                    </p>
                </div>
            </div>

            <div className="section-container py-12">
                <div className="space-y-16">
                    {/* Principal Investigator */}
                    {groupedMembers.PI.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PI}</h2>
                            {groupedMembers.PI.map((member) => (
                                <div key={member.id} className="academic-card">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {member.imageUrl && (
                                            <div className="w-32 h-32 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={member.imageUrl}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                            {member.degree && (
                                                <p className="text-lg text-gray-600 mb-4">{member.degree}</p>
                                            )}
                                            {member.bio && (
                                                <p className="text-gray-700 mb-4">{member.bio}</p>
                                            )}
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                {member.email && (
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                                    >
                                                        <Mail className="h-4 w-4 mr-1" />
                                                        {member.email}
                                                    </a>
                                                )}
                                            </div>
                                            {member.researchInterest && member.researchInterest.length > 0 && (
                                                <div className="mt-4">
                                                    <p className="text-sm font-medium text-gray-700 mb-2">Research Interests:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {member.researchInterest.map((interest, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                                                            >
                                                                {interest}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* PhD Students */}
                    {groupedMembers.PhD.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PhD}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedMembers.PhD.map((member) => (
                                    <div key={member.id} className="academic-card">
                                        <div className="flex items-start gap-4">
                                            {member.imageUrl && (
                                                <div className="w-20 h-20 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                                                    <img
                                                        src={member.imageUrl}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                                                {member.degree && (
                                                    <p className="text-sm text-gray-600 mb-2">{member.degree}</p>
                                                )}
                                                {member.email && (
                                                    <a
                                                        href={`mailto:${member.email}`}
                                                        className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                                                    >
                                                        <Mail className="h-3 w-3" />
                                                        {member.email}
                                                    </a>
                                                )}
                                                {member.researchInterest && member.researchInterest.length > 0 && (
                                                    <div className="mt-3">
                                                        <div className="flex flex-wrap gap-1">
                                                            {member.researchInterest.slice(0, 3).map((interest, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs rounded"
                                                                >
                                                                    {interest}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Master's Students */}
                    {groupedMembers.MS.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.MS}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groupedMembers.MS.map((member) => (
                                    <div key={member.id} className="academic-card">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1 mb-2"
                                            >
                                                <Mail className="h-3 w-3" />
                                                Email
                                            </a>
                                        )}
                                        {member.researchInterest && member.researchInterest.length > 0 && (
                                            <div className="mt-2">
                                                <div className="flex flex-wrap gap-1">
                                                    {member.researchInterest.slice(0, 2).map((interest, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                                                        >
                                                            {interest}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Undergraduate Students */}
                    {groupedMembers.Undergrad.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.Undergrad}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {groupedMembers.Undergrad.map((member) => (
                                    <div key={member.id} className="academic-card text-center">
                                        <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                                        {member.degree && (
                                            <p className="text-sm text-gray-600 mt-1">{member.degree}</p>
                                        )}
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
