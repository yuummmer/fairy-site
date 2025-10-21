"use client";

export const metadata = {
  title: "GEO pre-check - FAIRy by Datadabra",
  description: "Pre-validate your datasets for GEO submission. Check dates, units, IDs, and metadata compliance before uploading to Gene Expression Omnibus."
};

// server component; use data attributes for analytics

export default function GeoPrecheckPage() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #4c1d95;
          background-color: #faf5ff;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .hero {
          padding: 5rem 0;
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero .subheadline {
          font-size: 1.25rem;
          color: #6b46c1;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.75rem;
        }
        
        .btn-primary {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #6b46c1;
          padding: 1rem 2rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .btn-secondary:hover {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        
        .section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3.75rem;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .feature-card {
          background: #f8fafc;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
        }
        
        .feature-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .feature-card p {
          color: #6b46c1;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        
        .cta-section {
          background: #4c1d95;
          color: white;
          padding: 3rem 0;
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .cta-section p {
          color: #e0e7ff;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons-dark {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-white {
          background-color: white;
          color: #4c1d95;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .btn-white:hover {
          background-color: #f3f4f6;
          transform: translateY(-1px);
        }
        
        .btn-outline {
          background-color: transparent;
          color: white;
          padding: 1rem 2rem;
          border: 2px solid #e0e7ff;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .btn-outline:hover {
          background-color: #e0e7ff;
          color: #4c1d95;
        }
        
        /* Additional classes for remaining Tailwind compatibility */
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        .border { border: 1px solid #e9d5ff; }
        .rounded-lg { border-radius: 0.5rem; }
        .p-6 { padding: 1.5rem; }
        .bg-white { background-color: white; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-3 { gap: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .w-8 { width: 2rem; }
        .h-8 { height: 2rem; }
        .bg-purple-100 { background-color: #f3e8ff; }
        .text-lg { font-size: 1.125rem; }
        .font-semibold { font-weight: 600; }
        .grid { display: grid; }
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .gap-6 { gap: 1.5rem; }
        .font-medium { font-weight: 500; }
        .mb-2 { margin-bottom: 0.5rem; }
        .text-zinc-900 { color: #4c1d95; }
        .text-sm { font-size: 0.875rem; }
        .text-zinc-700 { color: #6b46c1; }
        .max-w-4xl { max-width: 56rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-center { text-align: center; }
        .mb-8 { margin-bottom: 2rem; }
        .text-2xl { font-size: 1.5rem; }
        .mb-16 { margin-bottom: 4rem; }
        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .bg-zinc-900 { background-color: #4c1d95; }
        .text-white { color: white; }
        .p-8 { padding: 2rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-semibold { font-weight: 600; }
        .mb-4 { margin-bottom: 1rem; }
        .text-zinc-300 { color: #e0e7ff; }
        .mb-6 { margin-bottom: 1.5rem; }
        .max-w-2xl { max-width: 42rem; }
        .flex-col { flex-direction: column; }
        .sm\\:flex-row { flex-direction: row; }
        .justify-center { justify-content: center; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .bg-white { background-color: white; }
        .text-zinc-900 { color: #4c1d95; }
        .hover\\:bg-zinc-100:hover { background-color: #f3f4f6; }
        .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .border-zinc-600 { border-color: #6b46c1; }
        .hover\\:bg-zinc-800:hover { background-color: #6b46c1; }
        .text-zinc-300 { color: #e0e7ff; }
        .hover\\:text-white:hover { color: white; }
        .font-medium { font-weight: 500; }
        .mt-6 { margin-top: 1.5rem; }
        .text-purple-700 { color: #7c3aed; }
        .hover\\:text-purple-800:hover { color: #6d28d9; }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .cta-buttons,
          .cta-buttons-dark {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary,
          .btn-secondary,
          .btn-white,
          .btn-outline {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .md\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .sm\\:flex-row {
            flex-direction: column;
          }
        }
      `}</style>
      
      <main>
      {/* Hero */}
        <section className="hero">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '4rem', height: '4rem', backgroundColor: '#f3e8ff', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
            🧬
          </div>
              <h1>GEO pre-check</h1>
        </div>
            <p className="subheadline">
          Validate your datasets for Gene Expression Omnibus submission. 
          Check dates, units, IDs, and metadata compliance before uploading.
        </p>
            <div className="cta-buttons">
          <a 
            href="/samples/export-pack/evidence_kit_v0.txt" 
            data-analytics-event="open_evidence"
                className="btn-primary"
          >
            See sample evidence
          </a>
          <a 
            href="/export-pack#zip-contents" 
            data-analytics-event="view_export_pack"
                className="btn-secondary"
          >
            Sample export pack
          </a>
        </div>
      </div>
        </section>

      {/* GEO Requirements Overview */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">GEO submission requirements</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h4>What GEO checks</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• Date format consistency (ISO 8601 preferred)</li>
              <li>• Unit standardization across samples</li>
              <li>• Sample ID uniqueness and format</li>
              <li>• Metadata completeness and accuracy</li>
              <li>• File format compatibility</li>
              <li>• Data matrix structure validation</li>
            </ul>
          </div>
              <div className="feature-card">
                <h4>Common submission failures</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• Inconsistent date formats (MM/DD/YYYY vs DD/MM/YYYY)</li>
              <li>• Mixed units (mg vs mg/mL vs mg/ml)</li>
              <li>• Duplicate or invalid sample IDs</li>
              <li>• Missing required metadata fields</li>
              <li>• Incorrect file naming conventions</li>
              <li>• Malformed data matrices</li>
            </ul>
              </div>
          </div>
        </div>
      </section>

        {/* Detailed Checklist */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">GEO pre-check checklist</h2>
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
