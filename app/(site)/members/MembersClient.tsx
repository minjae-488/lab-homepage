'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { Member } from '@/types/sanity';
import MemberProfileDrawer from '@/components/MemberProfileDrawer';

interface MembersClientProps {
    members: Member[];
}

const roleLabels: Record<string, string> = {
    PI: 'Principal Investigator',
    PostDoc: 'Postdoctoral Researchers',
    PhD: 'Ph.D. Students',
    MS: "Master's Students",
    Undergrad: 'Undergraduate Students',
    Alumni: 'Alumni',
};

export default function MembersClient({ members }: MembersClientProps) {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    const grouped = {
        PI: members.filter(m => m.role === 'Professor'),
        PostDoc: members.filter(m => m.role === 'Post Doc'),
        PhD: members.filter(m => m.role === 'PhD Student'),
        MS: members.filter(m => m.role === 'Masters Student'),
        Undergrad: members.filter(m => m.role === 'Undergraduate'),
        Alumni: members.filter(m => m.role === 'Alumni'),
    };

    const openDrawer = (member: Member) => setSelectedMember(member);
    const closeDrawer = () => setSelectedMember(null);

    return (
        <>
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
                        {grouped.PI.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PI}</h2>
                                {grouped.PI.map((member) => (
                                    <div key={member._id} className="academic-card">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {member.imageUrl && (
                                                <div className="w-32 h-32 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                                                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                                {member.degree && <p className="text-lg text-gray-600 mb-4">{member.degree}</p>}
                                                {member.bio && <p className="text-gray-700 mb-4">{member.bio}</p>}
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    {member.email && (
                                                        <a href={`mailto:${member.email}`} className="inline-flex items-center text-primary-600 hover:text-primary-700">
                                                            <Mail className="h-4 w-4 mr-1" />
                                                            {member.email}
                                                        </a>
                                                    )}
                                                    {member.links?.map((link, idx) => (
                                                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary-600 hover:text-primary-700">
                                                            {link.title}
                                                        </a>
                                                    ))}
                                                </div>
                                                {member.researchInterest && member.researchInterest.length > 0 && (
                                                    <div className="mt-4">
                                                        <p className="text-sm font-medium text-gray-700 mb-2">Research Interests:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {member.researchInterest.map((interest, idx) => (
                                                                <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full">
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

                        {/* Post Docs */}
                        {grouped.PostDoc.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PostDoc}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {grouped.PostDoc.map((member) => (
                                        <ClickableMemberCard key={member._id} member={member} onClick={() => openDrawer(member)} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* PhD Students */}
                        {grouped.PhD.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PhD}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {grouped.PhD.map((member) => (
                                        <ClickableMemberCard key={member._id} member={member} onClick={() => openDrawer(member)} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Master's Students */}
                        {grouped.MS.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.MS}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {grouped.MS.map((member) => (
                                        <ClickableMemberCard key={member._id} member={member} onClick={() => openDrawer(member)} simple />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Undergraduate Students */}
                        {grouped.Undergrad.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.Undergrad}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {grouped.Undergrad.map((member) => (
                                        <button
                                            key={member._id}
                                            onClick={() => openDrawer(member)}
                                            className="academic-card text-center hover:shadow-md hover:border-primary-200 transition-all cursor-pointer text-left w-full"
                                        >
                                            <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                                            {member.degree && <p className="text-sm text-gray-600 mt-1">{member.degree}</p>}
                                            <p className="text-xs text-primary-500 mt-2">프로필 보기 →</p>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Alumni */}
                        {grouped.Alumni.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.Alumni}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {grouped.Alumni.map((member) => (
                                        <button
                                            key={member._id}
                                            onClick={() => openDrawer(member)}
                                            className="academic-card text-center hover:shadow-md hover:border-primary-200 transition-all cursor-pointer text-left w-full"
                                        >
                                            <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                                            {member.degree && <p className="text-sm text-gray-600 mt-1">{member.degree}</p>}
                                            <p className="text-xs text-primary-500 mt-2">프로필 보기 →</p>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            {/* 슬라이드 드로어 */}
            <MemberProfileDrawer member={selectedMember} onClose={closeDrawer} />
        </>
    );
}

function ClickableMemberCard({ member, onClick, simple = false }: { member: Member; onClick: () => void; simple?: boolean }) {
    return (
        <button
            onClick={onClick}
            className="academic-card text-left w-full hover:shadow-md hover:border-primary-200 transition-all cursor-pointer"
        >
            <div className={`flex ${simple ? 'flex-col' : 'items-start'} gap-4`}>
                {!simple && member.imageUrl && (
                    <div className="w-20 h-20 rounded-lg bg-gray-200 flex-shrink-0 overflow-hidden">
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                )}
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    {member.degree && <p className="text-sm text-gray-600 mb-2">{member.degree}</p>}
                    {member.email && (
                        <span className="text-sm text-primary-600 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {member.email}
                        </span>
                    )}
                    {member.researchInterest && member.researchInterest.length > 0 && (
                        <div className={`mt-3 ${simple ? 'mt-2' : ''}`}>
                            <div className="flex flex-wrap gap-1">
                                {member.researchInterest.slice(0, simple ? 2 : 3).map((interest, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-2 py-0.5 ${simple ? 'bg-gray-100 text-gray-700' : 'bg-primary-50 text-primary-700'} text-xs rounded`}
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <p className="text-xs text-primary-500 mt-3">프로필 보기 →</p>
                </div>
            </div>
        </button>
    );
}
