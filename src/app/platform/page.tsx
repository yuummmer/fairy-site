export const metadata = {
  title: "Platform Architecture - FAIRy by Datadabra",
  description: "Local-first data validation engine with institution control plane. Learn how FAIRy's architecture ensures privacy and compliance."
};

export default function PlatformPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Platform Architecture
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Local-first validation engine with institution control plane. 
          Your data stays on your device while maintaining enterprise compliance.
        </p>
      </div>

      {/* Architecture Overview */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Local-First Engine</h2>
            <div className="space-y-4 text-zinc-600">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Client Engine:</strong> Runs entirely on your device
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Rulepacks:</strong> Versioned, signed validation rules
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Evidence Generation:</strong> Local attestation and reporting
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 p-8 rounded-lg">
            <div className="text-center text-zinc-500">
              <div className="w-16 h-16 bg-zinc-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                📊
              </div>
              <p className="text-sm">Architecture diagram placeholder</p>
              <p className="text-xs mt-2">Client engine, Signed Registries, Campus control plane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Platform Components</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🔧
            </div>
            <h3 className="font-semibold mb-2">Validation Engine</h3>
            <p className="text-sm text-zinc-600">
              Deterministic validation with AI-assisted text processing for metadata blocks only.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📦
            </div>
            <h3 className="font-semibold mb-2">Rulepacks</h3>
            <p className="text-sm text-zinc-600">
              Community, verified, and certified rule levels with version control and signing.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🏢
            </div>
            <h3 className="font-semibold mb-2">Campus Control</h3>
            <p className="text-sm text-zinc-600">
              Institution-wide policy management, bulk campaigns, and compliance reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Data Flow */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Data Flow</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                📁
              </div>
              <p className="font-medium">Drop Files</p>
              <p className="text-sm text-zinc-600">Local dataset</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                🔍
              </div>
              <p className="font-medium">Scan & Fix</p>
              <p className="text-sm text-zinc-600">On-device processing</p>
            </div>
            <div className="text-zinc-400">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                📤
              </div>
              <p className="font-medium">Export</p>
              <p className="text-sm text-zinc-600">Ready for submission</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to deploy FAIRy?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Learn how FAIRy's local-first architecture can integrate with your institution's existing infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/early-access" 
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
          >
            Request Pilot
          </a>
          <a 
            href="mailto:hello@datadabra.com" 
            className="px-6 py-3 border border-zinc-600 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Talk to Sales
          </a>
        </div>
      </section>
    </main>
  );
}
