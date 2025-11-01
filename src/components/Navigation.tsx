"use client";

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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

        .toc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .menu-toggle {
          display: none;
          background: none;
          border: 2px solid #e9d5ff;
          border-radius: 0.5rem;
          padding: 0.5rem;
          cursor: pointer;
          color: #6b46c1;
          transition: all 0.2s ease;
        }

        .menu-toggle:hover {
          background-color: #f3e8ff;
          border-color: #7c3aed;
        }

        .menu-toggle:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }

        .menu-icon {
          width: 24px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        .menu-icon span {
          width: 100%;
          height: 2px;
          background-color: #6b46c1;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-toggle[aria-expanded="true"] .menu-icon span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-toggle[aria-expanded="true"] .menu-icon span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle[aria-expanded="true"] .menu-icon span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        @media (max-width: 768px) {
          .toc-header {
            display: flex;
          }

          .menu-toggle {
            display: block;
          }

          .toc-links {
            display: none;
            flex-direction: column;
            gap: 0.75rem;
            align-items: stretch;
            padding-top: 1rem;
            border-top: 1px solid #e9d5ff;
            margin-top: 1rem;
          }

          .toc-links.mobile-open {
            display: flex;
          }

          .toc-link {
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            text-align: center;
          }

          .toc-link:hover {
            background-color: #f3e8ff;
          }
        }
      `}</style>
      <div className="table-of-contents">
        <div className="toc-container">
          <div className="toc-header">
            <nav className={`toc-links ${isOpen ? 'mobile-open' : ''}`}>
              <a href="/" className="toc-link" onClick={closeMenu}>FAIRy</a>
              <a href="/#solo-tier" className="toc-link" onClick={closeMenu}>For Researchers</a>
              <a href="/institutions" className="toc-link" onClick={closeMenu}>For institutions</a>
              <a href="/docs" className="toc-link" onClick={closeMenu}>Documentation</a>
              <a href="/about" className="toc-link" onClick={closeMenu}>About</a>
            </nav>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

