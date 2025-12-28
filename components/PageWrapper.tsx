"use client";

import { ReactNode } from "react";
import ImagePreloader from "./ImagePreloader";

interface PageWrapperProps {
    children: ReactNode;
    imageUrls: string[];
}

export default function PageWrapper({ children, imageUrls }: PageWrapperProps) {
    return (
        <ImagePreloader imageUrls={imageUrls}>
            {children}
        </ImagePreloader>
    );
}
