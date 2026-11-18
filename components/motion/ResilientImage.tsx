'use client';

import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackLabel?: string;
    loading?: 'lazy' | 'eager';
}

export function ResilientImage({
                                   src,
                                   alt,
                                   className = '',
                                   fallbackLabel,
                                   loading = 'lazy',
                               }: ResilientImageProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError || !src) {
        return (
            <div
                className={`flex flex-col items-center justify-center bg-[#101014] border border-[#2A2A32] text-[#B8B8BE] p-6 text-center ${className}`}
                role="img"
                aria-label={alt}
            >
                <Layers className="w-7 h-7 text-[#6D28D9] mb-2.5" aria-hidden="true" />
                <span className="text-xs font-medium text-[#EDEDEF]">{fallbackLabel || alt}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={className}
        />
    );
}
