"use client";

import { useState } from 'react';
// import FeedbackForm from '../../components/FeedbackForm';
import { trackCTA } from '../../components/CTATracking';

export default function InstitutionsPage() {
  const [activeTab, setActiveTab] = useState('core');

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
        
        .hero .subheadline {
          font-size: 1.25rem;
          color: #6b46c1;
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.75rem;
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
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #6b46c1;
          padding: 1rem 2rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
        }
        
        .btn-secondary:hover {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        
        .security-callout {
          background: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem auto;
          max-width: 800px;
          text-align: center;
        }
        
        .security-callout h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .security-callout p {
          font-size: 0.875rem;
          color: #6b46c1;
          margin: 0;
        }
        
        .section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3.75rem;
        }
        
        .tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .tab {
          padding: 1rem 2rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          background: white;
          color: #6b46c1;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab.active {
          background: #7c3aed;
          color: white;
          border-color: #7c3aed;
        }
        
        .tab:hover:not(.active) {
          border-color: #7c3aed;
          color: #7c3aed;
        }
        
        .tab-content {
          background: white;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 2.5rem;
          margin-bottom: 3rem;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .feature-card {
          background: #f8fafc;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
        }
        
        .feature-card h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .feature-card p {
          color: #6b46c1;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        
        .code-block {
          background: #1e1b4b;
          color: #e0e7ff;
          padding: 1rem;
          border-radius: 0.5rem;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.875rem;
          margin: 1rem 0;
          overflow-x: auto;
        }
        
        .pilot-section {
          background: #f3e8ff;
          padding: 3rem 0;
          text-align: center;
        }
        
        .pilot-form {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 2.5rem;
          border-radius: 1.125rem;
          border: 2px solid #e9d5ff;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }
        
        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          font-size: 16px;
          transition: border-color 0.2s ease;
          background-color: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #7c3aed;
        }
        
        select.form-input {
          cursor: pointer;
        }
        
        .honeypot {
          position: absolute;
          left: -9999px;
          opacity: 0;
        }
        
        .privacy-note {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 1rem;
          text-align: center;
        }
        
        .footer {
          padding: 2.5rem 0;
          background-color: #f3e8ff;
          border-top: 1px solid #e9d5ff;
          text-align: center;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        
        .footer-link {
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.75rem;
        }
        
        .footer-link:hover {
          color: #7c3aed;
        }
        
        .footer-copyright {
          color: #6b46c1;
          font-size: 0.75rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .tab {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Reduce deposit back-and-forth across your campus</h1>
            <p className="subheadline">
              FAIRy runs locally to produce clear validation reports and manifests your curators can trust—local-first, no telemetry.
            </p>
            
            <div className="cta-buttons">
              <a 
                href="/sample-report" 
                className="btn-primary"
                onClick={() => trackCTA('institution_hero_cta', 'see_sample_report')}
              >
                See sample report
              </a>
              <a 
                href="#institution-kit" 
                className="btn-secondary"
                onClick={() => trackCTA('institution_hero_cta', 'institution_kit_pdf')}
              >
                Institution kit (PDF)
              </a>
              <a 
                href="#pilot" 
                className="btn-secondary"
                onClick={() => trackCTA('institution_hero_cta', 'take_survey')}
              >
                Take survey
              </a>
            </div>
            
            {/* Security Callout */}
            <div className="security-callout">
              <h3>🔒 Local-first · No telemetry by default</h3>
              <p>
                CLI for pipelines + optional Streamlit UI · Works on shared Linux hosts/WSL/Mac; Docker image available
              </p>
            </div>
          </div>
        </section>

        {/* Stakeholder Sections */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Built for your team</h2>
            
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'core' ? 'active' : ''}`}
                onClick={() => setActiveTab('core')}
              >
                Core staff (Samir)
              </button>
              <button 
                className={`tab ${activeTab === 'rdm' ? 'active' : ''}`}
                onClick={() => setActiveTab('rdm')}
              >
                RDM teams (Dr. Lopez)
              </button>
              <button 
                className={`tab ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                Security (Mina)
              </button>
            </div>
            
            {/* Core Staff Content */}
            {activeTab === 'core' && (
              <div className="tab-content">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1.5rem' }}>
                  For core facility staff and bioinformatics teams
                </h3>
                
                <div className="feature-grid">
                  <div className="feature-card">
                    <h4>Batch processing</h4>
                    <p>Process hundreds of datasets with CLI pipelines and non-interactive exit codes for CI integration.</p>
                    <div className="code-block">
                      fairy validate /lab_mount/* -o out/ --json
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <h4>CI/CD integration</h4>
                    <p>Non-interactive exit codes for automated pipelines and Slurm/Snakemake workflows.</p>
                    <div className="code-block">
                      # Slurm example
                      fairy validate $DATASET_PATH -o $OUTPUT_DIR
                      if [ $? -eq 0 ]; then
                        echo "Validation passed"
                      fi
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Optional UI</h4>
                    <p>Streamlit interface for interactive validation when needed.</p>
                    <div className="code-block">
                      pip install "fairy-validator[ui]"
                      fairy ui /path/to/report.json
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* RDM Teams Content */}
            {activeTab === 'rdm' && (
              <div className="tab-content">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1.5rem' }}>
                  For data librarians and research data management teams
                </h3>
                
                <div className="feature-grid">
                  <div className="feature-card">
                    <h4>Repository-specific checks</h4>
                    <p>Current checks for GEO/Zenodo with links to official guidelines. Coming next: SRA, BioSample preflight.</p>
                    <ul style={{ color: '#6b46c1', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                      <li>Metadata completeness validation</li>
                      <li>File naming convention checks</li>
                      <li>Controlled vocabulary validation</li>
                    </ul>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Plain-English guidance</h4>
                    <p>Reports include "how to fix" instructions, not just error messages. Perfect for submission packets.</p>
                    <div style={{ background: '#f0f9ff', padding: '1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
                      <p style={{ fontSize: '0.875rem', color: '#0369a1', margin: '0' }}>
                        ✓ Warning: File naming convention issue<br/>
                        → Fix: Rename "sample_1.fastq" to "GSM123456_sample_1.fastq"
                      </p>
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <h4>PDF/HTML outputs</h4>
                    <p>Print-ready reports with sticky headers and accessibility features for archiving.</p>
                    <ul style={{ color: '#6b46c1', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                      <li>Download as PDF for ticket systems</li>
                      <li>SHA256 manifest for provenance</li>
                      <li>Command used tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Security Teams Content */}
            {activeTab === 'security' && (
              <div className="tab-content">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1.5rem' }}>
                  For IT security and governance teams
                </h3>
                
                <div className="feature-grid">
                  <div className="feature-card">
                    <h4>Local-first architecture</h4>
                    <p>No telemetry in v0.1. All processing happens on-device. Environment variable to opt-in to future analytics.</p>
                    <div className="code-block">
                      # Offline install
                      pip install fairy-validator --no-deps
                      # No credentials stored
                      # No data uploads
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Transparency & compliance</h4>
                    <p>SBOM (pip/conda lockfile), LICENSE, third-party dependency list. Update checks hit PyPI JSON only.</p>
                    <div className="code-block">
                      # Opt-out update checks
                      export FAIRY_NO_UPDATE=1
                      fairy validate /data/dataset
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Procurement-ready</h4>
                    <p>Complete security documentation, dependency audit trail, and compliance evidence for institutional approval.</p>
                    <ul style={{ color: '#6b46c1', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                      <li>Software Bill of Materials (SBOM)</li>
                      <li>Third-party dependency audit</li>
                      <li>Privacy impact assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Institution Kit Section */}
        <section id="institution-kit" className="section" style={{ backgroundColor: '#f3e8ff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Institution kit
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', marginBottom: '2rem' }}>
                Everything you need for evaluation and deployment
              </p>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '2px solid #e9d5ff', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Download includes:
                </h3>
                <ul style={{ textAlign: 'left', color: '#6b46c1', fontSize: '0.875rem' }}>
                  <li>One-pager overview</li>
                  <li>Security summary + SBOM link</li>
                  <li>Deployment options (pip/conda/Docker)</li>
                  <li>Data handling & privacy policy</li>
                  <li>Support expectations and issue reporting</li>
                </ul>
              </div>
              
              <a 
                href="/institution-kit.pdf" 
                className="btn-primary" 
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_kit_download', 'pdf_download')}
              >
                Download institution kit (PDF)
              </a>
              <a 
                href="/sample-report" 
                className="btn-secondary"
                onClick={() => trackCTA('institution_kit_cta', 'see_sample_report')}
              >
                See sample report
              </a>
            </div>
          </div>
        </section>

        {/* Institution Survey Section */}
        <section id="pilot" className="pilot-section">
          <div className="container">
            <div className="pilot-form">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0f172a', marginBottom: '1rem' }}>
                Help us understand your institution's needs
              </h3>
              <p style={{ color: '#64748b', marginBottom: '24px' }}>
                Take our quick survey to help us tailor FAIRy for your campus. Someone from Datadabra will contact you about FAIRy.
              </p>
              
              <div style={{ textAlign: 'center' }}>
                <a 
                  href="https://forms.google.com/your-survey-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: '#7c3aed',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    fontSize: '18px',
                    minHeight: '44px',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => trackCTA('institution_survey_click', 'external_survey_link')}
                >
                  Take institution survey →
                </a>
                
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#6b7280', 
                  marginTop: '1rem',
                  fontStyle: 'italic'
                }}>
                  Opens in new tab • Takes 2-3 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rollout Playbook */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Rollout playbook</h2>
            
            <div className="feature-grid">
              <div className="feature-card">
                <h4>Who runs what</h4>
                <p>Core staff run CLI pipelines; labs can run locally for immediate feedback.</p>
              </div>
              
              <div className="feature-card">
                <h4>Recommended workflow</h4>
                <p>Lab runs FAIRy → shares report PDF → curator reviews → deposit.</p>
              </div>
              
              <div className="feature-card">
                <h4>Support rule</h4>
                <p>"If FAIRy says green, curator fast-tracks metadata review."</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href="/rollout-templates" className="btn-secondary">
                Download templates
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a href="/privacy" className="footer-link">Privacy</a>
              <span aria-hidden style={{ color: '#a78bfa' }}>·</span>
              <a href="https://github.com/your-org/fairy" className="footer-link">GitHub</a>
              <span aria-hidden style={{ color: '#a78bfa' }}>·</span>
              <a href="mailto:hello@fairy.dev" className="footer-link">Email</a>
              <span aria-hidden style={{ color: '#a78bfa' }}>·</span>
              <span className="footer-copyright">© 2024 FAIRy. All rights reserved.</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
