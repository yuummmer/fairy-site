export const metadata = {
  title: "Zenodo Pre-check - FAIRy by Datadabra",
  description: "Pre-validate your datasets for Zenodo submission. Check FAIR principles compliance, licensing, and metadata completeness before uploading."
};

// server component; use data attributes for analytics

export default function ZenodoPrecheckPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
            📚
          </div>
          <h1 className="text-4xl font-bold text-zinc-900">
            Zenodo Pre-check
          </h1>
        </div>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
          Validate your datasets for Zenodo submission. 
          Check FAIR principles compliance, licensing, and metadata completeness before uploading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/samples/export-pack/evidence_kit_v0.txt" 
            data-analytics-event="open_evidence"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            See Sample Evidence
          </a>
          <a 
            href="/export-pack#zip-contents" 
            data-analytics-event="view_export_pack"
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            Sample Export Pack
          </a>
        </div>
      </div>

      {/* Zenodo Requirements Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Zenodo Submission Requirements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-green-900">What Zenodo Checks</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• FAIR principles compliance (Findable, Accessible, Interoperable, Reusable)</li>
              <li>• License and rights validation</li>
              <li>• File format compatibility and accessibility</li>
              <li>• Citation metadata completeness</li>
              <li>• DOI and persistent identifier readiness</li>
              <li>• Community and collection requirements</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-blue-900">Common Submission Issues</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Missing or invalid license information</li>
              <li>• Incomplete citation metadata</li>
              <li>• Non-standard file formats</li>
              <li>• Missing keywords and descriptions</li>
              <li>• Inadequate data documentation</li>
              <li>• Missing community/collection assignment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAIR Principles Checklist */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">FAIR Principles Compliance</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Findable */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  🔍
                </div>
                <h3 className="text-lg font-semibold">Findable</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Validates</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Rich, descriptive metadata</li>
                    <li>• Standardized keywords and tags</li>
                    <li>• Proper title and abstract formatting</li>
                    <li>• Author and affiliation information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Generic titles: "Dataset" or "Data"</li>
                    <li>• Missing keywords and subject categories</li>
                    <li>• Incomplete author information</li>
                    <li>• Missing abstract or description</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accessible */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  🔓
                </div>
                <h3 className="text-lg font-semibold">Accessible</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Validates</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Open access license compliance</li>
                    <li>• File format accessibility</li>
                    <li>• Persistent identifier readiness</li>
                    <li>• Download and access permissions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Restrictive or missing licenses</li>
                    <li>• Proprietary file formats</li>
                    <li>• Missing access instructions</li>
                    <li>• Broken or temporary links</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interoperable */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🔗
                </div>
                <h3 className="text-lg font-semibold">Interoperable</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Validates</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Standard data formats and schemas</li>
                    <li>• Controlled vocabulary compliance</li>
                    <li>• Cross-platform compatibility</li>
                    <li>• API and integration readiness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Non-standard data formats</li>
                    <li>• Custom or undefined schemas</li>
                    <li>• Platform-specific dependencies</li>
                    <li>• Missing API documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reusable */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  ♻️
                </div>
                <h3 className="text-lg font-semibold">Reusable</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Validates</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Clear usage rights and restrictions</li>
                    <li>• Comprehensive documentation</li>
                    <li>• Provenance and methodology</li>
                    <li>• Version control and updates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Unclear usage permissions</li>
                    <li>• Missing methodology documentation</li>
                    <li>• No provenance information</li>
                    <li>• Outdated or deprecated formats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* License and Rights */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">License and Rights Validation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-green-900">Open Licenses</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• CC BY 4.0 (Attribution)</li>
              <li>• CC BY-SA 4.0 (ShareAlike)</li>
              <li>• CC0 1.0 (Public Domain)</li>
              <li>• MIT License</li>
              <li>• Apache 2.0</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-yellow-900">Restricted Licenses</h3>
            <ul className="text-sm text-yellow-800 space-y-2">
              <li>• CC BY-NC (NonCommercial)</li>
              <li>• CC BY-ND (NoDerivatives)</li>
              <li>• Custom institutional licenses</li>
              <li>• Embargo periods</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-3 text-red-900">Invalid Licenses</h3>
            <ul className="text-sm text-red-800 space-y-2">
              <li>• All rights reserved</li>
              <li>• No license specified</li>
              <li>• Proprietary restrictions</li>
              <li>• Unclear permissions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Evidence */}
      <section className="mb-16" id="sample-evidence">
        <h2 className="text-2xl font-semibold mb-8 text-center">Sample Evidence Report</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-4">Zenodo Pre-check Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">FAIR principles compliance</span>
                  <span className="text-sm text-green-600 font-medium">✓ All criteria met</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">License validation</span>
                  <span className="text-sm text-green-600 font-medium">✓ CC BY 4.0 confirmed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <span className="text-sm">File format compatibility</span>
                  <span className="text-sm text-yellow-600 font-medium">⚠ 2 proprietary formats</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Citation metadata</span>
                  <span className="text-sm text-green-600 font-medium">✓ Complete and valid</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Community assignment</span>
                  <span className="text-sm text-green-600 font-medium">✓ Research data community</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="/samples/export-pack/evidence_kit_v0.txt" 
                data-analytics-event="open_evidence"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Open sample evidence kit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Export Pack Preview */}
      <section className="mb-16" id="sample-export">
        <h2 className="text-2xl font-semibold mb-8 text-center">Export Pack Contents</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Zenodo-Ready Export Pack</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-xs">📄</div>
                  <span>metadata.json - FAIR-compliant metadata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-xs">📊</div>
                  <span>manifest.csv - File inventory with checksums</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📝</div>
                  <span>README.txt - Usage instructions and citation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center text-xs">🔍</div>
                  <span>checksums.txt - File integrity verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-xs">📁</div>
                  <span>data/ - FAIR-compliant dataset files</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center text-xs">📋</div>
                  <span>LICENSE - Clear usage rights and restrictions</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="/samples/export-pack.zip" 
                data-analytics-event="sample_zip"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Download sample export pack (ZIP) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to pre-check your Zenodo submission?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Ensure FAIR compliance and reduce submission issues with FAIRy's Zenodo-specific validation.
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
