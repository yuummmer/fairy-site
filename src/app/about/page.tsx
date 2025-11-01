"use client";

export default function AboutPage() {
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
        
        .about-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        
        .about-header {
          padding: 4rem 0 2rem;
          text-align: center;
          border-bottom: 2px solid #e9d5ff;
          margin-bottom: 3rem;
        }
        
        .about-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .about-header .subheader {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
        }
        
        .section-content {
          color: #4c1d95;
          line-height: 1.8;
        }
        
        .section-content p {
          margin-bottom: 1.25rem;
        }
        
        .section-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        
        .section-content li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .section-content li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .highlight-box {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .highlight-box h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .highlight-box ul {
          margin-top: 1rem;
        }
        
        .contact-section {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          margin-top: 4rem;
        }
        
        .contact-section p {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
        }
        
        .contact-section p a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
        }
        
        .contact-section p a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .contact-icon {
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 0.5rem;
          fill: currentColor;
        }
        
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
        }
        
        .contact-link:hover {
          color: #6d28d9;
          text-decoration: underline;
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
        
        .btn-primary:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .section-content .btn-primary,
        .highlight-box .btn-primary {
          color: white !important;
          text-decoration: none !important;
          background-color: #7c3aed !important;
        }
        
        .section-content .btn-primary:hover,
        .highlight-box .btn-primary:hover {
          background-color: #6d28d9 !important;
          color: white !important;
        }
        
        .btn-contact {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-contact:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .vision-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
          margin-top: 1.5rem;
        }
        
        .vision-link:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .section-content a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
        }
        
        .section-content a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .about-header h1 {
            font-size: 2rem;
          }
          
          .about-header .subheader {
            font-size: 1.125rem;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .about-container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
      
      <div className="about-container">
        <div className="about-header">
          <h1>About</h1>
          <p className="subheader">
            FAIRy is designed around how data actually moves inside labs, cores, and collections.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">What is Datadabra / FAIRy?</h2>
          <div className="section-content">
            <p>
              <strong>FAIRy</strong> is a local-first dataset validator and submission readiness tool. It helps researchers and institutions check their data before it's handed off — to a repository, a core facility, a collections manager, whoever's on the receiving end.
            </p>
            <p>
              FAIRy runs entirely on your computer. Nothing is uploaded. It looks at your files and metadata, checks them against a defined set of rules, and tells you exactly what needs to be fixed before someone rejects the dataset.
            </p>
            <p>
              <strong>Datadabra</strong> is the company building FAIRy.
            </p>
            <p>
              We're doing that in two layers:
            </p>
            <div className="highlight-box">
              <h3>FAIRy Core (open)</h3>
              <p>
                The core validator — the part that runs locally, flags missing/invalid fields, checks naming/ID consistency, and generates a one-page readiness report — is being built to stay available to researchers and labs. The goal is that you can run it yourself, get a clear "fix these items" list, and avoid getting bounced. This tool will be freely available to support the FAIR data sharing standards and our <a href="/vision">vision</a>.
              </p>
            </div>
            <div className="highlight-box">
              <h3>FAIRy for Institutions</h3>
              <p>
                Institutions have a different problem: they need repeatable intake. We work with data stewards, curators, and core facilities to encode "this is what we require before we accept your data" into a rulepack. FAIRy then produces two things they can actually use:
              </p>
              <ul>
                <li>a Submission Readiness Report they can send back to the submitter, and</li>
                <li>an Attestation file — a timestamped record of what was checked, under which rules, and on which files by hash — that can be kept internally for review, audit, or compliance.</li>
              </ul>
            </div>
            <p>
              The mission behind both is the same: make research data usable, not just technically "published," and stop wasting expert time on preventable back-and-forth.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">About Jennifer Slotnick</h2>
          <div className="section-content">
            <p>
              My background crosses enterprise software and bioinformatics. I've worked on data-heavy systems in industry, and I've also spent time inside research settings where sequencing data, specimen records, and metadata all have to move from "local folder" to "institutional record."
            </p>
            <p>
              The same pattern shows up in both worlds: talented people lose hours to avoidable cleanup — missing required fields, inconsistent IDs, filenames that don't match policy — instead of doing the work they're actually trained to do.
            </p>
            <p>
              FAIRy exists because that bottleneck is fixable. The tool runs locally, applies the rules an institution already cares about, and produces two things that save time on both sides: a clear "here's what to fix" sheet for the submitter, and an auditable record of what was checked for the curator or data manager.
            </p>
            <p>
              The goal is simple: scientists and data stewards should spend less time untangling formatting and more time on actual research and curation.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">How we work with institutions</h2>
          <div className="section-content">
            <p>
              We support institutions in two ways:
            </p>
            
            <div className="highlight-box" style={{ marginTop: '2rem' }}>
              <h3>FAIRy Core (no-cost tooling for researchers and labs)</h3>
              <p>
                FAIRy Core is the local validator that runs on your own machine. It checks required metadata fields, filename rules, and ID consistency, and produces a Submission Readiness Report (what to fix) — without uploading data anywhere.
              </p>
              <p style={{ marginBottom: '0' }}>
                The goal is to let researchers catch problems themselves before handoff.
              </p>
            </div>
            
            <div className="highlight-box" style={{ marginTop: '2rem' }}>
              <h3>Institutional pilots (scoped engagement)</h3>
              <p>
                For data stewards, collections, and core facilities, we run a short pilot where we:
              </p>
              <ul>
                <li>capture your intake requirements (the "must not be blank / must match / must follow this pattern" rules),</li>
                <li>encode them into a rulepack,</li>
                <li>generate a readiness report in language you can forward internally, and</li>
                <li>produce an attestation file that documents what was checked, when, and under which rules.</li>
              </ul>
              <p>
                You keep that rulepack. You can continue running FAIRy internally with it, and you can add or refine rules over time as your policies change.
              </p>
              <p>
                Some groups are comfortable maintaining their own rulepack after the pilot. Others ask us to maintain and update it for them and keep generating reports. Both paths are supported.
              </p>
              <p>
                Pilots are structured, budgetable work.
              </p>
              <p style={{ marginBottom: '0' }}>
                If you manage or review incoming datasets and want to scope a pilot, you can request one here:
              </p>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a 
                  href="https://forms.gle/mALqVs2Y26SS5wRr8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Request pilot
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Get in touch with FAIRy</h2>
          <div className="section-content">
            <p>
              Get in touch about pilots, collaboration, or questions.
            </p>
          </div>
        </section>

        <div className="contact-section">
          <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <strong>Email:</strong> <a href="mailto:hello@datadabra.com" className="contact-link">hello@datadabra.com</a>
            </p>
            <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jenniferslotnick/" target="_blank" rel="noopener noreferrer" className="contact-link">jenniferslotnick</a>
            </p>
            <p style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <strong>GitHub:</strong> <a href="https://github.com/yuummmer" target="_blank" rel="noopener noreferrer" className="contact-link">yuummmer</a>
            </p>
          </div>
          <a href="mailto:hello@datadabra.com" className="btn-contact">
            Contact me
          </a>
        </div>
      </div>
    </>
  );
}


