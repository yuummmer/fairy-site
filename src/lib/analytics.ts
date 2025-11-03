"use client";

export type AnalyticsEventName =
  | "hero_request_pilot_clicked"
  | "hero_talk_to_us_clicked"
  | "tile_clicked"
  | "community_download_clicked"
  | "request_pilot"
  | "download_solo"
  | "sample_zip"
  | "open_evidence"
  | "talk_to_sales"
  | "view_export_pack";

export function track(eventName: AnalyticsEventName, props?: Record<string, unknown>) {
  try {
    const plausible = (window as unknown as { plausible?: (name: string, data?: { props?: Record<string, unknown> }) => void }).plausible;
    plausible?.(eventName, { props });
  } catch {
    // no-op in SSR or if plausible not loaded
  }
}

