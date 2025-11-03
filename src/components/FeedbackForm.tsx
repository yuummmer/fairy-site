"use client";

import { useState } from 'react';

interface FormData {
  email: string;
  user_type?: string;
  name?: string;
  title?: string;
  phone?: string;
  institution?: string;
  department?: string;
  dataset_count?: string;
  current_tools?: string;
  timeline?: string;
  budget_range?: string;
  additional_info?: string;
  website?: string; // honeypot
  // Survey-specific fields
  current_pain_points?: string;
  repository_preference?: string | string[];
  technical_comfort?: string;
  submission_frequency?: string;
  compliance_requirements?: string;
  current_workflow?: string | string[];
  biggest_challenge?: string | string[];
}

interface FeedbackFormProps {
  formType: 'waitlist' | 'pilot' | 'survey' | 'demo';
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export default function FeedbackForm({ formType, onSubmit, className = '' }: FeedbackFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    user_type: '',
    name: '',
    title: '',
    phone: '',
    institution: '',
    department: '',
    dataset_count: '',
    current_tools: '',
    timeline: '',
    budget_range: '',
    additional_info: '',
    website: '', // honeypot
    // Survey-specific fields
    current_pain_points: '',
    repository_preference: '',
    technical_comfort: '',
    submission_frequency: '',
    compliance_requirements: '',
    current_workflow: '',
    biggest_challenge: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentValues = Array.isArray(prev[name as keyof FormData]) 
        ? (prev[name as keyof FormData] as string[])
        : prev[name as keyof FormData] 
          ? [prev[name as keyof FormData] as string]
          : [];
      
      const newValues = checked
        ? [...currentValues, value]
        : currentValues.filter(v => v !== value);
      
      return {
        ...prev,
        [name]: newValues.length > 0 ? newValues : ''
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate required checkbox fields
    if (formType === 'survey') {
      const biggestChallenge = Array.isArray(formData.biggest_challenge) 
        ? formData.biggest_challenge 
        : formData.biggest_challenge ? [formData.biggest_challenge] : [];
      const repositoryPreference = Array.isArray(formData.repository_preference) 
        ? formData.repository_preference 
        : formData.repository_preference ? [formData.repository_preference] : [];
      const currentWorkflow = Array.isArray(formData.current_workflow) 
        ? formData.current_workflow 
        : formData.current_workflow ? [formData.current_workflow] : [];

      if (biggestChallenge.length === 0) {
        setSubmitStatus('error');
        setErrorMessage('Please select at least one challenge.');
        setIsSubmitting(false);
        return;
      }
      if (repositoryPreference.length === 0) {
        setSubmitStatus('error');
        setErrorMessage('Please select at least one repository.');
        setIsSubmitting(false);
        return;
      }
      if (currentWorkflow.length === 0) {
        setSubmitStatus('error');
        setErrorMessage('Please select at least one workflow option.');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      // Convert arrays to comma-separated strings for API compatibility
      const submissionData = {
        ...formData,
        biggest_challenge: Array.isArray(formData.biggest_challenge) 
          ? formData.biggest_challenge.join(', ') 
          : formData.biggest_challenge,
        repository_preference: Array.isArray(formData.repository_preference) 
          ? formData.repository_preference.join(', ') 
          : formData.repository_preference,
        current_workflow: Array.isArray(formData.current_workflow) 
          ? formData.current_workflow.join(', ') 
          : formData.current_workflow,
        form_type: formType,
        utm_source: 'website'
      };

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          email: '',
          user_type: '',
          name: '',
          title: '',
          phone: '',
          institution: '',
          department: '',
          dataset_count: '',
          current_tools: '',
          timeline: '',
          budget_range: '',
          additional_info: '',
          website: '',
          // Survey-specific fields
          current_pain_points: '',
          repository_preference: '',
          technical_comfort: '',
          submission_frequency: '',
          compliance_requirements: '',
          current_workflow: '',
          biggest_challenge: ''
        });
        
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderWaitlistForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-input" 
          required 
          value={formData.email}
          onChange={handleInputChange}
          aria-describedby="email-help"
        />
        <div id="email-help" className="privacy-note">
          We&apos;ll only use this to notify you about early access. No spam.
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="user-type" className="form-label">I am a...</label>
        <select 
          id="user-type" 
          name="user_type" 
          className="form-input" 
          required
          value={formData.user_type}
          onChange={handleInputChange}
        >
          <option value="">Select your role</option>
          <option value="individual">Individual researcher</option>
          <option value="institution">Institution / Campus administrator</option>
          <option value="library">Library / RDM team</option>
          <option value="core-facility">Core facility manager</option>
          <option value="other">Other</option>
        </select>
      </div>
    </>
  );

  const renderPilotForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Dr. Jane Smith"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title" className="form-label">Job title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="form-input"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Research data manager"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="jane.smith@university.edu"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 123-4567"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="institution" className="form-label">Institution</label>
        <input
          type="text"
          id="institution"
          name="institution"
          required
          className="form-input"
          value={formData.institution}
          onChange={handleInputChange}
          placeholder="University of Example"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="department" className="form-label">Department</label>
        <input
          type="text"
          id="department"
          name="department"
          className="form-input"
          value={formData.department}
          onChange={handleInputChange}
          placeholder="Research data services"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="dataset-count" className="form-label">How many datasets do you manage annually?</label>
        <select
          id="dataset-count"
          name="dataset_count"
          className="form-input"
          value={formData.dataset_count}
          onChange={handleInputChange}
        >
          <option value="">Select range</option>
          <option value="1-10">1-10 datasets</option>
          <option value="11-50">11-50 datasets</option>
          <option value="51-100">51-100 datasets</option>
          <option value="100+">100+ datasets</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="current-tools" className="form-label">What tools do you currently use for data validation?</label>
        <textarea
          id="current-tools"
          name="current_tools"
          className="form-input"
          rows={3}
          value={formData.current_tools}
          onChange={handleInputChange}
          placeholder="e.g., Excel, custom scripts, manual review..."
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="timeline" className="form-label">When would you like to start a pilot?</label>
        <select
          id="timeline"
          name="timeline"
          className="form-input"
          value={formData.timeline}
          onChange={handleInputChange}
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediately</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
          <option value="exploring">Just exploring options</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="budget-range" className="form-label">What&apos;s your approximate budget range?</label>
        <select
          id="budget-range"
          name="budget_range"
          className="form-input"
          value={formData.budget_range}
          onChange={handleInputChange}
        >
          <option value="">Select range</option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
          <option value="discuss">Let&apos;s discuss</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="additional-info" className="form-label">Additional information</label>
        <textarea
          id="additional-info"
          name="additional_info"
          className="form-input"
          rows={4}
          value={formData.additional_info}
          onChange={handleInputChange}
          placeholder="Tell us about your specific needs, challenges, or questions..."
        />
      </div>
    </>
  );

