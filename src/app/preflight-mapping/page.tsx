"use client";

import { useState } from 'react';

export default function PreflightMappingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    biggestHeadache: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('idle');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.org.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'preflight_mapping',
          name: formData.name,
          email: formData.email,
          institution: formData.org,
          additional_info: formData.biggestHeadache || ''
        })
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', org: '', biggestHeadache: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
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
          max-width: 600px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .page-header {
          padding: 3rem 0 2rem;
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .page-header p {
          font-size: 1.125rem;
          color: #6b46c1;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .form-section {
          padding: 3rem 0;
        }
        
        .form-container {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.25rem;
          padding: 2.5rem;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
          font-size: 0.9375rem;
        }
        
        .form-label .optional {
          font-weight: 400;
          color: #6b46c1;
          font-size: 0.875rem;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.875rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.2s ease;
          background-color: white;
          color: #4c1d95;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #7c3aed;
        }
        
        .btn-submit {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 18px;
          min-height: 44px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          margin-top: 1rem;
        }
        
        .btn-submit:hover:not(:disabled) {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .btn-submit:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .status-message {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 0.75rem;
          text-align: center;
        }
        
        .status-success {
          background-color: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }
        
        .status-error {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
        }
        
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }
          
          .page-header p {
            font-size: 1rem;
          }
          
          .form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
      
      <div className="page-header">
        <div className="container">
          <h1>Request Preflight Mapping Session</h1>
          <p>
            Let's map your intake rules and show you what your readiness report would look like.
          </p>
        </div>
      </div>
      
      <section className="form-section">
        <div className="container">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
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
              <label htmlFor="email" className="form-label">
                Email <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="org" className="form-label">
                Org / collection / core facility <span style={{ color: '#ef4444' }}>*</span>
              </label>
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
              <label htmlFor="biggestHeadache" className="form-label">
                Biggest submission headache right now? <span className="optional">(Optional)</span>
              </label>
              <textarea
                id="biggestHeadache"
                name="biggestHeadache"
                className="form-textarea"
                value={formData.biggestHeadache}
                onChange={handleChange}
                placeholder="Tell us what's causing the most friction in your data intake process..."
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Yes, please contact me'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="status-message status-success">
                ✓ Thank you! We'll be in touch soon about scheduling your Preflight Mapping Session.
              </div>
            )}
            
            {submitStatus === 'error' && errorMessage && (
              <div className="status-message status-error">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

