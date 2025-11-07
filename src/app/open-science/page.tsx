"use client";

export default function OpenSciencePage() {
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
          padding: 3rem 1.5rem;
        }
        
        .header {
          padding: 4rem 0 2rem;
          text-align: center;
          border-bottom: 2px solid #e9d5ff;
          margin-bottom: 3rem;
        }
        
        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .header .subheader {
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
        
        .highlight-box p {
          color: #6b46c1;
          line-height: 1.7;
        }
        
        .links-table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .links-table th {
          background-color: #f3e8ff;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #4c1d95;
          border-bottom: 2px solid #e9d5ff;
        }
        
        .links-table td {
          padding: 1rem;
          border-bottom: 1px solid #e9d5ff;
          color: #6b46c1;
        }
        
        .links-table tr:last-child td {
          border-bottom: none;
        }
        
        .links-table a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
        }
        
        .links-table a:hover {
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
          .header h1 {
            font-size: 2rem;
          }
          
          .header .subheader {
            font-size: 1.125rem;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .container {
            padding: 2rem 1rem;
          }
          
          .links-table {
            font-size: 0.875rem;
          }
          
          .links-table th,
          .links-table td {
            padding: 0.75rem;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="header">
          <h1>Open Science</h1>
          <p className="subheader">
            FAIRy-core is built to support open science and FAIR data sharing. Here's what we share, how we engage with the community, and how FAIRy supports open science principles.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">What we share</h2>
          <div className="section-content">
            <p>
              FAIRy-core is open source and freely available. We share:
            </p>
            <ul>
              <li><strong>Public repositories:</strong> The FAIRy-core validator codebase is available on GitHub for researchers and developers to use, modify, and contribute to.</li>
              <li><strong>Example rulepacks:</strong> Starter rulepacks for common repositories (GEO, Zenodo, ENA) and data types, so you can see how validation rules are structured.</li>
              <li><strong>Demo datasets:</strong> Sample datasets that demonstrate FAIRy's validation capabilities, including GEO-bulk sequencing examples.</li>
              <li><strong>Talk slides and notes:</strong> Presentations from community events, workshops, and conferences, including our BIOFAIR Open Mic contributions.</li>
            </ul>
            
            <div className="highlight-box" style={{ marginTop: '2rem' }}>
              <h3>Licensing model</h3>
              <p>
                We use a dual-license and permissive content model to balance open science goals with sustainable development:
              </p>
              <ul style={{ marginTop: '1rem' }}>
                <li><strong>FAIRy-core (CLI + validators):</strong> Licensed under <strong>AGPL-3.0-only</strong>. This ensures the core validator remains open while allowing commercial licensing options for organizations that require it.</li>
                <li><strong>Rulepack schema & example rulepacks:</strong> Licensed under <strong>CC0</strong> (or CC BY-4.0). This encourages community rulepack sharing and avoids license contamination concerns.</li>
                <li><strong>Sample datasets:</strong> Licensed under <strong>CC BY-4.0</strong>, allowing reuse with attribution.</li>
                <li><strong>Hosted UI / orchestration:</strong> Proprietary or source-available (when available).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Community & Initiatives</h2>
          <div className="section-content">
            <p>
              We actively participate in open science communities and initiatives:
            </p>
            <ul>
              <li><strong>BIOFAIR Open Mic:</strong> Regular participation in BIOFAIR community discussions, sharing FAIRy's approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap.</li>
              <li><strong>Pilots and collaborations:</strong> Working with research institutions, core facilities, and data stewards to develop domain-specific rulepacks and validate FAIRy's approach in real-world settings.</li>
              <li><strong>Talks and events:</strong> Presenting at conferences, workshops, and community gatherings to share learnings and gather feedback.</li>
              <li><strong>Working groups:</strong> Engaging with standards bodies and working groups focused on FAIR data, metadata quality, and data submission workflows.</li>
            </ul>
            <p>
              If you're running a pilot, organizing an event, or part of a working group that could benefit from FAIRy, <a href="mailto:hello@datadabra.com">get in touch</a>.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">How FAIRy supports open science</h2>
          <div className="section-content">
            <div className="highlight-box">
              <h3>Local-first privacy</h3>
              <p>
                <strong>Analysis stays on your machine.</strong> FAIRy runs entirely on your computer or within your institution's network. Nothing is uploaded to external servers. This means researchers can validate sensitive or pre-publication data without privacy concerns, and institutions can maintain full control over their data workflows.
              </p>
            </div>
            
            <div className="highlight-box">
              <h3>Reproducibility</h3>
              <p>
                <strong>Attestations with hashes and rulepack versions.</strong> Every validation run produces an attestation file that documents exactly what was checked, when, and under which rulepack version. File hashes ensure you can verify data integrity, and rulepack versioning means you can reproduce validation results even as rules evolve. This supports reproducible research and transparent data quality assessment.
              </p>
            </div>
            
            <div className="highlight-box">
              <h3>Transparency</h3>
              <p>
                <strong>Pass/warn/fail reports with fix logs.</strong> FAIRy generates clear, human-readable readiness reports that show exactly what needs to be fixed and why. No black boxes — you can see the validation logic, understand the rules, and trace every issue back to a specific requirement. This transparency helps researchers learn FAIR data principles and makes the validation process educational, not just a gate.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Resources</h2>
          <div className="section-content">
            <p>
              Quick links to FAIRy-core resources and materials:
            </p>
            <table className="links-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GitHub (FAIRy-core)</td>
                  <td>
                    <a href="https://github.com/yuummmer/fairy-core" target="_blank" rel="noopener noreferrer">
                      View repository →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Examples / case studies</td>
                  <td>
                    <a href="/docs">
                      GEO-bulk and other examples →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Slides / notes</td>
                  <td>
                    <a href="/talks/biofair-open-mic-2025">
                      BIOFAIR deck →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Institution Kit (PDF)</td>
                  <td>
                    <a href="/institution-kit.pdf" download>
                      SBOM, security summary, deployment options →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

