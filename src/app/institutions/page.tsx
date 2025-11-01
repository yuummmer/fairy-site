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
        {/* Cut the back-and-forth Section */}
        <section className="section" style={{ backgroundColor: '#f3e8ff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="section-title">Cut the back-and-forth before intake</h2>
              <p style={{ fontSize: '1.25rem', color: '#6b46c1', marginBottom: '2rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                FAIRy runs locally to produce clear validation reports and manifests your curators can trust—local-first, no telemetry.
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
                Core staff
              </button>
              <button 
                className={`tab ${activeTab === 'rdm' ? 'active' : ''}`}
                onClick={() => setActiveTab('rdm')}
              >
                RDM teams
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
                    <h4>Upstream sanity check</h4>
                    <p>Pre-check before handoff to PIs</p>
                    <p>Run FAIRy locally on a sample sheet / metadata sheet before you return results to a lab or PI.</p>
                    <p>It flags missing required fields, broken IDs, filename issues, permit / embargo gaps, etc. — the stuff that will get them bounced later.</p>
                    <p>Result: you stop writing the same "please fix these 5 things" email for every project.</p>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Your policy, enforced consistently</h4>
                    <p>Reusable intake rules</p>
                    <p>We encode your "we don't accept this without X" policy (stable sample IDs, ISO dates, site / instrument info, contact email, file naming conventions) into a rulepack.</p>
                    <p>Everyone gets checked against the same rules instead of whoever yells loudest.</p>
                    <p>FAIRy produces a one-page readiness sheet (PASS / WARN / FAIL + how to fix) you can hand back to the lab.</p>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Drop-in workflow</h4>
                    <p>Fits how you already work</p>
                    <p>FAIRy runs on your machine, offline.</p>
                    <p>You get both structured output (JSON) and a human-readable summary, so you can plug it into whatever you already use — a queue, a ticket, or a lightweight pipeline — without sending any data off-box.</p>
                    <p>If you want researchers to self-check, FAIRy can also generate an interactive report view instead of just CLI output.</p>
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
                    <h4>Repository-style preflight checks</h4>
                    <p>We’re modeling FAIRy’s rulepacks after what repositories like GEO and Zenodo already reject at submission time (missing required fields, bad filenames, etc.). Coming next: SRA and BioSample-style preflight.</p>
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
                    <h4>Exportable reports</h4>
                    <p>FAIRy produces a one-page readiness sheet (PASS / WARN / FAIL + how to fix) that you can save, print, or attach to a ticket/request.</p>
                    <p>We're working on lightweight provenance details — like including the command used and file hashes — so you can show when/what was checked.</p>
                  </div>
                  
                  <div className="feature-card">
                    <h4>Attestation for compliance</h4>
                    <p>FAIRy generates an attestation file documenting that validation was performed using a specific rulepack and version at a given timestamp.</p>
                    <p>This provides a record for institutions ("we have records"), journals ("we did our due diligence"), and grant panels ("we're reducing friction for data publication").</p>
                    <p>Attach the attestation to submissions to demonstrate that your datasets have been pre-validated and meet repository requirements.</p>
                  </div>
                </div>
              </div>
            )}
            
            
          </div>
        </section>

        {/* Attestation Section */}
        <section id="attestation" className="section" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <h2 className="section-title">Attestation: Show your due diligence</h2>
            
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', marginBottom: '2rem' }}>
                FAIRy generates an attestation file that documents your validation process—making it easy to demonstrate compliance and reduce friction with stakeholders.
              </p>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e9d5ff', 
                  borderRadius: '0.75rem', 
                  padding: '1.5rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                    For institutions
                  </h3>
                  <p style={{ color: '#6b46c1', fontSize: '0.875rem' }}>
                    "We have records." Provide documented proof that datasets were validated before submission, reducing administrative back-and-forth.
                  </p>
                </div>
                
                <div style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e9d5ff', 
                  borderRadius: '0.75rem', 
                  padding: '1.5rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                    For journals
                  </h3>
                  <p style={{ color: '#6b46c1', fontSize: '0.875rem' }}>
                    "We did our due diligence." Show that data quality checks were performed using standardized validation rules and versioned rulepacks.
                  </p>
                </div>
                
                <div style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e9d5ff', 
                  borderRadius: '0.75rem', 
                  padding: '1.5rem',
                  textAlign: 'left'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                    For grant panels
                  </h3>
                  <p style={{ color: '#6b46c1', fontSize: '0.875rem' }}>
                    "We're reducing friction for data publication." Demonstrate that your institution has processes in place to streamline data deposition and compliance.
                  </p>
                </div>
              </div>
              
              <p style={{ fontSize: '1rem', color: '#6b46c1', marginBottom: '1.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                You can attach this file to the dataset bundle when you hand it to a curator, a journal, or a program officer. It's your "we actually checked this" receipt.
              </p>
              
              <div style={{ 
                background: '#f3e8ff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                marginBottom: '2rem'
              }}>
                <p style={{ color: '#4c1d95', marginBottom: '1rem', fontWeight: '500' }}>
                  The attestation file includes:
                </p>
                <ul style={{ 
                  textAlign: 'left', 
                  color: '#6b46c1', 
                  fontSize: '0.875rem',
                  listStyle: 'none',
                  padding: 0,
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    FAIRy version and rulepack used
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Validation timestamp
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Summary of checks performed (dates normalized, IDs validated, etc.)
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    File hashes and manifest information
                  </li>
                </ul>
              </div>
              
              <a 
                href="/samples/export-pack/FAIRy_attestation_example.json" 
                className="btn-secondary"
                download
                onClick={() => trackCTA('attestation_sample_download', 'evidence_kit_sample')}
              >
                Download sample attestation file
              </a>
              <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginTop: '1.5rem' }}>
                Learn more about the attestation file format and structure in our <a href="/docs#checks-attestation" style={{ color: '#7c3aed', textDecoration: 'underline' }}>documentation</a>.
              </p>
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
            <p style={{ color: '#6b46c1', fontSize: '0.95rem', textAlign: 'center', marginTop: '0.5rem' }}>
              We're validating this workflow now with early partners so we can confirm where it saves curator time.
            </p>
            
            <div style={{
              background: '#ffffff',
              border: '2px solid #e9d5ff',
              borderRadius: '0.75rem',
              padding: '1.25rem 1.5rem',
              maxWidth: '800px',
              margin: '3rem auto 0',
              textAlign: 'left'
            }}>
              <p style={{ color: '#4c1d95', marginBottom: '0.5rem', lineHeight: '1.8' }}>
                FAIRy is currently in pilot with early institutional partners.
              </p>
              <p style={{ color: '#4c1d95', marginBottom: '0.5rem', lineHeight: '1.8' }}>
                We're co-developing small "preflight rulepacks" that enforce the 5–7 must-have fields your curators already chase (stable IDs, ISO dates, site info, contact, file naming, permit/embargo flags).
              </p>
              <p style={{ color: '#4c1d95', marginBottom: '0.75rem', lineHeight: '1.8' }}>
                FAIRy runs locally and generates a one-page readiness sheet (PASS / WARN / FAIL + how to fix) that labs can attach when they hand off a dataset.
              </p>
            </div>
            
          </div>
        </section>

        {/* How Pilots Work Section */}
        <section className="section" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <h2 className="section-title">How pilots work</h2>
            
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', marginBottom: '2rem', textAlign: 'center' }}>
                If you're an institution considering a pilot, here's what actually happens:
              </p>
              
              <div style={{
                background: '#f3e8ff',
                border: '2px solid #e9d5ff',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Step 1: 30-minute scoping call
                </h3>
                <p style={{ color: '#4c1d95', lineHeight: '1.8', marginBottom: 0 }}>
                  We define 5–7 required fields that always trip people up, your file naming rules, and where data normally ends up. You tell me what always goes wrong—I encode it into a rulepack.
                </p>
              </div>
              
              <div style={{
                background: '#f3e8ff',
                border: '2px solid #e9d5ff',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Step 2: First test run
                </h3>
                <p style={{ color: '#4c1d95', lineHeight: '1.8', marginBottom: 0 }}>
                  You run FAIRy on a tiny test bundle (or send me a few redacted rows + sample filenames), and I generate your first Submission Readiness Report.
                </p>
              </div>
              
              <div style={{
                background: '#f3e8ff',
                border: '2px solid #e9d5ff',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Step 3: What you get
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  paddingLeft: 0, 
                  color: '#4c1d95', 
                  lineHeight: '1.8' 
                }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    A Submission Readiness Report (human-readable "fix these" sheet) you can forward to labs
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    An Attestation file (machine-readable proof of what was checked and when)
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Language you can require: "Please include the FAIRy readiness report in your submission to us."
                  </li>
                </ul>
              </div>
              
              <div style={{
                background: '#f3e8ff',
                border: '2px solid #e9d5ff',
                borderRadius: '12px',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Step 4: You tell me if it works
                </h3>
                <p style={{ color: '#4c1d95', lineHeight: '1.8', marginBottom: 0 }}>
                  Does the report read in your voice? Can you forward it without embarrassment? We'll adjust wording until it matches how you actually communicate with submitters.
                </p>
              </div>
              
              <div style={{
                background: '#ffffff',
                border: '2px solid #e9d5ff',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <p style={{ color: '#4c1d95', lineHeight: '1.8', marginBottom: '1rem' }}>
                  <strong>Data handling:</strong> FAIRy runs locally. Nothing leaves your institution. The reports don't include raw data—just flags (like "row 2 missing specimen_id") and file hashes for provenance.
                </p>
                <p style={{ color: '#4c1d95', lineHeight: '1.8', marginBottom: 0 }}>
                  During the pilot, you have direct contact with me. We'll adjust the rulepack wording so you don't have to manually rewrite "please fix X" emails. We'll help you decide whether labs run FAIRy themselves or you run it and send out reports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Institution Pilot Kit Section */}
        <section id="institution-kit" className="section" style={{ backgroundColor: '#f3e8ff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              {/* Security Callout */}
              <div className="security-callout" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                <h3>🔒 Local-first · No telemetry by default</h3>
                <p>
                  CLI for pipelines + optional Streamlit UI · Works on shared Linux hosts/WSL/Mac; Docker image available
                </p>
              </div>
              
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Institution Pilot Kit
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', marginBottom: '2rem' }}>
                Everything you need to evaluate a FAIRy pilot at your institution (and get quick internal approval)
              </p>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem', border: '2px solid #e9d5ff', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Download includes:
                </h3>
                <ul style={{ textAlign: 'left', color: '#6b46c1', fontSize: '0.875rem' }}>
                  <li>What a FAIRy pilot actually is (90-minute scope + test run, not a full deployment)</li>
                  <li>Exactly what you get out of it (rulepack, readiness report, attestation receipt)</li>
                  <li>Step-by-step pilot timeline you can forward internally</li>
                  <li>Data handling & local-only model (no data leaves your institution)</li>
                  <li>How we support you during the pilot and who to contact</li>
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
                  href="https://forms.gle/mALqVs2Y26SS5wRr8" 
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

      </main>
    </>
  );
}
