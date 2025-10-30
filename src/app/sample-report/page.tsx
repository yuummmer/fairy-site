"use client";

export default function SampleReportPage() {
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
          color: #1f2937;
          background-color: #ffffff;
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
          border-bottom: 2px solid #e5e7eb;
        }
        
        .header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .header .subtitle {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 2rem;
        }
        
        .summary-banner {
          display: flex;
          justify-content: space-around;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #0ea5e9;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 3rem;
        }
        
        .summary-item {
          text-align: center;
        }
        
        .summary-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .summary-label {
          font-size: 0.875rem;
          color: #6b7280;
          font-weight: 500;
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
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e5e7eb;
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
          background: #f3f4f6;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #374151;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .mapping-table td {
          padding: 1rem;
          border-bottom: 1px solid #f3f4f6;
          color: #6b7280;
        }
        
        .mapping-table tr:last-child td {
          border-bottom: none;
        }
        
        .footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        .footer .manifest {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 0.5rem;
          margin-top: 1rem;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.75rem;
          word-break: break-all;
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
          .summary-banner {
            flex-direction: column;
            gap: 1rem;
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
          <h1>FAIRy validation report</h1>
          <p className="subtitle">Dataset: GSM123456_sample_dataset</p>
          <p className="subtitle">Generated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
          
          <div className="cta-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => window.print()}
            >
              Download as PDF
            </button>
            <a href="/institutions" className="btn btn-secondary">
              For institutions
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', color: '#6b7280', marginBottom: '1.5rem' }}>
          This report flags missing or inconsistent metadata before repository submission. You can send it back to the lab / PI as a “please fix these before we can accept this” note — no raw data included.
        </div>

        <div className="summary-banner">
          <div className="summary-item">
            <div className="summary-number pass">12</div>
            <div className="summary-label">Checks passed</div>
          </div>
          <div className="summary-item">
            <div className="summary-number warning">3</div>
            <div className="summary-label">Warnings</div>
          </div>
          <div className="summary-item">
            <div className="summary-number fail">1</div>
            <div className="summary-label">Critical issue to fix before submission</div>
          </div>
        </div>
        
        <div className="checks-section">
          <h2 className="section-title">Validation results</h2>
          
          <div className="check-item pass">
            <div className="check-icon">✓</div>
            <div className="check-content">
              <div className="check-title">Metadata completeness</div>
              <div className="check-description">All required metadata fields are present and properly formatted.</div>
            </div>
          </div>
          
          <div className="check-item pass">
            <div className="check-icon">✓</div>
            <div className="check-content">
              <div className="check-title">File integrity</div>
              <div className="check-description">All files are readable and contain expected data formats.</div>
            </div>
          </div>
          
          <div className="check-item warning">
            <div className="check-icon">⚠</div>
            <div className="check-content">
              <div className="check-title">File naming convention</div>
              <div className="check-description">Some files don't follow GEO naming conventions.</div>
              <div className="check-fix">
                <strong>How to fix:</strong> Rename "sample_1.fastq" to "GSM123456_sample_1.fastq" to include the GEO accession number.
              </div>
            </div>
          </div>
          
          <div className="check-item warning">
            <div className="check-icon">⚠</div>
            <div className="check-content">
              <div className="check-title">Date format standardization</div>
              <div className="check-description">Dates should be in ISO 8601 format for better compatibility.</div>
              <div className="check-fix">
                <strong>How to fix:</strong> Change "12/15/2023" to "2023-12-15" in the metadata file.
              </div>
            </div>
          </div>
          
          <div className="check-item warning">
            <div className="check-icon">⚠</div>
            <div className="check-content">
              <div className="check-title">Controlled vocabulary</div>
              <div className="check-description">Some terms don't match standard ontologies.</div>
              <div className="check-fix">
                <strong>How to fix:</strong> Use "Homo sapiens" instead of "human" in the organism field.
              </div>
            </div>
          </div>
          
          <div className="check-item fail">
            <div className="check-icon">✗</div>
            <div className="check-content">
              <div className="check-title">Required fields missing (blocks submission)</div>
              <div className="check-description">These required fields are missing and will cause a repository to reject or delay your dataset.</div>
              <div className="check-fix">
                <strong>How to fix:</strong> Add the following fields to your metadata: contact_name, contact_email, platform_type.
              </div>
            </div>
          </div>
        </div>
        
        <div className="checks-section">
          <h2 className="section-title">Repository-style expectations</h2>
          <p style={{ color: '#6b7280', marginTop: '0.5rem', marginBottom: '1rem' }}>
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
        </div>
        
        <div className="footer">
          <p><strong>Provenance:</strong> This report was generated using a FAIRy pilot build (pre-release).</p>
          <p><strong>Command used (local run on 2025-10-14):</strong><br/>fairy validate /path/to/dataset --out out/ --format html</p>
          <p>File hash digest (for provenance / reproducibility):</p>
          <div className="manifest">
            <strong>SHA256 manifest:</strong><br/>
            dataset_metadata.json: a1b2c3d4e5f6...<br/>
            sample_1.fastq: f6e5d4c3b2a1...<br/>
            sample_2.fastq: 1a2b3c4d5e6f...
          </div>
        </div>
      </div>
    </>
  );
}