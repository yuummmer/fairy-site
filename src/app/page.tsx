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
            <h1>Make data ready before you hand it off.</h1>
            <p className="subheadline">
              FAIRy runs locally on your dataset and generates a one-page readiness sheet — PASS / WARN / FAIL, why it matters, and how to fix — so curators don’t have to chase missing fields and bad filenames.
            </p>
            <div className="cta-buttons">
              <a 
                href="#solo-tier" 
                className="btn-primary"
                onClick={() => trackCTA('hero_cta_click', 'individual_researcher')}
              >
                Individual researcher
              </a>
              <a 
                href="/institutions" 
                className="btn-secondary"
                onClick={() => trackCTA('hero_cta_click', 'for_institutions')}
              >
                For institutions
              </a>
            </div>
            
          </div>
        </section>

        {/* Solo Tier Section */}
        <section id="solo-tier" className="demo-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Make data ready before you hand it off.
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                FAIRy runs locally on your dataset and generates a one-page readiness sheet — PASS / WARN / FAIL, why it matters, and how to fix — so curators don’t have to chase missing fields and bad filenames.
              </p>
              <div className="cta-buttons" style={{ marginBottom: '0' }}>
                <a href="/sample-report" className="btn-primary">
                  See sample report
                </a>
                <a href="/institutions#pilot" className="btn-secondary">
                  Partner with us (pilot)
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For data stewards / data managers / core facilities →{' '}
                <a href="/survey" style={{ color: '#6b7280', textDecoration: 'underline' }}>Take the 1-minute pilot intake</a>
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
              <h3 className="demo-title">Preflight readiness sheet</h3>
              <div className="check-item">
                <div className="check-dot check-pass"></div>
                <span className="check-label">Metadata completeness ✓</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-warning"></div>
                <span className="check-label">File naming convention ⚠</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-fail"></div>
                <span className="check-label">Required fields missing ✗</span>
              </div>
              <p style={{ marginTop: '12px', color: '#6b46c1' }}>
                What your curator / data manager gets back from FAIRy: PASS / WARN / FAIL plus how to fix it, no raw data included.
              </p>
              <p style={{ marginTop: '20px', color: '#64748b', fontSize: '0.875rem' }}>
                View sample report →
              </p>
            </div>
            
            {/* Quick Install Section */}
            <div id="quick-install" style={{ 
              background: '#ffffff', 
              border: '2px solid #e9d5ff', 
              borderRadius: '1rem', 
              padding: '2rem', 
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                How FAIRy runs in your environment
              </h3>
              
              {/* CLI Option - Pilot */}
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #7c3aed', 
                borderRadius: '1rem', 
                padding: '1.5rem', 
                marginBottom: '1.5rem',
                textAlign: 'left',
                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.1)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{ 
                    background: '#7c3aed', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1.25rem', 
                    fontSize: '0.75rem', 
                    fontWeight: '500' 
                  }}>
                    PILOT
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#4c1d95', margin: '0' }}>
                    Pilot workflow · Command line run
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0 0 0.75rem' }}>
                  During pilot, you run FAIRy locally on a folder or metadata sheet. It generates a one-page readiness sheet (PASS / WARN / FAIL + how to fix) and a structured JSON summary.
                </p>
                <div style={{ 
                  background: '#f3e8ff', 
                  border: '1px solid #e9d5ff', 
                  padding: '1rem', 
                  borderRadius: '0.75rem', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ color: '#6b46c1', marginBottom: '0.5rem', fontWeight: 600 }}>Example invocation (local run):</div>
                  <pre style={{ margin: 0, color: '#6b46c1', whiteSpace: 'pre-wrap' }}><code>fairy validate /path/to/dataset --out out/</code></pre>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  All processing happens on your own machine. No uploads, no accounts.
                </p>
              </div>
              
              {/* UI Option - Optional */}
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #c4b5fd', 
                borderRadius: '1rem', 
                padding: '1.5rem', 
                marginBottom: '1rem',
                textAlign: 'left',
                boxShadow: '0 4px 6px -1px rgba(196, 181, 253, 0.1)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '1rem' 
                }}>
                  <div style={{ 
                    background: '#6b46c1', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1.25rem', 
                    fontSize: '0.75rem', 
                    fontWeight: '500' 
                  }}>
                    OPTIONAL
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#4c1d95', margin: '0' }}>
                    Optional visual review
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0 0 0.75rem' }}>
                  For teams that don’t want command line, FAIRy can render an interactive report in a local browser window.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0 0 0.75rem' }}>
                  Same checks, same PASS / WARN / FAIL guidance — just click-to-view instead of terminal.
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  Still runs locally. Still no data leaves.
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
              
              <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }}>
                Join pilot
              </a>
              <a href="/sample-report" className="btn-secondary">
                View sample report
              </a>
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
              <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }}>
                Join pilot
              </a>
              <a href="/sample-report" className="btn-secondary">
                View sample report
              </a>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For data stewards / data managers / core facilities → <a href="/survey" style={{ color: '#6b7280', textDecoration: 'underline' }}>1-minute pilot intake</a>
              </p>
            </div>
          </div>
        </section>

        {/* Institution Preview Section */}
        <section id="institution-preview" className="demo-section" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Get cleaner submissions the first time
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto', marginBottom: '2rem' }}>
                FAIRy runs locally and flags missing metadata, filename problems, and other issues that block submission — before your curator or data manager ever touches the dataset.
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
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📏</div>
                <h3 className="step-title">Consistent intake rules</h3>
                <p className="step-description">
                  Turn your “we can’t accept this without X” policies (sample IDs, contact email, ISO dates, file naming, permit/embargo flags) into a reusable preflight check. Everyone gets held to the same standard.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📝</div>
                <h3 className="step-title">One-page readiness sheet</h3>
                <p className="step-description">
                  FAIRy produces a PASS / WARN / FAIL summary with plain-language “how to fix” instructions. You can send it back to the lab / PI instead of rewriting the same email.
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
                href="/sample-report" 
                className="btn-secondary" 
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_preview_cta', 'view_sample_report')}
              >
                View sample report
              </a>
              <a 
                href="/institutions#pilot" 
                className="btn-primary" 
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_preview_cta', 'join_pilot')}
              >
                Join pilot
              </a>
              <a 
                href="/institutions" 
                className="btn-secondary"
                onClick={() => trackCTA('institution_preview_cta', 'for_data_managers_curators')}
              >
                For data managers / curators
              </a>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section id="waitlist" className="waitlist-section">
          <div className="container">
            <div className="waitlist-form">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>
                Get started with FAIRy
              </h3>
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
