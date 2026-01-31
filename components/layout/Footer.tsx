import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            AI & NLP Research Lab
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Advancing the frontiers of artificial intelligence and natural language processing through innovative research and collaboration.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="hover:text-white transition-colors">
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href="/members" className="hover:text-white transition-colors">
                                    Members
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications" className="hover:text-white transition-colors">
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>
                                    Science Building, Room 501<br />
                                    145 Anam-ro, Seongbuk-gu<br />
                                    Seoul 02841, South Korea
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href="tel:+82-2-1234-5678" className="hover:text-white transition-colors">
                                    +82-2-1234-5678
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                                <a href="mailto:contact@ainlp-lab.ac.kr" className="hover:text-white transition-colors">
                                    contact@ainlp-lab.ac.kr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                    <p>
                        © {currentYear} AI & NLP Research Lab, Korea University. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
