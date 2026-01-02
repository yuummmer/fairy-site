import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAIRy: Reproducible Datasets by Default — DSLC Project Club | FAIRy Talks',
  description: 'Community talk + live demo (recorded). Learn about FAIRy\'s approach to reproducible datasets by default, including the problem it solves, the approach, output/report bundles, rulepacks, and who it\'s for. Presented December 13, 2025.',
  openGraph: {
    title: 'FAIRy: Reproducible Datasets by Default — DSLC Project Club | FAIRy Talks',
    description: 'Community talk + live demo (recorded). Learn about FAIRy\'s approach to reproducible datasets by default.',
    type: 'website',
    url: 'https://www.youtube.com/watch?v=nflHD662Jak',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAIRy: Reproducible Datasets by Default — DSLC Project Club | FAIRy Talks',
    description: 'Community talk + live demo (recorded). Learn about FAIRy\'s approach to reproducible datasets by default.',
  },
};

export default function DSLCProjectDecember2025Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

