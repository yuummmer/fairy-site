"use client";

export default function BiofairOpenMic2025Page() {
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
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .back-link {
          display: inline-block;
          color: #6b46c1;
          text-decoration: none;
          margin: 2rem 0 1rem;
          font-weight: 500;
        }
        
        .back-link:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .back-link:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        .hero {
          padding: 1.5rem 0 2rem;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        
        .hero .event-info {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
        }
        
        .content-section {
          padding: 2rem 0;
          background-color: #ffffff;
          border-radius: 1.125rem;
          margin-bottom: 1.5rem;
          border: 2px solid #e9d5ff;
        }
        
        .section-inner {
          padding: 1.5rem;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .abstract {
          color: #6b46c1;
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 0;
        }
        
        .abstract a {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .abstract a:hover {
          color: #6d28d9;
        }
        
        .abstract a:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        .download-section {
          background-color: #f3e8ff;
          border-radius: 1.125rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .download-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .download-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin: 0;
        }
        
        .btn-download {
          background-color: #7c3aed;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-download:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-download:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .pdf-viewer {
          width: 100%;
          height: 600px;
          border: 2px solid #e9d5ff;
          border-radius: 0.75rem;
          margin-top: 1rem;
        }
        
        .bullet-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        
        .bullet-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          padding-left: 1.75rem;
          position: relative;
        }
        
        .bullet-item:last-child {
          margin-bottom: 0;
        }
        
        .bullet-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-size: 1.5rem;
          line-height: 1.2;
        }
        
        .bullet-text {
          color: #6b46c1;
          line-height: 1.6;
        }
        
        .usage-snippet {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem;
          margin: 1rem 0 0;
          font-family: 'Courier New', monospace;
          font-size: 0.8125rem;
          color: #374151;
          overflow-x: auto;
        }
        
        .usage-snippet pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .cta-section {
          background-color: #f3e8ff;
          border-radius: 1.125rem;
          padding: 1.5rem;
          margin-top: 1.5rem;
          text-align: center;
        }
        
        .cta-section p {
          color: #6b46c1;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .cta-section a {
          color: #7c3aed;
          font-weight: 600;
          text-decoration: none;
        }
        
        .cta-section a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .cta-section a:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        .repo-link {
          margin-top: 1rem;
          text-align: center;
        }
        
        .repo-link a {
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.9375rem;
        }
        
        .repo-link a:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .repo-link a:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        .bcon-link:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .section-inner {
            padding: 1.25rem;
          }
          
          .download-section {
            padding: 1.25rem;
          }
          
          .download-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .pdf-viewer {
            height: 400px;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="container">
        <nav aria-label="Breadcrumb navigation">
          <a href="/talks" className="back-link" aria-label="Back to talks listing">
            ← Back to talks
          </a>
        </nav>

        <section className="hero">
          <h1>BIOFAIR Open Mic 2025</h1>
          <p className="event-info">BIOFAIR Open Mic • October 30, 2025</p>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Abstract</h2>
            <p className="abstract">
              An overview of FAIRy's approach to local-first dataset pre-checking and how it supports the <a href="https://bcon.aibs.org/biofair" target="_blank" rel="noopener noreferrer" aria-label="BIOFAIR Data Network (opens in new window)">BIOFAIR Data Network</a> roadmap, specifically contributing to the Stocktaking & Gap Analysis initiative. This talk covers the tool's capabilities, the rulepack system for domain-specific validation, and how it helps researchers prepare data before submission to repositories like GEO, ENA, and Zenodo.
            </p>
          </div>
        </section>

        <section className="download-section">
          <div className="download-header">
            <h2>Slides</h2>
            <a 
              href="/talks/biofair-open-mic-2025/BIOFAIR-Open-Mic.pdf" 
              className="btn-download"
              download
            >
              Download PDF
            </a>
          </div>
          <iframe
            src="/talks/biofair-open-mic-2025/BIOFAIR-Open-Mic.pdf"
            className="pdf-viewer"
            title="BIOFAIR Open Mic 2025 presentation slides"
            aria-label="Embedded PDF viewer for BIOFAIR Open Mic 2025 presentation slides"
          />
          <p style={{ marginTop: '1rem', fontSize: '0.9375rem', color: '#6b46c1', textAlign: 'center' }}>
            <a href="https://bcon.aibs.org/event/biofair-data-network-open-mic-for-data/" target="_blank" rel="noopener noreferrer" aria-label="Full presentation slides and event recording available on BCoN website (opens in new window)" className="bcon-link" style={{ color: '#7c3aed', textDecoration: 'underline' }}>
              Full presentation slides and event recording available on BCoN website →
            </a>
          </p>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Key takeaways</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">FAIRy contributes to the Stocktaking & Gap Analysis slice of the BIOFAIR Data Network roadmap by assessing dataset readiness before it reaches a repository</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">A local-first validator and packager that compares what's in a submission to what's required, flagging gaps with pass / warn / fail</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Generates shareable attestations that can be used to demonstrate readiness without exposing raw data</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Open source and extensible: the first rulepack targets ENA, with the ability for teams to author their own repository-specific rulepacks to fit local policies</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Helps reviewers and submitters identify the top 5–7 critical checks needed for successful repository submissions</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Usage snippet</h2>
            <p className="bullet-text" style={{ marginBottom: '1rem' }}>
              Example commands for running FAIRy pre-flight checks, generating readiness reports, and exporting validated data packages.
            </p>
            <div className="usage-snippet">
              <pre>{`# Run FAIRy pre-flight check
fairy check --rulepack geo-seq-bulk metadata.tsv samples.tsv

# Generate readiness report
fairy report --output readiness-report.md

# Export validated data package
fairy export --format zenodo`}</pre>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <p>Interested in an ENA rulepack pilot?</p>
          <p>
            <a href="mailto:hello@datadabra.com">Email hello@datadabra.com</a>
          </p>
          <div className="repo-link">
            <a href="https://github.com/datadabra/fairy" target="_blank" rel="noopener noreferrer" aria-label="View FAIRy repository on GitHub (opens in new window)">
              View repository (early alpha) →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
