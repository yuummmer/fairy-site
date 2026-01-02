"use client";

export default function DSLCProjectDecember2025Page() {
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
        
        .video-section {
          background-color: #f3e8ff;
          border-radius: 1.125rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .video-header {
          margin-bottom: 1rem;
        }
        
        .video-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin: 0;
        }
        
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 0.75rem;
          border: 2px solid #e9d5ff;
        }
        
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        
        .slides-link {
          margin-top: 1rem;
          text-align: center;
        }
        
        .slides-link a {
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.9375rem;
        }
        
        .slides-link a:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .slides-link a:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
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
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .section-inner {
            padding: 1.25rem;
          }
          
          .video-section {
            padding: 1.25rem;
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
          <h1>FAIRy: Reproducible Datasets by Default — DSLC Project Club</h1>
          <p className="event-info">Data Science Learning Community Project • December 13, 2025</p>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Abstract</h2>
            <p className="abstract">
              Community talk + live demo (recorded). This presentation covers FAIRy's approach to reproducible datasets by default, including the problem it solves, the validation approach, output/report bundles, rulepacks, and who it's for. The talk demonstrates how FAIRy helps researchers and data stewards ensure datasets meet repository requirements before submission, reducing back-and-forth with curators.
            </p>
          </div>
        </section>

        <section className="video-section">
          <div className="video-header">
            <h2>FAIRy: Reproducible Datasets by Default — DSLC Project Club</h2>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/nflHD662Jak"
              title="FAIRy: Reproducible Datasets by Default — DSLC Project Club"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="slides-link">
            <a 
              href="/talks/dslc-project-december-2025/FAIRy-Reproducible-Datasets-by-Default-Slides.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download presentation slides (PDF, opens in new window)"
            >
              Download slides (PDF) →
            </a>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Key takeaways</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">Dataset submission workflows often fail due to missing metadata, format issues, and misalignment with repository requirements, leading to delays and rejected submissions</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">FAIRy's local-first validation system checks datasets against configurable rulepacks before submission, catching issues early in the workflow</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">FAIRy generates one-page readiness reports (PASS/WARN/FAIL) and attestation bundles with timestamps, file hashes, and rulepack versions that can be attached to deposits as proof of review</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Domain-specific validation rules encode repository requirements (e.g., GEO, ENA) and can be customized for institutional policies, making validation transparent and inspectable</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Designed for data stewards, core facilities, collections managers, and researchers who need to ensure datasets meet repository requirements before submission, reducing back-and-forth with curators</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Try FAIRy</h2>
            <p className="bullet-text" style={{ marginBottom: '1rem' }}>
              Get started with FAIRy in 60 seconds. See the <a href="https://github.com/yuummmer/fairy-core#try-it-in-60-seconds" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>"Try it in 60 seconds"</a> section in the GitHub README for installation and quick start instructions.
            </p>
            <p className="bullet-text">
              <a href="https://github.com/yuummmer/fairy-core" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', fontWeight: '600', textDecoration: 'none' }}>
                View fairy-core repository on GitHub →
              </a>
            </p>
          </div>
        </section>

        <section className="cta-section">
          <p>Interested in learning more or trying FAIRy?</p>
          <p>
            <a href="mailto:hello@datadabra.com">Email hello@datadabra.com</a> or visit our <a href="/researchers">researchers page</a> to get started.
          </p>
          <div className="repo-link">
            <a href="https://github.com/yuummmer/fairy-core" target="_blank" rel="noopener noreferrer" aria-label="View FAIRy repository on GitHub (opens in new window)">
              View repository (early access) →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
