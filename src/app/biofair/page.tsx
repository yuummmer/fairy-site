"use client";

import { useState } from 'react';

export default function BiofairPage() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    dataType: '',
    willingToPilot: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success. Can wire to backend or Google Forms later.
    setSubmitted(true);
    // Optionally: redirect to Google Form or send to API
    // window.location.href = 'YOUR_GOOGLE_FORM_URL';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          padding: 5rem 0 3rem;
          text-align: center;
        }
        
        .hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        
        .hero .subheadline {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 700px;
          margin: 0 auto 4rem;
          line-height: 1.6;
        }
        
        .content-section {
          padding: 3rem 0;
          background-color: #ffffff;
          border-radius: 1.125rem;
          margin-bottom: 2rem;
          border: 2px solid #e9d5ff;
        }
        
        .section-inner {
          padding: 2rem;
        }
        
        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
        }
        
        .bullet-list {
          list-style: none;
          padding-left: 0;
        }
        
        .bullet-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
          padding-left: 1.75rem;
          position: relative;
        }
        
        .bullet-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-size: 1.5rem;
          line-height: 1.2;
        }
        
        .bullet-text {
          color: #6b46c1;
          line-height: 1.6;
        }
        
        .contact-section {
          padding: 3rem 0;
          background-color: #f3e8ff;
          border-radius: 1.125rem;
          margin-bottom: 2rem;
        }
        
        .contact-inner {
          padding: 2rem;
        }
        
        .contact-email {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .contact-email a {
          color: #7c3aed;
          font-size: 1.125rem;
          font-weight: 600;
          text-decoration: none;
        }
        
        .contact-email a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .biofair-form {
          max-width: 500px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 2rem;
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
          font-family: inherit;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #7c3aed;
        }
        
        select.form-input {
          cursor: pointer;
        }
        
        .form-radio-group {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }
        
        .form-radio {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .form-radio input[type="radio"] {
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
        }
        
        .form-radio label {
          cursor: pointer;
          color: #6b46c1;
          font-weight: normal;
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
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          width: 100%;
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
        
        .success-message {
          text-align: center;
          padding: 2rem;
          background-color: #dcfce7;
          border: 2px solid #86efac;
          border-radius: 0.75rem;
          color: #166534;
        }
        
        .google-form-link {
          display: block;
          text-align: center;
          margin-top: 1rem;
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.875rem;
        }
        
        .google-form-link:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .section-inner,
          .contact-inner {
            padding: 1.5rem;
          }
          
          .form-radio-group {
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

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <h1>BIOFAIR pilot interest</h1>
          <p className="subheadline">
            FAIRy is a local, repo-agnostic preflight and shareable attestation to reduce late-stage submission bounces. I'm looking for 1–2 pilot partners across molecular biology and environmental / ecological data to help define a minimal 'BIOFAIR-ready' rulepack.
          </p>
        </section>

        {/* What I'm Asking */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">What I'm looking for from you</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">Let me run FAIRy on one small example dataset structure/metadata (no raw data).</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Tell me where the checks are useless / missing.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Optional: help define 2–3 'must pass before upload' rules for your domain.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You Get Back */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">What you get back</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">A shareable PASS/WARN/FAIL Markdown one-pager you can show to other collaborators / PIs / data stewards</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">A short writeup of top recurring failure modes (no private data) that you can reuse when you argue for better data practices internally</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Credit in the early 'BIOFAIR-ready preflight' draft</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-inner">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Get in touch</h2>
            
            <div className="contact-email">
              <p style={{ marginBottom: '0.5rem', color: '#6b46c1' }}>Email me directly:</p>
              <a href="mailto:hello@datadabra.com">hello@datadabra.com</a>
            </div>

            <div className="biofair-form">
              {submitted ? (
                <div className="success-message">
                  <p>Thank you for your interest! I'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="org" className="form-label">Organization</label>
                      <input
                        type="text"
                        id="org"
                        name="org"
                        className="form-input"
                        value={formData.org}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="dataType" className="form-label">Data type</label>
                      <input
                        type="text"
                        id="dataType"
                        name="dataType"
                        className="form-input"
                        value={formData.dataType}
                        onChange={handleChange}
                        placeholder="e.g., RNA-seq, metagenomics, ecological surveys"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Willing to pilot?</label>
                      <div className="form-radio-group">
                        <div className="form-radio">
                          <input
                            type="radio"
                            id="pilot-yes"
                            name="willingToPilot"
                            value="yes"
                            checked={formData.willingToPilot === 'yes'}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="pilot-yes">Yes</label>
                        </div>
                        <div className="form-radio">
                          <input
                            type="radio"
                            id="pilot-no"
                            name="willingToPilot"
                            value="no"
                            checked={formData.willingToPilot === 'no'}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="pilot-no">No</label>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-primary">
                      Submit
                    </button>
                  </form>
                  <a href="#" className="google-form-link">
                    Or use Google Form instead
                  </a>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
