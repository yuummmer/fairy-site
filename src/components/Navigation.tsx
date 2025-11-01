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

        .toc-brand {
          display: none;
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
          border: 1px solid #e9d5ff;
          border-radius: 0.375rem;
          padding: 0.375rem 0.5rem;
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
          width: 20px;
          height: 20px;
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
          transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle[aria-expanded="true"] .menu-icon span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle[aria-expanded="true"] .menu-icon span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          display: none;
        }
        
        @media (max-width: 768px) {
          .table-of-contents {
            padding: 0.5rem 0;
          }

          .toc-header {
            display: flex;
            justify-content: flex-end;
          }

          .toc-brand {
            display: block;
            color: #6b46c1;
            text-decoration: none;
            font-size: 0.9375rem;
            font-weight: 600;
            margin-right: auto;
          }

          .toc-links {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .mobile-menu {
            display: block;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .mobile-menu.open {
            max-height: 500px;
            padding-top: 1rem;
            border-top: 1px solid #e9d5ff;
            margin-top: 0.5rem;
          }

          .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .mobile-link {
            color: #6b46c1;
            text-decoration: none;
            font-size: 0.9375rem;
            font-weight: 500;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            text-align: center;
            transition: all 0.2s ease;
          }

          .mobile-link:hover {
            background-color: #f3e8ff;
            color: #7c3aed;
          }

          .mobile-link:focus {
            outline: 2px solid #7c3aed;
            outline-offset: 0.125rem;
          }
        }
      `}</style>
      <div className="table-of-contents">
        <div className="toc-container">
          <div className="toc-header">
            <a href="/" className="toc-brand">FAIRy</a>
            <nav className="toc-links">
              <a href="/" className="toc-link">FAIRy</a>
              <a href="/#solo-tier" className="toc-link">For Researchers</a>
              <a href="/institutions" className="toc-link">For institutions</a>
              <a href="/docs" className="toc-link">Documentation</a>
              <a href="/about" className="toc-link">About</a>
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
          <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <nav className="mobile-links">
              <a href="/" className="mobile-link" onClick={closeMenu}>FAIRy</a>
              <a href="/#solo-tier" className="mobile-link" onClick={closeMenu}>For Researchers</a>
              <a href="/institutions" className="mobile-link" onClick={closeMenu}>For institutions</a>
              <a href="/docs" className="mobile-link" onClick={closeMenu}>Documentation</a>
              <a href="/about" className="mobile-link" onClick={closeMenu}>About</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

