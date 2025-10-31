"use client";

export default function Navigation() {
  return (
    <>
      <style jsx global>{`
        .table-of-contents {
          padding: 1rem 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e9d5ff;
          position: sticky;
          top: 0;
          z-index: 40;
        }
        
        .toc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .toc-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .toc-link {
          color: #6b46c1;
          text-decoration: none;
          font-size: 0.9375rem;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
        }
        
        .toc-link:hover {
          color: #7c3aed;
        }
        
        .toc-link:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
          border-radius: 0.25rem;
        }
        
        @media (max-width: 768px) {
          .toc-links {
            flex-direction: column;
            gap: 0.75rem;
            align-items: center;
          }
        }
      `}</style>
      <div className="table-of-contents">
        <div className="toc-container">
          <nav className="toc-links">
            <a href="/" className="toc-link">FAIRy</a>
            <a href="/vision" className="toc-link">Vision</a>
            <a href="/institutions" className="toc-link">For institutions</a>
            <a href="/docs" className="toc-link">Documentation</a>
            <a href="/privacy" className="toc-link">Privacy</a>
          </nav>
        </div>
      </div>
    </>
  );
}

