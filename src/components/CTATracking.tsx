"use client";

// Simple CTA tracking component
export function trackCTA(action: string, label: string, value?: string) {
  // In a real implementation, this would send data to your analytics service
  // For now, we'll just log to console and could send to Google Analytics, Mixpanel, etc.
  
  console.log('CTA Event:', {
    action,
    label,
    value,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent
  });
  
  // Example Google Analytics 4 implementation:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', action, {
  //     event_category: 'CTA',
  //     event_label: label,
  //     value: value
  //   });
  // }
  
  // Example Mixpanel implementation:
  // if (typeof mixpanel !== 'undefined') {
  //   mixpanel.track('CTA Clicked', {
  //     action,
  //     label,
  //     value,
  //     page: window.location.pathname
  //   });
  // }
}

// Hook for tracking CTA clicks
export function useCTATracking() {
  const trackClick = (action: string, label: string, value?: string) => {
    trackCTA(action, label, value);
  };
  
  return { trackClick };
}

// Higher-order component for automatic CTA tracking
export function withCTATracking<T extends React.ComponentType<any>>(
  Component: T,
  action: string,
  label: string
): T {
  return ((props: any) => {
    const handleClick = (e: React.MouseEvent) => {
      trackCTA(action, label);
      if (props.onClick) {
        props.onClick(e);
      }
    };
    
    return <Component {...props} onClick={handleClick} />;
  }) as T;
}
