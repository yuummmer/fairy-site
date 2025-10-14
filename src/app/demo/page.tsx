"use client";

import FeedbackForm from '../../components/FeedbackForm';

export const metadata = {
  title: "Request Demo - FAIRy Campus by Datadabra",
  description: "See FAIRy Campus in action. Request a personalized demo for your institution's research data validation needs."
};

export default function DemoRequestPage() {
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
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .hero {
          padding: 3rem 0;
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero .subheadline {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .demo-section {
          padding: 3rem 0;
          background-color: #faf5ff;
        }
        
        .demo-form {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 2.5rem;
          border-radius: 1.125rem;
          border: 2px solid #e9d5ff;
          box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.1);
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
          width: 100%;
          justify-content: center;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-primary:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b46c1;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 2rem;
        }
        
        .back-link:hover {
          color: #7c3aed;
        }
        
        .demo-intro {
          background-color: #f3e8ff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .demo-intro h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
        }
        
        .demo-intro p {
          color: #6b46c1;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .benefit-card {
          background-color: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
        }
        
        .benefit-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .benefit-title {
          font-size: 1rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }
        
        .benefit-description {
          font-size: 0.875rem;
          color: #6b46c1;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1rem;
          }
          
          .demo-form {
            padding: 1.5rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>See FAIRy Campus in action</h1>
            <p className="subheadline">
              Request a personalized demo to see how FAIRy Campus can streamline your institution's research data validation and compliance workflows.
            </p>
          </div>
        </section>

        {/* Demo Form */}
        <section className="demo-section">
          <div className="container">
            <div className="back-link" onClick={() => window.history.back()}>
              ← Back to FAIRy
            </div>
            
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3 className="benefit-title">Personalized demo</h3>
                <p className="benefit-description">See features relevant to your institution's needs</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h3 className="benefit-title">Quick setup</h3>
                <p className="benefit-description">Get started with your own data in minutes</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💬</div>
                <h3 className="benefit-title">Expert guidance</h3>
                <p className="benefit-description">Learn best practices from our team</p>
              </div>
            </div>
            
            <div className="demo-form">
              <div className="demo-intro">
                <h2>Request your demo</h2>
                <p>
                  Fill out the form below and we'll schedule a personalized demo for your team.
                </p>
              </div>
              
              <FeedbackForm formType="demo" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
