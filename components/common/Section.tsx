import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'default' | 'gradient' | 'dark';
    container?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    variant = 'default',
    container = true,
    className = '',
    ...props
}) => {
    const variantClasses = {
        default: 'bg-white',
        gradient: 'bg-gradient-primary',
        dark: 'bg-gray-900 text-white',
    };

    return (
        <section className={`py-16 md:py-20 ${variantClasses[variant]} ${className}`} {...props}>
            {container ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
            ) : (
                children
            )}
        </section>
    );
};

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    centered = true,
    className = '',
}) => {
    return (
        <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export { Section, SectionHeader };
export default Section;
