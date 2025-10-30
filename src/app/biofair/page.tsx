"use client";

import { useState } from 'react';

export default function BiofairPage() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    role: '',
    dataType: '',
    willingToPilot: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ [k: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    // simple client-side validation
    const errors: { [k: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'please enter your name';
    if (!formData.org.trim()) errors.org = 'please enter your organization';
    if (!formData.role.trim()) errors.role = 'please enter your role';
    if (!formData.dataType.trim()) errors.dataType = 'please describe your data';
    if (!formData.willingToPilot) errors.willingToPilot = 'please choose an option';
    if (!email.trim()) errors.email = 'please enter your email';
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) errors.email = 'please enter a valid email';
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'biofair_pilot_interest',
          utm_source: 'biofair',
          name: formData.name,
          org: formData.org,
          role: formData.role,
          dataType: formData.dataType,
          willingToPilot: formData.willingToPilot,
          email,
          website: '' // honeypot left blank intentionally
        })
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Submission failed');
      }
      setSubmitted(true);
      setFormData({ name: '', org: '', role: '', dataType: '', willingToPilot: '' });
      setEmail('');
      setFieldErrors({});
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
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
          <h1>Help shape a “BIOFAIR-ready” preflight check</h1>
          <p className="subheadline">
            A tiny, local metadata preflight for your domain (wet lab, ecology, environmental sensing, biodiversity collections, etc.) and a feedback loop to the BIOFAIR community.
          </p>
        </section>

        {/* Who this is for */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">Who this is for</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">Sequencing cores / wet-lab researchers submitting to GEO/ENA/etc.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Environmental monitoring / ecology / biodiversity data teams</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Collections managers / data stewards who get stuck cleaning other people’s spreadsheets</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Anyone who has to convince collaborators “no, we actually need ISO dates and site IDs, I’m not being difficult”</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What FAIRy does today */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">What FAIRy does today</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">Runs locally / offline before you submit data anywhere</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Checks basic metadata and structure</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Gives you PASS / WARN / FAIL with “why it matters” and “how to fix”</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Generates a shareable, data-free readiness sheet you can send to PIs, curators, or collaborators</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What I’m looking for now */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">What I’m looking for now</h2>
            <p className="bullet-text" style={{ marginBottom: '1rem' }}>
              I’m lining up 1–2 pilot partners in different domains to co-develop tiny “readiness rulepacks.”
            </p>
            <p className="bullet-text" style={{ marginBottom: '1rem' }}>
              Here’s what that means:
            </p>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">We write down the 5–7 “don’t publish without this” metadata fields you absolutely need in your world (e.g. stable sample/site ID, ISO date, location/site, method/instrument, contact).</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">FAIRy enforces that locally and generates a data-free PASS / WARN / FAIL sheet plus fix hints.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">You can attach that sheet to submissions, internal handoffs, data management plans, etc.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">I’ll summarize the most common blockers (e.g. missing site coordinates, non-ISO dates, unclear method) and share those patterns — without your raw data — back to the BIOFAIR community as gap analysis.</span>
              </li>
            </ul>
          </div>
        </section>

        

        {/* What you get */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">What you get</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">A data-free readiness sheet (PASS / WARN / FAIL + how to fix) you can show to a PI, collaborator, repository, program officer, etc.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">A short internal summary of the top recurring issues FAIRy found, which you can reuse when you argue for better upstream metadata practices.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Acknowledgment as an early contributor when I circulate the first “BIOFAIR-ready preflight” pattern back to this community.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How much time is this? */}
        <section className="content-section">
          <div className="section-inner">
            <h2 className="section-title">How much time is this?</h2>
            <ul className="bullet-list">
              <li className="bullet-item">
                <span className="bullet-text">Express (≈ 90 min, 1 week): tiny sample → one pass with FAIRy → readiness sheet.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Standard (≈ 3–5 hrs, 2 weeks): one iterate-and-re-run loop + short “top blockers” summary.</span>
              </li>
              <li className="bullet-item">
                <span className="bullet-text">Deep-dive (≈ 6–8 hrs, 4 weeks): a couple of loops + a v0 rulepack draft and teaching note.</span>
              </li>
            </ul>
            <p className="bullet-text" style={{ marginTop: '0.75rem' }}>No raw data needed. We can do this mostly async; calls optional.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-inner">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Get in touch</h2>
            
            {/* Email instruction moved below the form per request */}

            <div className="biofair-form">
              {submitted ? (
                <div className="success-message">
                  <p>Thank you for your interest! We'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit}>
                    <p style={{ marginBottom: '0.75rem', color: '#6b46c1', textAlign: 'center' }}>Interested in being a pilot partner?</p>
                    <p style={{ marginBottom: '1rem', color: '#6b46c1', textAlign: 'center' }}>Tell us a little bit and we’ll follow up.</p>

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
                      {fieldErrors.name && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.name}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="org" className="form-label">Organization / lab / team</label>
                      <input
                        type="text"
                        id="org"
                        name="org"
                        className="form-input"
                        value={formData.org}
                        onChange={handleChange}
                        required
                      />
                      {fieldErrors.org && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.org}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="role" className="form-label">Role</label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className="form-input"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g., researcher, data steward, core facility manager"
                        required
                      />
                      {fieldErrors.role && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.role}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="dataType" className="form-label">What kind of data do you manage? <span style={{ fontWeight: 'normal' }}>(RNA-seq? soil metagenomics? sensor data? biodiversity surveys? remote sensing products?)</span></label>
                      <textarea
                        id="dataType"
                        name="dataType"
                        className="form-input"
                        value={formData.dataType}
                        onChange={handleChange}
                        rows={3}
                        required
                      />
                      {fieldErrors.dataType && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.dataType}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" id="pilot-readiness-label">Are you open to testing a tiny rulepack in the next ~1–2 months?</label>
                      <div className="form-radio-group" role="radiogroup" aria-labelledby="pilot-readiness-label">
                        <div className="form-radio">
                          <input
                            type="radio"
                            id="pilot-yes"
                            name="willingToPilot"
                            value="Yes"
                            checked={formData.willingToPilot === 'Yes'}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="pilot-yes">Yes</label>
                        </div>
                        <div className="form-radio">
                          <input
                            type="radio"
                            id="pilot-talk"
                            name="willingToPilot"
                            value="Not sure, let’s talk"
                            checked={formData.willingToPilot === 'Not sure, let’s talk'}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="pilot-talk">Not sure, let’s talk</label>
                        </div>
                      </div>
                      {fieldErrors.willingToPilot && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.willingToPilot}</div>}
                    </div>

                    {/* Email (required) */}
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@institution.edu"
                        autoComplete="email"
                      />
                      {fieldErrors.email && <div style={{ color: '#b91c1c', marginTop: '0.25rem' }}>{fieldErrors.email}</div>}
                    </div>

                    {/* Honeypot for spam protection */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
                      onChange={() => {}}
                    />

                    {errorMessage && (
                      <div style={{ marginBottom: '1rem', color: '#b91c1c', textAlign: 'center' }}>{errorMessage}</div>
                    )}

                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? 'Saving...' : 'Submit'}
                    </button>
                  </form>

                  <div className="contact-email" style={{ marginTop: '1rem' }}>
                    <p style={{ marginBottom: '0.5rem', color: '#6b46c1' }}>You can also email <a href="mailto:hello@datadabra.com">hello@datadabra.com</a> with the info above. Subject line: “BIOFAIR pilot partner.”</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
