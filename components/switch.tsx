"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={cn(
        "amplify-lights-toggle",
        isOn ? "amplify-lights-toggle-dark" : "amplify-lights-toggle-light",
      )}
    >
      <button
        onClick={() => setIsOn(!isOn)}
        className="amplify-lights-toggle-switch"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
      <div className="amplify-lights-toggle-labels">
        <img
          alt="Toggle light"
          decoding="async"
          height="1"
          loading="lazy"
          src="/q-17c3c021.png"
          width="1"
          className="lazy-image lazy-image-loaded"
        />
        <img
          alt="Toggle dark"
          decoding="async"
          height="1"
          loading="lazy"
          src="/q-40bd62fe.png"
          width="1"
          className="lazy-image lazy-image-loaded"
        />
      </div>
    </div>
  );
}
