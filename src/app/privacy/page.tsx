"use client";

export default function Privacy() {
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
          color: #334155;
          background-color: #ffffff;
        }
        
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .header {
          padding: 40px 0;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 40px;
        }
        
        .header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }
        
        .header .subtitle {
          color: #64748b;
          font-size: 1.125rem;
        }
        
        .section {
          margin-bottom: 40px;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 16px;
        }
        
        .section-content {
          color: #475569;
          line-height: 1.7;
        }
        
        .section-content p {
          margin-bottom: 16px;
        }
        
        .section-content ul {
          margin-bottom: 16px;
          padding-left: 24px;
        }
        
        .section-content li {
          margin-bottom: 8px;
        }
        
        .highlight-box {
          background-color: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 24px;
        }
        
        .back-link:hover {
          color: #059669;
        }
        
        .contact-info {
          background-color: #f0fdf4;
          border: 2px solid #bbf7d0;
          border-radius: 12px;
          padding: 24px;
          margin-top: 40px;
        }
        
        .contact-info h3 {
          color: #0f172a;
          margin-bottom: 12px;
        }
        
        .contact-info p {
          color: #374151;
          margin-bottom: 8px;
        }
      `}</style>
      
      <div className="container">
        <div className="back-link" onClick={() => window.history.back()}>
          ← Back to FAIRy
        </div>
        
        <div className="header">
          <h1>Privacy policy</h1>
          <p className="subtitle">How we handle your data and protect your privacy</p>
        </div>
        
        <div className="section">
          <h2 className="section-title">Local-first approach</h2>
          <div className="section-content">
            <p>
              FAIRy is designed with privacy as a core principle. All validation happens locally on your device 
              by default. Your research data never leaves your computer unless you explicitly choose to upload it.
            </p>
            
            <div className="highlight-box">
              <strong>Key principle:</strong> Your data stays on your device unless you decide otherwise.
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Data collection</h2>
          <div className="section-content">
            <p>We collect minimal information necessary to provide our service:</p>
            <ul>
              <li><strong>Waitlist emails:</strong> Only used to notify you about early access and product updates</li>
              <li><strong>Survey responses:</strong> Anonymous feedback to improve our product (no personal data collected)</li>
              <li><strong>Uploaded data:</strong> Only when you explicitly choose to upload for enhanced processing</li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Data retention</h2>
          <div className="section-content">
            <p>
              We follow strict data retention policies:
            </p>
            <ul>
              <li><strong>Uploaded datasets:</strong> Automatically deleted after validation completes</li>
              <li><strong>Email addresses:</strong> Retained only for product updates (unsubscribe anytime)</li>
              <li><strong>Survey data:</strong> Anonymous and aggregated for product development</li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">No tracking</h2>
          <div className="section-content">
            <p>
              Version 0.1 includes no analytics, tracking pixels, or third-party data collection. 
              We don&apos;t use cookies for tracking purposes.
            </p>
            
            <div className="highlight-box">
              <strong>No cookies banner needed:</strong> We don&apos;t track users or collect analytics data.
            </div>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Data security</h2>
          <div className="section-content">
            <p>
              When you choose to upload data, we use industry-standard security measures:
            </p>
            <ul>
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud storage with automatic deletion</li>
              <li>No data sharing with third parties</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <h2 className="section-title">Your rights</h2>
          <div className="section-content">
            <p>You have full control over your data:</p>
            <ul>
              <li>Request deletion of your email from our waitlist</li>
              <li>Opt out of product updates at any time</li>
              <li>Never upload data if you prefer local-only processing</li>
              <li>Contact us with any privacy concerns</li>
            </ul>
          </div>
        </div>
        
        <div className="contact-info">
          <h3>Questions about privacy?</h3>
          <p>Contact us at <a href="mailto:privacy@fairy.dev" style={{ color: '#059669' }}>privacy@fairy.dev</a></p>
          <p>Last updated: December 2024</p>
        </div>
      </div>
    </>
  );
}
