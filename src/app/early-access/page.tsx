export const metadata = {
  title: "Early Access - FAIRy by Datadabra",
  description: "Request early access to FAIRy Campus. Join our pilot program for institutions and get priority support for your research data workflows."
};

export default function EarlyAccessPage() {
  return (
    <main className="py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">
          Early Access
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-8">
          Join our pilot program and be among the first institutions to deploy FAIRy Campus. 
          Get priority support and help shape the future of research data validation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pilot-form" 
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Request Pilot Access
          </a>
          <a 
            href="mailto:hello@datadabra.com" 
            className="px-6 py-3 border border-zinc-300 text-zinc-900 rounded-lg font-medium hover:bg-zinc-50 transition-colors"
          >
            Talk to Sales
          </a>
        </div>
      </div>

      {/* Pilot Program Benefits */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Pilot Program Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🚀
            </div>
            <h3 className="font-semibold mb-2">Priority Access</h3>
            <p className="text-sm text-zinc-600">
              Be among the first to deploy FAIRy Campus with dedicated support and early feature access.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              💬
            </div>
            <h3 className="font-semibold mb-2">Direct Feedback</h3>
            <p className="text-sm text-zinc-600">
              Shape product development with direct access to our engineering team and regular feedback sessions.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              🎯
            </div>
            <h3 className="font-semibold mb-2">Custom Integration</h3>
            <p className="text-sm text-zinc-600">
              Get help with custom rulepacks, SSO integration, and institution-specific workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Pilot Form */}
      <section className="mb-16" id="pilot-form">
        <h2 className="text-2xl font-semibold mb-8 text-center">Request Pilot Access</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Institution Information */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Institution Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-zinc-700 mb-2">
                    Institution Name *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Stanford University"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-zinc-700 mb-2">
                    Department/Unit
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Research Data Management"
                  />
                </div>
                <div>
                  <label htmlFor="institution-type" className="block text-sm font-medium text-zinc-700 mb-2">
                    Institution Type *
                  </label>
                  <select
                    id="institution-type"
                    name="institution-type"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="university">University</option>
                    <option value="research-institute">Research Institute</option>
                    <option value="government">Government Agency</option>
                    <option value="hospital">Hospital/Medical Center</option>
                    <option value="corporate">Corporate R&D</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-zinc-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-zinc-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Research Data Manager"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="jane.smith@university.edu"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Use Case Information */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Use Case Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="use-case" className="block text-sm font-medium text-zinc-700 mb-2">
                    Primary Use Case *
                  </label>
                  <select
                    id="use-case"
                    name="use-case"
                    required
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select primary use case</option>
                    <option value="geo-submissions">GEO submissions</option>
                    <option value="zenodo-submissions">Zenodo submissions</option>
                    <option value="institutional-repo">Institutional repository</option>
                    <option value="compliance">Compliance and audit</option>
                    <option value="bulk-processing">Bulk data processing</option>
                    <option value="custom-validation">Custom validation rules</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="data-volume" className="block text-sm font-medium text-zinc-700 mb-2">
                    Expected Data Volume
                  </label>
                  <select
                    id="data-volume"
                    name="data-volume"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select volume range</option>
                    <option value="small">&lt; 100 datasets/year</option>
                    <option value="medium">100-1000 datasets/year</option>
                    <option value="large">1000-10000 datasets/year</option>
                    <option value="enterprise">&gt; 10000 datasets/year</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-zinc-700 mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-zinc-700 mb-2">
                    Specific Requirements
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe any specific requirements, integrations, or customizations needed..."
                  />
                </div>
              </div>
            </div>

            {/* Technical Requirements */}
            <div className="bg-zinc-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Technical Requirements</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-2">
                    Integration Requirements (select all that apply)
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="integration" value="sso" className="mr-2" />
                      <span className="text-sm">SSO/SAML integration</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="integration" value="ldap" className="mr-2" />
                      <span className="text-sm">LDAP/Active Directory</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="integration" value="api" className="mr-2" />
                      <span className="text-sm">API integration</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="integration" value="siem" className="mr-2" />
                      <span className="text-sm">SIEM logging</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="integration" value="custom" className="mr-2" />
                      <span className="text-sm">Custom integrations</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="deployment" className="block text-sm font-medium text-zinc-700 mb-2">
                    Preferred Deployment
                  </label>
                  <select
                    id="deployment"
                    name="deployment"
                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select deployment preference</option>
                    <option value="cloud">Cloud-hosted</option>
                    <option value="on-premise">On-premise</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="no-preference">No preference</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
              >
                Submit Pilot Request
              </button>
              <p className="text-sm text-zinc-500 mt-4">
                We'll review your request and get back to you within 2 business days.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Pilot Program FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">How long does the pilot program last?</h3>
            <p className="text-sm text-zinc-600">
              Pilot programs typically run for 3-6 months, depending on your institution's needs and timeline.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">What support do we get during the pilot?</h3>
            <p className="text-sm text-zinc-600">
              You'll have dedicated support from our engineering team, regular check-ins, and priority bug fixes and feature requests.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">Is there a cost for the pilot program?</h3>
            <p className="text-sm text-zinc-600">
              Pilot programs are free for qualifying institutions. We'll discuss pricing for full deployment after the pilot.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-2">What happens after the pilot?</h3>
            <p className="text-sm text-zinc-600">
              We'll work with you to transition to a full deployment with appropriate licensing and support agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zinc-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Questions about the pilot program?</h2>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Our team is here to help you understand how FAIRy can fit into your institution's data workflows.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:pilot@datadabra.com" 
            className="px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-colors"
          >
            Email Pilot Team
          </a>
          <a 
            href="mailto:hello@datadabra.com" 
            className="px-6 py-3 border border-zinc-600 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            General Contact
          </a>
        </div>
      </section>
    </main>
  );
}
