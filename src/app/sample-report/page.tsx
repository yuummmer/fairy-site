"use client";

import { useEffect, useState } from 'react';

export default function SampleReportPage() {
  const [generatedTimestamp, setGeneratedTimestamp] = useState("");

  useEffect(() => {
    const now = new Date();
    setGeneratedTimestamp(`${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`);
  }, []);

  const downloadReport = () => {
    const now = new Date();
    const utcTime = now.toISOString();
    const dateStr = utcTime.split('T')[0];
    const timeStr = utcTime.split('T')[1].split('.')[0];
    
    const reportContent = `This report was generated locally by FAIRy.
You can send it back to the person who prepared the dataset and say:
"Please fix the FAIL items before I can accept or submit this."
No raw data is included — just what's missing, why it matters, and how to fix it.

# FAIRy Submission Readiness Report

- **Rulepack:** GEO-SEQ-BULK@0.1.0
- **FAIRy version:** 0.1.0
- **Run at (UTC):** ${utcTime}
- **submission_ready:** \`False\` (This means a curator would still bounce this.)

## Summary

- FAIL findings: 2 ['CORE.ID.UNMATCHED_SAMPLE', 'GEO.REQUIRED.MISSING_FIELD']
- WARN findings: 1 ['CORE.DATE.INVALID_ISO8601']

If \`submission_ready\` is \`True\`, FAIRy believes this dataset is ready to submit.
If it's \`False\`, a curator would still bounce this and ask for changes.

---

## Input provenance (what FAIRy actually checked)

These hashes and dimensions identify the exact files that FAIRy validated.
You can hand this block to a curator or PI as evidence of what was checked.

### metadata.tsv

- path: 'metadata.tsv'
- sha256: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2'
- rows: '3'
- cols: '8'

### samples.tsv

- path: 'samples.tsv'
- sha256: 'f965407ccaac8ee80953c634b7ad47a4c7441945dfebb8b5dabdb6657ed37165'
- rows: '2'
- cols: '10'

### files.tsv

- path: 'files.tsv'
- sha256: '8ec6eaeb72ce5d853b76876da578dc251d392176a9384544a8eaf6433964d9fe'
- rows: '3'
- cols: '3'

---

## Findings (all current issues)

Severity \`FAIL\` means "must fix before submission."
Severity \`WARN\` means "soft violation / likely curator feedback."

| Severity | Code | Location | Why it matters | How to fix |
|----------|------|----------|----------------|------------|
| FAIL | CORE.ID.UNMATCHED_SAMPLE | samples.tsv → sample_id (row 2 mismatch) | Every file must map to a described sample and vice versa. | Align sample_id across tables. |
| FAIL | GEO.REQUIRED.MISSING_FIELD | metadata.tsv → platform_type (missing) | The repository requires platform_type to process your submission; missing this will delay acceptance. | Add platform_type column with values like 'Illumina HiSeq 2000' or 'Affymetrix Human Genome U133 Plus 2.0 Array'. |
| WARN | CORE.DATE.INVALID_ISO8601 | row 0, column 'collection_date' | Ambiguous dates hurt reuse; a curator will probably ask you to fix this before accepting. | Use ISO8601 (YYYY-MM-DD). |

---

## Resolved since last run

_In first run: no previously-reported issues to clear._
`;

    const blob = new Blob([reportContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fairy_preflight_report_${dateStr}_${timeStr.replace(/:/g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }
        
        .header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #e9d5ff;
        }
        
        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .header .subtitle {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 2rem;
        }
        
        .intro-section {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: #4c1d95;
        }
        
        .intro-section p {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        
        .intro-section .intro-highlight {
          font-weight: 600;
          color: #6b46c1;
        }
        
        .summary-banner {
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          border: 2px solid #c4b5fd;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
        }
        
        .summary-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .summary-meta {
          font-size: 0.875rem;
          color: #6b46c1;
          margin-bottom: 1rem;
          line-height: 1.8;
        }
        
        .summary-status {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .summary-description {
          font-size: 1rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
        }
        
        .summary-provenance {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #c4b5fd;
          text-align: left;
          font-size: 0.8125rem;
          color: #6b46c1;
          line-height: 1.6;
        }
        
        .summary-provenance p {
          margin-bottom: 0.75rem;
        }
        
        .summary-provenance strong {
          color: #4c1d95;
        }
        
        .summary-provenance .manifest {
          background: rgba(255, 255, 255, 0.6);
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-top: 0.5rem;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.75rem;
          word-break: break-all;
          color: #6b46c1;
        }
        
        .pass { color: #059669; }
        .warning { color: #d97706; }
        .fail { color: #dc2626; }
        
        .checks-section {
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e9d5ff;
        }
        
        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          margin-bottom: 1rem;
          background: #f9fafb;
          border-radius: 0.75rem;
          border-left: 4px solid #e5e7eb;
        }
        
        .check-item.pass { border-left-color: #059669; }
        .check-item.warning { border-left-color: #d97706; }
        .check-item.fail { border-left-color: #dc2626; }
        
        .check-icon {
          font-size: 1.5rem;
          margin-top: 0.25rem;
        }
        
        .check-content {
          flex: 1;
        }
        
        .check-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        
        .check-description {
          color: #6b7280;
          margin-bottom: 0.75rem;
        }
        
        .check-fix {
          background: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 0.5rem;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: #0369a1;
        }
        
        .issues-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 2rem;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .issues-table th {
          background: #f3e8ff;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #4c1d95;
          border-bottom: 1px solid #e9d5ff;
          font-size: 0.875rem;
        }
        
        .issues-table td {
          padding: 1rem;
          border-bottom: 1px solid #f3e8ff;
          color: #4c1d95;
          font-size: 0.875rem;
          vertical-align: top;
        }
        
        .issues-table tr:last-child td {
          border-bottom: none;
        }
        
        .issues-table tr:hover {
          background: #faf5ff;
        }
        
        .severity-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-weight: 600;
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        
        .severity-badge.fail {
          background: #fee2e2;
          color: #dc2626;
        }
        
        .severity-badge.warning {
          background: #fef3c7;
          color: #d97706;
        }
        
        .severity-badge.pass {
          background: #d1fae5;
          color: #059669;
        }
        
        .code-cell {
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.8125rem;
          color: #6b46c1;
        }
        
        .where-cell {
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.8125rem;
          color: #6b7280;
        }
        
        .report-note {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #f3e8ff;
          border: 1px solid #c4b5fd;
          border-radius: 0.75rem;
          color: #4c1d95;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        
        .report-note strong {
          color: #6b46c1;
        }
        
        .mapping-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 2rem;
          background: white;
          border-radius: 0.75rem;
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
        }
        
        .mapping-table td {
          padding: 1rem;
          border-bottom: 1px solid #f3e8ff;
          color: #6b46c1;
        }
        
        .mapping-table tr:last-child td {
          border-bottom: none;
        }
        
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin: 2rem 0;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary {
          background-color: #7c3aed;
          color: white;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #6b46c1;
          border: 2px solid #c4b5fd;
        }
        
        .btn-secondary:hover {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        
        @media print {
          .cta-buttons {
            display: none;
          }
          
          .container {
            max-width: none;
            padding: 0;
          }
          
          .check-item {
            break-inside: avoid;
          }
        }
        
        @media (max-width: 768px) {
          .summary-status {
            font-size: 1.5rem;
          }
          
          .issues-table {
            display: block;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .issues-table th,
          .issues-table td {
            padding: 0.75rem 0.5rem;
            font-size: 0.8125rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="header">
          <h1>Example FAIRy Submission Readiness Report</h1>
        </div>

        <div className="intro-section">
          <p>
            <span className="intro-highlight">Don't wait for the repository to reject your submission.</span> Run FAIRy before you upload, and you'll see exactly what needs to be fixed — missing fields, formatting issues, inconsistent IDs — all with clear instructions on how to resolve them.
          </p>
          <p>
            The report below shows what FAIRy generates. Fix the issues it flags, and you can <span className="intro-highlight">submit with confidence — once, not four times.</span>
          </p>
        </div>

        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={downloadReport}
          >
            Download example FAIRy Submission Readiness Report (PDF)
          </button>
        </div>

        <div className="summary-banner">
          <div className="summary-label">Submission Readiness Summary</div>
          
          <div className="summary-meta">
            <div><strong>Dataset:</strong> GSM123456_sample_dataset</div>
            <div suppressHydrationWarning><strong>Generated locally:</strong> {generatedTimestamp}</div>
          </div>
          <div className="summary-status">
            <span className="fail">2 FAIL</span> / <span className="warning">1 WARN</span>
          </div>
          <div className="summary-description">
            Issues found that need attention before submission
          </div>
          
          <div className="summary-provenance">
            <p><strong>Provenance:</strong> FAIRy pilot build (local run; pre-release)</p>
            <p><strong>Command used (local run on 2025-10-14):</strong><br/>fairy validate /path/to/dataset --out out/ --format html</p>
            <p>File hash digest (so you can prove which exact files were checked):</p>
            <div className="manifest">
              <strong>SHA256 manifest:</strong><br/>
              dataset_metadata.json: a1b2c3d4e5f6...<br/>
              sample_1.fastq: f6e5d4c3b2a1...<br/>
              sample_2.fastq: 1a2b3c4d5e6f...
            </div>
          </div>
        </div>
        
        <div className="checks-section">
          <h2 className="section-title">What needs to be fixed</h2>
          
          <table className="issues-table">
            <thead>
              <tr>
                <th>Severity</th>
                <th>Code</th>
                <th>Where it failed</th>
                <th>Why it matters</th>
                <th>How to fix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="severity-badge fail">FAIL</span>
                </td>
                <td className="code-cell">CORE.ID.UNMATCHED_SAMPLE</td>
                <td className="where-cell">samples.tsv → sample_id (row 2 mismatch)</td>
                <td>Every file must map to a described sample and vice versa.</td>
                <td>Align sample_id across tables.</td>
              </tr>
              <tr>
                <td>
                  <span className="severity-badge fail">FAIL</span>
                </td>
                <td className="code-cell">GEO.REQUIRED.MISSING_FIELD</td>
                <td className="where-cell">metadata.tsv → platform_type (missing)</td>
                <td>The repository requires platform_type to process your submission; missing this will delay acceptance.</td>
                <td>Add platform_type column with values like 'Illumina HiSeq 2000' or 'Affymetrix Human Genome U133 Plus 2.0 Array'.</td>
              </tr>
              <tr>
                <td>
                  <span className="severity-badge warning">WARN</span>
                </td>
                <td className="code-cell">CORE.DATE.INVALID_ISO8601</td>
                <td className="where-cell">row 0, column 'collection_date'</td>
                <td>Ambiguous dates hurt reuse; a curator will probably ask you to fix this before accepting.</td>
                <td>Use ISO8601 (YYYY-MM-DD).</td>
              </tr>
            </tbody>
          </table>
          
          <div className="report-note">
            <strong>FAIRy runs locally.</strong> You can forward this report as-is to a collaborator, student, or PI and say, "Please fix these before I can accept this dataset." No raw data is included — just the problems and how to resolve them.
          </div>
        </div>
        
        <div className="checks-section" style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <p style={{ color: '#6b46c1', fontSize: '1rem' }}>
            See how FAIRy's rulepacks map to real repository requirements <a href="/docs" style={{ color: '#7c3aed', textDecoration: 'underline' }}>in our documentation</a>.
          </p>
        </div>
      </div>
    </>
  );
}