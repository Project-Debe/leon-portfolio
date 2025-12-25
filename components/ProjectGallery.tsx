"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

interface ProjectGalleryProps {
    images?: any[];
    mainImage: any;
    title: string;
}

export default function ProjectGallery({ images, mainImage, title }: ProjectGalleryProps) {
    const hasMultipleImages = images && images.length > 1;

    if (hasMultipleImages) {
        return (
            <div className="w-full flex items-center overflow-hidden">
                <Marquee speed={100} gradient={false} className="overflow-hidden py-4">
                    {images!.map((image, index) => (
                        <img
                            key={image._key || index}
                            src={urlFor(image).url()}
                            alt={`${title} - Image ${index + 1}`}
                            className="h-[40vh] sm:h-[60vh] w-auto mx-4 object-contain"
                        />
                    ))}
                </Marquee>
            </div>
        );
    }

    if (mainImage) {
        return (
            <div className="aspect-h-9 aspect-w-16 relative w-full">
                <Image
                    src={urlFor(mainImage).url()}
                    alt={title}
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>
        );
    }

    return null;
}
