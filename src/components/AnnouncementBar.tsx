"use client";

import { useEffect, useState } from "react";

const ANNOUNCEMENT_ID = "2025-pilot-slots";
const STORAGE_KEY = `announcement:dismissed:${ANNOUNCEMENT_ID}`;

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "true";
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-purple-100 border-b border-purple-200">
      <div className="mx-auto max-w-6xl px-4 py-2 text-sm flex items-center justify-between gap-3">
        <div className="text-purple-900">
          <span className="font-medium">⚠ Limited pilot slots</span>
          {" "}
          We're accepting a small number of pilot engagements this quarter to refine the workflow.{" "}
          <a href="/preflight-mapping" className="underline font-medium hover:text-purple-700">Apply →</a>
        </div>
        <button
          aria-label="Dismiss announcement"
          className="text-purple-700 hover:text-purple-900"
          onClick={dismiss}
        >
          ×
        </button>
      </div>
    </div>
  );
}


