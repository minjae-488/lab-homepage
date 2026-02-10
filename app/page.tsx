import Link from 'next/link';
import { ChevronRight, Calendar, User, FileText } from 'lucide-react';
import { safeFetch } from '@/lib/sanity/client';
import { latestNewsQuery } from '@/lib/sanity/queries';
import { NewsItem } from '@/types/sanity';



export default async function Home() {
    const latestNews: NewsItem[] = await safeFetch(latestNewsQuery);

    const featuredResearch = [
        {
            title: 'AI-driven Healthcare Diagnostic System',
            description: 'Developing diagnostic support systems using deep learning and medical imaging for improved clinical decision-making.',
            type: 'Ongoing Project',
        },
        {
            title: 'Cross-lingual Natural Language Processing',
            description: 'Advancing NLP capabilities across multiple languages with focus on low-resource scenarios.',
            type: 'Funded Research',
        },
        {
            title: 'Knowledge Graph Construction and Reasoning',
            description: 'Building large-scale knowledge graphs with advanced reasoning capabilities for complex queries.',
            type: 'Collaborative Project',
        },
    ];

    const categoryColors: Record<string, string> = {
        Award: 'bg-yellow-100 text-yellow-800',
        Publication: 'bg-blue-100 text-blue-800',
        News: 'bg-green-100 text-green-800',
        Announcement: 'bg-purple-100 text-purple-800',
        Event: 'bg-pink-100 text-pink-800',
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Clean and Academic */}
            <section className="bg-academic-gradient border-b border-gray-200">
                <div className="section-container py-16 md:py-24">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            AI & NLP Research Laboratory
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                            Advancing artificial intelligence and natural language processing through innovative research and collaboration
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/research" className="btn-primary">
                                View Research
                            </Link>
                            <Link href="/publications" className="btn-secondary">
                                Publications
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-primary-600 text-white py-8">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-1">14+</div>
                            <div className="text-sm md:text-base text-primary-100">Publications</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-1">10</div>
                            <div className="text-sm md:text-base text-primary-100">Researchers</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
                            <div className="text-sm md:text-base text-primary-100">Active Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
                            <div className="text-sm md:text-base text-primary-100">Citations</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <section className="py-12 md:py-16">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Column */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Latest News */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest News</h2>
                                    <Link href="/news" className="text-primary-600 hover:text-primary-700 font-medium link-arrow">
                                        View all
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {latestNews.length > 0 ? (
                                        latestNews.map((news) => (
                                            <article key={news._id} className="news-item">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                                    <span className="inline-flex items-center text-sm text-gray-500">
                                                        <Calendar className="h-4 w-4 mr-1" />
                                                        {new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </span>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[news.category] || 'bg-gray-100 text-gray-800'}`}>
                                                        {news.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                                                    {news.link ? (
                                                        <Link href={news.link}>{news.title}</Link>
                                                    ) : (
                                                        <span>{news.title}</span>
                                                    )}
                                                </h3>
                                            </article>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No recent news available.</p>
                                    )}
                                </div>
                            </div>

                            {/* Featured Research */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Research</h2>
                                    <Link href="/research" className="text-primary-600 hover:text-primary-700 font-medium link-arrow">
                                        All projects
                                    </Link>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {featuredResearch.map((project, index) => (
                                        <div key={index} className="academic-card">
                                            <div className="mb-3">
                                                <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-accent-100 text-accent-800">
                                                    {project.type}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                                            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                            <Link href="/research" className="text-primary-600 hover:text-primary-700 text-sm font-medium link-arrow">
                                                Learn more
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* About Lab */}
                            <div className="academic-card">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">About the Lab</h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    We are a leading research group in artificial intelligence and natural language processing at Korea University, dedicated to advancing the state-of-the-art through innovative research and collaboration.
                                </p>
                                <Link href="/about" className="text-primary-600 hover:text-primary-700 text-sm font-medium link-arrow">
                                    Learn more about us
                                </Link>
                            </div>

                            {/* Quick Links */}
                            <div className="academic-card">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/members" className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
                                            <User className="h-4 w-4 mr-2" />
                                            Our Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/publications" className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
                                            <FileText className="h-4 w-4 mr-2" />
                                            Publications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="flex items-center text-sm text-gray-700 hover:text-primary-600 transition-colors">
                                            <ChevronRight className="h-4 w-4 mr-2" />
                                            Join Our Lab
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Recent Publication */}
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Recent Publication</h3>
                                <div className="mb-3">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                        Deep Learning Approaches for Natural Language Understanding in Healthcare
                                    </h4>
                                    <p className="text-xs text-gray-600">
                                        ACL 2025 | Kim, Lee, Park
                                    </p>
                                </div>
                                <Link href="/publications" className="text-primary-600 hover:text-primary-700 text-sm font-medium link-arrow">
                                    View publication
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="section-container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Research Group</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        We are looking for passionate graduate students and researchers interested in AI and NLP
                    </p>
                    <Link href="/contact" className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
