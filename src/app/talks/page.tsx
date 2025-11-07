"use client";

export default function TalksPage() {
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
          max-width: 900px;
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
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero .subheadline {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .talks-list {
          padding: 3rem 0;
        }
        
        .talk-card {
          background-color: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          padding: 2rem;
          margin-bottom: 2rem;
          transition: all 0.2s ease;
        }
        
        .talk-card:hover {
          border-color: #7c3aed;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.15);
        }
        
        .talk-card h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }
        
        .talk-card .event-info {
          font-size: 1rem;
          color: #6b46c1;
          margin-bottom: 1rem;
        }
        
        .talk-card .abstract {
          color: #6b46c1;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .talk-card .read-more {
          display: inline-block;
          color: #7c3aed;
          font-weight: 600;
          text-decoration: none;
          margin-top: 0.5rem;
        }
        
        .talk-card .read-more:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subheadline {
            font-size: 1.125rem;
          }
          
          .talk-card {
            padding: 1.5rem;
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
        <section className="hero">
          <h1>Talks and presentations</h1>
          <p className="subheadline">
            Slides and materials from talks, workshops, and community events.
          </p>
        </section>

        <section className="talks-list">
          <div className="talk-card">
            <h2>BIOFAIR Open Mic 2025</h2>
            <p className="event-info">BIOFAIR Open Mic • October 30, 2025</p>
            <p className="abstract">
              An overview of FAIRy's approach to local-first dataset pre-checking and how it supports the BIOFAIR Data Network roadmap, specifically contributing to the Stocktaking & Gap Analysis initiative. Covers the tool's capabilities, rulepack system, and how it helps researchers prepare data before submission.
            </p>
            <a href="/talks/biofair-open-mic-2025" className="read-more">
              View slides →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
