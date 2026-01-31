import Link from 'next/link';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

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
                                <div className="text-white font-semibold">AI & NLP Research Lab</div>
                                <div className="text-sm text-gray-400">Korea University</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 max-w-md mb-4">
                            Advancing the frontiers of artificial intelligence and natural language processing through innovative research and collaboration.
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
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400">
                                    Science Building, Room 501<br />
                                    Seoul 02841, South Korea
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <a href="mailto:contact@ainlp-lab.ac.kr" className="hover:text-white transition-colors">
                                    contact@ainlp-lab.ac.kr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {currentYear} AI & NLP Research Lab, Korea University. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
