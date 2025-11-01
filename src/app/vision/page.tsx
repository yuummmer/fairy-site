"use client";

export default function VisionPage() {
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
        
        .vision-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }
        
        .vision-header {
          padding: 4rem 0 2rem;
          text-align: center;
          border-bottom: 2px solid #e9d5ff;
          margin-bottom: 3rem;
        }
        
        .vision-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .vision-header .subheader {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1.5rem;
        }
        
        .section-content {
          color: #4c1d95;
          line-height: 1.8;
        }
        
        .section-content p {
          margin-bottom: 1.25rem;
        }
        
        .section-content ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }
        
        .section-content li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }
        
        .section-content li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .highlight-box {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .highlight-box h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .highlight-box ul {
          margin-top: 1rem;
        }
        
        .cta-section {
          background-color: #f3e8ff;
          border: 2px solid #e9d5ff;
          border-radius: 12px;
          padding: 3rem;
          text-align: center;
          margin-top: 4rem;
        }
        
        .cta-section p {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
        }
        
        .cta-section p a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
        }
        
        .cta-section p a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .btn-contact {
          background-color: #7c3aed;
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-contact:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .vision-header h1 {
            font-size: 2rem;
          }
          
          .vision-header .subheader {
            font-size: 1.125rem;
          }
          
          .section-title {
            font-size: 1.75rem;
          }
          
          .vision-container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
      
      <div className="vision-container">
        <div className="vision-header">
          <h1>Make research data usable, not just published.</h1>
          <p className="subheader">
            We believe publicly funded research data is a public good — and getting it out of people's heads, laptops, and lab drives shouldn't be difficult.
          </p>
        </div>

        <section className="section">
          <h2 className="section-title">How it actually works today</h2>
          <div className="section-content">
            <ul>
              <li>Labs hand off spreadsheets and folders that "work for us" but don't match what repositories or core facilities require.</li>
              <li>Data stewards and curators spend hours chasing missing metadata, renaming files, and stitching IDs by hand.</li>
              <li>Everyone says "just make it FAIR," but no one hands you a checklist of "fix these 3 things and you're good."</li>
              <li>Repositories bounce submissions for preventable reasons — wrong file naming, missing required fields, ambiguous dates — and that wastes days.</li>
              <li>By the time data is finally accepted, nobody can prove what was actually checked or when.</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Where we're going</h2>
          <div className="section-content">
            <ul>
              <li><strong>Institution-specific rulepacks:</strong> Each lab / core / collection has non-negotiable fields. We're making those rules repeatable and enforceable without endless email.</li>
              <li><strong>Submission readiness as a norm:</strong> "Attach your FAIRy readiness report with your dataset" becomes the new "fill out this checklist."</li>
              <li><strong>Trustable provenance:</strong> The attestation file travels with the dataset and proves what was actually validated, which helps with internal review, journal submission, and grant reporting.</li>
              <li><strong>Repeatable pre-intake checks:</strong> FAIRy gives institutions a repeatable pre-intake check — with both a human-readable fix list and a machine-readable attestation — so their data can confidently join larger integrated networks without weeks of one-off curator triage.</li>
              <li><strong>Less time wasted on formatting, more time on actual science and curation.</strong></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Who we're accountable to</h2>
          <div className="section-content">
            <ul>
              <li>People inside institutions who are responsible for accepting data and have to say "no" when required information is missing.</li>
              <li>Researchers who don't want to lose days to unclear submission requirements.</li>
              <li>Collections and core facilities that can't ingest material until identifiers, filenames, and required metadata line up.</li>
              <li>Funders and journals that need traceable evidence of data quality without getting access to the raw data itself.</li>
            </ul>
          </div>
        </section>

        <div className="cta-section">
          <p>If this resonates, get in touch.</p>
          <p><a href="mailto:hello@datadabra.com">hello@datadabra.com</a></p>
          <a href="mailto:hello@datadabra.com" className="btn-contact">
            Contact us
          </a>
        </div>
      </div>
    </>
  );
}

