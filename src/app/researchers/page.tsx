"use client";

import { track } from '../../lib/analytics';

export default function ResearchersPage() {
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
        
        .section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .section-alt {
          padding: 5rem 0;
          background-color: #ffffff;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3.75rem;
        }
        
        .content-box {
          max-width: 800px;
          margin: 0 auto;
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 3rem;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        }
        
        .content-box h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
        }
        
        .content-box p {
          font-size: 1.125rem;
          color: #6b46c1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .pricing-card {
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
        }
        
        .pricing-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .pricing-badge {
          display: inline-block;
          background-color: #f3e8ff;
          color: #6b46c1;
          padding: 0.5rem 1rem;
          border-radius: 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        
        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }
        
        .pricing-card li {
          padding: 0.5rem 0;
          color: #6b46c1;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .pricing-card li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .content-box {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Researchers (Community)</h1>
            <p className="subheadline">
              Working solo? Start free with FAIRy-core: rigid spreadsheet templates, rulepacks, and a one-command validator. When your work expands across labs or you need repository-specific checks and attestations, we're here.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a 
                href="/docs" 
                className="btn-primary"
                onClick={() => track('community_download_clicked')}
              >
                Download FAIRy-core
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="content-box">
              <h2>Get started with FAIRy-core</h2>
              <p>
                FAIRy-core is the free, open-source validator for individual researchers. Use rigid spreadsheet templates, rulepacks, and a one-command validator to self-check your data before submission.
              </p>
              <p>
                When your work expands across labs or you need repository-specific checks and attestations, we're here to help with institutional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Signals */}
        <section className="section-alt">
          <div className="container">
            <h2 className="section-title">Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <span className="pricing-badge">Community (free)</span>
                <h3>FAIRy-core</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '1rem', fontStyle: 'italic' }}>
                  For individual researchers and DIY labs.
                </p>
                <ul>
                  <li>Open-source validator (local-first)</li>
                  <li>Starter templates & common rulepacks</li>
                  <li>Readiness report (human + JSON)</li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  Includes common, non-custom rulepacks. Custom rulepacks are part of Pilot/Institution.
                </p>
                <a href="/docs" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
                  Download FAIRy-core →
                </a>
              </div>
              <div className="pricing-card">
                <span className="pricing-badge">Pilot (paid)</span>
                <h3>Encode your rules</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '1rem', fontStyle: 'italic' }}>
                  For labs & cores that need their intake codified.
                </p>
                <ul>
                  <li>Translate your intake policy into a custom rulepack</li>
                  <li>One guided run + readiness report you can forward internally</li>
                  <li>Attestation file (what was checked, when, and by which rules)</li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  Typical turnaround: 1–2 weeks; fixed-price scope.
                </p>
                <a href="/preflight-mapping" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
                  Request a pilot scope →
                </a>
              </div>
              <div className="pricing-card">
                <span className="pricing-badge">Institution (annual)</span>
                <h3>Full support</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '1rem', fontStyle: 'italic' }}>
                  For institutions with multi-lab throughput & oversight needs.
                </p>
                <ul>
                  <li>Rulepack maintenance & governance (change control)</li>
                  <li>Provenance & attestations at scale</li>
                  <li>Dashboards & automation hooks (CI/ELN/LIMS)</li>
                  <li>SLAs + <a href="/institution-kit.pdf" style={{ color: '#7c3aed', textDecoration: 'underline' }}>security/SBOM documentation</a></li>
                </ul>
                <a href="/preflight-mapping" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', marginTop: '1rem' }}>
                  Request a pilot scope →
                </a>
              </div>
            </div>
            
            {/* Comparison Table */}
            <div style={{ 
              marginTop: '3rem',
              maxWidth: '800px',
              margin: '3rem auto 0',
              background: '#ffffff',
              border: '2px solid #e9d5ff',
              borderRadius: '1.25rem',
              padding: '2rem'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid #e9d5ff', color: '#4c1d95', fontWeight: '600' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '2px solid #e9d5ff', color: '#4c1d95', fontWeight: '600' }}>Community</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '2px solid #e9d5ff', color: '#4c1d95', fontWeight: '600' }}>Pilot</th>
                    <th style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '2px solid #e9d5ff', color: '#4c1d95', fontWeight: '600' }}>Institution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Custom rulepack</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✖︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✔︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✔︎</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Maintenance</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✖︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✖︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>✔︎</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem', color: '#4c1d95' }}>SLAs</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', color: '#4c1d95' }}>✖︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', color: '#4c1d95' }}>✖︎</td>
                    <td style={{ textAlign: 'center', padding: '0.75rem', color: '#4c1d95' }}>✔︎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

