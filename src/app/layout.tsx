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
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}