  const renderSurveyForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="user-type" className="form-label">I am a...</label>
        <select 
          id="user-type" 
          name="user_type" 
          className="form-input" 
          required
          value={formData.user_type}
          onChange={handleInputChange}
        >
          <option value="">Select your role</option>
          <option value="individual">Individual researcher</option>
          <option value="institution">Institution / Campus administrator</option>
          <option value="library">Library / RDM team</option>
          <option value="core-facility">Core facility manager</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">What are your biggest data submission challenges? (select all that apply)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { value: 'metadata-errors', label: 'Metadata errors and missing fields' },
            { value: 'file-formatting', label: 'File naming and formatting issues' },
            { value: 'compliance-checking', label: 'Compliance checking and validation' },
            { value: 'time-consuming', label: 'Too time-consuming to prepare submissions' },
            { value: 'bounced-submissions', label: 'Submissions get bounced/rejected' },
            { value: 'manual-processes', label: 'Too many manual processes' },
            { value: 'other', label: 'Other' }
          ].map(option => (
            <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="biggest_challenge"
                value={option.value}
                checked={Array.isArray(formData.biggest_challenge) 
                  ? formData.biggest_challenge.includes(option.value)
                  : formData.biggest_challenge === option.value}
                onChange={handleCheckboxChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span style={{ color: '#4c1d95', fontSize: '1rem' }}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Which repositories do you submit to? (select all that apply)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { value: 'geo', label: 'GEO (Gene Expression Omnibus)' },
            { value: 'zenodo', label: 'Zenodo' },
            { value: 'dryad', label: 'Dryad' },
            { value: 'figshare', label: 'Figshare' },
            { value: 'institutional', label: 'Institutional repository' },
            { value: 'other', label: 'Other' }
          ].map(option => (
            <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="repository_preference"
                value={option.value}
                checked={Array.isArray(formData.repository_preference) 
                  ? formData.repository_preference.includes(option.value)
                  : formData.repository_preference === option.value}
                onChange={handleCheckboxChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span style={{ color: '#4c1d95', fontSize: '1rem' }}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="submission-frequency" className="form-label">How often do you submit datasets?</label>
        <select
          id="submission-frequency"
          name="submission_frequency"
          className="form-input"
          required
          value={formData.submission_frequency}
          onChange={handleInputChange}
        >
          <option value="">Select frequency</option>
          <option value="weekly">Weekly or more</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
          <option value="rarely">Rarely</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="technical-comfort" className="form-label">How comfortable are you with command-line tools?</label>
        <select
          id="technical-comfort"
          name="technical_comfort"
          className="form-input"
          required
          value={formData.technical_comfort}
          onChange={handleInputChange}
        >
          <option value="">Select comfort level</option>
          <option value="very-comfortable">Very comfortable - I use CLI daily</option>
          <option value="comfortable">Comfortable - I can use CLI when needed</option>
          <option value="somewhat">Somewhat - I prefer GUI but can do CLI</option>
          <option value="not-comfortable">Not comfortable - I prefer visual interfaces</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">What's your current data preparation workflow? (select all that apply)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[
            { value: 'manual-spreadsheet', label: 'Manual spreadsheet checking' },
            { value: 'custom-scripts', label: 'Custom scripts and tools' },
            { value: 'repository-tools', label: 'Repository-specific tools' },
            { value: 'consultation', label: 'Consult with data librarians' },
            { value: 'trial-error', label: 'Trial and error approach' },
            { value: 'other', label: 'Other' }
          ].map(option => (
            <label key={option.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="current_workflow"
                value={option.value}
                checked={Array.isArray(formData.current_workflow) 
                  ? formData.current_workflow.includes(option.value)
                  : formData.current_workflow === option.value}
                onChange={handleCheckboxChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span style={{ color: '#4c1d95', fontSize: '1rem' }}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email address (optional)</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          className="form-input" 
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your.email@institution.edu"
        />
        <div className="privacy-note">
          We'll only use this to notify you about early access. No spam.
        </div>
      </div>
    </>
  );

  const renderDemoForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Dr. Jane Smith"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="title" className="form-label">Job title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="form-input"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Research data manager"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="jane.smith@university.edu"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="institution" className="form-label">Institution</label>
        <input
          type="text"
          id="institution"
          name="institution"
          required
          className="form-input"
          value={formData.institution}
          onChange={handleInputChange}
          placeholder="Stanford University"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="department" className="form-label">Department (optional)</label>
        <input
          type="text"
          id="department"
          name="department"
          className="form-input"
          value={formData.department}
          onChange={handleInputChange}
          placeholder="Research data services"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="dataset-count" className="form-label">How many datasets do you manage annually?</label>
        <select
          id="dataset-count"
          name="dataset_count"
          className="form-input"
          value={formData.dataset_count}
          onChange={handleInputChange}
        >
          <option value="">Select range</option>
          <option value="1-10">1-10 datasets</option>
          <option value="11-50">11-50 datasets</option>
          <option value="51-100">51-100 datasets</option>
          <option value="100+">100+ datasets</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="timeline" className="form-label">When would you like to see a demo?</label>
        <select
          id="timeline"
          name="timeline"
          className="form-input"
          value={formData.timeline}
          onChange={handleInputChange}
        >
          <option value="">Select timeline</option>
          <option value="this-week">This week</option>
          <option value="this-month">This month</option>
          <option value="next-quarter">Next quarter</option>
          <option value="exploring">Just exploring options</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="additional-info" className="form-label">What would you like to see in the demo? (optional)</label>
        <textarea
          id="additional-info"
          name="additional_info"
          className="form-input"
          rows={3}
          value={formData.additional_info}
          onChange={handleInputChange}
          placeholder="e.g., GEO submissions, bulk processing, compliance reporting..."
        />
      </div>
    </>
  );

  return (
    <form onSubmit={handleSubmit} className={className}>
      {/* Honeypot field for bot protection */}
      <input 
        type="text" 
        name="website" 
        className="honeypot" 
        tabIndex={-1} 
        value={formData.website}
        onChange={handleInputChange}
      />
      
      {/* Form fields based on type */}
      {formType === 'waitlist' && renderWaitlistForm()}
      {formType === 'pilot' && renderPilotForm()}
      {formType === 'survey' && renderSurveyForm()}
      {formType === 'demo' && renderDemoForm()}
      
      {/* Submit button */}
      <button 
        type="submit" 
        className="btn-primary" 
        style={{ width: '100%' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Saving...' : 
         formType === 'waitlist' ? 'Get early access' :
         formType === 'pilot' ? 'Start with a Preflight Mapping Session →' :
         formType === 'survey' ? 'Submit survey' :
         formType === 'demo' ? 'Request demo' :
         'Submit'}
      </button>
      
      {/* Status messages */}
      {submitStatus === 'success' && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: '#f0fdf4', 
          border: '1px solid #bbf7d0', 
          borderRadius: '0.5rem',
          color: '#166534',
          textAlign: 'center'
        }}>
          {formType === 'survey' ? (
            <>
              ✓ Thank you! Your survey has been submitted successfully.<br/>
              Someone from Datadabra will contact you about FAIRy.
            </>
          ) : (
            '✓ Thank you! Your information has been saved successfully.'
          )}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: '#fef2f2', 
          border: '1px solid #fecaca', 
          borderRadius: '0.5rem',
          color: '#dc2626',
          textAlign: 'center'
        }}>
          ✗ {errorMessage}
        </div>
      )}
    </form>
  );
}
