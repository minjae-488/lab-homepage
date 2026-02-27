'use client';

import { useEffect } from 'react';
import { X, Mail, ExternalLink } from 'lucide-react';
import { Member } from '@/types/sanity';

interface MemberProfileDrawerProps {
    member: Member | null;
    onClose: () => void;
}

export default function MemberProfileDrawer({ member, onClose }: MemberProfileDrawerProps) {
    // ESC 키로 닫기
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

    return (
        <>
            {/* 배경 오버레이 */}
            <div
                className="fixed inset-0 bg-black/40 z-40 transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* 슬라이드 패널 */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto flex flex-col">
                {/* 헤더 */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
                    <span className="text-sm font-medium text-primary-600">
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

                {/* 프로필 */}
                <div className="px-6 py-6 flex gap-5 items-start border-b border-gray-100">
                    {member.imageUrl ? (
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                            <img
                                src={member.imageUrl}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-24 h-24 rounded-xl flex-shrink-0 bg-primary-50 flex items-center justify-center text-3xl font-bold text-primary-300">
                            {member.name.charAt(0)}
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
                        {member.degree && (
                            <p className="text-sm text-gray-500 mt-1">{member.degree}</p>
                        )}
                        {member.email && (
                            <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 mt-2"
                            >
                                <Mail className="h-3.5 w-3.5" />
                                {member.email}
                            </a>
                        )}
                    </div>
                </div>

                {/* 본문 */}
                <div className="px-6 py-6 flex flex-col gap-6">
                    {/* Bio */}
                    {member.bio && (
                        <section>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Bio
                            </h3>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line break-words">
                                {member.bio}
                            </p>
                        </section>
                    )}

                    {/* Research Interests */}
                    {member.researchInterest && member.researchInterest.length > 0 && (
                        <section>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Research Interests
                            </h3>
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
                        </section>
                    )}

                    {/* Links */}
                    {member.links && member.links.length > 0 && (
                        <section>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                Links
                            </h3>
                            <div className="flex flex-col gap-2">
                                {member.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm"
                                    >
                                        <ExternalLink className="h-3.5 w-3.5" />
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* 아무 내용도 없을 때 */}
                    {!member.bio && (!member.researchInterest || member.researchInterest.length === 0) && (!member.links || member.links.length === 0) && (
                        <p className="text-gray-400 text-sm text-center py-8">
                            아직 등록된 정보가 없습니다.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
