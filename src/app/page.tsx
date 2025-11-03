"use client";

import { useState } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import { track } from '../lib/analytics';

export default function Page() {
  const [isQuickInstallOpen, setIsQuickInstallOpen] = useState(false);
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
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3.75rem;
        }
        
        .btn-primary {
          background-color: #6d28d9;
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
          background-color: #5b21b6;
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
        
        .demo-section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .demo-card {
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
          box-shadow: 0 4px 6px -1px rgba(124, 58, 237, 0.1);
          transition: all 0.2s ease;
          cursor: pointer;
        }
        
        .demo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -3px rgba(124, 58, 237, 0.15);
        }
        
        .demo-card:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .demo-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .demo-badge {
          display: inline-block;
          background-color: #f3e8ff;
          color: #6b46c1;
          padding: 0.25rem 0.75rem;
          border-radius: 1.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        
        .check-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0;
        }
        
        .check-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .check-pass { background-color: #22c55e; }
        .check-warning { background-color: #f59e0b; }
        .check-fail { background-color: #ef4444; }
        
        .check-label {
          font-weight: 500;
          color: #4c1d95;
        }
        
        .how-it-works {
          padding: 5rem 0;
          background-color: #f3e8ff;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 3.75rem;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3.75rem;
        }
        
        .step-card {
          background-color: #ffffff;
          border-radius: 1.125rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
          transition: all 0.2s ease;
        }
        
        .step-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.15);
        }
        
        .step-number {
          width: 3rem;
          height: 3rem;
          background-color: #7c3aed;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
          margin: 0 auto 1.25rem;
        }
        
        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .step-description {
          color: #6b46c1;
          margin-bottom: 1.25rem;
        }
        
        .waitlist-section {
          padding: 5rem 0;
          background-color: #faf5ff;
        }
        
        .waitlist-form {
          max-width: 500px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 2.5rem;
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
        
        .survey-section {
          padding: 3.75rem 0;
          background-color: #f3e8ff;
          text-align: center;
        }
        
        
        .footer {
          padding: 2.5rem 0;
          background-color: #f3e8ff;
          border-top: 1px solid #e9d5ff;
          text-align: center;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 0;
          flex-wrap: wrap;
        }
        
        .footer-link {
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.75rem;
        }
        
        .footer-link:hover {
          color: #7c3aed;
        }
        
        .footer-copyright {
          color: #6b46c1;
          font-size: 0.75rem;
        }
        
          @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .logos-grid {
            gap: 1.25rem;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .audience-tiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        .collapsible-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }
        
        .collapsible-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        
        .collapsible-content.open {
          max-height: 2000px;
          transition: max-height 0.5s ease-in;
        }
        
        .expand-icon {
          font-size: 1.25rem;
          color: #7c3aed;
          transition: transform 0.3s ease;
        }
        
        .expand-icon.open {
          transform: rotate(180deg);
        }
      `}</style>
      
    <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Make research data submission-ready—before handoff.</h1>
            <p className="subheadline">
              FAIRy validates and packages datasets for labs, cores, and institutions. Local-first, open, and fast.
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: '#6b46c1', 
              fontStyle: 'italic',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              Piloting with university cores & collections teams to cut bounced submissions and standardize intake.
            </p>
            <div className="cta-buttons">
              <a 
                href="/preflight-mapping" 
                className="btn-primary"
                onClick={() => track('hero_request_pilot_clicked')}
              >
                Request a Pilot →
              </a>
            </div>
            
          </div>
        </section>
        
        {/* Readiness Report Screenshot */}
        <section style={{ padding: '3rem 0', backgroundColor: '#faf5ff' }}>
          <div className="container">
            <div style={{ 
              maxWidth: '750px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <div style={{
                background: '#ffffff',
                border: '2px solid #e9d5ff',
                borderRadius: '1.125rem',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.1)',
                marginBottom: '1rem'
              }}>
                <div style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: '600', 
                  color: '#4c1d95', 
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  FAIRy Readiness Report
                </div>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  fontSize: '0.875rem'
                }}>
                  <thead>
                    <tr>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '0.75rem',
                        borderBottom: '2px solid #e9d5ff',
                        color: '#4c1d95',
                        fontWeight: '600'
                      }}>Check</th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '0.75rem',
                        borderBottom: '2px solid #e9d5ff',
                        color: '#4c1d95',
                        fontWeight: '600'
                      }}>Status</th>
                      <th style={{ 
                        textAlign: 'left', 
                        padding: '0.75rem',
                        borderBottom: '2px solid #e9d5ff',
                        color: '#4c1d95',
                        fontWeight: '600'
                      }}>Next Step</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Sample IDs present</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          backgroundColor: '#d1fae5',
                          color: '#065f46'
                        }}>PASS</span>
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>No action needed</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Dates in ISO format</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          backgroundColor: '#d1fae5',
                          color: '#065f46'
                        }}>PASS</span>
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>No action needed</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Contact email valid</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          backgroundColor: '#fef3c7',
                          color: '#92400e'
                        }}>WARN</span>
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Verify email format</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>File naming convention</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          backgroundColor: '#fee2e2',
                          color: '#991b1b'
                        }}>FAIL</span>
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #f3e8ff', color: '#4c1d95' }}>Rename files per standard</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', color: '#4c1d95' }}>Required metadata fields</td>
                      <td style={{ padding: '0.75rem', color: '#4c1d95' }}>
                        <span style={{ 
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '0.375rem',
                          fontWeight: '600',
                          fontSize: '0.75rem',
                          backgroundColor: '#d1fae5',
                          color: '#065f46'
                        }}>PASS</span>
                      </td>
                      <td style={{ padding: '0.75rem', color: '#4c1d95' }}>No action needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6b46c1', 
                fontStyle: 'italic',
                marginTop: '1rem'
              }}>
                One-click pre-flight: human report + machine JSON + attestation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Audience Tiles Section */}
        <section className="demo-section" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="audience-tiles-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '2rem',
              maxWidth: '900px',
              margin: '2rem auto 0'
            }}>
              <div className="step-card">
                <h3 className="step-title">Labs & Cores</h3>
                <p className="step-description">
                  Encode intake rules, stop bounced submissions, generate attestations.
                </p>
                <a href="/institutions" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px', marginTop: '1rem', display: 'inline-block' }} onClick={() => track('tile_clicked', { tile: 'labs_cores' })}>
                  Get a pilot →
                </a>
              </div>
              <div className="step-card">
                <h3 className="step-title">Institutions</h3>
                <p className="step-description">
                  Rulepack governance, provenance trail, SBOM/security, SLAs.
                </p>
                <a href="/institutions" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px', marginTop: '1rem', display: 'inline-block' }} onClick={() => track('tile_clicked', { tile: 'institutions' })}>
                  Talk to us →
                </a>
              </div>
              <div className="step-card">
                <h3 className="step-title">Repositories</h3>
                <p className="step-description">
                  Pre-flight templates + rulepacks for submitters; reduce reject loops.
                </p>
                <a href="/institutions" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px', marginTop: '1rem', display: 'inline-block' }} onClick={() => track('tile_clicked', { tile: 'repositories' })}>
                  Partner with us →
                </a>
              </div>
              <div className="step-card">
                <h3 className="step-title">Researchers (Community)</h3>
                <p className="step-description">
                  Free templates + FAIRy-core to self-check datasets.
                </p>
                <a href="/researchers" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px', marginTop: '1rem', display: 'inline-block' }} onClick={() => track('tile_clicked', { tile: 'researchers' })}>
                  Download →
                </a>
              </div>
            </div>
            {/* Features Strip */}
            <div style={{ 
              textAlign: 'center', 
              marginTop: '3rem',
              padding: '1rem 0',
              fontSize: '0.875rem',
              color: '#6b46c1'
            }}>
              Local-first (no data leaves your machine) • Attestation & provenance • Rulepack governance
            </div>
          </div>
        </section>

        {/* Institution Preview Section */}
        <section id="institution-preview" className="demo-section" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Stop spending hours chasing missing fields and renaming files
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto 1rem' }}>
                People hand you garbage and you spend hours chasing missing fields and renaming files. You need proof you did QC before you archive, publish, send to a journal, or report to a grant panel.
              </p>
              <p style={{ fontSize: '1rem', color: '#6b46c1', maxWidth: '700px', margin: '0 auto 2rem' }}>
                FAIRy runs locally and generates a one-page readiness sheet (PASS / WARN / FAIL + how to fix) that labs can attach when they hand off a dataset.
              </p>
              
              {/* Security Callout */}
              <div style={{ 
                background: '#f3e8ff', 
                border: '2px solid #e9d5ff', 
                borderRadius: '0.75rem', 
                padding: '1rem', 
                marginBottom: '2rem',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: '#4c1d95', margin: '0', fontWeight: '500' }}>
                  🔒 Local-first privacy: No data leaves your environment. All processing happens on your machines.
                </p>
              </div>
              
              {/* Key Benefit Statement */}
              <div style={{ 
                background: '#ffffff', 
                border: '2px solid #a78bfa', 
                borderRadius: '0.75rem', 
                padding: '1.5rem', 
                marginBottom: '2rem',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.1)'
              }}>
                <p style={{ fontSize: '1rem', color: '#4c1d95', margin: '0', lineHeight: '1.6' }}>
                  FAIRy gives institutions a repeatable pre-intake check — with both a human-readable fix list and a machine-readable attestation — so their data can confidently join larger integrated networks without weeks of one-off curator triage.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📏</div>
                <h3 className="step-title">Consistent intake rules</h3>
                <p className="step-description">
                  Turn your "we can't accept this without X" policies (sample IDs, contact email, ISO dates, file naming, permit/embargo flags) into a reusable preflight check. Everyone gets held to the same standard.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>📝</div>
                <h3 className="step-title">One-page readiness sheet</h3>
                <p className="step-description">
                  FAIRy produces a PASS / WARN / FAIL summary with plain-language "how to fix" instructions. You can send it back to the lab / PI instead of rewriting the same email.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number" style={{ backgroundColor: '#059669' }}>🔒</div>
                <h3 className="step-title">Local-only by design</h3>
                <p className="step-description">
                  FAIRy runs inside your environment. No raw data, filenames, locations, or metadata are uploaded. No accounts, no credentials, no cloud.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="/labs-cores" 
                className="btn-primary" 
                style={{ marginRight: '1rem' }}
              >
                For Labs & Cores →
              </a>
              <a 
                href="/sample-report" 
                className="btn-secondary" 
              >
                See example report
              </a>
            </div>
          </div>
        </section>

        {/* How we work with institutions - Condensed */}
        <section className="demo-section" style={{ backgroundColor: '#ffffff', padding: '3rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1.5rem' }}>
                How we work with institutions
              </h2>
              <p style={{ fontSize: '1rem', color: '#6b46c1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We offer <strong>FAIRy Core</strong> (no-cost tooling for researchers) and <strong>Institutional Pilots</strong> (scoped engagements for data stewards and core facilities). During a pilot, we encode your intake rules into a rulepack, generate readiness reports, and produce attestation files. You keep everything — the rulepack is yours.
              </p>
              <p style={{ fontSize: '1rem', color: '#6b46c1', lineHeight: '1.7', marginBottom: '2rem' }}>
                Some groups maintain their own rulepacks; others prefer ongoing support. Both paths work.
              </p>
              <a 
                href="/institutions" 
                className="btn-primary"
              >
                Learn more about institutional offerings →
              </a>
            </div>
          </div>
        </section>

        {/* Community Link Section - Demoted */}
        <section style={{ padding: '2rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e9d5ff' }}>
          <div className="container">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1rem', color: '#6b46c1', marginBottom: '1rem' }}>
                Working solo? <a href="/researchers" style={{ color: '#7c3aed', textDecoration: 'underline', fontWeight: '600' }}>Get started free with FAIRy-core →</a>
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="demo-section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                Don't get your dataset bounced by GEO, Zenodo, or your core facility
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto 1rem' }}>
                Tired of being told "fix your metadata" with no specifics? FAIRy runs locally and tells you exactly what's missing so you don't get yelled at.
              </p>
              <p style={{ fontSize: '1rem', color: '#6b46c1', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Get a checklist before you submit — PASS / WARN / FAIL, why it matters, and how to fix it. This is what your curator is going to ask for.
              </p>
              <div className="cta-buttons" style={{ marginBottom: '0' }}>
                <a href="/sample-report" className="btn-primary">
                  See example report
                </a>
                <a href="/docs" className="btn-secondary">
                  View documentation
                </a>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For labs, cores, and institutions
              </p>
            </div>
            
            <div 
              className="demo-card" 
              tabIndex={0} 
              role="button" 
              aria-label="View sample validation report"
              onClick={() => window.location.href = '/sample-report'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  window.location.href = '/sample-report';
                }
              }}
            >
              <div className="demo-badge">Demo / sample data</div>
              <h3 className="demo-title">This is what your curator is going to ask for</h3>
              <div className="check-item">
                <div className="check-dot check-pass"></div>
                <span className="check-label">✅ Metadata completeness ✓</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-warning"></div>
                <span className="check-label">⚠ File naming convention</span>
              </div>
              <div className="check-item">
                <div className="check-dot check-fail"></div>
                <span className="check-label">✗ Required fields missing</span>
              </div>
              <p style={{ marginTop: '12px', color: '#6b46c1' }}>
                FAIRy runs locally and tells you exactly what's missing and how to fix it — no vague "fix your metadata" messages. Get a checklist before you submit so you don't get bounced.
              </p>
              <p style={{ marginTop: '20px', color: '#64748b', fontSize: '0.875rem' }}>
                View the full sample report →
              </p>
            </div>
            
            {/* Quick Install Section - Collapsible */}
            <div id="quick-install" style={{ 
              background: '#ffffff', 
              border: '2px solid #e9d5ff', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              marginTop: '2rem',
            }}>
              <div 
                className="collapsible-header"
                onClick={() => setIsQuickInstallOpen(!isQuickInstallOpen)}
                style={{ marginBottom: isQuickInstallOpen ? '1.5rem' : '0' }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#4c1d95', margin: '0' }}>
                  How FAIRy runs in your environment
                </h3>
                <span className={`expand-icon ${isQuickInstallOpen ? 'open' : ''}`}>▼</span>
              </div>
              
              <div className={`collapsible-content ${isQuickInstallOpen ? 'open' : ''}`}>
                <div style={{ textAlign: 'left', paddingTop: '1rem' }}>
                  <p style={{ fontSize: '1rem', color: '#4c1d95', marginBottom: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
                    Here's exactly how this would work on your machine if you said yes.
                  </p>
                  
                  {/* Section 1: Run it locally */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                      1. Run it locally on your machine
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                      During the pilot, you run FAIRy on a folder or metadata sheet.
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                      FAIRy checks the dataset against your required fields and naming rules, and generates:
                    </p>
                    <ul style={{ fontSize: '0.875rem', color: '#6b46c1', marginLeft: '1.5rem', marginBottom: '0.75rem', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        a one-page Submission Readiness Report (PASS / WARN / FAIL + how to fix), and
                      </li>
                      <li>
                        a machine-readable Attestation file (timestamp, rulepack version, file hashes).
                      </li>
                    </ul>
                    <div style={{ 
                      background: '#f3e8ff', 
                      border: '1px solid #e9d5ff', 
                      padding: '1rem', 
                      borderRadius: '0.75rem', 
                      fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                      fontSize: '0.875rem',
                      marginBottom: '0.75rem'
                    }}>
                      <pre style={{ margin: 0, color: '#6b46c1', whiteSpace: 'pre-wrap' }}><code>fairy validate /path/to/dataset --out out/</code></pre>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                      Nothing is uploaded.
                      <br />
                      No accounts, no cloud, no external transfer. All processing happens on your machine / inside your network.
                    </p>
                  </div>
                  
                  {/* Section 2: Optional browser */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4c1d95', marginBottom: '1rem' }}>
                      2. (Optional) Open it in a browser instead of reading the terminal
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#6b46c1', marginBottom: '0.75rem' }}>
                      If you don't want to look at terminal output, FAIRy can render the same report in a local browser window so you can click through issues instead of scrolling logs.
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#6b46c1', margin: '0' }}>
                      Same checks. Same PASS / WARN / FAIL guidance. Still runs locally.
                    </p>
                  </div>
                  
                  <div style={{ 
                    background: '#f3e8ff', 
                    border: '1px solid #e9d5ff', 
                    borderRadius: '0.75rem', 
                    padding: '1rem', 
                    marginBottom: '1.5rem'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#4c1d95', margin: '0', fontWeight: '500' }}>
                      🔒 Local-first privacy: No data leaves your environment. All processing happens on your machines.
                    </p>
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <a href="/sample-report" className="btn-secondary">
                      See example report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Solo */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How FAIRy fits your intake process</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">Run FAIRy on your dataset</h3>
                <p className="step-description">
                  Point FAIRy at a folder or metadata sheet in your environment. It scans filenames and required fields locally — no data leaves your system.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">Fix issues with clear tips</h3>
                <p className="step-description">
                  FAIRy tells you exactly what’s wrong (bad filename, missing contact email, non-ISO date) and how to fix it. No guessing — we point to the exact column / file.
                </p>
                <a href="/docs" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  Learn more →
                </a>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">Generate a readiness sheet</h3>
                <p className="step-description">
                  FAIRy produces a one-page PASS / WARN / FAIL report (why it matters + how to fix) that you can hand back to the lab / PI — or attach to a ticket before submission.
                </p>
                <a href="/sample-report" className="btn-secondary" style={{ fontSize: '0.875rem', padding: '8px 16px' }}>
                  See sample report →
                </a>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="/sample-report" className="btn-secondary">
                View example report
              </a>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
                For labs & cores → <a href="/researchers" style={{ color: '#6b7280', textDecoration: 'underline' }}>For researchers (community)</a>
              </p>
            </div>
          </div>
        </section>


    </main>
    </>
  );
}
