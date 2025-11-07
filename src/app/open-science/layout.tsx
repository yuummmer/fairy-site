import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Science — FAIRy',
  description: 'FAIRy is a local-first validator & packager for research datasets. Attestations, pass/warn/fail reports, and repository-specific rulepacks—built for FAIR, privacy, and reproducibility.',
};

export default function OpenScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

