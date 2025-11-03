"use client";

import { track } from '../../lib/analytics';
import FeedbackForm from '../../components/FeedbackForm';

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
        
        /* Survey form styling */
        .survey-form-wrapper :global(.form-group) {
          margin-bottom: 1.75rem;
        }
        
        .survey-form-wrapper :global(.form-label) {
          display: block;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        .survey-form-wrapper :global(.form-input) {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          font-size: 16px;
          transition: all 0.2s ease;
          background-color: white;
          color: #4c1d95;
          font-family: inherit;
        }
        
        .survey-form-wrapper :global(.form-input:focus) {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }
        
        .survey-form-wrapper :global(.form-input::placeholder) {
          color: #9ca3af;
        }
        
        .survey-form-wrapper :global(.btn-primary) {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          border: none;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          width: 100%;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 0.5rem;
        }
        
        .survey-form-wrapper :global(.btn-primary:hover) {
          background-color: #6d28d9;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }
        
        .survey-form-wrapper :global(.btn-primary:disabled) {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .survey-form-wrapper :global(.privacy-note) {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        /* Hide honeypot field (bot protection) */
        .survey-form-wrapper :global(.honeypot) {
          position: absolute;
          left: -9999px;
          opacity: 0;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        
        /* Checkbox styling */
        .survey-form-wrapper :global(input[type="checkbox"]) {
          width: 18px;
          height: 18px;
          cursor: pointer;
          accent-color: #7c3aed;
          flex-shrink: 0;
        }
        
        .survey-form-wrapper :global(label) {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: background-color 0.2s ease;
        }
        
        .survey-form-wrapper :global(label:hover) {
          background-color: #faf5ff;
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
          
          .survey-form-wrapper {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
      
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Researchers (Community)</h1>
            <p className="subheadline">
              Working solo? Start free with FAIRy-core: rigid spreadsheet templates, rulepacks, and a one-command validator.
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
            </div>
          </div>
        </section>

        {/* Help us shape v1.0 */}
        <section className="section-alt">
          <div className="container">
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Help us shape v1.0</h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#6b46c1', 
                marginBottom: '3rem',
                lineHeight: '1.7',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Share your biggest data submission pain points in our quick survey. Your feedback directly shapes our first release.
              </p>
              <div className="survey-form-wrapper" style={{ 
                maxWidth: '700px', 
                margin: '0 auto',
                background: '#ffffff',
                border: '2px solid #e9d5ff',
                borderRadius: '1.25rem',
                padding: '3rem',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.1)'
              }}>
                <FeedbackForm formType="survey" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

