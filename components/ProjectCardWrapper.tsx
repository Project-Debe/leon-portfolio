"use client";

import { useState } from "react";
import { PortableTextBlock } from "@portabletext/types";
import CursorTooltip from "./CursorTooltip";

interface ProjectCardWrapperProps {
    children: React.ReactNode;
    context?: PortableTextBlock[];
}

export default function ProjectCardWrapper({
    children,
    context,
}: ProjectCardWrapperProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <>
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="contents"
            >
                {children}
            </div>
            <CursorTooltip content={context || null} isVisible={isHovering} />
        </>
    );
}
