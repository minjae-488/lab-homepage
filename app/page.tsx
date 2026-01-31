import Link from 'next/link';
import { BookOpen, Users, FlaskConical, Award } from 'lucide-react';

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Advancing AI & NLP Research
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 mb-8">
                            Pioneering innovative solutions in artificial intelligence and natural language processing
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/research"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 transition-colors"
                            >
                                Explore Research
                            </Link>
                            <Link
                                href="/publications"
                                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-700 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
                            >
                                View Publications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-700 mb-2">14+</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Publications</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-700 mb-2">10</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Team Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-700 mb-2">5+</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Research Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary-700 mb-2">200+</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wide">Citations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Focus Areas
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our cutting-edge research and academic contributions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <FlaskConical className="h-6 w-6 text-primary-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Research</h3>
                            <p className="text-gray-600 mb-4">
                                Cutting-edge projects in AI, NLP, and machine learning with real-world applications
                            </p>
                            <Link href="/research" className="text-primary-700 hover:text-primary-800 font-medium">
                                Learn more →
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-secondary-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Publications</h3>
                            <p className="text-gray-600 mb-4">
                                High-impact papers in top-tier conferences and journals
                            </p>
                            <Link href="/publications" className="text-primary-700 hover:text-primary-800 font-medium">
                                Browse papers →
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Team</h3>
                            <p className="text-gray-600 mb-4">
                                Talented researchers and students passionate about advancing AI
                            </p>
                            <Link href="/members" className="text-primary-700 hover:text-primary-800 font-medium">
                                Meet the team →
                            </Link>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-secondary-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                            <p className="text-gray-600 mb-4">
                                Award-winning research recognized by the academic community
                            </p>
                            <Link href="/about" className="text-primary-700 hover:text-primary-800 font-medium">
                                Our achievements →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-700">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Interested in Joining Our Lab?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for passionate students and researchers to join our team
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-700 transition-colors"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
