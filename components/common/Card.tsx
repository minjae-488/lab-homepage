import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    glass?: boolean;
    gradient?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', hover = false, glass = false, gradient = false, children, ...props }, ref) => {
        const baseClasses = 'rounded-lg p-6';
        const hoverClasses = hover ? 'hover-lift cursor-pointer' : '';
        const glassClasses = glass ? 'glass' : 'bg-white shadow-soft';
        const gradientClasses = gradient ? 'bg-gradient-primary' : '';

        return (
            <div
                ref={ref}
                className={`${baseClasses} ${hoverClasses} ${glassClasses} ${gradientClasses} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export interface IconCardProps extends CardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor?: string;
    iconBgColor?: string;
    link?: {
        href: string;
        text: string;
    };
}

const IconCard: React.FC<IconCardProps> = ({
    icon: Icon,
    title,
    description,
    iconColor = 'text-primary-700',
    iconBgColor = 'bg-primary-100',
    link,
    hover = true,
    ...props
}) => {
    return (
        <Card hover={hover} {...props}>
            <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {link && (
                <a href={link.href} className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center group">
                    {link.text}
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
            )}
        </Card>
    );
};

export { Card, IconCard };
export default Card;
