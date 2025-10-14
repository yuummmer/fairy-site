"use client";

import React from "react";
import { track, type AnalyticsEventName } from "../lib/analytics";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEventName;
  eventProps?: Record<string, unknown>;
};

export default function TrackedLink({ event, eventProps, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        try { track(event, eventProps); } catch {}
        onClick?.(e);
      }}
    />
  );
}

