import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { safeFetch } from '@/lib/sanity/client';
import { membersQuery } from '@/lib/sanity/queries';
import { Member } from '@/types/sanity';



export default async function MembersPage() {
    const members: Member[] = await safeFetch(membersQuery);

    const groupedMembers = {
        PI: members.filter(m => m.role === 'Professor'),
        PostDoc: members.filter(m => m.role === 'Post Doc'),
        PhD: members.filter(m => m.role === 'PhD Student'),
        MS: members.filter(m => m.role === 'Masters Student'),
        Undergrad: members.filter(m => m.role === 'Undergraduate'),
        Alumni: members.filter(m => m.role === 'Alumni'),
    };

    const roleLabels = {
        PI: 'Principal Investigator',
        PostDoc: 'Postdoctoral Researchers',
        PhD: 'Ph.D. Students',
        MS: "Master's Students",
        Undergrad: 'Undergraduate Students',
        Alumni: 'Alumni',
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
                                <div key={member._id} className="academic-card">
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
                                                {member.links?.map((link, idx) => (
                                                    <a
                                                        key={idx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-primary-600 hover:text-primary-700"
                                                    >
                                                        {link.title}
                                                    </a>
                                                ))}
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

                    {/* Post Docs */}
                    {groupedMembers.PostDoc.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PostDoc}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedMembers.PostDoc.map((member) => (
                                    <MemberCard key={member._id} member={member} />
                                ))}
                            </div>
                        </section>
                    )}

                    {/* PhD Students */}
                    {groupedMembers.PhD.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.PhD}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedMembers.PhD.map((member) => (
                                    <MemberCard key={member._id} member={member} />
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
                                    <MemberCard key={member._id} member={member} simple />
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
                                    <div key={member._id} className="academic-card text-center">
                                        <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                                        {member.degree && (
                                            <p className="text-sm text-gray-600 mt-1">{member.degree}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Alumni */}
                    {groupedMembers.Alumni.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{roleLabels.Alumni}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {groupedMembers.Alumni.map((member) => (
                                    <div key={member._id} className="academic-card text-center">
                                        <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                                        {member.degree && (
                                            <p className="text-sm text-gray-600 mt-1">{member.degree}</p>
                                        )}
                                        {member.bio && (
                                            <p className="text-xs text-gray-500 mt-1">{member.bio}</p>
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

function MemberCard({ member, simple = false }: { member: Member; simple?: boolean }) {
    return (
        <div className="academic-card">
            <div className={`flex ${simple ? 'flex-col' : 'items-start'} gap-4`}>
                {!simple && member.imageUrl && (
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
                </div>
            </div>
        </div>
    );
}
