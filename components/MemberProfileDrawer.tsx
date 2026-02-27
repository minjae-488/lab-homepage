'use client';

import { useEffect } from 'react';
import { X, Mail, ExternalLink, GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';
import { Member } from '@/types/sanity';

interface MemberProfileDrawerProps {
    member: Member | null;
    onClose: () => void;
}

export default function MemberProfileDrawer({ member, onClose }: MemberProfileDrawerProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (member) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [member, onClose]);

    if (!member) return null;

    const roleLabel: Record<string, string> = {
        'Post Doc': 'Postdoctoral Researcher',
        'PhD Student': 'Ph.D. Student',
        'Masters Student': "Master's Student",
        'Undergraduate': 'Undergraduate Student',
        'Alumni': 'Alumni',
    };

    const hasContent =
        member.bio ||
        (member.researchInterest && member.researchInterest.length > 0) ||
        (member.education && member.education.length > 0) ||
        (member.awards && member.awards.length > 0) ||
        (member.workExperiences && member.workExperiences.length > 0) ||
        (member.publications && member.publications.length > 0) ||
        (member.links && member.links.length > 0);

    return (
        <>
            {/* 배경 오버레이 */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* 슬라이드 패널 — max-w-2xl(672px)로 넉넉하게 */}
            <div className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-50 shadow-2xl overflow-y-auto flex flex-col">

                {/* 헤더 */}
                <div className="flex items-center justify-between px-8 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                        {roleLabel[member.role] ?? member.role}
                    </span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="닫기"
                    >
                        <X className="h-5 w-5 text-gray-500" />
                    </button>
                </div>

                {/* 프로필 상단 */}
                <div className="px-8 py-8 flex gap-6 items-start bg-gray-50 border-b border-gray-200">
                    {member.imageUrl ? (
                        <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 shadow-sm">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                    ) : (
                        <div className="w-28 h-28 rounded-2xl flex-shrink-0 bg-primary-100 flex items-center justify-center text-4xl font-bold text-primary-400 shadow-sm">
                            {member.name.charAt(0)}
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                        {member.degree && (
                            <p className="text-base text-gray-500 mt-1">{member.degree}</p>
                        )}
                        <div className="flex flex-wrap gap-3 mt-3">
                            {member.email && (
                                <a
                                    href={`mailto:${member.email}`}
                                    className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    {member.email}
                                </a>
                            )}
                            {member.links?.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full"
                                >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 본문 */}
                <div className="px-8 py-8 flex flex-col gap-8">
                    {!hasContent && (
                        <p className="text-gray-400 text-sm text-center py-12">
                            아직 등록된 정보가 없습니다.
                        </p>
                    )}

                    {/* Bio */}
                    {member.bio && (
                        <Section title="Bio">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                                {member.bio}
                            </p>
                        </Section>
                    )}

                    {/* Research Interests */}
                    {member.researchInterest && member.researchInterest.length > 0 && (
                        <Section title="Research Interests" icon={<BookOpen className="h-4 w-4" />}>
                            <div className="flex flex-wrap gap-2">
                                {member.researchInterest.map((interest, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm rounded-full font-medium">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Education */}
                    {member.education && member.education.length > 0 && (
                        <Section title="Education" icon={<GraduationCap className="h-4 w-4" />}>
                            <div className="space-y-3">
                                {member.education.map((edu, idx) => (
                                    <div key={idx} className="flex items-start gap-3 border-l-4 border-primary-400 pl-4 py-1">
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">{edu.degree}</div>
                                            <div className="text-gray-600 text-sm">{edu.institution}</div>
                                            <div className="text-gray-400 text-xs mt-0.5">{edu.year}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Work Experiences */}
                    {member.workExperiences && member.workExperiences.length > 0 && (
                        <Section title="Work Experiences" icon={<Briefcase className="h-4 w-4" />}>
                            <div className="space-y-3">
                                {member.workExperiences.map((exp, idx) => (
                                    <div key={idx} className="flex items-start gap-3 border-l-4 border-secondary-400 pl-4 py-1">
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">{exp.position}</div>
                                            <div className="text-gray-600 text-sm">{exp.organization}</div>
                                            <div className="text-gray-400 text-xs mt-0.5">{exp.period}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Awards */}
                    {member.awards && member.awards.length > 0 && (
                        <Section title="Awards" icon={<Award className="h-4 w-4" />}>
                            <div className="space-y-3">
                                {member.awards.map((award, idx) => (
                                    <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 pl-4 py-2 rounded-r">
                                        <div className="font-semibold text-gray-900 text-sm">{award.title}</div>
                                        <div className="text-gray-600 text-xs">{award.organization}</div>
                                        <div className="text-gray-400 text-xs mt-0.5">{award.year}</div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}

                    {/* Publications */}
                    {member.publications && member.publications.length > 0 && (
                        <Section title="Publications">
                            <div className="space-y-3">
                                {member.publications.map((pub, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-lg p-4 hover:border-primary-200 transition-colors">
                                        <div className="font-medium text-gray-900 text-sm leading-snug">
                                            {pub.link ? (
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                                                    {pub.title}
                                                </a>
                                            ) : pub.title}
                                        </div>
                                        <div className="text-gray-500 text-xs mt-1">
                                            {pub.venue && <span>{pub.venue}</span>}
                                            {pub.venue && pub.year && <span className="mx-1">·</span>}
                                            {pub.year && <span>{pub.year}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    )}
                </div>
            </div>
        </>
    );
}

function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
    return (
        <section>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {icon}
                {title}
            </h3>
            {children}
        </section>
    );
}
