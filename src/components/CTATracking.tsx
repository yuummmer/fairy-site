"use client";

import { track, type AnalyticsEventName } from '../lib/analytics';

// Simple CTA tracking component
export function trackCTA(action: string, label: string, value?: string) {
  // Map old action/label format to new event names
  const eventMap: Record<string, AnalyticsEventName> = {
    'hero_cta_click_request_pilot': 'hero_request_pilot_clicked',
    'hero_cta_click_talk_to_us': 'hero_talk_to_us_clicked',
  };
  
  const eventName = eventMap[`${action}_${label}`] as AnalyticsEventName | undefined;
  
  if (eventName) {
    track(eventName);
  } else {
    // Fallback for other tracking
    console.log('CTA Event:', {
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }
}

// Hook for tracking CTA clicks
export function useCTATracking() {
  const trackClick = (action: string, label: string, value?: string) => {
    trackCTA(action, label, value);
  };
  
  return { trackClick };
}

// Higher-order component for automatic CTA tracking
export function withCTATracking<TProps extends { onClick?: (e: React.MouseEvent) => void }>(
  Component: React.ComponentType<TProps>,
  action: string,
  label: string
): React.ComponentType<TProps> {
  return function Wrapped(props: TProps) {
    const handleClick = (e: React.MouseEvent) => {
      trackCTA(action, label);
      props.onClick?.(e);
    };
    return <Component {...props} onClick={handleClick} />;
  };
}
