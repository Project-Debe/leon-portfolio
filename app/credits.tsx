"use client";

import { useEffect } from "react";

export default function Credits({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      const args = [
        "%c Developed by Sam Kasyoki \u00A9 https://github.com/sam10105 \n",
        "background: #0000; padding:10px 0;color: #ffffff;",
      ];

      window.console.log.apply(console, args);
    } else if (window.console) {
      window.console.log(
        "Developed by Sam Kasyoki - https://github.com/sam10105",
      );
    }
  }, []);

  return <>{children}</>;
}
