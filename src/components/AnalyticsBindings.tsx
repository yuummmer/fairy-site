"use client";

import { useEffect } from "react";
import { track } from "../lib/analytics";

export default function AnalyticsBindings() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[data-analytics-event]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const event = anchor.getAttribute("data-analytics-event");
      if (event) {
        track(event as any);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}

