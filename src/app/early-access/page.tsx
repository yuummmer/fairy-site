"use client";

import FeedbackForm from '../../components/FeedbackForm';

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
            href="/demo" 
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors"
          >
            Request Demo
          </a>
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
          <div className="space-y-6">
            <FeedbackForm formType="pilot" />
          </div>
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
