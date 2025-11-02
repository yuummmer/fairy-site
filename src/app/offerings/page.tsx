"use client";

export default function OfferingsPage() {
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
          background: radial-gradient(circle at 70% 50%, #f3e8ff 0%, #e9d5ff 50%, #f3e8ff 100%);
          position: relative;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-content {
          text-align: left;
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
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .hero-cta {
          margin-bottom: 1rem;
        }
        
        .hero-description {
          font-size: 1rem;
          color: #6b46c1;
          margin-bottom: 1rem;
          line-height: 1.6;
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
        
        .reassurance-line {
          font-size: 0.875rem;
          color: #6b46c1;
          margin-top: 0.5rem;
        }
        
        .screenshot-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 1.5rem;
          position: relative;
        }
        
        .screenshot-card::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(243, 232, 255, 0.8) 0%, rgba(233, 213, 255, 0.6) 50%, transparent 100%);
          border-radius: 1.5rem;
          z-index: -1;
        }
        
        .screenshot-header {
          font-size: 0.875rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .status-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }
        
        .status-table th {
          text-align: left;
          padding: 0.75rem;
          border-bottom: 2px solid #e9d5ff;
          color: #4c1d95;
          font-weight: 600;
        }
        
        .status-table td {
          padding: 0.75rem;
          border-bottom: 1px solid #f3e8ff;
          color: #4c1d95;
        }
        
        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-weight: 600;
          font-size: 0.75rem;
        }
        
        .status-pass {
          background-color: #d1fae5;
          color: #065f46;
        }
        
        .status-warn {
          background-color: #fef3c7;
          color: #92400e;
        }
        
        .status-fail {
          background-color: #fee2e2;
          color: #991b1b;
        }
        
        .section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .section-alt {
          padding: 5rem 0;
          background-color: #f3e8ff;
        }
        
        .section-white {
          padding: 5rem 0;
          background-color: #ffffff;
        }
        
        .description {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .description p {
          font-size: 1.125rem;
          color: #6b46c1;
          line-height: 1.8;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .content-box {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .item-list {
          list-style: none;
          padding: 0;
        }
        
        .item-list li {
          padding: 1.5rem;
          margin-bottom: 1rem;
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          color: #4c1d95;
          line-height: 1.8;
        }
        
        .item-list li strong {
          color: #4c1d95;
          font-weight: 600;
        }
        
        .product-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .product-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 2rem;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .product-card:hover {
          transform: translateY(-2px);
          border-color: #c4b5fd;
        }
        
        .product-card h4 {
          font-size: 1.375rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.25rem;
          margin-top: 0;
          line-height: 1.3;
        }
        
        .product-card p {
          color: #6b46c1;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }
        
        .section-tagline {
          font-size: 1.125rem;
          color: #6b46c1;
          text-align: center;
          max-width: 800px;
          margin: -2rem auto 3rem;
          line-height: 1.7;
        }
        
        .highlight-box {
          background: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .highlight-box p {
          font-size: 1.125rem;
          color: #4c1d95;
          line-height: 1.8;
          margin: 0;
        }
        
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .hero-content {
            text-align: center;
          }
          
          .screenshot-card {
            max-width: 600px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0;
          }
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .btn-primary {
            width: 100%;
            justify-content: center;
          }
          
          .description p {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .item-list li {
            padding: 1.25rem;
          }
          
          .product-cards {
            grid-template-columns: 1fr;
          }
          
          .product-card {
            padding: 1.5rem;
          }
          
          .highlight-box {
            padding: 1.5rem;
          }
          
          .highlight-box p {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1>Stop fixing broken data by hand</h1>
                <p className="subheadline">
                  FAIRy checks incoming datasets against your rules before they get submitted and gives contributors a one-page "here's what to fix" report. Local-first. No uploads.
                </p>
                <div className="hero-cta">
                  <a href="#" className="btn-primary">
                    Get a Preflight Mapping Session →
                  </a>
                </div>
                <p className="hero-description">
                  We'll map your 'don't publish without this' rules and show you what your readiness report would look like.
                </p>
                <p className="reassurance-line">
                  For data stewards, curators, cores, and collections.
                </p>
              </div>
              <div className="screenshot-card">
                <div className="screenshot-header">FAIRy Readiness Report</div>
                <table className="status-table">
                  <thead>
                    <tr>
                      <th>Check</th>
                      <th>Status</th>
                      <th>Next Step</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sample IDs present</td>
                      <td><span className="status-badge status-pass">PASS</span></td>
                      <td>No action needed</td>
                    </tr>
                    <tr>
                      <td>Dates in ISO format</td>
                      <td><span className="status-badge status-pass">PASS</span></td>
                      <td>No action needed</td>
                    </tr>
                    <tr>
                      <td>Contact email valid</td>
                      <td><span className="status-badge status-warn">WARN</span></td>
                      <td>Verify email format</td>
                    </tr>
                    <tr>
                      <td>File naming convention</td>
                      <td><span className="status-badge status-fail">FAIL</span></td>
                      <td>Rename files per standard</td>
                    </tr>
                    <tr>
                      <td>Required metadata fields</td>
                      <td><span className="status-badge status-pass">PASS</span></td>
                      <td>No action needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="section-title">FAIRy Submission Readiness Package</h2>
            <p className="section-tagline">
              Your intake rules, encoded into a local rulepack plus a one-page readiness report for contributors and an attestation bundle you can attach to deposits.
            </p>
          </div>
        </section>
        
        <section className="section-alt">
          <div className="container">
            <div className="content-box" style={{ maxWidth: '800px' }}>
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '1.25rem', 
                padding: '2.5rem',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '1.25rem', 
                  color: '#4c1d95', 
                  fontStyle: 'italic', 
                  lineHeight: '1.8', 
                  marginBottom: '1.5rem' 
                }}>
                  "Quote from data steward or collection manager"
                </p>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#6b46c1', 
                  margin: 0 
                }}>
                  Name, Title, Institution
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#4c1d95', marginBottom: '1.5rem' }}>
                Ready to streamline your data intake?
              </h2>
              <a href="#" className="btn-primary" style={{ marginBottom: '1rem' }}>
                Start with a Preflight Mapping Session →
              </a>
            </div>
          </div>
        </section>
        
        <section className="section-alt">
          <div className="container">
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="content-box">
              <div style={{ 
                background: '#ffffff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                  Do we have to upload our data to you?
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', margin: 0 }}>
                  No. FAIRy is local-first. You run it on your machine or inside your network. During the Preflight Mapping Session, we can work from column names and examples, you don't have to send us full datasets.
                </p>
              </div>
              <div style={{ 
                background: '#ffffff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                  Are we locked in after the pilot?
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', margin: 0 }}>
                  No. After the pilot, you keep your rulepack, your readiness report template, and your attestation bundle. You can keep using them internally.
                </p>
              </div>
              <div style={{ 
                background: '#ffffff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                  Can you update the rules when our policy changes?
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', margin: 0 }}>
                  Yes. You can edit the rulepack yourself, or we can maintain it for you when required fields / formats / vocabularies change.
                </p>
              </div>
              <div style={{ 
                background: '#ffffff', 
                border: '1px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.75rem' }}>
                  Do people have to use the command line to get the report?
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', margin: 0 }}>
                  FAIRy can run from the command line for power users, but the output is a clean one-page readiness report (PASS / WARN / FAIL with "how to fix") that you can just send around. Most contributors only ever see that report.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

