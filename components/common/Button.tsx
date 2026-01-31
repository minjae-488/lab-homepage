import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-lg font-medium transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500 shadow-sm hover:shadow-md',
                secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-md',
                outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
                ghost: 'text-primary-700 hover:bg-primary-50 focus:ring-primary-500',
                gradient: 'bg-gradient-accent text-white hover:shadow-glow focus:ring-primary-500',
                link: 'text-primary-700 hover:text-primary-800 underline-offset-4 hover:underline',
            },
            size: {
                sm: 'text-sm px-4 py-2',
                md: 'text-base px-6 py-3',
                lg: 'text-lg px-8 py-4',
                xl: 'text-xl px-10 py-5',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export default Button;
