"use client";

import { useEffect, useState } from "react";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface CursorTooltipProps {
    content: PortableTextBlock[] | null;
    isVisible: boolean;
}

const components: Partial<PortableTextReactComponents> = {
    block: {
        normal: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-4 mb-1">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-0.5">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
    },
};

export default function CursorTooltip({ content, isVisible }: CursorTooltipProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        if (isVisible) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isVisible]);

    if (!isVisible || !content || content.length === 0) return null;

    return (
        <div
            className="fixed z-50 pointer-events-none px-4 py-3 max-w-xs text-sm font-medium"
            style={{
                left: position.x + 16,
                top: position.y + 16,
                backgroundColor: "#0C0C0C",
                borderRadius: "12px",
                color: "white",
                textTransform: "none",
            }}
        >
            <PortableText value={content} components={components} />
        </div>
    );
}
