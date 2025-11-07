import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIOFAIR Open Mic 2025 | FAIRy Talks',
  description: 'An overview of FAIRy\'s approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap, specifically contributing to the Stocktaking & Gap Analysis initiative. Presented October 30, 2025.',
  openGraph: {
    title: 'BIOFAIR Open Mic 2025 | FAIRy Talks',
    description: 'An overview of FAIRy\'s approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap.',
    type: 'website',
    images: [
      {
        url: '/talks/biofair-open-mic-2025/slide-1.png',
        width: 1200,
        height: 630,
        alt: 'BIOFAIR Open Mic 2025 presentation preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIOFAIR Open Mic 2025 | FAIRy Talks',
    description: 'An overview of FAIRy\'s approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap.',
    images: ['/talks/biofair-open-mic-2025/slide-1.png'],
  },
};

export default function BiofairOpenMic2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

