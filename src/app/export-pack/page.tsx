"use client";

import TrackedLink from "@/src/components/TrackedLink";

export const metadata = {
  title: "Export Pack - FAIRy by Datadabra",
  description: "Complete ZIP export with metadata, checksums, and compliance evidence. Ready for repository submission with full audit trail."
};

export default function ExportPackPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
            📦
          </div>
          <h1 className="text-4xl font-bold text-zinc-900">
            Export Pack
          </h1>
        </div>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
          Complete ZIP export with metadata, checksums, and compliance evidence. 
          Ready for repository submission with full audit trail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <TrackedLink 
            href="/samples/export-pack.zip" 
            event="sample_zip"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Download Sample ZIP
          </TrackedLink>
          <TrackedLink 
            href="#zip-contents" 
            event="view_export_pack"
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            View ZIP Contents
          </TrackedLink>
        </div>
      </div>

      {/* Export Pack Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">What's in Your Export Pack</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-purple-900">Complete Submission Package</h3>
            <ul className="space-y-2 text-sm text-purple-800">
              <li>• Fixed and validated dataset files</li>
              <li>• Standardized metadata in JSON format</li>
              <li>• File manifest with SHA-256 checksums</li>
              <li>• Comprehensive README with instructions</li>
              <li>• Integrity verification checksums</li>
              <li>• Compliance evidence and audit trail</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-green-900">Repository Ready</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Pre-validated for GEO, Zenodo, and more</li>
              <li>• Repository-specific metadata formatting</li>
              <li>• Proper file naming and organization</li>
              <li>• License and rights documentation</li>
              <li>• Citation-ready metadata</li>
              <li>• FAIR principles compliance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ZIP Contents Breakdown with inline viewers */}
      <section className="mb-16" id="zip-contents">
        <h2 className="text-2xl font-semibold mb-8 text-center">ZIP Contents Breakdown</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* metadata.json */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  📄
                </div>
                <h3 className="text-lg font-semibold">metadata.json</h3>
                <span className="text-sm text-zinc-500">Standardized metadata</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Contains</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Dataset title and description</li>
                    <li>• Author and affiliation information</li>
                    <li>• Keywords and subject categories</li>
                    <li>• License and usage rights</li>
                    <li>• Repository-specific fields</li>
                    <li>• Provenance and methodology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">📋 Format</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• JSON-LD for semantic web</li>
                    <li>• Schema.org compliance</li>
                    <li>• Repository adapter specific</li>
                    <li>• UTF-8 encoding</li>
                    <li>• Validated JSON structure</li>
                    <li>• Controlled vocabulary terms</li>
                  </ul>
                </div>
              </div>
              <details className="mt-4">
                <summary className="text-sm text-zinc-600 cursor-pointer">Preview metadata.json</summary>
                <pre className="mt-3 text-xs overflow-auto bg-zinc-50 p-3 rounded">
{`// preview
`}
                </pre>
                <iframe
                  title="metadata.json"
                  src="/samples/export-pack/metadata.json"
                  className="w-full h-64 border rounded"
                />
              </details>
            </div>

            {/* manifest.csv */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  📊
                </div>
                <h3 className="text-lg font-semibold">manifest.csv</h3>
                <span className="text-sm text-zinc-500">File inventory with checksums</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Contains</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Complete file inventory</li>
                    <li>• SHA-256 checksums for integrity</li>
                    <li>• File sizes and modification dates</li>
                    <li>• MIME types and formats</li>
                    <li>• Relative paths within ZIP</li>
                    <li>• File purpose and description</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">📋 Format</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• CSV with UTF-8 encoding</li>
                    <li>• Standardized column headers</li>
                    <li>• RFC 4180 compliance</li>
                    <li>• Machine-readable format</li>
                    <li>• Repository import ready</li>
                    <li>• Audit trail documentation</li>
                  </ul>
                </div>
              </div>
              <details className="mt-4">
                <summary className="text-sm text-zinc-600 cursor-pointer">Preview manifest.csv</summary>
                <iframe
                  title="manifest.csv"
                  src="/samples/export-pack/manifest.csv"
                  className="w-full h-48 border rounded"
                />
              </details>
            </div>

            {/* README */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  📝
                </div>
                <h3 className="text-lg font-semibold">README</h3>
                <span className="text-sm text-zinc-500">Usage instructions and citation</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Contains</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Dataset overview and purpose</li>
                    <li>• Usage instructions and examples</li>
                    <li>• Citation information and DOI</li>
                    <li>• Contact and support details</li>
                    <li>• Version history and updates</li>
                    <li>• Known issues and limitations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">📋 Format</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Plain text with UTF-8 encoding</li>
                    <li>• Markdown-compatible formatting</li>
                    <li>• Human and machine readable</li>
                    <li>• Repository display ready</li>
                    <li>• Standard citation format</li>
                    <li>• Accessibility compliant</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <TrackedLink className="text-purple-700 hover:underline" href="/samples/export-pack/README.md" event="view_export_pack">Open README</TrackedLink>
              </div>
            </div>

            {/* Evidence kit (text sample) */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  🔍
                </div>
                <h3 className="text-lg font-semibold">Evidence kit (sample)</h3>
                <span className="text-sm text-zinc-500">Attestation summary (text sample)</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Contains</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Normalization attestations</li>
                    <li>• Repository dry-run status</li>
                    <li>• Files and hashes summary</li>
                    <li>• Rulepack version</li>
                    <li>• Creation timestamp</li>
                    <li>• Evidence format note</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">📋 Format</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Human-readable text (sample)</li>
                    <li>• Production includes signed JSON</li>
                    <li>• Downloadable for reviewers</li>
                    <li>• Archive with the dataset</li>
                    <li>• Links to pack contents</li>
                    <li>• Consistent metadata header</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-sm">
                <TrackedLink className="text-purple-700 hover:underline" href="/samples/export-pack/evidence_kit_v0.txt" event="open_evidence">Open evidence kit sample</TrackedLink>
              </div>
            </div>

            {/* data/ directory */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  📁
                </div>
                <h3 className="text-lg font-semibold">data/</h3>
                <span className="text-sm text-zinc-500">Fixed dataset files</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ Contains</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Validated and fixed data files</li>
                    <li>• Standardized file formats</li>
                    <li>• Consistent naming conventions</li>
                    <li>• Repository-compatible structure</li>
                    <li>• Preserved original data integrity</li>
                    <li>• Applied fixes and transformations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-blue-600">📋 Format</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Original file formats preserved</li>
                    <li>• Standardized when possible</li>
                    <li>• Repository requirements met</li>
                    <li>• Cross-platform compatibility</li>
                    <li>• Accessibility considerations</li>
                    <li>• FAIR principles compliance</li>
                  </ul>
                </div>
              </div>
              <details className="mt-4">
                <summary className="text-sm text-zinc-600 cursor-pointer">Preview samples.csv</summary>
                <iframe
                  title="samples.csv"
                  src="/samples/export-pack/data/samples.csv"
                  className="w-full h-40 border rounded"
                />
              </details>
              <details className="mt-4">
                <summary className="text-sm text-zinc-600 cursor-pointer">Preview measurements.csv</summary>
                <iframe
                  title="measurements.csv"
                  src="/samples/export-pack/data/measurements.csv"
                  className="w-full h-40 border rounded"
                />
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Sample ZIP Download */}
      <section className="mb-16" id="sample-zip">
        <h2 className="text-2xl font-semibold mb-8 text-center">Sample Export Pack</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-4">Download Sample Export Pack</h3>
              <p className="text-sm text-zinc-600 mb-6">
                See exactly what FAIRy generates for your repository submissions. 
                This sample contains realistic data with all the components you'll get.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <h4 className="font-medium mb-2">Sample Contents:</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• 3 CSV data files (fixed formats)</li>
                    <li>• Complete metadata.json</li>
                    <li>• File manifest with checksums</li>
                    <li>• README with citation info</li>
                    <li>• Integrity verification file</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-medium mb-2">File Size:</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• ZIP: ~2.3 MB</li>
                    <li>• Uncompressed: ~5.1 MB</li>
                    <li>• 5 files total</li>
                    <li>• Ready for GEO/Zenodo</li>
                  </ul>
                </div>
              </div>
              <TrackedLink 
                href="/samples/export-pack.zip" 
                event="sample_zip"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Download Sample Export Pack (ZIP)
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Repository Compatibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Repository Compatibility</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🧬
            </div>
            <h3 className="font-semibold mb-2">GEO</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Gene Expression Omnibus format with standardized metadata and data matrices.
            </p>
            <div className="text-xs text-green-600 font-medium">✓ Fully Compatible</div>
          </div>
          
          <div className="border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📚
            </div>
            <h3 className="font-semibold mb-2">Zenodo</h3>
            <p className="text-sm text-zinc-600 mb-4">
              FAIR-compliant format with open licensing and comprehensive documentation.
            </p>
            <div className="text-xs text-green-600 font-medium">✓ Fully Compatible</div>
          </div>
          
          <div className="border rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🔧
            </div>
            <h3 className="font-semibold mb-2">Custom</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Configurable format for institutional repositories and custom requirements.
            </p>
            <div className="text-xs text-blue-600 font-medium">⚙️ Configurable</div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to generate your Export Pack?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Create repository-ready submissions with complete audit trails and compliance evidence.
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
          <a 
            href="#download-solo" 
            className="px-6 py-3 text-zinc-300 hover:text-white font-medium"
          >
            Download FAIRy Solo
          </a>
        </div>
      </section>
    </main>
  );
}
