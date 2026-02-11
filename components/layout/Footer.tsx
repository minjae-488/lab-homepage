'use client';

import Link from 'next/link';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { SiteSettings } from '@/types/sanity';

interface FooterProps {
    settings?: SiteSettings | null;
}

export default function Footer({ settings }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const {
        title = 'AI & NLP Research Lab',
        institution = 'Korea University',
        description = 'Advancing the frontiers of artificial intelligence and natural language processing through innovative research and collaboration.',
        email = 'contact@ainlp-lab.ac.kr',
        address = 'Science Building, Room 501\nSeoul 02841, South Korea',
        socialLinks,
        footerText
    } = settings || {};

    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            <div className="section-container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Lab Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-primary-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-lg">AI</span>
                            </div>
                            <div>
                                <div className="text-white font-semibold">{title}</div>
                                <div className="text-sm text-gray-400">{institution}</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 max-w-md mb-4">
                            {description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigate</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
                            <li><Link href="/members" className="hover:text-white transition-colors">Members</Link></li>
                            <li><Link href="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            {address && (
                                <li className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-400 whitespace-pre-line">
                                        {address}
                                    </span>
                                </li>
                            )}
                            {email && (
                                <li className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 flex-shrink-0" />
                                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                                        {email}
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            {footerText || `© ${currentYear} ${title}, ${institution}. All rights reserved.`}
                        </p>
                        <div className="flex gap-4">
                            {socialLinks?.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Github className="h-5 w-5" />
                                </a>
                            )}
                            {socialLinks?.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            )}
                            {socialLinks?.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
