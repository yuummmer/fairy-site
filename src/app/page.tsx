"use client";

import FeedbackForm from '../components/FeedbackForm';
import { trackCTA } from '../components/CTATracking';

export default function Page() {
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
        
        .btn-primary:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
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
        
        .btn-secondary:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .demo-section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .demo-card {
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.1);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .demo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -3px rgba(124, 58, 237, 0.15);
        }
        
        .demo-card:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .demo-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .demo-badge {
          display: inline-block;
          background-color: #f3e8ff;
          color: #6b46c1;
          padding: 0.25rem 0.75rem;
          border-radius: 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        
        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0;
        }
        
        .check-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .check-pass { background-color: #22c55e; }
        .check-warning { background-color: #f59e0b; }
        .check-fail { background-color: #ef4444; }
        
        .check-label {
          font-weight: 500;
          color: #4c1d95;
        }
        
        .how-it-works {
          padding: 5rem 0;
          background-color: #f3e8ff;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3.75rem;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3.75rem;
        }
        
        .step-card {
          background-color: #ffffff;
          border-radius: 1.125rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
          transition: all 0.2s ease;
        }
        
        .step-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.15);
        }
        
        .step-number {
          width: 3rem;
          height: 3rem;
          background-color: #7c3aed;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0 auto 1.25rem;
        }
        
        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .step-description {
          color: #6b46c1;
          margin-bottom: 1.25rem;
        }
        
        .waitlist-section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .waitlist-form {
          max-width: 500px;
          margin: 0 auto;
          background-color: #ffffff;
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
        
        .survey-section {
          padding: 3.75rem 0;
          background-color: #f3e8ff;
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
          
          .logos-grid {
            gap: 1.25rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
    <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Stop chasing missing fields. FAIRy tells the lab exactly what to fix.</h1>
            <p className="subheadline">
              FAIRy runs locally on your dataset and generates a one-page readiness sheet — PASS / WARN / FAIL, why it matters, and how to fix it — so curators don't have to chase missing fields and bad filenames. No raw data leaves your environment.
            </p>
            <div className="cta-buttons">
              <a 
                href="#solo-tier" 
                className="btn-primary"
                onClick={() => trackCTA('hero_cta_click', 'individual_researcher')}
              >
                For individual researchers
              </a>
              <a 
                href="/institutions" 
                className="btn-primary"
                onClick={() => trackCTA('hero_cta_click', 'learn_more')}
              >
                For institutions
              </a>
            </div>
            
          </div>
        </section>

        {/* Institution Preview Section */}
        <section id="institution-preview" className="demo-section" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Stop spending hours chasing missing fields and renaming files
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto', marginBottom: '1rem' }}>
                People hand you garbage and you spend hours chasing missing fields and renaming files. You need proof you did QC before you archive, publish, send to a journal, or report to a grant panel.
              </p>
              <p style={{ fontSize: '1rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto', marginBottom: '2rem' }}>
                FAIRy runs locally and generates a one-page readiness sheet (PASS / WARN / FAIL + how to fix) that labs can attach when they hand off a dataset.
              </p>
              
              {/* Security Callout */}
              <div style={{ 
                background: '#f3e8ff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1rem', 
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: '#4c1d95', margin: '0', fontWeight: '500' }}>
                  🔒 Local-first privacy: No data leaves your environment. All processing happens on your machines.
                </p>
              </div>
              
              {/* Key Benefit Statement */}
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #a78bfa', 
                borderRadius: '0.75rem', 
                padding: '1.5rem', 
                marginBottom: '2rem',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.1)'
              }}>
                <p style={{ fontSize: '1rem', color: '#4c1d95', margin: '0', lineHeight: '1.6' }}>
                  FAIRy gives institutions a repeatable pre-intake check — with both a human-readable fix list and a machine-readable attestation — so their data can confidently join larger integrated networks without weeks of one-off curator triage.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📏</div>
                <h3 className="step-title">Consistent intake rules</h3>
                <p className="step-description">
                  Turn your "we can't accept this without X" policies (sample IDs, contact email, ISO dates, file naming, permit/embargo flags) into a reusable preflight check. Everyone gets held to the same standard.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📝</div>
                <h3 className="step-title">One-page readiness sheet</h3>
                <p className="step-description">
                  FAIRy produces a PASS / WARN / FAIL summary with plain-language "how to fix" instructions. You can send it back to the lab / PI instead of rewriting the same email.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>🔒</div>
                <h3 className="step-title">Local-only by design</h3>
                <p className="step-description">
                  FAIRy runs inside your environment. No raw data, filenames, locations, or metadata are uploaded. No accounts, no credentials, no cloud.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="https://forms.gle/mALqVs2Y26SS5wRr8" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_preview_cta', 'request_pilot')}
              >
                Request pilot
              </a>
              <a 
                href="/institutions" 
                className="btn-secondary"
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_preview_cta', 'for_data_managers_curators')}
              >
                Learn more
              </a>
              <a 
                href="/sample-report" 
                className="btn-secondary" 
                onClick={() => trackCTA('institution_preview_cta', 'view_sample_report')}
              >
                See example report
              </a>
            </div>
          </div>
        </section>

        {/* How we work with institutions */}
        <section className="demo-section" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '2rem', textAlign: 'center' }}>
                How we work with institutions
              </h2>
              <div style={{ color: '#4c1d95', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  We support institutions in two ways:
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                    FAIRy Core (no-cost tooling for researchers and labs)
                  </h3>
                  <p style={{ marginBottom: '1rem' }}>
                    FAIRy Core is the local validator that runs on your own machine. It checks required metadata fields, filename rules, and ID consistency, and produces a Submission Readiness Report (what to fix) — without uploading data anywhere.
                  </p>
                  <p>
                    The goal is to let researchers catch problems themselves before handoff.
                  </p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                    Institutional pilots (scoped engagement)
                  </h3>
                  <p style={{ marginBottom: '1rem' }}>
                    For data stewards, collections, and core facilities, we run a short pilot where we:
                  </p>
                  <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '0.5rem' }}>capture your intake requirements (the "must not be blank / must match / must follow this pattern" rules),</li>
                    <li style={{ marginBottom: '0.5rem' }}>encode them into a rulepack,</li>
                    <li style={{ marginBottom: '0.5rem' }}>generate a readiness report in language you can forward internally, and</li>
                    <li style={{ marginBottom: '0.5rem' }}>produce an attestation file that documents what was checked, when, and under which rules.</li>
                  </ul>
                  <p style={{ marginBottom: '1rem' }}>
                    You keep that rulepack. You can continue running FAIRy internally with it, and you can add or refine rules over time as your policies change.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    Some groups are comfortable maintaining their own rulepack after the pilot. Others ask us to maintain and update it for them and keep generating reports. Both paths are supported.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    Pilots are structured, budgetable work.
                  </p>
                  <p>
                    If you manage or review incoming datasets and want to scope a pilot, you can request one here:
                  </p>
                  <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                    <a 
                      href="https://forms.gle/mALqVs2Y26SS5wRr8" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      onClick={() => trackCTA('institution_engagement_cta', 'request_pilot')}
                    >
                      Request pilot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Researcher Banner */}
        <section style={{ padding: '3rem 0', backgroundColor: '#f3e8ff', borderTop: '2px solid #e9d5ff', borderBottom: '2px solid #e9d5ff' }}>
          <div className="container">
            <div style={{ 
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)', 
              borderRadius: '1rem', 
              padding: '2.5rem', 
              textAlign: 'center',
              boxShadow: '0 10px 25px -3px rgba(139, 92, 246, 0.2)'
            }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
                Are you submitting data to a repository yourself?
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#f3e8ff', marginBottom: '1.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                Don't get your dataset bounced. FAIRy tells you exactly what's missing so you don't get yelled at.
              </p>
              <a 
                href="#solo-tier" 
                className="btn-primary"
                style={{ 
                  backgroundColor: 'white', 
                  color: '#7c3aed',
                  fontSize: '1.125rem',
                  padding: '1rem 2.5rem'
                }}
                onClick={() => trackCTA('individual_researcher_link', 'banner_cta')}
              >
                See how FAIRy helps individual researchers →
              </a>
            </div>
          </div>
        </section>

        {/* Solo Tier Section - Individual Researchers */}
        <section id="solo-tier" className="demo-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Don't get your dataset bounced by GEO, Zenodo, or your core facility
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', marginBottom: '1rem' }}>
                Tired of being told "fix your metadata" with no specifics? FAIRy runs locally and tells you exactly what's missing so you don't get yelled at.
              </p>
              <p style={{ fontSize: '1rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                Get a checklist before you submit — PASS / WARN / FAIL, why it matters, and how to fix it. This is what your curator is going to ask for.
              </p>
              <div className="cta-buttons" style={{ marginBottom: '0' }}>
                <a href="#waitlist" className="btn-primary" onClick={() => trackCTA('solo_tier_cta', 'get_fairy')}>
                  Get FAIRy
                </a>
                <a href="/sample-report" className="btn-secondary" onClick={() => trackCTA('solo_tier_cta', 'see_example_report')}>
                  See example report
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For individual researchers, labs, grad students, and PIs
              </p>
            </div>
            
            <div 
              className="demo-card" 
              tabIndex={0} 
              role="button" 
              aria-label="View sample validation report"
              onClick={() => window.location.href = '/sample-report'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = '/sample-report';
                }
              }}
            >
              <div className="demo-badge">Demo / sample data</div>
              <h3 className="demo-title">This is what your curator is going to ask for</h3>
              <div className="check-item">
                <div className="check-dot check-pass"></div>
                <span className="check-label">✅ Metadata completeness ✓</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-warning"></div>
                <span className="check-label">⚠ File naming convention</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-fail"></div>
                <span className="check-label">✗ Required fields missing</span>
              </div>
              <p style={{ marginTop: '12px', color: '#6b46c1' }}>
                FAIRy runs locally and tells you exactly what's missing and how to fix it — no vague "fix your metadata" messages. Get a checklist before you submit so you don't get bounced.
              </p>
              <p style={{ marginTop: '20px', color: '#64748b', fontSize: '0.875rem' }}>
                View the full sample report →
              </p>
            </div>
            
            {/* Quick Install Section */}
            <div id="quick-install" style={{ 
              background: '#ffffff', 
              border: '2px solid #e9d5ff', 
              borderRadius: '1rem', 
              padding: '2rem', 
              marginTop: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1.5rem', textAlign: 'center' }}>
                How FAIRy runs in your environment
              </h3>
              
              <p style={{ fontSize: '1rem', color: '#4c1d95', marginBottom: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
                Here's exactly how this would work on your machine if you said yes.
              </p>
              
              {/* Section 1: Run it locally */}
              <div style={{ 
                marginBottom: '2rem'
              }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  1. Run it locally on your machine
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                  During the pilot, you run FAIRy on a folder or metadata sheet.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                  FAIRy checks the dataset against your required fields and naming rules, and generates:
                </p>
                <ul style={{ fontSize: '0.875rem', color: '#6b46c1', marginLeft: '1.5rem', marginBottom: '0.75rem', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    a one-page Submission Readiness Report (PASS / WARN / FAIL + how to fix), and
                  </li>
                  <li>
                    a machine-readable Attestation file (timestamp, rulepack version, file hashes).
                  </li>
                </ul>
                <div style={{ 
                  background: '#f3e8ff', 
                  border: '1px solid #e9d5ff', 
                  padding: '1rem', 
                  borderRadius: '0.75rem', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <pre style={{ margin: 0, color: '#6b46c1', whiteSpace: 'pre-wrap' }}><code>fairy validate /path/to/dataset --out out/</code></pre>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  Nothing is uploaded.
                  <br />
                  No accounts, no cloud, no external transfer. All processing happens on your machine / inside your network.
                </p>
              </div>
              
              {/* Section 2: Optional browser */}
              <div style={{ 
                marginBottom: '2rem'
              }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  2. (Optional) Open it in a browser instead of reading the terminal
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                  If you don't want to look at terminal output, FAIRy can render the same report in a local browser window so you can click through issues instead of scrolling logs.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  Same checks. Same PASS / WARN / FAIL guidance. Still runs locally.
                </p>
              </div>
              
              <div style={{ 
                background: '#f3e8ff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1rem', 
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: '#4c1d95', margin: '0', fontWeight: '500' }}>
                  🔒 Local-first privacy: No data leaves your environment. All processing happens on your machines.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }} onClick={() => trackCTA('quick_install_cta', 'get_fairy')}>
                  Get FAIRy
                </a>
                <a href="/sample-report" className="btn-secondary" onClick={() => trackCTA('quick_install_cta', 'see_example_report')}>
                  See example report
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Solo */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How FAIRy fits your intake process</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Run FAIRy on your dataset</h3>
                <p className="step-description">
                  Point FAIRy at a folder or metadata sheet in your environment. It scans filenames and required fields locally — no data leaves your system.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Fix issues with clear tips</h3>
                <p className="step-description">
                  FAIRy tells you exactly what’s wrong (bad filename, missing contact email, non-ISO date) and how to fix it. No guessing — we point to the exact column / file.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Generate a readiness sheet</h3>
                <p className="step-description">
                  FAIRy produces a one-page PASS / WARN / FAIL report (why it matters + how to fix) that you can hand back to the lab / PI — or attach to a ticket before submission.
                </p>
                <a href="/sample-report" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  See sample report →
                </a>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }} onClick={() => trackCTA('how_it_works_cta', 'get_fairy')}>
                Get FAIRy
              </a>
              <a href="/sample-report" className="btn-secondary" onClick={() => trackCTA('how_it_works_cta', 'see_example_report')}>
                View example report
              </a>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For individual researchers → <a href="#institution-preview" style={{ color: '#6b7280', textDecoration: 'underline' }}>For institutions / data stewards</a>
              </p>
            </div>
          </div>
        </section>

        {/* Waitlist Form - For Individual Researchers */}
        <section id="waitlist" className="waitlist-section">
          <div className="container">
            <div className="waitlist-form">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0f172a', marginBottom: '16px', textAlign: 'center' }}>
                Get FAIRy
              </h3>
              <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '24px', textAlign: 'center' }}>
                Join the waitlist for early access or download FAIRy when available. Run it locally and get a checklist so you don't get rejected.
              </p>
              <FeedbackForm formType="waitlist" />
            </div>
          </div>
        </section>

        {/* 60-Second Survey */}
        <section id="survey" className="survey-section">
          <div className="container">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0f172a', marginBottom: '16px' }}>
              Help us build v0.1
            </h3>
            <p style={{ color: '#64748b', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Share your biggest data submission pain points in our quick survey. Your feedback directly shapes our first release.
            </p>
            <a 
              href="/survey" 
              className="btn-secondary"
            >
              Take 60-second survey →
            </a>
        </div>
      </section>

    </main>
    </>
  );
}
