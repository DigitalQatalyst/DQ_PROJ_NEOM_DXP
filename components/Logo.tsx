import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className, variant = 'light' }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="relative h-12 w-auto flex-shrink-0">
                <img
                    src="https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1"
                    alt="NEOM Logo"
                    className={cn(
                        "h-full w-auto object-contain",
                        variant === 'light' ? "" : "brightness-0 invert"
                    )}
                />
            </div>
        </div>
    );
};

export default Logo;
