"use client";

import { track } from '../../lib/analytics';
import { useEffect } from 'react';

export default function ExportPackPage() {
  useEffect(() => {
    track('view_export_pack');
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
          max-width: 900px;
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
        
        .hero .subheadline {
          font-size: 1.25rem;
          color: #6b46c1;
          margin-bottom: 2.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .section {
          padding: 4rem 0;
          background-color: #ffffff;
        }
        
        .section-white {
          padding: 4rem 0;
          background-color: #ffffff;
        }
        
        .content-box {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .content-box h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
        }
        
        .content-box h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .content-box p {
          font-size: 1.125rem;
          color: #6b46c1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .content-box ul {
          font-size: 1.125rem;
          color: #6b46c1;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        
        .content-box li {
          margin-bottom: 0.75rem;
        }
        
        .content-box code {
          background-color: #f3e8ff;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 0.9375rem;
          color: #7c3aed;
        }
        
        .btn-primary {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          margin-right: 1rem;
          margin-top: 1rem;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #7c3aed;
          padding: 0.75rem 1.5rem;
          border: 2px solid #7c3aed;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          margin-right: 1rem;
          margin-top: 1rem;
        }
        
        .btn-secondary:hover {
          background-color: #f3e8ff;
          border-color: #6d28d9;
        }
        
        .file-list {
          background-color: #faf5ff;
          border: 2px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        
        .file-item {
          padding: 0.75rem 0;
          border-bottom: 1px solid #e9d5ff;
        }
        
        .file-item:last-child {
          border-bottom: none;
        }
        
        .file-name {
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.25rem;
        }
        
        .file-description {
          font-size: 0.9375rem;
          color: #6b46c1;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .content-box h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Export Pack</h1>
            <p className="subheadline">
              A structured package containing validated data, metadata, and attestation files.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content-box">
              <h2>What is an export pack?</h2>
              <p>
                An export pack is a validated dataset package that FAIRy generates after checking your data against repository rules. It contains everything needed for submission: your data files, metadata, a manifest with file hashes, and an attestation file documenting what was validated.
              </p>
              
              <h3>What's included</h3>
              <div className="file-list">
                <div className="file-item">
                  <div className="file-name">metadata.json</div>
                  <div className="file-description">
                    Key project metadata including authors with ORCIDs, ontology-backed fields, and repository-specific requirements.
                  </div>
                </div>
                <div className="file-item">
                  <div className="file-name">data/</div>
                  <div className="file-description">
                    Your validated data files (CSVs, TSVs, or other formats) organized in a structured directory.
                  </div>
                </div>
                <div className="file-item">
                  <div className="file-name">manifest.csv</div>
                  <div className="file-description">
                    File inventory with sizes and SHA-256 hashes for each file, enabling verification of data integrity.
                  </div>
                </div>
                <div className="file-item">
                  <div className="file-name">dry_run_report.json</div>
                  <div className="file-description">
                    Example repository dry-run result showing how the data would be processed.
                  </div>
                </div>
                <div className="file-item">
                  <div className="file-name">FAIRy_attestation_example.json</div>
                  <div className="file-description">
                    Attestation file documenting what was checked, when, and under which rulepack version. This provides a verifiable record of validation.
                  </div>
                </div>
              </div>
              
              <h3>Download sample export pack</h3>
              <p>
                You can download a sample export pack to see the structure and contents. This is a tiny, fabricated dataset demonstrating the FAIRy export pack format.
              </p>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a 
                  href="/samples/export-pack/README.md" 
                  download 
                  className="btn-primary"
                >
                  Download sample export pack README →
                </a>
                <a 
                  href="/samples/export-pack/FAIRy_attestation_example.json" 
                  download 
                  className="btn-secondary"
                >
                  Download sample attestation file →
                </a>
              </div>
              
              <p style={{ fontSize: '0.9375rem', color: '#6b46c1', marginTop: '2rem', fontStyle: 'italic' }}>
                Note: The sample export pack is licensed under CC BY 4.0 (sample content only). For production use, FAIRy generates export packs from your validated datasets.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section-white">
          <div className="container">
            <div className="content-box" style={{ textAlign: 'center' }}>
              <h2>Ready to create your own export pack?</h2>
              <p>
                Use FAIRy to validate your dataset and generate a submission-ready export pack with attestation files.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="/researchers" className="btn-primary">
                  Get FAIRy-core on GitHub →
                </a>
                <a href="/institutions" className="btn-secondary">
                  Learn about institutional pilots →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

