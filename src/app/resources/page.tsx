export const metadata = {
  title: "Resources - FAIRy by Datadabra",
  description: "Whitepapers, case studies, guides, and documentation for FAIRy data validation platform."
};

export default function ResourcesPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Resources
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Everything you need to understand, deploy, and maximize FAIRy's impact 
          in your research data workflows.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 bg-zinc-100 p-1 rounded-lg">
          <button className="px-4 py-2 text-sm font-medium bg-white rounded-md shadow-sm">All</button>
          <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">Whitepapers</button>
          <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">Case Studies</button>
          <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">Guides</button>
          <button className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">Documentation</button>
        </div>
      </div>

      {/* Featured Resources */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Resources</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                📄
              </div>
              <div>
                <div className="text-sm text-blue-600 font-medium mb-1">Whitepaper</div>
                <h3 className="font-semibold mb-2">Local-First Data Validation: A New Paradigm</h3>
                <p className="text-sm text-zinc-600 mb-4">
                  Why local-first processing is essential for research data privacy and compliance, 
                  and how FAIRy implements this approach.
                </p>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Download PDF →
                </a>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                🏥
              </div>
              <div>
                <div className="text-sm text-green-600 font-medium mb-1">Case Study</div>
                <h3 className="font-semibold mb-2">Stanford Medicine: Reducing Submission Failures by 80%</h3>
                <p className="text-sm text-zinc-600 mb-4">
                  How Stanford's research data management team implemented FAIRy Campus 
                  to streamline GEO submissions across 200+ labs.
                </p>
                <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                  Read Case Study →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Browse by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📊
            </div>
            <h3 className="font-semibold mb-2">Pre-check Guides</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Repository-specific validation checklists and best practices.
            </p>
            <div className="text-xs text-zinc-500">
              5 resources
            </div>
          </div>
          
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              📦
            </div>
            <h3 className="font-semibold mb-2">Export & Evidence</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Understanding FAIRy's export formats and evidence generation.
            </p>
            <div className="text-xs text-zinc-500">
              3 resources
            </div>
          </div>
          
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🔧
            </div>
            <h3 className="font-semibold mb-2">Rulepacks</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Creating and managing validation rules for your institution.
            </p>
            <div className="text-xs text-zinc-500">
              4 resources
            </div>
          </div>
          
          <div className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🏢
            </div>
            <h3 className="font-semibold mb-2">Policy Rollouts</h3>
            <p className="text-sm text-zinc-600 mb-4">
              Implementing FAIRy across your organization.
            </p>
            <div className="text-xs text-zinc-500">
              6 resources
            </div>
          </div>
        </div>
      </section>

      {/* All Resources List */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">All Resources</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 hover:bg-zinc-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  📄
                </div>
                <div>
                  <h3 className="font-medium">FAIR Principles Implementation Guide</h3>
                  <p className="text-sm text-zinc-600">Comprehensive guide to implementing FAIR principles with FAIRy</p>
                </div>
              </div>
              <div className="text-sm text-zinc-500">PDF • 24 pages</div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 hover:bg-zinc-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  🎥
                </div>
                <div>
                  <h3 className="font-medium">FAIRy Campus Deployment Webinar</h3>
                  <p className="text-sm text-zinc-600">Live demo and Q&A for institution-wide FAIRy deployment</p>
                </div>
              </div>
              <div className="text-sm text-zinc-500">Video • 45 min</div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 hover:bg-zinc-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                  📋
                </div>
                <div>
                  <h3 className="font-medium">GEO Submission Checklist</h3>
                  <p className="text-sm text-zinc-600">Step-by-step checklist for GEO repository submissions</p>
                </div>
              </div>
              <div className="text-sm text-zinc-500">Checklist • 2 pages</div>
            </div>
          </div>
          
          <div className="border rounded-lg p-4 hover:bg-zinc-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                  🔧
                </div>
                <div>
                  <h3 className="font-medium">Custom Rulepack Development</h3>
                  <p className="text-sm text-zinc-600">Technical guide for creating institution-specific validation rules</p>
                </div>
              </div>
              <div className="text-sm text-zinc-500">Guide • 12 pages</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Panel */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Need specific guidance?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Our team can provide custom documentation, training sessions, and implementation support for your specific use case.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:hello@datadabra.com" 
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
          >
            Request Custom Resources
          </a>
          <a 
            href="/early-access" 
            className="px-6 py-3 border border-zinc-600 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
