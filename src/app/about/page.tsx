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
          <h2 className="section-title">Contact</h2>
          <div className="section-content">
            <p>
              Get in touch about pilots, collaboration, or questions.
            </p>
          </div>
        </section>

        <div className="contact-section">
          <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong> <a href="mailto:hello@datadabra.com">hello@datadabra.com</a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jenniferslotnick/" target="_blank" rel="noopener noreferrer">jenniferslotnick</a>
            </p>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>GitHub:</strong> <a href="https://github.com/yuummmer" target="_blank" rel="noopener noreferrer">yuummmer</a>
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


