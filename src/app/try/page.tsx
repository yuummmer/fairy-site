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
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .hero {
          padding: 3rem 0 2rem;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero p {
          font-size: 1.125rem;
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
        }
        
        .output-preview pre {
          margin: 0;
          white-space: pre-wrap;
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
          .hero h1 {
            font-size: 2rem;
          }
          
          .command-section,
          .what-youll-see,
          .video-section {
            padding: 1.5rem;
          }
          
          .command-box {
            padding-right: 5rem;
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
              <pre>{`FAIRy Submission Readiness Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rulepack: geo_bulk_seq@0.2.0
Dataset: samples.tsv, files.tsv

Summary:
  ✓ PASS: 12 checks
  ⚠ WARN: 1 check
  ✗ FAIL: 2 checks

Findings:
  ✗ FAIL: CORE.ID.UNMATCHED_SAMPLE
     → Sample ID in metadata.tsv doesn't match samples.tsv
     → Fix: Update sample IDs to match across files
  
  ✗ FAIL: GEO.REQUIRED.MISSING_FIELD
     → Missing required field: 'platform'
     → Fix: Add platform information to metadata.tsv
  
  ⚠ WARN: CORE.DATE.INVALID_ISO8601
     → Date format should be YYYY-MM-DD
     → Fix: Update date column to ISO 8601 format

submission_ready: False
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Markdown report: .tmp/geo_bulk_seq_report.md
JSON report: .tmp/geo_bulk_seq_report.json`}</pre>
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
                <source src="/videos/fairy-geo-preflight-demo-3min-2025-12-29-v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="note">
              2-minute demo showing how FAIRy validates datasets and generates readiness reports.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

