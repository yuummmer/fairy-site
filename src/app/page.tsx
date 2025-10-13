export const metadata = {
  title: "FAIRy by Datadabra - Fix your data before you submit",
  description: "Local-first dataset validation and export tool. Reduce bounced submissions, normalize data, and generate compliance evidence—all on your device."
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-zinc-900 mb-6">
          Fix your data before you submit
        </h1>
        <p className="text-xl text-zinc-600 mb-8 max-w-3xl mx-auto">
          Local, open, and fast. FAIRy validates, fixes, and packages your research datasets 
          for seamless repository submissions—all on your device.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href="/early-access" 
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Request Pilot
          </a>
          <a 
            href="#sample-export" 
            className="px-8 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            See Sample Export Pack
          </a>
        </div>
        <p className="text-sm text-zinc-500">
          Runs on your computer. Nothing is uploaded.
        </p>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-zinc-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Trusted by Research Institutions</h2>
          <p className="text-zinc-600">Reduce bounced submissions and last-minute fixes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
            <p className="text-sm text-zinc-600">Reduction in submission failures</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">2x</div>
            <p className="text-sm text-zinc-600">Faster time to repository approval</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-sm text-zinc-600">Local processing, zero uploads</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">How it works</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Simple three-step process: Drop → Scan → Fix → Export
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📁
            </div>
            <h3 className="font-semibold mb-2">1. Drop Files</h3>
            <p className="text-sm text-zinc-600">
              Upload your dataset files. FAIRy supports all common research data formats.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🔍
            </div>
            <h3 className="font-semibold mb-2">2. Scan & Fix</h3>
            <p className="text-sm text-zinc-600">
              Automatic validation and fixing of dates, units, IDs, and metadata standards.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📤
            </div>
            <h3 className="font-semibold mb-2">3. Export</h3>
            <p className="text-sm text-zinc-600">
              Generate a deposit-ready ZIP with metadata, checksums, and compliance evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Product Pillars */}
      <section className="py-20 bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">What you get</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Complete validation, fixing, and packaging solution for research data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              🔧
            </div>
            <h3 className="font-semibold mb-2">Fix-Queue</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Preview fixes before applying. Undo changes with one click. 
              Maintain full control over your data transformations.
            </p>
            <a href="/platform" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Learn more →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
              ✅
            </div>
            <h3 className="font-semibold mb-2">Pre-check (Dry-Run)</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Repository-specific validation for GEO, Zenodo, and more. 
              See exactly what needs fixing before submission.
            </p>
            <a href="/geo-precheck" className="text-sm text-green-600 hover:text-green-700 font-medium">
              GEO Pre-check →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
              📦
            </div>
            <h3 className="font-semibold mb-2">Export Pack</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Complete ZIP with metadata.json, manifest.csv (SHA-256), 
              README, and checksums—ready for repository submission.
            </p>
            <a href="/export-pack" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              See format →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
              📄
            </div>
            <h3 className="font-semibold mb-2">Submission Summary</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Evidence PDF for Solo users, signed JSON for Campus. 
              Complete audit trail and compliance documentation.
            </p>
            <a href="#sample-summary" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
              Sample PDF →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
              📋
            </div>
            <h3 className="font-semibold mb-2">Policy & Rulepacks</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Versioned, signed validation rules. Community, verified, 
              and certified levels for different compliance needs.
            </p>
            <a href="/resources" className="text-sm text-red-600 hover:text-red-700 font-medium">
              Browse rules →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
              🏢
            </div>
            <h3 className="font-semibold mb-2">Bulk Campaigns</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Campus/Core tier: Institution-wide policy rollouts, 
              bulk processing, and exception management.
            </p>
            <a href="/platform" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Enterprise features →
            </a>
          </div>
        </div>
      </section>

      {/* Repository Adapters */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Repository-specific validation</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Pre-configured checklists for major research repositories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                🧬
              </div>
              <div>
                <h3 className="font-semibold">GEO Pre-check</h3>
                <p className="text-sm text-zinc-600">Gene Expression Omnibus</p>
              </div>
            </div>
            <ul className="text-sm text-zinc-600 space-y-2">
              <li>• Date format standardization (ISO 8601)</li>
              <li>• Unit normalization and validation</li>
              <li>• Sample ID consistency checks</li>
              <li>• Metadata completeness validation</li>
            </ul>
            <a href="/geo-precheck" className="text-sm text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
              View GEO checklist →
            </a>
          </div>
          
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                📚
              </div>
              <div>
                <h3 className="font-semibold">Zenodo Pre-check</h3>
                <p className="text-sm text-zinc-600">General research repository</p>
              </div>
            </div>
            <ul className="text-sm text-zinc-600 space-y-2">
              <li>• FAIR principles compliance</li>
              <li>• License and rights validation</li>
              <li>• File format compatibility</li>
              <li>• Citation metadata completeness</li>
      </ul>
            <a href="/zenodo-precheck" className="text-sm text-green-600 hover:text-green-700 font-medium mt-4 inline-block">
              View Zenodo checklist →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Is my data secure?</h3>
            <p className="text-sm text-zinc-600">
              Yes. FAIRy processes everything locally on your device. Nothing is uploaded unless you explicitly export. 
              We never see your raw data.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">What repositories are supported?</h3>
            <p className="text-sm text-zinc-600">
              Currently GEO and Zenodo with pre-configured checklists. More repositories coming soon. 
              You can also create custom validation rules.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">How does FAIRy differ from other tools?</h3>
            <p className="text-sm text-zinc-600">
              FAIRy is not an authoring tool like CEDAR. It's a validator → fixer → packager → attestation tool 
              that focuses on preparing existing data for submission, not creating new metadata.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">What's the difference between Solo and Campus?</h3>
            <p className="text-sm text-zinc-600">
              Solo (free): Single-rule apply, 1-repo pre-check, Export Pack, Evidence PDF-lite. 
              Campus (paid): Bulk apply, multi-repo validation, signed Evidence JSON, policy rollouts, SSO/SCIM, SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Ready to fix your data?</h2>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
            Join institutions already using FAIRy to streamline their research data workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/early-access" 
              className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
            >
              Request Pilot
            </a>
            <a 
              href="mailto:hello@datadabra.com" 
              className="px-8 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
            >
              Talk to Sales
            </a>
            <a 
              href="#download-solo" 
              className="px-8 py-3 text-zinc-600 hover:text-zinc-900 font-medium"
            >
              Download FAIRy Solo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
