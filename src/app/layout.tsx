export const metadata = {
  title: "FAIRy — Pre-flight validation & packaging for research datasets",
  description: "Validate, fix, and package datasets before handoff. FAIRy helps labs, cores, and institutions prevent bounced submissions with rulepacks, reports, and attestations."
};

import AnalyticsBindings from "../components/AnalyticsBindings";
import AnnouncementBar from "../components/AnnouncementBar";
import Navigation from "../components/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        {/* Privacy-friendly analytics by Plausible */}
        <script async src="https://plausible.io/js/pa-U4PaQBcPTFXvyQcDQHKSj.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();",
          }}
        />
        <AnalyticsBindings />
        <Navigation />

        <AnnouncementBar />

        <main className="mx-auto max-w-6xl px-4">{children}</main>

        {/* Footer (company-forward) */}
        <footer className="mx-auto max-w-6xl px-4 py-16 text-sm text-zinc-600">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:col-span-2">
              <div className="font-semibold text-zinc-900">Datadabra</div>
              <p className="mt-2 max-w-md">
                Building local-first tools that make research data FAIR—starting with <a href="/" className="underline text-zinc-900">FAIRy</a>.
              </p>
              <p className="mt-3 text-xs">Made in the Bay Area.</p>
            </div>
          </div>

          <div className="border-t mt-10 pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <span>© {new Date().getFullYear()} Datadabra. FAIRy is a Datadabra product.</span>
              <div className="flex gap-4">
                <a href="/biofair" className="hover:underline">BIOFAIR pilot</a>
                <a href="#" className="hover:underline">Privacy</a>
                <a href="#" className="hover:underline">Terms</a>
              </div>
            </div>
            
            {/* Credibility Footer */}
            <div className="border-t pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
              <div className="flex flex-wrap items-center gap-4">
                <span>Open-source core</span>
                <span>•</span>
                <span>AGPL-3.0-only</span>
                <span>•</span>
                <a href="/docs" className="hover:underline">Docs</a>
                <span>•</span>
                <a href="/institution-kit.pdf" className="hover:underline">Security/SBOM</a>
                <span>•</span>
                <a href="mailto:hello@datadabra.com" className="hover:underline">Contact</a>
              </div>
              <div className="flex items-center gap-2">
                <a href="/about#changelog" className="hover:underline">v0.1</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}