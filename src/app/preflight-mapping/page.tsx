"use client";

import { useState } from 'react';

export default function PreflightMappingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    repoStandard: '',
    repoStandardOther: '',
    datasetTypes: [] as string[],
    datasetTypesOther: '',
    timelineUrgency: '',
    biggestHeadache: '',
    biggestHeadacheOther: '',
    anythingElse: '',
    sampleVolume: '',
    canShareSample: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showDeepFields, setShowDeepFields] = useState(false);
  const [deepFieldsData, setDeepFieldsData] = useState({
    controlledVocab: [] as string[],
    controlledVocabOther: '',
    controlledVocabNotSure: false,
    stakeholdersTimeline: '',
    exampleLinks: ''
  });
  const [isSubmittingDeep, setIsSubmittingDeep] = useState(false);
  const [deepFieldsStatus, setDeepFieldsStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelect = (name: string, value: string) => {
    setFormData(prev => {
      const current = prev[name as keyof typeof prev] as string[];
      const newValue = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return {
        ...prev,
        [name]: newValue
      };
    });
  };

  const handleDeepFieldsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setDeepFieldsData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDeepFieldsMultiSelect = (name: string, value: string) => {
    setDeepFieldsData(prev => {
      const current = prev[name as keyof typeof prev] as string[];
      const newValue = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return {
        ...prev,
        [name]: newValue
      };
    });
  };

  const handleDeepFieldsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingDeep(true);
    setDeepFieldsStatus('idle');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'preflight_mapping_deep',
          email: formData.email,
          name: formData.name,
          institution: formData.org,
          controlled_vocab: deepFieldsData.controlledVocab.join(', '),
          controlled_vocab_other: deepFieldsData.controlledVocabOther || '',
          controlled_vocab_not_sure: deepFieldsData.controlledVocabNotSure,
          stakeholders_timeline: deepFieldsData.stakeholdersTimeline || '',
          example_links: deepFieldsData.exampleLinks || ''
        })
      });

      const data = await res.json();

      if (data.success) {
        setDeepFieldsStatus('success');
        setTimeout(() => {
          setFormData({ 
            name: '', 
            email: '', 
            org: '', 
            repoStandard: '',
            repoStandardOther: '',
            datasetTypes: [],
            datasetTypesOther: '',
            timelineUrgency: '',
            biggestHeadache: '',
            biggestHeadacheOther: '',
            anythingElse: '',
            sampleVolume: '',
            canShareSample: ''
          });
          setDeepFieldsData({
            controlledVocab: [],
            controlledVocabOther: '',
            controlledVocabNotSure: false,
            stakeholdersTimeline: '',
            exampleLinks: ''
          });
          setShowDeepFields(false);
          setSubmitStatus('idle');
          setDeepFieldsStatus('idle');
        }, 2000);
      } else {
        setDeepFieldsStatus('error');
      }
    } catch (error) {
      setDeepFieldsStatus('error');
    } finally {
      setIsSubmittingDeep(false);
    }
  };

  const handleSkipDeepFields = () => {
    setFormData({ 
      name: '', 
      email: '', 
      org: '', 
      repoStandard: '',
      repoStandardOther: '',
      datasetTypes: [],
      datasetTypesOther: '',
      timelineUrgency: '',
      biggestHeadache: '',
      biggestHeadacheOther: '',
      anythingElse: '',
      sampleVolume: '',
      canShareSample: ''
    });
    setDeepFieldsData({
      controlledVocab: [],
      controlledVocabOther: '',
      controlledVocabNotSure: false,
      stakeholdersTimeline: '',
      exampleLinks: ''
    });
    setShowDeepFields(false);
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('idle');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.org.trim() || 
        !formData.repoStandard.trim() || formData.datasetTypes.length === 0 || 
        !formData.timelineUrgency.trim() || !formData.biggestHeadache.trim() || 
        !formData.canShareSample.trim()) {
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // If "Other" is selected for repo, require the other text field
    if (formData.repoStandard === 'other' && !formData.repoStandardOther.trim()) {
      setErrorMessage('Please specify the repository/standard.');
      setIsSubmitting(false);
      return;
    }

    // If "Other" is selected for dataset types, require the other text field
    if (formData.datasetTypes.includes('Other') && !formData.datasetTypesOther.trim()) {
      setErrorMessage('Please specify the dataset type.');
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
          repo_standard: formData.repoStandard === 'other' ? formData.repoStandardOther : formData.repoStandard,
          dataset_types: formData.datasetTypes.includes('Other') 
            ? [...formData.datasetTypes.filter(d => d !== 'Other'), formData.datasetTypesOther].join(', ')
            : formData.datasetTypes.join(', '),
          timeline_urgency: formData.timelineUrgency,
          biggest_headache: formData.biggestHeadache,
          biggest_headache_other: formData.biggestHeadacheOther || '',
          anything_else: formData.anythingElse || '',
          sample_volume: formData.sampleVolume || '',
          can_share_sample: formData.canShareSample
        })
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        setShowDeepFields(true);
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
        .form-textarea,
        select.form-input {
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

        select.form-input {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234c1d95' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.875rem center;
          padding-right: 2.5rem;
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
          <div style={{
            background: '#dbeafe',
            border: '2px solid #3b82f6',
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <p style={{ fontSize: '1rem', color: '#1e40af', margin: '0', fontWeight: '600', marginBottom: '0.75rem' }}>
              📋 Before you request a pilot
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#1e3a8a', margin: '0', lineHeight: '1.6' }}>
              Please try FAIRy first to see how it works. Run the demo on the <a href="/try" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '600' }}>Try FAIRy page</a> — it takes about 2 minutes. This helps us have a more productive conversation about your specific needs.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '2px solid #e9d5ff',
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
              What's included in a pilot
            </h2>
            <p style={{ fontSize: '1rem', color: '#6b46c1', marginBottom: '1rem', lineHeight: '1.7' }}>
              During a pilot engagement, we work with you to:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6b46c1', marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              <li>Encode 5-7 of your intake rules into a custom rulepack</li>
              <li>Generate sample readiness reports using your rulepack</li>
              <li>Deliver the rulepack to you — <strong>you keep it and can use it freely</strong></li>
            </ul>
            
            <div style={{
              background: '#f3e8ff',
              border: '1px solid #e9d5ff',
              borderRadius: '0.75rem',
              padding: '1rem',
              marginTop: '1.5rem'
            }}>
              <p style={{ fontSize: '0.9375rem', color: '#4c1d95', marginBottom: '0.75rem', fontWeight: '600' }}>
                Ongoing support and additional features
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0', lineHeight: '1.6' }}>
                The pilot delivers a working rulepack that you own. If you want ongoing support, additional rulepack development, dashboards, or other features, we offer various paid engagement options. We'll discuss these options during the pilot if you're interested.
              </p>
            </div>
          </div>

          {!showDeepFields && (
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
              <label htmlFor="repoStandard" className="form-label">
                Repository / standard <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select
                id="repoStandard"
                name="repoStandard"
                className="form-input"
                value={formData.repoStandard}
                onChange={handleChange}
                required
              >
                <option value="">Select repository / standard</option>
                <optgroup label="Genomics / sequence archives">
                  <option value="ENA (INSDC / Webin)">ENA (INSDC / Webin)</option>
                  <option value="NCBI SRA (INSDC)">NCBI SRA (INSDC)</option>
                </optgroup>
                <optgroup label="Functional genomics">
                  <option value="NCBI GEO">NCBI GEO</option>
                </optgroup>
                <optgroup label="Biodiversity / collections">
                  <option value="GBIF IPT/DwC-A">GBIF IPT/DwC-A</option>
                </optgroup>
                <optgroup label="Generalist research outputs">
                  <option value="Zenodo">Zenodo</option>
                  <option value="Dataverse">Dataverse</option>
                  <option value="Dryad">Dryad</option>
                  <option value="Figshare">Figshare</option>
                </optgroup>
                <option value="Custom / internal standard">Custom / internal standard</option>
                <option value="other">Other</option>
              </select>
              {formData.repoStandard === 'other' && (
                <input
                  type="text"
                  name="repoStandardOther"
                  className="form-input"
                  style={{ marginTop: '0.5rem' }}
                  value={formData.repoStandardOther}
                  onChange={handleChange}
                  placeholder="Please specify"
                  required
                />
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Dataset type(s) <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                {['Genomics (bulk RNA-seq, scRNA-seq, WGS)', 'Proteomics', 'Metabolomics', 'Imaging', 'Biodiversity / collections (Darwin Core)', 'Clinical / SEND / other regulated', 'Other'].map((type) => (
                  <label key={type} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.9375rem', color: '#6b46c1' }}>
                    <input
                      type="checkbox"
                      checked={formData.datasetTypes.includes(type)}
                      onChange={() => handleMultiSelect('datasetTypes', type)}
                      style={{ marginRight: '0.5rem', width: '1.125rem', height: '1.125rem', cursor: 'pointer' }}
                    />
                    {type}
                  </label>
                ))}
              </div>
              {formData.datasetTypes.includes('Other') && (
                <input
                  type="text"
                  name="datasetTypesOther"
                  className="form-input"
                  value={formData.datasetTypesOther}
                  onChange={handleChange}
                  placeholder="Please specify"
                  required
                />
              )}
            </div>

            <div className="form-group">
              <label htmlFor="timelineUrgency" className="form-label">
                Timeline / urgency <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select
                id="timelineUrgency"
                name="timelineUrgency"
                className="form-input"
                value={formData.timelineUrgency}
                onChange={handleChange}
                required
              >
                <option value="">Select timeline / urgency</option>
                <option value="ASAP">ASAP / Immediate</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="12+months">12+ months</option>
                <option value="exploring">Just exploring options</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="biggestHeadache" className="form-label">
                Biggest submission headache right now? <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <textarea
                id="biggestHeadache"
                name="biggestHeadache"
                className="form-textarea"
                value={formData.biggestHeadache}
                onChange={handleChange}
                placeholder="What's causing the most friction in your data intake process?"
                rows={3}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sampleVolume" className="form-label">
                Sample count <span className="optional">(Optional)</span>
              </label>
              <select
                id="sampleVolume"
                name="sampleVolume"
                className="form-input"
                value={formData.sampleVolume}
                onChange={handleChange}
              >
                <option value="">Select sample count</option>
                <option value="1-10">1–10</option>
                <option value="11-50">11–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="canShareSample" className="form-label">
                Can you share a representative sample? <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <select
                id="canShareSample"
                name="canShareSample"
                className="form-input"
                value={formData.canShareSample}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="Yes (can share now)">Yes (can share now)</option>
                <option value="Yes (after NDA / data agreement)">Yes (after NDA / data agreement)</option>
                <option value="No (we'll start with schema/dictionary only)">No (we'll start with schema/dictionary only)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="anythingElse" className="form-label">
                Anything else / constraints <span className="optional">(Optional)</span>
              </label>
              <textarea
                id="anythingElse"
                name="anythingElse"
                className="form-textarea"
                value={formData.anythingElse}
                onChange={handleChange}
                placeholder="Any other information, constraints, or requirements we should know about?"
                rows={3}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Yes, please contact me'}
            </button>
            
            {submitStatus === 'success' && !showDeepFields && (
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
          )}

          {showDeepFields && (
            <div style={{
              background: '#ffffff',
              border: '2px solid #e9d5ff',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              maxWidth: '600px',
              margin: '2rem auto 0',
            }}>
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '0.75rem',
                padding: '1rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '1rem', color: '#166534', margin: '0', fontWeight: '600', marginBottom: '0.5rem' }}>
                  ✓ Thanks — if you have 2 more minutes, answer these to speed up scoping.
                </p>
              </div>

              <form onSubmit={handleDeepFieldsSubmit}>
                <div className="form-group">
                  <label className="form-label">
                    Controlled vocab / ontologies <span className="optional">(Optional)</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    {['NCBI Taxonomy', 'GO', 'Cell Ontology', 'ENVO', 'Uberon', 'EFO', 'DwC vocabularies', 'Custom list', 'Not sure'].map((vocab) => (
                      <label key={vocab} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.9375rem', color: '#6b46c1' }}>
                        <input
                          type="checkbox"
                          checked={deepFieldsData.controlledVocab.includes(vocab)}
                          onChange={() => handleDeepFieldsMultiSelect('controlledVocab', vocab)}
                          style={{ marginRight: '0.5rem', width: '1.125rem', height: '1.125rem', cursor: 'pointer' }}
                        />
                        {vocab}
                      </label>
                    ))}
                  </div>
                  <textarea
                    name="controlledVocabOther"
                    className="form-textarea"
                    value={deepFieldsData.controlledVocabOther}
                    onChange={handleDeepFieldsChange}
                    placeholder="Tell us about other controlled vocabularies or ontologies you use (optional)..."
                    rows={3}
                  />
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '0.9375rem', color: '#6b46c1', marginTop: '0.75rem' }}>
                    <input
                      type="checkbox"
                      name="controlledVocabNotSure"
                      checked={deepFieldsData.controlledVocabNotSure}
                      onChange={handleDeepFieldsChange}
                      style={{ marginRight: '0.5rem', width: '1.125rem', height: '1.125rem', cursor: 'pointer' }}
                    />
                    Not sure / need help identifying
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="stakeholdersTimeline" className="form-label">
                    Stakeholders / decision-maker + implementation timeline
                  </label>
                  <textarea
                    id="stakeholdersTimeline"
                    name="stakeholdersTimeline"
                    className="form-textarea"
                    value={deepFieldsData.stakeholdersTimeline}
                    onChange={handleDeepFieldsChange}
                    placeholder="Who are the key stakeholders and decision-makers? What's your implementation timeline? (e.g., data stewards, PIs, 6-month rollout)"
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleLinks" className="form-label">
                    Links to examples / data dictionary <span className="optional">(Optional)</span>
                  </label>
                  <textarea
                    id="exampleLinks"
                    name="exampleLinks"
                    className="form-textarea"
                    value={deepFieldsData.exampleLinks}
                    onChange={handleDeepFieldsChange}
                    placeholder="Share any links to example datasets, data dictionaries, or documentation that would help us understand your requirements..."
                    rows={3}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <button 
                    type="submit" 
                    className="btn-submit"
                    style={{ flex: 1 }}
                    disabled={isSubmittingDeep}
                  >
                    {isSubmittingDeep ? 'Submitting...' : 'Submit additional info'}
                  </button>
                  <button 
                    type="button" 
                    onClick={handleSkipDeepFields}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      color: '#6b46c1',
                      padding: '1rem 2rem',
                      border: '2px solid #c4b5fd',
                      borderRadius: '0.75rem',
                      fontWeight: '600',
                      fontSize: '18px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = '#7c3aed';
                      e.currentTarget.style.color = '#7c3aed';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = '#c4b5fd';
                      e.currentTarget.style.color = '#6b46c1';
                    }}
                  >
                    Skip
                  </button>
                </div>

                {deepFieldsStatus === 'success' && (
                  <div className="status-message status-success" style={{ marginTop: '1rem' }}>
                    ✓ Additional information submitted. Thank you!
                  </div>
                )}

                {deepFieldsStatus === 'error' && (
                  <div className="status-message status-error" style={{ marginTop: '1rem' }}>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          )}

          {/* Related Links */}
          <div style={{
            background: '#f3e8ff',
            border: '2px solid #e9d5ff',
            borderRadius: '1rem',
            padding: '2rem',
            marginTop: '3rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
              Related
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="/try" style={{ color: '#7c3aed', textDecoration: 'underline', fontSize: '0.9375rem' }}>
                Try FAIRy → Run the demo to see how it works (2 minutes)
              </a>
              <a href="/sample-report" style={{ color: '#7c3aed', textDecoration: 'underline', fontSize: '0.9375rem' }}>
                Sample report → See what a full FAIRy readiness report looks like
              </a>
              <a href="/institutions" style={{ color: '#7c3aed', textDecoration: 'underline', fontSize: '0.9375rem' }}>
                For institutions → Learn about pilot programs and offerings
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

