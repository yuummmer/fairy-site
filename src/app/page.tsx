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
        
        .social-proof {
          padding: 3.75rem 0;
          background-color: #faf5ff;
          text-align: center;
        }
        
        .logos-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          opacity: 0.6;
        }
        
        .logo-item {
          font-size: 1.125rem;
          font-weight: 500;
          color: #6b46c1;
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
            <h1>Make data FAIR, not frustrating</h1>
            <p className="subheadline">
              Package and deposit datasets to GEO and Zenodo with clear, actionable guidance and reproducible artifacts
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
            
            {/* Minimalist Process Flow */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem', 
              marginTop: '2rem',
              fontSize: '1.5rem'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                color: '#4c1d95'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📁</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Drop</span>
              </div>
              
              <div style={{ color: '#c4b5fd', fontSize: '1rem' }}>→</div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                color: '#4c1d95'
              }}>
                <span style={{ fontSize: '1.25rem' }}>🔧</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Fix</span>
              </div>
              
              <div style={{ color: '#c4b5fd', fontSize: '1rem' }}>→</div>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                color: '#4c1d95'
              }}>
                <span style={{ fontSize: '1.25rem' }}>📤</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Export</span>
              </div>
            </div>
          </div>
        </section>

        {/* Solo Tier Section */}
        <section id="solo-tier" className="demo-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Make research data FAIR, not frustrating
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                One command turns a dataset into a clear validation report and manifest you can attach to your GEO/Zenodo submission.
              </p>
              <div className="cta-buttons" style={{ marginBottom: '0' }}>
                <a href="/sample-report" className="btn-primary">
                  See sample report
                </a>
                <a href="#quick-install" className="btn-secondary">
                  Download FAIRy (v0.1)
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                <a href="/survey" style={{ color: '#6b7280', textDecoration: 'underline' }}>60-sec survey</a>
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
              <h3 className="demo-title">Validation report preview</h3>
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
                Command line first, or view with Streamlit
              </h3>
              
              {/* CLI Option - Primary */}
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
                    PRIMARY
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#4c1d95', margin: '0' }}>
                    Command-line interface
                  </h4>
                </div>
                <div style={{ 
                  background: '#f3e8ff', 
                  border: '1px solid #e9d5ff', 
                  padding: '1rem', 
                  borderRadius: '0.75rem', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ color: '#6b46c1', marginBottom: '0.5rem' }}>$ pip install fairy-validator</div>
                  <div style={{ color: '#6b46c1', marginBottom: '0.5rem' }}>$ fairy validate /path/to/dataset -o out/</div>
                  <div style={{ color: '#059669' }}>✓ HTML report opens automatically in browser</div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  Fast, direct workflow. All processing happens locally.
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
                    Visual interface
                  </h4>
                </div>
                <div style={{ 
                  background: '#f3e8ff', 
                  border: '1px solid #e9d5ff', 
                  padding: '1rem', 
                  borderRadius: '0.75rem', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.875rem',
                  marginBottom: '0.75rem'
                }}>
                  <div style={{ color: '#6b46c1', marginBottom: '0.5rem' }}>$ pip install "fairy-validator[ui]"</div>
                  <div style={{ color: '#6b46c1', marginBottom: '0.5rem' }}>$ fairy ui /path/to/dataset</div>
                  <div style={{ color: '#059669' }}>✓ Opens Streamlit interface in browser</div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                  Interactive validation and preview. Still processes locally.
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
                  🔒 <strong>Local-first privacy:</strong> No data leaves your device. All processing happens on your machine.
                </p>
              </div>
              
              <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }}>
                Get early access
              </a>
              <a href="/sample-report" className="btn-secondary">
                See what you'll get
              </a>
            </div>
          </div>
        </section>

        {/* How It Works - Solo */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How it works</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Drop in your dataset</h3>
                <p className="step-description">
                  Upload a folder or provide a repository path. We&apos;ll scan your files and metadata automatically.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Fix issues with clear tips</h3>
                <p className="step-description">
                  Get specific file and field pointers for each issue. No guessing—we point to the exact location to fix.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Export manifest + report</h3>
                <p className="step-description">
                  Generate compliance-ready manifests and HTML/PDF reports, then deposit directly to your repository.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#waitlist" className="btn-primary" style={{ marginRight: '1rem' }}>
                Download FAIRy Solo
              </a>
              <a href="/survey" className="btn-secondary">
                60-second survey
              </a>
            </div>
          </div>
        </section>

        {/* Institution Preview Section */}
        <section id="institution-preview" className="demo-section" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Reduce deposit back-and-forth across your campus
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto', marginBottom: '2rem' }}>
                FAIRy runs locally to produce clear validation reports and manifests your curators can trust—local-first, no telemetry.
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
                  🔒 <strong>Local-first privacy:</strong> Runs locally · No uploads · PyPI JSON ping only for version checks (opt-out: FAIRY_NO_UPDATE=1)
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>⚡</div>
                <h3 className="step-title">Batch processing</h3>
                <p className="step-description">
                  Process hundreds of datasets with CLI pipelines. Non-interactive exit codes for CI/CD integration.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📋</div>
                <h3 className="step-title">Curator-ready reports</h3>
                <p className="step-description">
                  PDF reports with clear "how to fix" guidance. Links back to GEO/Zenodo guidelines for compliance.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>🔒</div>
                <h3 className="step-title">Security-first</h3>
                <p className="step-description">
                  No data leaves your network. Offline install instructions. SBOM transparency for procurement.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="/institutions" 
                className="btn-primary" 
                style={{ marginRight: '1rem' }}
                onClick={() => trackCTA('institution_preview_cta', 'see_institution_features')}
              >
                See institution features
              </a>
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
                className="btn-secondary"
                onClick={() => trackCTA('institution_preview_cta', 'take_survey')}
              >
                Take survey
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

        {/* Social Proof */}
        <section className="social-proof">
          <div className="container">
            <div className="logos-grid">
              <div className="logo-item">GEO</div>
              <div className="logo-item">Zenodo</div>
              <div className="logo-item">ORCID</div>
              <div className="logo-item">OpenAlex</div>
              <div className="logo-item">Built with Python</div>
            </div>
          </div>
        </section>

    </main>
    </>
  );
}
