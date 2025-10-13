export const metadata = {
  title: "Security & Privacy - FAIRy by Datadabra",
  description: "Local-first data processing with enterprise security. Learn how FAIRy keeps your research data private and secure."
};

export default function SecurityPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Security & Privacy
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Local-first processing means your data never leaves your device. 
          Enterprise-grade security with complete privacy control.
        </p>
      </div>

      {/* Core Security Principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Core Security Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🏠
            </div>
            <h3 className="font-semibold mb-2">Local-First</h3>
            <p className="text-sm text-zinc-600">
              All processing happens on your device. Nothing is uploaded unless you explicitly export.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🔐
            </div>
            <h3 className="font-semibold mb-2">Zero-Knowledge</h3>
            <p className="text-sm text-zinc-600">
              We never see your data. Only metadata and evidence are generated for compliance.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              ✅
            </div>
            <h3 className="font-semibold mb-2">Attestation</h3>
            <p className="text-sm text-zinc-600">
              Cryptographically signed evidence for audit trails and compliance reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Data Flow & Privacy</h2>
        <div className="bg-zinc-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-zinc-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📊
            </div>
            <p className="text-sm text-zinc-500">Security data-flow diagram placeholder</p>
            <p className="text-xs mt-2">Files stay local; optional signed evidence JSON</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-green-600">✓ What Stays Local</h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• Your raw dataset files</li>
                <li>• All validation processing</li>
                <li>• Fix suggestions and previews</li>
                <li>• Local AI micro-drafts</li>
                <li>• Personal configuration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-600">📤 What Can Be Exported</h3>
              <ul className="space-y-2 text-sm text-zinc-600">
                <li>• Fixed dataset (ZIP export)</li>
                <li>• Submission summary (PDF)</li>
                <li>• Evidence JSON (Campus tier)</li>
                <li>• Compliance reports</li>
                <li>• Audit logs (institution)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Enterprise Security Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Campus/Core Tier</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">SSO/SCIM Integration:</strong> Enterprise identity management
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">SIEM Export:</strong> Security event logging and monitoring
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Policy Enforcement:</strong> Institution-wide compliance rules
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">Audit Trails:</strong> Complete activity logging and reporting
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Compliance & Standards</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">GDPR Compliant:</strong> Local processing, data minimization
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">HIPAA Ready:</strong> No cloud storage, local-only processing
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">FISMA Compatible:</strong> Government security standards
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-zinc-900">SOC 2 Type II:</strong> Security controls and monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility & Procurement */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Accessibility & Procurement</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-4">Accessibility</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>• WCAG 2.1 AA compliant interface</li>
              <li>• Keyboard navigation support</li>
              <li>• Screen reader compatibility</li>
              <li>• High contrast mode support</li>
              <li>• Alternative text for all images</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-4">Procurement</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>• Standard enterprise contracts</li>
              <li>• Volume licensing available</li>
              <li>• Custom SLAs and support tiers</li>
              <li>• Integration consulting services</li>
              <li>• Training and documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Security questions?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Our security team can provide detailed documentation, penetration testing reports, and compliance certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:security@datadabra.com" 
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
          >
            Contact Security Team
          </a>
          <a 
            href="/early-access" 
            className="px-6 py-3 border border-zinc-600 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Request Security Review
          </a>
        </div>
      </section>
    </main>
  );
}
