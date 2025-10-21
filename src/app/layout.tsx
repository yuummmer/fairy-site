export const metadata = {
  title: "FAIRy by Datadabra",
  description: "Fix your data before you submit—local, open, fast." 
};

import AnalyticsBindings from "../components/AnalyticsBindings";

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
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">FAIRy</a>
            <div className="flex gap-6 text-sm items-center">
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-zinc-600 transition-colors">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/geo-precheck" className="block px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">GEO Pre-check</a>
                    <a href="/zenodo-precheck" className="block px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">Zenodo Pre-check</a>
                    <a href="/export-pack" className="block px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">Export Pack</a>
                    <a href="/platform" className="block px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">Platform</a>
                    <a href="/security" className="block px-4 py-2 text-sm hover:bg-zinc-50 transition-colors">Security</a>
                  </div>
                </div>
              </div>
              <a href="/resources">Resources</a>
              <a href="/early-access" className="px-3 py-1.5 rounded-full bg-black text-white hover:bg-zinc-900 transition-colors">Early access</a>
            </div>
          </nav>
        </header>

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

          <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} Datadabra. FAIRy is a Datadabra product.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Security</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}