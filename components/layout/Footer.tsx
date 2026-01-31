import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: 'https://github.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    ];

    const quickLinks = [
        { name: 'About', href: '/about' },
        { name: 'Research', href: '/research' },
        { name: 'Members', href: '/members' },
        { name: 'Publications', href: '/publications' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <footer className="bg-gray-950 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-bold">AI</span>
                            </div>
                            AI & NLP Research Lab
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
                            Advancing the frontiers of artificial intelligence and natural language processing through innovative research and collaboration.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-smooth group"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-gray-500" />
                                <span className="text-gray-400">
                                    Science Building, Room 501<br />
                                    145 Anam-ro, Seongbuk-gu<br />
                                    Seoul 02841, South Korea
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 text-gray-500" />
                                <a
                                    href="tel:+82-2-1234-5678"
                                    className="hover:text-white transition-colors"
                                >
                                    +82-2-1234-5678
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0 text-gray-500" />
                                <a
                                    href="mailto:contact@ainlp-lab.ac.kr"
                                    className="hover:text-white transition-colors"
                                >
                                    contact@ainlp-lab.ac.kr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {currentYear} AI & NLP Research Lab, Korea University. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-500">
                            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-gray-300 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
