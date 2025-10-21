export const metadata = {
  title: "GEO pre-check - FAIRy by Datadabra",
  description: "Pre-validate your datasets for GEO submission. Check dates, units, IDs, and metadata compliance before uploading to Gene Expression Omnibus."
};

export default function GeoPrecheckPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
            🧬
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">
            GEO pre-check
          </h1>
        </div>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
          Validate your datasets for Gene Expression Omnibus submission. 
          Check dates, units, IDs, and metadata compliance before uploading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/samples/export-pack/evidence_kit_v0.txt" 
            data-analytics-event="open_evidence"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-900 transition-colors"
          >
            See sample evidence
          </a>
          <a 
            href="/export-pack#zip-contents" 
            data-analytics-event="view_export_pack"
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            Sample export pack
          </a>
        </div>
      </div>
          <div className="space-y-6">
            {/* Date Validation */}
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  📅
                </div>
                <h3 className="text-lg font-semibold">Date format standardization</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">✓ What FAIRy fixes</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Convert all dates to ISO 8601 format (YYYY-MM-DD)</li>
                    <li>• Standardize time formats (HH:MM:SS)</li>
                    <li>• Validate date ranges and logical consistency</li>
                    <li>• Handle multiple date formats in same dataset</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">⚠ Common issues</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Mixed formats: "01/15/2023" vs "15-Jan-2023"</li>
                    <li>• Ambiguous dates: "01/02/2023" (Jan 2 or Feb 1?)</li>
                    <li>• Invalid dates: "2023-02-30"</li>
                    <li>• Missing timezone information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Unit normalization */}
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  📏
                </div>
                <h3 className="text-lg font-semibold">Unit normalization</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">✓ What FAIRy fixes</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Standardize unit abbreviations (mg vs mg.)</li>
                    <li>• Convert between compatible units</li>
                    <li>• Validate unit consistency across samples</li>
                    <li>• Flag incompatible unit conversions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">⚠ Common issues</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Inconsistent abbreviations: "mg" vs "mg." vs "milligrams"</li>
                    <li>• Mixed units: "5 mg" vs "5000 μg"</li>
                    <li>• Missing units entirely</li>
                    <li>• Non-standard unit names</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample ID validation */}
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🏷️
                </div>
                <h3 className="text-lg font-semibold">Sample ID consistency</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">✓ What FAIRy fixes</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Ensure unique sample identifiers</li>
                    <li>• Standardize ID formats and naming</li>
                    <li>• Validate ID character restrictions</li>
                    <li>• Check ID consistency across files</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">⚠ Common issues</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Duplicate sample IDs across conditions</li>
                    <li>• Special characters in IDs</li>
                    <li>• Inconsistent naming patterns</li>
                    <li>• Missing or empty sample IDs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metadata validation */}
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  📋
                </div>
                <h3 className="text-lg font-semibold">Metadata completeness</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">✓ What FAIRy fixes</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Validate required GEO metadata fields</li>
                    <li>• Check controlled vocabulary compliance</li>
                    <li>• Ensure proper data type formatting</li>
                    <li>• Generate missing metadata suggestions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900">⚠ Common issues</h4>
                  <ul className="text-sm text-zinc-700 space-y-1">
                    <li>• Missing required fields (organism, platform)</li>
                    <li>• Invalid controlled vocabulary terms</li>
                    <li>• Incorrect data types (text vs numeric)</li>
                    <li>• Inconsistent field naming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Evidence */}
      <section className="mb-16" id="sample-evidence">
        <h2 className="text-2xl font-semibold mb-8 text-center">Sample evidence report</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-4">GEO pre-check results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded">
                  <span className="text-sm">Date format standardization</span>
                  <span className="text-sm text-zinc-900 font-medium">✓ Fixed 12 dates</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded">
                  <span className="text-sm">Unit normalization</span>
                  <span className="text-sm text-zinc-900 font-medium">✓ Standardized 8 units</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded">
                  <span className="text-sm">Sample ID validation</span>
                  <span className="text-sm text-zinc-900 font-medium">⚠ 2 duplicates found</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded">
                  <span className="text-sm">Metadata completeness</span>
                  <span className="text-sm text-zinc-900 font-medium">✓ All required fields present</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="/samples/export-pack/evidence_kit_v0.txt" 
                data-analytics-event="open_evidence"
                className="text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                Open sample evidence kit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Export Pack Preview */}
      <section className="mb-16" id="sample-export">
        <h2 className="text-2xl font-semibold mb-8 text-center">Export pack contents</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">GEO-ready export pack</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📄</div>
                  <span>metadata.json - standardized GEO metadata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📊</div>
                  <span>manifest.csv - file inventory with SHA-256 checksums</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📝</div>
                  <span>README.txt - submission instructions and notes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">🔍</div>
                  <span>checksums.txt - file integrity verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📁</div>
                  <span>data/ - fixed dataset files</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="/samples/export-pack.zip" 
                data-analytics-event="sample_zip"
                className="text-sm text-purple-700 hover:text-purple-800 font-medium"
              >
                Download sample export pack (ZIP) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to pre-check your GEO submission?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Reduce submission failures and save time with FAIRy's GEO-specific validation.
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
