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
          padding: 3.5rem 0;
          background-color: #faf5ff;
        }
        
        .section-alt {
          padding: 3.5rem 0;
          background-color: #f3e8ff;
        }
        
        .section-white {
          padding: 3.5rem 0;
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
          margin-bottom: 2rem;
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
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .product-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 1.5rem;
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
          margin-bottom: 0.875rem;
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
          margin: -1.5rem auto 2rem;
          line-height: 1.7;
        }
        
        .who-for-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .who-for-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .who-for-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .who-for-card h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .who-for-card p {
          color: #6b46c1;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }
        
        .product-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .product-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 1.5rem;
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
          margin-bottom: 0.875rem;
          margin-top: 0;
          line-height: 1.3;
        }
        
        .product-card p {
          color: #6b46c1;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }
        
        .attestation-section {
          padding: 3.5rem 0;
          background-color: #f8fafc;
          position: relative;
        }
        
        .attestation-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #e9d5ff 0%, #c4b5fd 100%);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }
        
        .attestation-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .attestation-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .attestation-content > p {
          font-size: 1.25rem;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 600;
          line-height: 1.6;
        }
        
        .attestation-bundle-list {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .attestation-bundle-list h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .attestation-bundle-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .attestation-bundle-list li {
          padding: 0.375rem 0;
          color: #6b46c1;
          line-height: 1.6;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .attestation-bundle-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
        }
        
        .attestation-benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        
        .attestation-benefit {
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.25rem;
        }
        
        .attestation-benefit h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }
        
        .attestation-benefit p {
          color: #6b46c1;
          line-height: 1.7;
          margin: 0;
          font-size: 0.9375rem;
        }
        
        .attestation-closing {
          text-align: center;
          font-size: 1.125rem;
          color: #4c1d95;
          font-weight: 600;
          font-style: italic;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        .empathy-band {
          padding: 2.5rem 0;
          background-color: #f8fafc;
          border-top: 1px solid #e9d5ff;
          border-bottom: 1px solid #e9d5ff;
        }
        
        .empathy-text {
          font-size: 1.25rem;
          color: #4c1d95;
          text-align: center;
          font-style: italic;
          line-height: 1.6;
          margin: 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .qualification-bullets {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .qualification-bullets ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .qualification-bullets li {
          padding: 0.875rem 0;
          padding-left: 1.5rem;
          color: #4c1d95;
          line-height: 1.7;
          position: relative;
          font-size: 1rem;
        }
        
        .qualification-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .attestation-audience-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        .attestation-audience-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
        }
        
        .attestation-audience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .attestation-audience-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 0.875rem;
          margin-top: 0;
        }
        
        .attestation-audience-card p {
          color: #6b46c1;
          line-height: 1.7;
          margin: 0;
          font-size: 1rem;
        }
        
        .cta-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 3rem 2rem;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .cta-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .btn-secondary {
          background-color: #ffffff;
          color: #7c3aed;
          padding: 0.875rem 1.75rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          border: 2px solid #7c3aed;
          cursor: pointer;
        }
        
        .btn-secondary:hover {
          background-color: #faf5ff;
          transform: translateY(-1px);
        }
        
        .btn-link {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s ease;
        }
        
        .btn-link:hover {
          color: #6d28d9;
          text-decoration: underline;
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
          
          .who-for-grid {
            grid-template-columns: 1fr;
          }
          
          .who-for-card {
            padding: 1.5rem;
          }
          
          .product-cards {
            grid-template-columns: 1fr;
          }
          
          .product-card {
            padding: 1.5rem;
          }
          
          .attestation-content h2 {
            font-size: 2rem;
          }
          
          .attestation-benefits {
            grid-template-columns: 1fr;
          }
          
          .attestation-audience-cards {
            grid-template-columns: 1fr;
          }
          
          .empathy-text {
            font-size: 1.125rem;
            padding: 0 1rem;
          }
          
          .cta-card {
            padding: 2rem 1.5rem;
          }
          
          .btn-secondary {
            width: 100%;
            margin-bottom: 0.75rem;
            margin-right: 0;
            justify-content: center;
          }
          
          .btn-link {
            display: block;
            text-align: center;
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
                  <a href="/preflight-mapping" className="btn-primary">
                    Request a Pilot
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
        
        <section className="empathy-band">
          <div className="container">
            <p className="empathy-text">
              Saying "this won't pass" shouldn't be miserable. FAIRy gives you rule-based checks, a clear report, and an attestation.
            </p>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="section-title">FAIRy Submission Readiness Package</h2>
            <p className="section-tagline">
              Your intake rules, encoded into a local rulepack plus a one-page readiness report for contributors and an attestation bundle you can attach to deposits.
            </p>
            
            <div className="content-box" style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem', textAlign: 'center' }}>
                You get
              </h3>
              <p style={{ fontSize: '1rem', color: '#6b46c1', textAlign: 'center', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                You walk away with these after the pilot. They're yours.
              </p>
              <div className="product-cards">
                <div className="product-card">
                  <h4>Your rulepack, encoded</h4>
                  <p>
                    Your required fields, formats, and naming rules are encoded into a FAIRy rulepack that runs locally. You keep it.
                  </p>
                </div>
                <div className="product-card">
                  <h4>One-page readiness report</h4>
                  <p>
                    For each dataset, FAIRy produces a human-readable PASS / WARN / FAIL sheet with "how to fix" text you can send back to contributors.
                  </p>
                </div>
                <div className="product-card">
                  <h4>Language your people will actually listen to</h4>
                  <p>
                    We adapt wording to match how you already tell labs/collectors what's wrong, so you don't get 'what does this even mean?' emails.
                  </p>
                </div>
                <div className="product-card">
                  <h4>Attestation bundle</h4>
                  <p>
                    FAIRy also generates a machine-readable record (timestamp, file hashes, rulepack version) so you can prove what was checked and when.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-alt">
          <div className="container">
            <h2 className="section-title">Who this is for / Not a fit</h2>
            <div className="content-box">
              <div className="qualification-bullets">
                <ul>
                  <li>Core facility staff and bioinformatics teams who run QC before returning results to labs</li>
                  <li>Data stewards and RDM teams who need repository-style preflight checks</li>
                  <li>Collections managers handling hundreds of datasets across facilities, herbaria, and archives</li>
                  <li>Groups that need to prove consistent QC before deposit for funder/compliance reporting</li>
                </ul>
                <p style={{ fontSize: '0.9375rem', color: '#6b46c1', textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic' }}>
                  Not a fit: Individual researchers submitting their own datasets (check out the solo tier instead).
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="attestation-section">
          <div className="container">
            <div className="attestation-content">
              <div className="attestation-icon">📋</div>
              <h2>Attestation: Show your due diligence</h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                It's your "we actually checked this" receipt.
              </p>
              
              <div className="attestation-audience-cards">
                <div className="attestation-audience-card">
                  <h4>Institutions</h4>
                  <p>
                    When a PI asks "who approved this?" six months later, you can point to the attestation: timestamp, file hashes, rulepack version, PASS/WARN/FAIL results. That protects you.
                  </p>
                </div>
                <div className="attestation-audience-card">
                  <h4>Journals</h4>
                  <p>
                    Some journals require proof of data validation before acceptance. FAIRy's attestation bundle is machine-readable and can be attached to your submission packet.
                  </p>
                </div>
                <div className="attestation-audience-card">
                  <h4>Grant panels</h4>
                  <p>
                    Funders increasingly ask for evidence of consistent QC practices. Attestation bundles provide a verifiable record you can share with leadership or include in compliance reports.
                  </p>
                </div>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <a href="/samples/export-pack/FAIRy_attestation_example.json" download className="btn-secondary" style={{ marginRight: '1rem' }}>
                  Download sample attestation file
                </a>
                <a href="/docs" className="btn-link">
                  View documentation →
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="container">
            <div className="cta-card">
              <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#4c1d95', marginBottom: '1rem', textAlign: 'center' }}>
                Start with a Preflight Mapping Session
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', textAlign: 'center', marginBottom: '1.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                We'll map your 5–7 "don't publish without this" rules and show you what your readiness report would look like.
              </p>
              <div style={{ textAlign: 'center' }}>
                <a href="/preflight-mapping" className="btn-primary">
                  Request a Pilot
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Signals */}
        <section className="section-white">
          <div className="container">
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              Pricing
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '1.25rem', 
                padding: '2rem',
                textAlign: 'center'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  background: '#f3e8ff',
                  color: '#6b46c1',
                  padding: '0.5rem 1rem',
                  borderRadius: '1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  Free
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.5rem' }}>
                  FAIRy-core
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  For individual researchers and DIY labs.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Open-source validator (local-first)
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Starter templates & common rulepacks
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Readiness report (human + JSON)
                  </li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  Includes common, non-custom rulepacks. Custom rulepacks are part of Pilot/Institution.
                </p>
                <a href="/researchers" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
                  Download FAIRy-core →
                </a>
              </div>
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '1.25rem', 
                padding: '2rem',
                textAlign: 'center'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  background: '#f3e8ff',
                  color: '#6b46c1',
                  padding: '0.5rem 1rem',
                  borderRadius: '1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '1rem'
                }}>
                  Pilot
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '0.5rem' }}>
                  Encode your rules
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  For labs & cores that need their intake codified.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '1.5rem 0', textAlign: 'left' }}>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Translate your intake policy into a custom rulepack
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    One guided run + readiness report you can forward internally
                  </li>
                  <li style={{ padding: '0.5rem 0', color: '#6b46c1', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#7c3aed', fontWeight: '700', fontSize: '1.25rem' }}>•</span>
                    Attestation file (what was checked, when, and by which rules)
                  </li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '1rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  Typical turnaround: 1–2 weeks; fixed-price scope.
                </p>
                <a href="/preflight-mapping" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
                  Request a Pilot Scope →
                </a>
              </div>
            </div>
            <p style={{ 
              textAlign: 'center', 
              marginTop: '1.5rem', 
              fontSize: '0.875rem', 
              color: '#6b46c1'
            }}>
              Looking for maintenance, dashboards, SLAs? <a href="/preflight-mapping" style={{ color: '#7c3aed', textDecoration: 'underline', fontWeight: '500' }}>Talk to us.</a>
            </p>
            
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
        
        <section className="section">
          <div className="container">
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              Resources for evaluation / deployment
            </h2>
            <div className="content-box">
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '1.25rem', 
                padding: '2rem',
                marginBottom: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.375rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Institution Kit (PDF)
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Everything you need for security review and deployment planning:
                </p>
                <ul style={{ color: '#6b46c1', lineHeight: '1.8', marginBottom: '1.25rem', marginLeft: '1.5rem' }}>
                  <li>Security summary and architecture overview</li>
                  <li>Software Bill of Materials (SBOM)</li>
                  <li>Deployment options and requirements</li>
                  <li>Data handling and privacy policy</li>
                  <li>Support expectations and SLAs</li>
                </ul>
                <a 
                  href="/institution-kit.pdf" 
                  download 
                  className="btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  Download Institution Kit (PDF) →
                </a>
              </div>
              
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '1.25rem', 
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.375rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                  Rollout playbook
                </h3>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Recommended workflow for integrating FAIRy into your intake process:
                </p>
                <div style={{ 
                  background: '#faf5ff', 
                  border: '1px solid #e9d5ff', 
                  borderRadius: '0.75rem', 
                  padding: '1.5rem',
                  marginBottom: '1.25rem'
                }}>
                  <p style={{ color: '#4c1d95', lineHeight: '1.8', margin: 0, fontWeight: '500' }}>
                    <strong>Lab runs FAIRy</strong> → <strong>Curator reviews</strong> → <strong>Deposit</strong>
                  </p>
                  <p style={{ color: '#6b46c1', lineHeight: '1.7', marginTop: '0.75rem', margin: 0, fontStyle: 'italic' }}>
                    "If FAIRy says green, curator fast-tracks metadata review."
                  </p>
                </div>
                <p style={{ color: '#6b46c1', lineHeight: '1.7', margin: 0 }}>
                  This workflow lets labs self-check before submission while giving curators confidence to fast-track datasets that pass FAIRy's validation. The readiness report becomes part of the submission packet, and the attestation bundle provides audit trail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

