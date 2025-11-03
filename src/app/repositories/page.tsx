"use client";

import { trackCTA } from '../../components/CTATracking';

export default function RepositoriesPage() {
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
          margin-right: 1rem;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .section {
          padding: 5rem 0;
          background-color: #ffffff;
        }
        
        .content-box {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
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
          margin-bottom: 2rem;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
        }
      `}</style>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Repositories</h1>
            <p className="subheadline">
              Pre-flight templates and rulepacks for submitters.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a 
                href="/preflight-mapping" 
                className="btn-primary"
                onClick={() => trackCTA('repositories_cta', 'request_pilot')}
              >
                Request a Pilot
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content-box">
              <h2>For repositories</h2>
              <p>
                Partner with us to provide pre-flight templates and rulepacks for your submitters. 
                Help researchers prepare their data correctly before submission.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href="/institutions" className="btn-primary">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

