"use client";

import React, { useEffect, useState } from 'react';

export default function Documentation() {
  const [activeId, setActiveId] = useState<string>("checks");

  useEffect(() => {
    const sectionIds = ["checks", "data-handling", "licensing", "coming-next", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        } else {
          // fallback: find the section closest above viewport
          const scrollY = window.scrollY + 120; // header offset
          let current = sections[0].id;
          for (const s of sections) {
            if (s.offsetTop <= scrollY) current = s.id;
          }
          setActiveId(current);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .docs-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 32px;
        }
        
        .sidebar {
          position: sticky;
          top: 84px; /* below site header */
          align-self: start;
          height: max-content;
        }
        
        .sidebar-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #6b46c1;
          margin-bottom: 8px;
        }
        
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-left: 2px solid #e9d5ff;
          padding-left: 12px;
        }
        
        .sidebar-link {
          color: #6b46c1;
          text-decoration: none;
          padding: 6px 4px;
          border-radius: 8px;
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        .sidebar-link:hover { color: #7c3aed; background-color: #f3e8ff; }
        .sidebar-link.active { color: #7c3aed; font-weight: 600; }
        
        .header {
          padding: 40px 0;
          border-bottom: 2px solid #e9d5ff;
          margin-bottom: 40px;
        }
        
        .header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 8px;
        }
        
        .header .subtitle {
          color: #6b46c1;
          font-size: 1.125rem;
        }
        
        /* legacy top nav (hidden on desktop; used on mobile) */
        .nav-links { display: none; }
        .nav-link { color: #6b46c1; text-decoration: none; font-weight: 500; padding: 8px 12px; border-radius: 8px; }
        .nav-link:hover { color: #7c3aed; background-color: #f3e8ff; }
        
        .section {
          margin-bottom: 60px;
        }
        
        .section-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 24px;
          padding-top: 20px;
        }
        
        .section-content {
          color: #6b46c1;
          line-height: 1.7;
        }
        
        .section-content p {
          margin-bottom: 16px;
        }
        
        .section-content ul {
          margin-bottom: 16px;
          padding-left: 24px;
        }
        
        .section-content li {
          margin-bottom: 8px;
        }
        
        .highlight-box {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .highlight-box h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 16px;
        }
        
        .code-block {
          background-color: #1e293b;
          color: #e2e8f0;
          padding: 20px;
          border-radius: 12px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.875rem;
          overflow-x: auto;
          margin: 16px 0;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 24px 0;
        }
        
        .feature-card {
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 24px;
        }
        
        .feature-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 12px;
        }
        
        .feature-card p {
          color: #6b46c1;
          font-size: 0.875rem;
        }
        
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-left: 8px;
        }
        
        .status-current {
          background-color: #ede9fe;
          color: #4c1d95;
        }
        
        .status-planned {
          background-color: #f3e8ff;
          color: #6b46c1;
        }
        
        .contact-section {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 18px;
          padding: 32px;
          text-align: center;
        }
        
        .contact-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 16px;
        }
        
        .contact-text {
          color: #6b46c1;
          margin-bottom: 24px;
        }
        
        .btn-contact {
          background-color: #7c3aed;
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }
        
        .btn-contact:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6b46c1;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 24px;
        }
        
        .back-link:hover {
          color: #7c3aed;
        }
        
        .mapping-table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .mapping-table th {
          background: #f3e8ff;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #4c1d95;
          border-bottom: 1px solid #e9d5ff;
          font-size: 0.875rem;
        }
        
        .mapping-table td {
          padding: 1rem;
          border-bottom: 1px solid #f3e8ff;
          color: #6b46c1;
          font-size: 0.875rem;
        }
        
        .mapping-table tr:last-child td {
          border-bottom: none;
        }
        
        .mapping-table a {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .mapping-table a:hover {
          color: #6d28d9;
        }
        
        .mapping-table .pass {
          color: #059669;
          font-weight: 600;
        }
        
        .mapping-table .warning {
          color: #d97706;
          font-weight: 600;
        }
        
        .mapping-table .fail {
          color: #dc2626;
          font-weight: 600;
        }
        
        @media (max-width: 900px) {
          .docs-layout { grid-template-columns: 1fr; }
          .sidebar { position: relative; top: 0; border: none; }
          .sidebar-nav { flex-direction: row; flex-wrap: wrap; border-left: none; padding-left: 0; gap: 8px; }
          .sidebar-title { display: none; }
          .nav-links { display: flex; gap: 12px; margin-bottom: 16px; }
          .nav-links {
            flex-direction: column;
            gap: 12px;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
          }
          
          .mapping-table {
            display: block;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .mapping-table th,
          .mapping-table td {
            padding: 0.75rem 0.5rem;
            font-size: 0.8125rem;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="back-link" onClick={() => window.history.back()}>
          ← Back to FAIRy
        </div>
        
        <div className="header">
          <h1>FAIRy documentation</h1>
          <p className="subtitle">Everything you need to know about dataset validation</p>
        </div>

        <div className="docs-layout">
          <aside className="sidebar" aria-label="On this page">
            <div className="sidebar-title">On this page</div>
            <nav className="sidebar-nav">
              <a href="#checks" className={`sidebar-link ${activeId === 'checks' ? 'active' : ''}`}>What FAIRy checks</a>
              <a href="#data-handling" className={`sidebar-link ${activeId === 'data-handling' ? 'active' : ''}`}>Data handling</a>
              <a href="#licensing" className={`sidebar-link ${activeId === 'licensing' ? 'active' : ''}`}>Licensing</a>
              <a href="#coming-next" className={`sidebar-link ${activeId === 'coming-next' ? 'active' : ''}`}>What&apos;s coming next</a>
              <a href="#contact" className={`sidebar-link ${activeId === 'contact' ? 'active' : ''}`}>Contact</a>
            </nav>
          </aside>

          <div>
            <nav className="nav-links" aria-label="On this page (mobile)">
              <a href="#checks" className="nav-link">What FAIRy checks</a>
              <a href="#data-handling" className="nav-link">Data handling</a>
              <a href="#licensing" className="nav-link">Licensing</a>
              <a href="#coming-next" className="nav-link">What&apos;s coming next</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            <section id="checks" className="section">
          <h2 className="section-title">What FAIRy checks today</h2>
          <div className="section-content">
            <p>
              FAIRy focuses on the common reasons datasets get delayed or rejected during submission. We&apos;re modeling these checks on patterns from public repositories like GEO and Zenodo.
            </p>
            
            <div className="feature-grid">
              <div className="feature-card">
                <h4>GEO (Gene Expression Omnibus)</h4>
                <p>
                  Checks for missing required fields, filename patterns that include the accession ID, basic platform / sample annotations, and other issues that commonly cause GEO submissions to bounce.
                </p>
              </div>
              <div className="feature-card">
                <h4>Zenodo</h4>
                <p>
                  Flags missing descriptive metadata, unclear licensing, and file organization issues that make it hard to publish a clean record.
                </p>
              </div>
            </div>
            
            <div className="highlight-box">
              <h3>Validation categories</h3>
              <ul>
                <li><strong>Metadata completeness:</strong> Required fields, data types, and format validation</li>
                <li><strong>File organization:</strong> Naming conventions, directory structure, and file formats</li>
                <li><strong>Repository-style expectations:</strong> sample/platform annotations, organism/host fields, accession-aware filenames, and other elements commonly required at submission time</li>
                <li><strong>Data integrity:</strong> Checksums, file sizes, and format validation</li>
                <li><strong>Reuse signals:</strong> license clarity, contact information, and basic attribution info so a curator (or future user) knows who to reach and how it can be shared</li>
              </ul>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginTop: '32px', marginBottom: '16px' }}>Repository-style expectations</h3>
            <p style={{ color: '#6b46c1', marginBottom: '16px' }}>
              These checks are modeled on common reject reasons from public repositories like GEO and Zenodo (missing required fields, bad filenames, nonstandard dates). This is not an official submission approval.
            </p>
            
            <table className="mapping-table">
              <thead>
                <tr>
                  <th>FAIRy check</th>
                  <th>GEO-style requirement</th>
                  <th>Zenodo-style requirement</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Metadata completeness</td>
                  <td><a href="https://www.ncbi.nlm.nih.gov/geo/info/submission.html" target="_blank" rel="noopener">GEO submission guide</a></td>
                  <td><a href="https://help.zenodo.org/features/deposit-form/" target="_blank" rel="noopener">Zenodo metadata guide</a></td>
                  <td className="pass">✓ Passed</td>
                </tr>
                <tr>
                  <td>File naming convention</td>
                  <td><a href="https://www.ncbi.nlm.nih.gov/geo/info/seq.html" target="_blank" rel="noopener">GEO file naming</a></td>
                  <td><a href="https://help.zenodo.org/features/deposit-form/" target="_blank" rel="noopener">Zenodo file naming</a></td>
                  <td className="warning">⚠ Warning</td>
                </tr>
                <tr>
                  <td>Date format standardization</td>
                  <td><a href="https://www.ncbi.nlm.nih.gov/geo/info/submission.html" target="_blank" rel="noopener">GEO date format</a></td>
                  <td><a href="https://help.zenodo.org/features/deposit-form/" target="_blank" rel="noopener">Zenodo date format</a></td>
                  <td className="warning">⚠ Warning</td>
                </tr>
                <tr>
                  <td>Required fields</td>
                  <td><a href="https://www.ncbi.nlm.nih.gov/geo/info/submission.html" target="_blank" rel="noopener">GEO required fields</a></td>
                  <td><a href="https://help.zenodo.org/features/deposit-form/" target="_blank" rel="noopener">Zenodo required fields</a></td>
                  <td className="fail">✗ Failed</td>
                </tr>
              </tbody>
            </table>
            
            <h3 id="checks-attestation" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginTop: '48px', marginBottom: '24px', paddingTop: '20px' }}>What&apos;s the attestation file?</h3>
            <p style={{ color: '#6b46c1', marginBottom: '16px' }}>
              FAIRy generates an attestation file that documents your validation process. You can attach this file to the dataset bundle when you hand it to a curator, a journal, or a program officer. It&apos;s your "we actually checked this" receipt.
            </p>
            
            <div className="highlight-box">
              <h3>Why attestation matters</h3>
              <p>
                The attestation file provides documented proof that validation was performed, which is valuable for:
              </p>
              <ul>
                <li><strong>Institutions:</strong> Demonstrate that you have records of validation performed before submission, reducing administrative back-and-forth.</li>
                <li><strong>Journals:</strong> Show that data quality checks were performed using standardized validation rules and versioned rulepacks—demonstrating due diligence.</li>
                <li><strong>Grant panels:</strong> Prove that your institution has processes in place to streamline data deposition and reduce friction for data publication.</li>
              </ul>
            </div>
            
            <div className="highlight-box">
              <h3>What the attestation file includes</h3>
              <ul>
                <li><strong>FAIRy version and rulepack used:</strong> Documents which validation rules were applied and in which version.</li>
                <li><strong>Validation timestamp:</strong> Records when the validation was performed.</li>
                <li><strong>Summary of checks performed:</strong> Lists what was validated (e.g., dates normalized to ISO 8601, IDs validated, units standardized, ORCIDs present and well-formed).</li>
                <li><strong>File hashes and manifest information:</strong> Provides SHA-256 checksums for data files to verify integrity.</li>
                <li><strong>Repository dry-run results:</strong> Shows whether the dataset passed preflight checks for specific repositories (e.g., GEO, Zenodo).</li>
              </ul>
            </div>
            
            <div className="highlight-box">
              <h3>Sample attestation file</h3>
              <p>
                You can download a sample attestation file to see what it looks like:
              </p>
              <p>
                <a href="/samples/export-pack/FAIRy_attestation_example.json" download style={{ color: '#7c3aed', textDecoration: 'underline' }}>Download sample attestation file (FAIRy_attestation_example.json)</a>
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginTop: '12px' }}>
                Learn more about how attestation helps with compliance and due diligence in our <a href="/institutions#attestation" style={{ color: '#7c3aed', textDecoration: 'underline' }}>institutions documentation</a>.
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginTop: '12px', fontStyle: 'italic' }}>
                Note: This is illustrative; production attestation files include a signed JSON format for institutional deployments.
              </p>
            </div>
          </div>
            </section>
            
            <section id="data-handling" className="section">
          <h2 className="section-title">Data handling</h2>
          <div className="section-content">
            <p>FAIRy is designed to respect institutional boundaries, sensitive data, and curator workload.</p>

            <div className="highlight-box">
              <h3>Local-only processing</h3>
              <p>All validation runs inside your environment (laptop, lab machine, core facility server, HPC cluster, etc.).</p>
              <p>FAIRy does not send your raw data, filenames, sample IDs, coordinates, or metadata to us.</p>
            </div>

            <div className="highlight-box">
              <h3>Institution control</h3>
              <p>You decide where reports are written and who sees them. FAIRy produces:</p>
              <ul>
                <li>a human-readable readiness sheet (PASS / WARN / FAIL, why it matters, how to fix), and</li>
                <li>a machine-readable summary.</li>
              </ul>
              <p>You can share those internally without sharing the underlying data.</p>
            </div>

            <div className="highlight-box">
              <h3>No phoning home</h3>
              <p>FAIRy does not collect usage analytics or send telemetry.</p>
              <p>We don't phone home with filenames, metadata, run logs, or error details.</p>
              <p>The only information we receive is what you explicitly choose to send us (for example, if you fill out a pilot interest form).</p>
            </div>

            <div className="highlight-box">
              <h3>Data use</h3>
              <p>We do not use your datasets or metadata to train models or build products.</p>
              <p>FAIRy is designed to be run locally so your data stays under your control.</p>
            </div>
              </div>
            </section>
            
            <section id="licensing" className="section">
          <h2 className="section-title">Licensing</h2>
          <div className="section-content">
            <p>
              FAIRy uses a dual-license and permissive content model to balance open science goals with sustainable development:
            </p>
            
            <div className="highlight-box">
              <h3>FAIRy-core (CLI + validators)</h3>
              <p>
                Licensed under <strong>AGPL-3.0-only</strong>. This ensures the core validator remains open while allowing commercial licensing options for organizations that require it.
              </p>
              <p style={{ marginTop: '12px', fontSize: '0.875rem', color: '#6b46c1' }}>
                Commercial licensing is available. Contact <a href="mailto:hello@datadabra.com" style={{ color: '#7c3aed', textDecoration: 'underline' }}>hello@datadabra.com</a> for details.
              </p>
            </div>
            
            <div className="highlight-box">
              <h3>Rulepack schema & example rulepacks</h3>
              <p>
                Licensed under <strong>CC0</strong> (or CC BY-4.0). This encourages community rulepack sharing and avoids license contamination concerns.
              </p>
            </div>
            
            <div className="highlight-box">
              <h3>Sample datasets</h3>
              <p>
                Licensed under <strong>CC BY-4.0</strong>, allowing reuse with attribution.
              </p>
            </div>
            
            <div className="highlight-box">
              <h3>Hosted UI / orchestration</h3>
              <p>
                Proprietary or source-available (when available).
              </p>
            </div>
            
            <p style={{ marginTop: '24px', fontSize: '0.875rem', color: '#6b46c1' }}>
              For more details, see the <a href="https://github.com/yuummmer/fairy-core" target="_blank" rel="noopener noreferrer" style={{ color: '#7c3aed', textDecoration: 'underline' }}>FAIRy-core repository</a> or visit our <a href="/open-science" style={{ color: '#7c3aed', textDecoration: 'underline' }}>Open Science</a> page.
            </p>
          </div>
            </section>
            
            <section id="coming-next" className="section">
          <h2 className="section-title">What we&apos;re exploring with early partners</h2>
          <div className="section-content">
            <p>
              We&apos;re scoping next steps with institutions to expand FAIRy&apos;s preflight checks to more data types, formats, and repositories.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h4>SRA / NCBI-style preflight</h4>
                <p>
                  Check that required metadata fields and filenames are present before attempting SRA submission.
                </p>
                <p><strong>Goal:</strong> catch missing sample / experiment / run info early so you don’t learn about it during upload.</p>
              </div>
              <div className="feature-card">
                <h4>FASTA / GFF3 checks</h4>
                <p>
                  Basic structural checks for common genomics formats (FASTA, GFF3): do the files parse, are the expected fields present, do IDs line up.
                </p>
                <p><strong>Goal:</strong> reduce back-and-forth on “the file won’t load” issues.</p>
              </div>
              <div className="feature-card">
                <h4>Generalist repository support</h4>
                <p>
                  Extend preflight checks for generalist repositories (e.g. Dryad, Zenodo-style deposits): make sure descriptive metadata, licensing, and basic organization are present before packaging.
                </p>
                <p><strong>Goal:</strong> fewer “what is this / who owns this / can we even share this?” emails.</p>
              </div>
              <div className="feature-card">
                <h4>Multi-dataset runs</h4>
                <p>
                  Run the same preflight rules across many submissions and get a summary of which ones are missing required fields.
                </p>
                <p><strong>Goal:</strong> help cores / data offices apply consistent intake standards across labs.</p>
              </div>
            </div>

            <div className="highlight-box">
              <h3>Core pilot promise</h3>
              <p>FAIRy’s job is simple:</p>
              <p><strong>One run →</strong> a human-readable readiness sheet (PASS / WARN / FAIL + how to fix) → plus a structured summary you can archive.</p>
              <div className="code-block">fairy validate /path/to/dataset --out out/</div>
              <div className="highlight-box">
                <h4>Outputs</h4>
                <ul>
                  <li><code>readiness-report.html</code> — what to fix, in plain English</li>
                  <li><code>validation-summary.json</code> — machine-readable summary</li>
                  <li><code>attestation file</code> — documented proof that validation was performed (see <a href="#checks-attestation" style={{ color: '#7c3aed', textDecoration: 'underline' }}>What&apos;s the attestation file?</a>)</li>
                </ul>
              </div>
            </div>
              </div>
            </section>
            
            <section id="contact" className="section">
              <div className="contact-section">
                <h2 className="contact-title">Get involved</h2>
                <p className="contact-text">
                  Help shape FAIRy&apos;s development by sharing your feedback, 
                  reporting issues, or requesting new features.
                </p>
                <a href="mailto:hello@datadabra.com" className="btn-contact">hello@datadabra.com</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
