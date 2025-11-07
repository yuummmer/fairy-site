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
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-secondary:hover {
          border-color: #7c3aed;
          color: #7c3aed;
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
              <li><strong>Public repositories:</strong> The <a href="https://github.com/yuummmer/fairy-core" target="_blank" rel="noopener noreferrer">FAIRy-core validator codebase</a> is available on GitHub for researchers and developers to use, modify, and contribute to. We welcome community contributions through pull requests, issue reports, and discussions. We maintain shared rulepacks for common repositories (GEO, Zenodo, ENA) and data types, and we're building processes to review and merge community-submitted rulepacks so the library grows with real-world use cases.</li>
              <li><strong>Example rulepacks:</strong> <a href="https://github.com/yuummmer/fairy-core/tree/main/src/fairy/rulepacks" target="_blank" rel="noopener noreferrer">Starter rulepacks</a> for common repositories (GEO, Zenodo, ENA) and data types, so you can see how validation rules are structured.</li>
              <li><strong>Demo datasets:</strong> Sample datasets that demonstrate FAIRy's validation capabilities, including GEO-bulk sequencing examples (coming soon).</li>
              <li><strong>Talk slides and notes:</strong> <a href="/talks/biofair-open-mic-2025">Presentations</a> from community events, workshops, and conferences, including our BIOFAIR Open Mic contributions.</li>
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
              <li><strong><a href="/talks/biofair-open-mic-2025">BIOFAIR Open Mic</a>:</strong> Regular participation in <a href="/talks/biofair-open-mic-2025">BIOFAIR community discussions</a>, sharing FAIRy's approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap.</li>
              <li><strong><a href="/preflight-mapping">Pilots and collaborations</a>:</strong> Working with research institutions, core facilities, and data stewards to develop domain-specific rulepacks and validate FAIRy's approach in real-world settings. <a href="/preflight-mapping">Request a pilot scope →</a></li>
              <li><strong><a href="/talks">Talks and events</a>:</strong> Presenting at conferences, workshops, and community gatherings to share learnings and gather feedback. <a href="/talks">View our talks →</a></li>
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
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e9d5ff' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
                  Example attestation snippet:
                </p>
                <pre style={{ fontSize: '0.75rem', color: '#4c1d95', overflowX: 'auto', margin: 0, lineHeight: '1.6' }}>{`{
  "attestation": {
    "fairy_version": "0.1.0",
    "rulepack": "GEO-SEQ-BULK/v0_1_0.json",
    "timestamp": "2025-11-15T10:30:00Z",
    "submission_ready": false
  },
  "file_hashes": {
    "samples.tsv": "sha256:abc123...",
    "files.tsv": "sha256:def456..."
  },
  "findings": [...]
}`}</pre>
              </div>
            </div>
            
            <div className="highlight-box">
              <h3>Transparency</h3>
              <p>
                <strong>Pass/warn/fail reports with fix logs.</strong> FAIRy generates clear, human-readable readiness reports that show exactly what needs to be fixed and why. No black boxes — you can see the validation logic, understand the rules, and trace every issue back to a specific requirement. This transparency helps researchers learn FAIR data principles and makes the validation process educational, not just a gate.
              </p>
              <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e9d5ff' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                  Sample readiness report:
                </p>
                <div style={{ fontSize: '0.875rem', color: '#4c1d95', lineHeight: '1.8' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: '#dcfce7', borderRadius: '4px', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#059669' }}>✓ PASS:</strong> All required metadata fields present
                  </div>
                  <div style={{ padding: '0.5rem', backgroundColor: '#fef3c7', borderRadius: '4px', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#d97706' }}>⚠ WARN:</strong> Date format should be ISO 8601 (found: "11/15/2025")
                  </div>
                  <div style={{ padding: '0.5rem', backgroundColor: '#fee2e2', borderRadius: '4px' }}>
                    <strong style={{ color: '#dc2626' }}>✗ FAIL:</strong> Missing required field: "sample_id"
                  </div>
                </div>
              </div>
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
            <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginTop: '1rem', fontStyle: 'italic' }}>
              Last updated: November 2025
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">How to cite FAIRy</h2>
          <div className="section-content">
            <p>
              If you use FAIRy in your research, please cite:
            </p>
            <div className="highlight-box">
              <h3>APA Style</h3>
              <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#4c1d95', lineHeight: '1.8' }}>
                Slotnick, J. (2025). <em>FAIRy Core</em> (Version 0.1) [Computer software]. Datadabra. <br />
                https://github.com/yuummmer/fairy-core
              </p>
            </div>
            <div className="highlight-box">
              <h3>BibTeX</h3>
              <pre style={{ fontSize: '0.875rem', color: '#4c1d95', lineHeight: '1.8', overflowX: 'auto' }}>{`@software{fairy2025,
  author = {Slotnick, Jennifer},
  title = {FAIRy Core},
  year = {2025},
  version = {0.1},
  publisher = {Datadabra},
  url = {https://github.com/yuummmer/fairy-core}
}`}</pre>
            </div>
          </div>
        </section>

        <section className="section" style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <div className="highlight-box" style={{ backgroundColor: '#f3e8ff' }}>
            <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Get started with FAIRy</h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/researchers" 
                className="btn-primary"
                style={{
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '18px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Download FAIRy-core →
              </a>
              <a 
                href="/preflight-mapping" 
                className="btn-secondary"
                style={{
                  backgroundColor: 'transparent',
                  color: '#6b46c1',
                  padding: '1rem 2rem',
                  border: '2px solid #c4b5fd',
                  borderRadius: '0.75rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '18px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                Request a Pilot Scope →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

