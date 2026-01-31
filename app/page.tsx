import Link from 'next/link';
import { BookOpen, Users, FlaskConical, Award, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/common';
import { IconCard } from '@/components/common/Card';
import { Section, SectionHeader } from '@/components/common';

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section with enhanced design */}
            <section className="relative bg-gradient-primary py-24 md:py-32 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300/30 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300/30 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-soft mb-6">
                            <Sparkles className="h-4 w-4 text-primary-600" />
                            <span className="text-sm font-medium text-gray-700">Leading AI & NLP Research</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Advancing AI &{' '}
                            <span className="text-gradient">NLP Research</span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Pioneering innovative solutions in artificial intelligence and natural language processing to solve real-world challenges
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/research">
                                <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                                    Explore Research
                                </Button>
                            </Link>
                            <Link href="/publications">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    View Publications
                                </Button>
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary-600" />
                                <span>Award-winning Research</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-secondary-600" />
                                <span>200+ Citations</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-accent-600" />
                                <span>10+ Researchers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section with modern design */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '14+', label: 'Publications', delay: '0s' },
                            { value: '10', label: 'Team Members', delay: '0.1s' },
                            { value: '5+', label: 'Research Projects', delay: '0.2s' },
                            { value: '200+', label: 'Citations', delay: '0.3s' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center animate-fade-in-up"
                                style={{ animationDelay: stat.delay }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section with IconCard */}
            <Section variant="default">
                <SectionHeader
                    title="Our Focus Areas"
                    subtitle="Explore our cutting-edge research and academic contributions"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <IconCard
                        icon={FlaskConical}
                        title="Research"
                        description="Cutting-edge projects in AI, NLP, and machine learning with real-world applications"
                        iconColor="text-primary-700"
                        iconBgColor="bg-primary-100"
                        link={{ href: '/research', text: 'Learn more' }}
                    />

                    <IconCard
                        icon={BookOpen}
                        title="Publications"
                        description="High-impact papers in top-tier conferences and journals"
                        iconColor="text-secondary-700"
                        iconBgColor="bg-secondary-100"
                        link={{ href: '/publications', text: 'Browse papers' }}
                    />

                    <IconCard
                        icon={Users}
                        title="Team"
                        description="Talented researchers and students passionate about advancing AI"
                        iconColor="text-accent-700"
                        iconBgColor="bg-accent-100"
                        link={{ href: '/members', text: 'Meet the team' }}
                    />

                    <IconCard
                        icon={Award}
                        title="Excellence"
                        description="Award-winning research recognized by the academic community"
                        iconColor="text-primary-700"
                        iconBgColor="bg-primary-100"
                        link={{ href: '/about', text: 'Our achievements' }}
                    />
                </div>
            </Section>

            {/* Research Highlights Section */}
            <Section variant="gradient">
                <SectionHeader
                    title="Research Highlights"
                    subtitle="Discover our latest breakthroughs and innovations"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'AI-driven Healthcare',
                            description: 'Developing diagnostic systems using deep learning and medical imaging',
                            tag: 'Ongoing',
                        },
                        {
                            title: 'Cross-lingual NLP',
                            description: 'Enabling language processing across multiple languages and low-resource scenarios',
                            tag: 'Funded',
                        },
                        {
                            title: 'Knowledge Graphs',
                            description: 'Building large-scale knowledge graphs with reasoning capabilities',
                            tag: 'Collaborative',
                        },
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl p-6 hover-lift"
                        >
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full mb-4">
                                {project.tag}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/research">
                        <Button variant="primary" size="lg">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* CTA Section with enhanced design */}
            <section className="relative py-20 bg-gradient-accent overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Interested in Joining Our Lab?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                            We're always looking for passionate students and researchers to join our team and contribute to cutting-edge AI research
                        </p>
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:bg-white hover:text-primary-700"
                            >
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
