export const metadata = {
  title: "GEO Pre-check - FAIRy by Datadabra",
  description: "Pre-validate your datasets for GEO submission. Check dates, units, IDs, and metadata compliance before uploading to Gene Expression Omnibus."
};

export default function GeoPrecheckPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            🧬
          </div>
          <h1 className="text-4xl font-bold text-zinc-900">
            GEO Pre-check
          </h1>
        </div>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
          Validate your datasets for Gene Expression Omnibus submission. 
          Check dates, units, IDs, and metadata compliance before uploading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#sample-evidence" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            See Sample Evidence
          </a>
          <a 
            href="#sample-export" 
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            Sample Export Pack
          </a>
        </div>
      </div>

      {/* GEO Requirements Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">GEO Submission Requirements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-blue-900">What GEO Checks</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Date format consistency (ISO 8601 preferred)</li>
              <li>• Unit standardization across samples</li>
              <li>• Sample ID uniqueness and format</li>
              <li>• Metadata completeness and accuracy</li>
              <li>• File format compatibility</li>
              <li>• Data matrix structure validation</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-4 text-green-900">Common Submission Failures</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Inconsistent date formats (MM/DD/YYYY vs DD/MM/YYYY)</li>
              <li>• Mixed units (mg vs mg/mL vs mg/ml)</li>
              <li>• Duplicate or invalid sample IDs</li>
              <li>• Missing required metadata fields</li>
              <li>• Incorrect file naming conventions</li>
              <li>• Malformed data matrices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Checklist */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">GEO Pre-check Checklist</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Date Validation */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  📅
                </div>
                <h3 className="text-lg font-semibold">Date Format Standardization</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Fixes</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Convert all dates to ISO 8601 format (YYYY-MM-DD)</li>
                    <li>• Standardize time formats (HH:MM:SS)</li>
                    <li>• Validate date ranges and logical consistency</li>
                    <li>• Handle multiple date formats in same dataset</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Mixed formats: "01/15/2023" vs "15-Jan-2023"</li>
                    <li>• Ambiguous dates: "01/02/2023" (Jan 2 or Feb 1?)</li>
                    <li>• Invalid dates: "2023-02-30"</li>
                    <li>• Missing timezone information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Unit Normalization */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  📏
                </div>
                <h3 className="text-lg font-semibold">Unit Normalization</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Fixes</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Standardize unit abbreviations (mg vs mg.)</li>
                    <li>• Convert between compatible units</li>
                    <li>• Validate unit consistency across samples</li>
                    <li>• Flag incompatible unit conversions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Inconsistent abbreviations: "mg" vs "mg." vs "milligrams"</li>
                    <li>• Mixed units: "5 mg" vs "5000 μg"</li>
                    <li>• Missing units entirely</li>
                    <li>• Non-standard unit names</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sample ID Validation */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  🏷️
                </div>
                <h3 className="text-lg font-semibold">Sample ID Consistency</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Fixes</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Ensure unique sample identifiers</li>
                    <li>• Standardize ID formats and naming</li>
                    <li>• Validate ID character restrictions</li>
                    <li>• Check ID consistency across files</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Duplicate sample IDs across conditions</li>
                    <li>• Special characters in IDs</li>
                    <li>• Inconsistent naming patterns</li>
                    <li>• Missing or empty sample IDs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metadata Validation */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  📋
                </div>
                <h3 className="text-lg font-semibold">Metadata Completeness</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2 text-green-600">✓ What FAIRy Fixes</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
                    <li>• Validate required GEO metadata fields</li>
                    <li>• Check controlled vocabulary compliance</li>
                    <li>• Ensure proper data type formatting</li>
                    <li>• Generate missing metadata suggestions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-red-600">⚠ Common Issues</h4>
                  <ul className="text-sm text-zinc-600 space-y-1">
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
        <h2 className="text-2xl font-semibold mb-8 text-center">Sample Evidence Report</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-4">GEO Pre-check Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Date format standardization</span>
                  <span className="text-sm text-green-600 font-medium">✓ Fixed 12 dates</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Unit normalization</span>
                  <span className="text-sm text-green-600 font-medium">✓ Standardized 8 units</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded">
                  <span className="text-sm">Sample ID validation</span>
                  <span className="text-sm text-yellow-600 font-medium">⚠ 2 duplicates found</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="text-sm">Metadata completeness</span>
                  <span className="text-sm text-green-600 font-medium">✓ All required fields present</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="#sample-summary" 
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View Full Submission Summary (PDF) →
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
              <h3 className="font-semibold mb-4">GEO-Ready Export Pack</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-xs">📄</div>
                  <span>metadata.json - Standardized GEO metadata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center text-xs">📊</div>
                  <span>manifest.csv - File inventory with SHA-256 checksums</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-xs">📝</div>
                  <span>README.txt - Submission instructions and notes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center text-xs">🔍</div>
                  <span>checksums.txt - File integrity verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center text-xs">📁</div>
                  <span>data/ - Fixed dataset files</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="#download-sample" 
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Download Sample Export Pack (ZIP) →
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
