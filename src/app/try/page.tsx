"use client";

import { useState } from 'react';

export default function TryPage() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'unix' | 'windows'>('unix');

  const unixCommand = `# Create and activate a Python virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install FAIRy (engine) from GitHub
pip install -U pip
pip install "git+https://github.com/yuummmer/fairy-core.git@main"
fairy --version

# Clone GEO rulepacks (if rerunning, delete the folder first)
rm -rf fairy-rulepacks-geo
git clone https://github.com/yuummmer/fairy-rulepacks-geo.git
cd fairy-rulepacks-geo

# Run preflight
mkdir -p .tmp
fairy preflight \\
  --rulepack rulepacks/geo_bulk_seq/v0_2_0.json \\
  --samples  rulepacks/geo_bulk_seq/fixtures/samples_bad.tsv \\
  --files    rulepacks/geo_bulk_seq/fixtures/files.tsv \\
  --out      .tmp/geo_bulk_seq_report.json

# Open the report
less .tmp/geo_bulk_seq_report.md`;

  const windowsCommand = `# Create and activate a Python virtual environment
python -m venv .venv
.venv\\Scripts\\Activate.ps1

# Install FAIRy (engine) from GitHub
pip install -U pip
pip install "git+https://github.com/yuummmer/fairy-core.git@main"
fairy --version

# Clone GEO rulepacks (if rerunning, delete the folder first)
Remove-Item -Recurse -Force fairy-rulepacks-geo -ErrorAction SilentlyContinue
git clone https://github.com/yuummmer/fairy-rulepacks-geo.git
cd fairy-rulepacks-geo

# Run preflight
mkdir .tmp
fairy preflight `
    + '`' + `
  --rulepack rulepacks/geo_bulk_seq/v0_2_0.json `
    + '`' + `
  --samples  rulepacks/geo_bulk_seq/fixtures/samples_bad.tsv `
    + '`' + `
  --files    rulepacks/geo_bulk_seq/fixtures/files.tsv `
    + '`' + `
  --out      .tmp/geo_bulk_seq_report.json

# Open the report
Get-Content .tmp/geo_bulk_seq_report.md | less`;

  const copyCommand = () => {
    const command = activeTab === 'unix' ? unixCommand : windowsCommand;
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          padding: 0 1.5rem;
        }
        
        .hero {
          padding: 5rem 0;
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero p {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .command-section {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .command-section h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .command-box {
          background: #f3e8ff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1rem;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.875rem;
          color: #4c1d95;
          position: relative;
          margin-bottom: 1rem;
        }
        
        .command-text {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-all;
        }
        
        .copy-button {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: #7c3aed;
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .copy-button:hover {
          background: #6d28d9;
        }
        
        .copy-button.copied {
          background: #22c55e;
        }
        
        .what-youll-see {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .what-youll-see h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .output-preview {
          background: #faf5ff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          font-size: 0.875rem;
          color: #4c1d95;
          margin-bottom: 1rem;
          overflow-x: auto;
        }
        
        .output-preview pre {
          margin: 0;
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow-wrap: break-word;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
        }
        
        .status-pass {
          color: #22c55e;
          font-weight: 600;
        }
        
        .status-warn {
          color: #f59e0b;
          font-weight: 600;
        }
        
        .status-fail {
          color: #ef4444;
          font-weight: 600;
        }
        
        .video-section {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .video-section h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .video-wrapper {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          background: #000;
        }
        
        .video-wrapper video {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .note {
          font-size: 0.875rem;
          color: #6b46c1;
          font-style: italic;
          margin-top: 1rem;
        }
        
        .note-container {
          background: #f3e8ff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1rem 1.5rem;
          margin: 1.5rem auto 0;
          max-width: 700px;
          font-size: 0.875rem;
          color: #6b46c1;
          line-height: 1.6;
        }
        
        .contact-section {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
          text-align: center;
        }
        
        .contact-section h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .contact-section p {
          font-size: 1rem;
          color: #6b46c1;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .contact-link {
          color: #7c3aed;
          text-decoration: underline;
          font-weight: 600;
        }
        
        .contact-link:hover {
          color: #6d28d9;
        }
        
        .os-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #e9d5ff;
        }
        
        .os-tab {
          background: none;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #6b46c1;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: all 0.2s ease;
        }
        
        .os-tab:hover {
          color: #7c3aed;
          background: #faf5ff;
        }
        
        .os-tab.active {
          color: #7c3aed;
          border-bottom-color: #7c3aed;
        }
        
        .ui-link {
          display: inline-block;
          margin-top: 1rem;
          color: #7c3aed;
          text-decoration: underline;
          font-weight: 500;
          font-size: 0.875rem;
        }
        
        .ui-link:hover {
          color: #6d28d9;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }
          
          .hero h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero p {
            font-size: 1.125rem;
          }
          
          .command-section,
          .what-youll-see,
          .video-section,
          .contact-section {
            padding: 1.5rem;
          }
          
          .command-box {
            padding-right: 5rem;
          }
          
          .output-preview {
            padding: 1rem;
            font-size: 0.75rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .output-preview pre {
            white-space: pre;
            word-wrap: normal;
            overflow-x: auto;
          }
        }
      `}</style>
      
      <main>
        <div className="container">
          {/* Hero */}
          <section className="hero">
            <h1>Try GEO preflight demo</h1>
            <p>
              Run FAIRy locally in 2 minutes. No account needed. No uploads.
            </p>
            <div className="note-container">
              GEO (NCBI Gene Expression Omnibus) is a public repository for functional genomics data (e.g., RNA-seq). This demo checks whether a bulk-seq submission package is submission-ready.
            </div>
          </section>
          
          {/* Command Section */}
          <section className="command-section">
            <h2>1. Run these commands</h2>
            <div className="os-tabs">
              <button
                className={`os-tab ${activeTab === 'unix' ? 'active' : ''}`}
                onClick={() => setActiveTab('unix')}
              >
                macOS / Linux
              </button>
              <button
                className={`os-tab ${activeTab === 'windows' ? 'active' : ''}`}
                onClick={() => setActiveTab('windows')}
              >
                Windows (PowerShell)
              </button>
            </div>
            <div className="command-box">
              <button 
                className={`copy-button ${copied ? 'copied' : ''}`}
                onClick={copyCommand}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
              <pre className="command-text">{activeTab === 'unix' ? unixCommand : windowsCommand}</pre>
            </div>
            <p className="note">
              Runs locally on your machine. All processing happens offline.
            </p>
          </section>
          
          {/* Open Report Section */}
          <section className="command-section">
            <h2>2. Open the report</h2>
            <div className="os-tabs">
              <button
                className={`os-tab ${activeTab === 'unix' ? 'active' : ''}`}
                onClick={() => setActiveTab('unix')}
              >
                macOS / Linux
              </button>
              <button
                className={`os-tab ${activeTab === 'windows' ? 'active' : ''}`}
                onClick={() => setActiveTab('windows')}
              >
                Windows (PowerShell)
              </button>
            </div>
            <div className="command-box">
              <pre className="command-text">{activeTab === 'unix' 
                ? `# Open the report
less .tmp/geo_bulk_seq_report.md`
                : `# Open the report
Get-Content .tmp/geo_bulk_seq_report.md | less`}</pre>
            </div>
            <p className="note">
              The report is saved as Markdown (.md) and JSON. Want a clean run? Swap <code>samples_bad.tsv</code> → <code>samples.tsv</code> in the preflight command.
            </p>
          </section>
          
          {/* What You'll See */}
          <section className="what-youll-see">
            <h2>3. What you'll see</h2>
            <div className="output-preview">
              <pre>{`# FAIRy Preflight Report

- **Schema version:** 1.0.0
- **Rulepack:** geo_bulk_seq@0.2.0
- **FAIRy version:** 0.2.2
- **Generated at (UTC):** 2025-12-29T20:29:58.466142Z
- **Dataset ID:** sha256:052c2ab58c6ad35669b47881262e006a9e8b795a9af62f7aae9a9ce48d6c6faf
- **submission_ready:** \`False\`

## Summary

- FAIL findings: 1 ['GEO.BIO.CONTEXT_MISSING']
- WARN findings: 1 ['CORE.DATE.INVALID_ISO8601']

If \`submission_ready\` is \`True\`, FAIRy believes this dataset is ready to submit.

---

## Input provenance

These hashes and dimensions identify the exact files that FAIRy validated.
You can hand this block to a curator or PI as evidence of what was checked.

### samples.tsv

- path: 'rulepacks/geo_bulk_seq/fixtures/samples_bad.tsv'
- sha256: '96ae14a766369c0ab581bf7dc16af186fc732139adc23eb438d8de47ad49e798'
- rows: '2'
- cols: '8'

### files.tsv

- path: 'rulepacks/geo_bulk_seq/fixtures/files.tsv'
- sha256: '3305edf715ad6f1bf9ade6ee48cfc84e6599d25e42cf2a32d8741a32185ed348'
- rows: '4'
- cols: '3'

---

## Results (all current issues)

Level \`fail\` means "must fix before submission."
Level \`warn\` means "soft violation / likely curator feedback."
Level \`pass\` means the rule passed with no violations.

| Level | Rule | Count | Samples |
|-------|------|-------|--------|
| warn | CORE.DATE.INVALID_ISO8601 | 1 | row 1, col collection_date |
| pass | CORE.ID.UNMATCHED_SAMPLE | 0 | (none) |
| fail | GEO.BIO.CONTEXT_MISSING | 1 | row 1 |
| pass | GEO.FILE.PAIRING_MISMATCH | 0 | (none) |
| pass | GEO.REQ.MISSING_FIELD | 0 | (none) |
| pass | GEO.REQ.MISSING_PROCESSED_DATA | 0 | (none) |

### CORE.DATE.INVALID_ISO8601 (warn, 1 sample)

- row 1, column 'collection_date', message: Value '2025/01/15' in collection_date is not ISO8601 (YYYY-MM-DD)., hint: Use format YYYY-MM-DD, e.g. 2025-10-02.

### GEO.BIO.CONTEXT_MISSING (fail, 1 sample)

- row 1, message: Sample 'S1' does not provide tissue/cell_line/cell_type., hint: Fill at least one of: tissue, cell_line, or cell_type.

---

## Resolved since last run

_No baseline from prior run (first run or cache missing)._`}</pre>
            </div>
            <p className="note">
              FAIRy generates a Markdown report you can share with contributors, plus a machine-readable JSON attestation file.
            </p>
          </section>
          
          {/* Video Section */}
          <section className="video-section">
            <h2>4. Watch the walkthrough</h2>
            <div className="video-wrapper">
              <video
                controls
                preload="metadata"
                aria-label="FAIRy GEO preflight demo walkthrough"
              >
                <source src="/videos/fairy-geo-preflight-demo-2min-2025-12-29-v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="note">
              2-minute demo showing how FAIRy validates datasets and generates readiness reports.
            </p>
          </section>
          
          {/* Contact Section */}
          <section className="contact-section">
            <h2>Need help with your own datasets?</h2>
            <p>
              If you're working with your lab's data and need help setting up validation rules or creating custom rulepacks, we're here to help.
            </p>
            <p>
              <a href="mailto:hello@datadabra.com" className="contact-link">
                Contact hello@datadabra.com
              </a>
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginTop: '1rem' }}>
              For labs, cores, and institutions looking to implement FAIRy for their data submission workflows.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

