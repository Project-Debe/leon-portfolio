"use client";

import { useState, useEffect, ReactNode } from "react";

interface ImagePreloaderProps {
    imageUrls: string[];
    children: ReactNode;
}

export default function ImagePreloader({ imageUrls, children }: ImagePreloaderProps) {
    const [loadedCount, setLoadedCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isFading, setIsFading] = useState(false);

    const totalImages = imageUrls.length;
    const progress = totalImages > 0 ? (loadedCount / totalImages) * 100 : 100;

    useEffect(() => {
        if (totalImages === 0) {
            setIsComplete(true);
            return;
        }

        let loadedImages = 0;

        const preloadImage = (url: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loadedImages++;
                    setLoadedCount(loadedImages);
                    resolve();
                };
                img.onerror = () => {
                    // Still count errored images to not block loading
                    loadedImages++;
                    setLoadedCount(loadedImages);
                    resolve();
                };
                img.src = url;
            });
        };

        // Load all images in parallel
        Promise.all(imageUrls.map(preloadImage)).then(() => {
            // Small delay before fading out for smoother UX
            setTimeout(() => {
                setIsFading(true);
                // Wait for fade animation to complete
                setTimeout(() => {
                    setIsComplete(true);
                }, 500);
            }, 200);
        });
    }, [imageUrls, totalImages]);

    if (isComplete) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Loading overlay */}
            <div
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0C0C] transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {/* Pulsing dot */}
                <div className="h-4 w-4 animate-pulse rounded-full bg-[#F45500] mb-8" />

                {/* Progress bar container */}
                <div className="w-64 h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                    {/* Progress bar fill */}
                    <div
                        className="h-full bg-[#F45500] transition-all duration-300 ease-out rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage text */}
                <p className="mt-4 text-sm text-[#9D9D9D] tracking-tight font-mono">
                    {Math.round(progress)}%
                </p>
            </div>

            {/* Hidden content (pre-rendered but not visible) */}
            <div className="invisible">
                {children}
            </div>
        </>
    );
}
