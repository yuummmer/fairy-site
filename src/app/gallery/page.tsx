"use client";

import { useState, useMemo } from 'react';

export default function GalleryPage() {
  const [selectedRepository, setSelectedRepository] = useState<string>('all');
  const [selectedDataType, setSelectedDataType] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('severity');

  const galleryItems = [
    {
      id: 1,
      title: "GEO bulk sequencing submission",
      repository: "GEO (Gene Expression Omnibus)",
      repositoryFilter: "GEO",
      rulepack: "geo_bulk_seq@0.2.0",
      rulepackName: "geo_bulk_seq",
      rulepackVersion: "0.2.2",
      lastUpdated: "2026-01-09",
      status: "1 FAIL, 1 WARN",
      passCount: 15,
      hasFail: true,
      screenshot: "/gallery-screenshots/Screenshot 2026-01-08 160639.png",
      whatFailed: [
        "GEO.BIO.CONTEXT_MISSING - Sample does not provide tissue/cell_line/cell_type"
      ],
      whatWarned: [
        "CORE.DATE.INVALID_ISO8601 - Date value is not in ISO8601 format (YYYY-MM-DD)"
      ],
      howToFixFail: [
        "Fill at least one of: tissue, cell_line, or cell_type fields in your sample metadata"
      ],
      howToFixWarn: [
        "Use ISO8601 date format (YYYY-MM-DD), e.g., 2025-10-02"
      ],
      datasetType: "Bulk RNA-seq",
      dataTypeFilter: "bulk RNA-seq",
      whoThisIsFor: "Researchers submitting bulk RNA-seq data to GEO",
      isFeatured: true,
      isPublic: true
    },
    {
      id: 2,
      title: "SRA single-cell submission",
      repository: "SRA (Sequence Read Archive)",
      repositoryFilter: "SRA",
      rulepack: "sra_scrnaseq@0.1.5",
      rulepackName: "sra_scrnaseq",
      rulepackVersion: "0.1.5",
      lastUpdated: "2024-11-20",
      status: "1 FAIL, 3 WARN",
      passCount: 12,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing cell_type annotation in metadata"
      ],
      whatWarned: [
        "Library strategy mismatch between files",
        "Incomplete sample attributes"
      ],
      howToFixFail: [
        "Add cell_type column with ontology-backed terms"
      ],
      howToFixWarn: [
        "Ensure library_strategy is consistent across paired files",
        "Complete all required SRA sample attributes"
      ],
      datasetType: "Single-cell RNA-seq",
      dataTypeFilter: "scRNA",
      whoThisIsFor: "Single-cell researchers preparing data for SRA submission",
      isFeatured: true,
      isPublic: false
    },
    {
      id: 3,
      title: "BioProject metadata validation",
      repository: "NCBI BioProject",
      repositoryFilter: "BioProject",
      rulepack: "ncbi_bioproject@0.3.0",
      rulepackName: "ncbi_bioproject",
      rulepackVersion: "0.3.0",
      lastUpdated: "2024-12-01",
      status: "0 FAIL, 2 WARN",
      passCount: 18,
      hasFail: false,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [],
      whatWarned: [
        "Missing ORCID identifiers for authors",
        "Project description below recommended length"
      ],
      howToFixFail: [],
      howToFixWarn: [
        "Add ORCID IDs to author metadata using format: 0000-0000-0000-0000",
        "Expand project description to at least 200 characters"
      ],
      datasetType: "Multi-omics",
      dataTypeFilter: "multi-omics",
      whoThisIsFor: "PIs and project coordinators registering multi-omics studies",
      isPublic: false
    },
    {
      id: 4,
      title: "ArrayExpress microarray submission",
      repository: "ArrayExpress",
      repositoryFilter: "ArrayExpress",
      rulepack: "arrayexpress@0.2.1",
      rulepackName: "arrayexpress",
      rulepackVersion: "0.2.1",
      lastUpdated: "2024-10-18",
      status: "3 FAIL, 0 WARN",
      passCount: 10,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing array design file reference",
        "Sample and data relationship file (SDRF) incomplete",
        "Raw data files not properly linked"
      ],
      whatWarned: [],
      howToFixFail: [
        "Include array design accession or file reference",
        "Complete SDRF with all required columns",
        "Verify all raw data file paths are accessible"
      ],
      howToFixWarn: [],
      datasetType: "Microarray",
      dataTypeFilter: "microarray",
      whoThisIsFor: "Microarray researchers submitting to ArrayExpress",
      isPublic: false
    },
    {
      id: 5,
      title: "Zenodo dataset package",
      repository: "Zenodo",
      repositoryFilter: "Zenodo",
      rulepack: "zenodo_fair@0.1.0",
      rulepackName: "zenodo_fair",
      rulepackVersion: "0.1.0",
      lastUpdated: "2024-11-05",
      status: "1 FAIL, 4 WARN",
      passCount: 8,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing license specification"
      ],
      whatWarned: [
        "Incomplete README documentation",
        "File naming convention inconsistencies",
        "Missing data citation information"
      ],
      howToFixFail: [
        "Add license field (e.g., CC-BY-4.0) to metadata"
      ],
      howToFixWarn: [
        "Create comprehensive README with dataset description",
        "Standardize file names using consistent pattern",
        "Include recommended citation format in metadata"
      ],
      datasetType: "General purpose",
      dataTypeFilter: "general purpose",
      whoThisIsFor: "Researchers publishing supplementary datasets on Zenodo",
      isPublic: false
    },
    {
      id: 6,
      title: "Dryad data package",
      repository: "Dryad",
      repositoryFilter: "Dryad",
      rulepack: "dryad@0.1.2",
      rulepackName: "dryad",
      rulepackVersion: "0.1.2",
      lastUpdated: "2024-09-22",
      status: "0 FAIL, 2 WARN",
      passCount: 20,
      hasFail: false,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [],
      whatWarned: [
        "Missing data usage license",
        "Incomplete file-level metadata"
      ],
      howToFixFail: [],
      howToFixWarn: [
        "Specify data usage license in package metadata",
        "Add descriptive metadata for each data file"
      ],
      datasetType: "Ecological data",
      dataTypeFilter: "general purpose",
      whoThisIsFor: "Ecologists and environmental scientists archiving data in Dryad",
      isPublic: false
    },
    {
      id: 7,
      title: "FAIRsharing registry entry",
      repository: "FAIRsharing",
      repositoryFilter: "FAIRsharing",
      rulepack: "fairsharing@0.2.0",
      rulepackName: "fairsharing",
      rulepackVersion: "0.2.0",
      lastUpdated: "2024-12-10",
      status: "1 FAIL, 1 WARN",
      passCount: 14,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing ontology term mappings"
      ],
      whatWarned: [
        "Incomplete FAIR principles compliance metadata"
      ],
      howToFixFail: [
        "Map metadata fields to standard ontologies (e.g., EDAM, OBI)"
      ],
      howToFixWarn: [
        "Add explicit F, A, I, R compliance statements"
      ],
      datasetType: "Standards compliance",
      dataTypeFilter: "general purpose",
      whoThisIsFor: "Data stewards ensuring FAIR compliance for their datasets",
      isPublic: false
    },
    {
      id: 8,
      title: "Institutional repository submission",
      repository: "Custom institutional repo",
      repositoryFilter: "Institutional",
      rulepack: "institutional_custom@0.1.0",
      rulepackName: "institutional_custom",
      rulepackVersion: "0.1.0",
      lastUpdated: "2024-11-28",
      status: "4 FAIL, 2 WARN",
      passCount: 6,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing required institutional metadata fields",
        "Data retention policy not specified",
        "Access control information incomplete",
        "Missing data management plan reference"
      ],
      whatWarned: [],
      howToFixFail: [
        "Complete all institution-specific required fields",
        "Specify data retention period in metadata",
        "Document access restrictions and embargo periods",
        "Link to approved data management plan"
      ],
      howToFixWarn: [],
      datasetType: "Institutional",
      dataTypeFilter: "general purpose",
      whoThisIsFor: "Institutional data managers and researchers submitting to local repositories",
      isPublic: false
    },
    {
      id: 9,
      title: "Darwin Core biodiversity data",
      repository: "GBIF / iDigBio",
      repositoryFilter: "Darwin Core",
      rulepack: "darwincore@0.2.3",
      rulepackName: "darwincore",
      rulepackVersion: "0.2.3",
      lastUpdated: "2024-12-08",
      status: "2 FAIL, 1 WARN",
      passCount: 11,
      hasFail: true,
      screenshot: "/api/placeholder/600/400",
      whatFailed: [
        "Missing required Darwin Core terms (dwc:scientificName, dwc:occurrenceID)",
        "Invalid coordinate format for dwc:decimalLatitude"
      ],
      whatWarned: [
        "Missing event date in ISO8601 format"
      ],
      howToFixFail: [
        "Include all required Darwin Core terms as specified in the standard",
        "Format coordinates as decimal degrees (e.g., 40.7128, not 40°42'46\")"
      ],
      howToFixWarn: [
        "Use ISO8601 date format (YYYY-MM-DD) for dwc:eventDate"
      ],
      datasetType: "Biodiversity data",
      dataTypeFilter: "general purpose",
      whoThisIsFor: "Biodiversity researchers preparing data for GBIF, iDigBio, or other Darwin Core-compliant repositories",
      isFeatured: true,
      isPublic: false
    }
  ];

  const featuredItems = useMemo(() => {
    return galleryItems.filter(item => item.isFeatured && item.isPublic);
  }, []);

  const filteredItems = useMemo(() => {
    const filtered = galleryItems.filter(item => {
      // Only show public items
      if (!item.isPublic) return false;
      
      // Exclude featured items from main gallery (they're shown separately)
      if (item.isFeatured) return false;
      
      const repositoryMatch = selectedRepository === 'all' || item.repositoryFilter === selectedRepository;
      const dataTypeMatch = selectedDataType === 'all' || item.dataTypeFilter === selectedDataType;
      const severityMatch = selectedSeverity === 'all' || 
        (selectedSeverity === 'has-fail' && item.hasFail) ||
        (selectedSeverity === 'only-warn' && !item.hasFail);
      
      return repositoryMatch && dataTypeMatch && severityMatch;
    });

    // Sort the filtered items
    return filtered.sort((a, b) => {
      if (sortBy === 'severity') {
        // Parse counts for sorting
        const aFailMatch = a.status.match(/(\d+)\s+FAIL/);
        const aWarnMatch = a.status.match(/(\d+)\s+WARN/);
        const bFailMatch = b.status.match(/(\d+)\s+FAIL/);
        const bWarnMatch = b.status.match(/(\d+)\s+WARN/);
        
        const aFail = aFailMatch ? parseInt(aFailMatch[1], 10) : 0;
        const aWarn = aWarnMatch ? parseInt(aWarnMatch[1], 10) : 0;
        const bFail = bFailMatch ? parseInt(bFailMatch[1], 10) : 0;
        const bWarn = bWarnMatch ? parseInt(bWarnMatch[1], 10) : 0;
        
        // Sort by FAIL desc, then WARN desc
        if (bFail !== aFail) return bFail - aFail;
        return bWarn - aWarn;
      } else if (sortBy === 'recently-updated') {
        // Sort by lastUpdated desc (most recent first)
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      } else if (sortBy === 'repository') {
        // Sort by repository name alphabetically
        return a.repository.localeCompare(b.repository);
      }
      return 0;
    });
  }, [selectedRepository, selectedDataType, selectedSeverity, sortBy]);

  const uniqueRepositories = useMemo(() => {
    const repos = new Set(galleryItems.filter(item => item.isPublic).map(item => item.repositoryFilter));
    return Array.from(repos).sort();
  }, []);

  const uniqueDataTypes = useMemo(() => {
    const types = new Set(galleryItems.filter(item => item.isPublic).map(item => item.dataTypeFilter));
    return Array.from(types).sort();
  }, []);

  const CollapsibleList = ({ items, maxVisible = 2 }: { items: string[], maxVisible?: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasMore = items.length > maxVisible;
    const visibleItems = isExpanded ? items : items.slice(0, maxVisible);
    
    return (
      <>
        <ul className="gallery-card-list">
          {visibleItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {hasMore && (
          <button 
            className="expand-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : `+ ${items.length - maxVisible} more`}
          </button>
        )}
      </>
    );
  };

  const renderCard = (item: typeof galleryItems[0], isFeatured = false) => {
    // Parse status string to extract counts
    const failMatch = item.status.match(/(\d+)\s+FAIL/);
    const warnMatch = item.status.match(/(\d+)\s+WARN/);
    const passMatch = item.status.match(/(\d+)\s+PASS/);
    
    const failCount = failMatch ? parseInt(failMatch[1], 10) : 0;
    const warnCount = warnMatch ? parseInt(warnMatch[1], 10) : 0;
    const passCount = passMatch ? parseInt(passMatch[1], 10) : (item.passCount || 0);
    
    // Determine badge color: red if FAIL > 0, amber if WARN > 0 and FAIL = 0, green if both = 0
    let statusClass = 'pass';
    if (failCount > 0) {
      statusClass = 'fail';
    } else if (warnCount > 0) {
      statusClass = 'warn';
    }
    
    // Build status display with checks run count
    const statusParts = [];
    if (failCount > 0) statusParts.push(`${failCount} FAIL`);
    if (warnCount > 0) statusParts.push(`${warnCount} WARN`);
    if (passCount > 0) statusParts.push(`${passCount} checks run`);
    const statusDisplay = statusParts.join(' · ');
    
    const handleCardClick = (e: React.MouseEvent) => {
      // Don't navigate if clicking on a link or button
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        return;
      }
      window.location.href = '/sample-report';
    };

    return (
      <div 
        key={item.id} 
        className={`gallery-card ${isFeatured ? 'featured-card' : ''}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = '/sample-report';
          }
        }}
        aria-label={`View full report for ${item.title}`}
      >
        <div className="gallery-card-header">
          <h3 className="gallery-card-title">{item.title}</h3>
          <div className="gallery-card-meta">
            <strong>Repository:</strong> {item.repository}
          </div>
          <div className="gallery-card-meta">
            <strong>Rulepack:</strong> <code className="rulepack-name">{item.rulepackName}</code> <span className="rulepack-version" title={`Version ${item.rulepackVersion}`}>v{item.rulepackVersion}</span>
          </div>
          <div className="gallery-card-meta">
            <strong>Last updated:</strong> <time dateTime={item.lastUpdated}>{new Date(item.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <span className="gallery-card-badge">{item.datasetType}</span>
        </div>
        
        <div className={`gallery-card-screenshot ${item.screenshot && item.screenshot !== "/api/placeholder/600/400" ? 'has-image' : ''}`}>
          {item.screenshot && item.screenshot !== "/api/placeholder/600/400" ? (
            <img 
              src={item.screenshot} 
              alt=""
              onError={(e) => {
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.classList.remove('has-image');
                  e.currentTarget.style.display = 'none';
                  if (!parent.querySelector('span')) {
                    const span = document.createElement('span');
                    span.textContent = 'Report screenshot preview';
                    parent.appendChild(span);
                  }
                }
              }}
            />
          ) : (
            <span>Report screenshot preview</span>
          )}
        </div>
        
        <div className="gallery-card-content">
          <div className={`status-badge ${statusClass}`}>
            {statusDisplay}
          </div>
          
          <div className="gallery-card-audience">
            <strong>Who this is for:</strong> {item.whoThisIsFor}
          </div>
          
          {item.whatFailed && item.whatFailed.length > 0 && (
            <div className="gallery-card-section">
              <div className="gallery-card-section-title">
                <span>❌</span> What failed
              </div>
              <CollapsibleList items={item.whatFailed} />
            </div>
          )}
          
          {item.whatWarned && item.whatWarned.length > 0 && (
            <div className="gallery-card-section">
              <div className="gallery-card-section-title">
                <span>⚠️</span> Warn
              </div>
              <CollapsibleList items={item.whatWarned} />
            </div>
          )}
          
          <div className="gallery-card-section">
            <div className="gallery-card-section-title">
              <span>🔧</span> How to fix
            </div>
            {item.howToFixFail && item.howToFixFail.length > 0 && (
              <CollapsibleList items={item.howToFixFail} />
            )}
            {item.howToFixWarn && item.howToFixWarn.length > 0 && (
              <CollapsibleList items={item.howToFixWarn.map(fix => `${fix} (optional)`)} />
            )}
          </div>
          
          <div className="gallery-card-link">
            <a 
              href={`/sample-report`}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              View full report →
            </a>
          </div>
        </div>
      </div>
    );
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
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .hero {
          padding: 4rem 0 3rem;
          text-align: center;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        }
        
        .hero h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .hero .subtitle {
          font-size: 1.25rem;
          color: #6b46c1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }
        
        .gallery-section {
          padding: 4rem 0;
          background-color: #faf5ff;
          position: relative;
        }
        
        .gallery-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, transparent 0%, #c4b5fd 50%, transparent 100%);
          border-radius: 2px;
        }
        
        .gallery-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #4c1d95;
        }
        
        .gallery-intro p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #6b46c1;
        }
        
        .featured-section {
          margin-bottom: 5rem;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%);
          border: 3px solid #7c3aed;
          border-radius: 1.5rem;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
          position: relative;
          overflow: hidden;
        }
        
        .featured-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #7c3aed 0%, #a78bfa 50%, #7c3aed 100%);
        }
        
        .featured-header {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
        }
        
        .featured-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 0.75rem;
          display: block;
          text-align: center;
        }
        
        .featured-header p {
          font-size: 1.25rem;
          color: #6b46c1;
          font-weight: 500;
        }
        
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .featured-card {
          border: 3px solid #7c3aed;
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.25);
          transform: scale(1);
          transition: transform 0.2s ease;
        }
        
        .featured-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
        }
        
        .featured-card .gallery-card-header {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          border-bottom: 2px solid #7c3aed;
        }
        
        .filters-container {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          align-items: flex-end;
          margin-bottom: 2rem;
          padding: 2rem;
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
        }
        
        .filter-group {
          flex: 1;
          min-width: 200px;
        }
        
        .filter-label {
          display: block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.5rem;
        }
        
        .filter-select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          font-size: 1rem;
          color: #4c1d95;
          background-color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .filter-select:hover {
          border-color: #7c3aed;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }
        
        .filter-clear {
          padding: 0.75rem 1.5rem;
          background-color: transparent;
          color: #6b46c1;
          border: 2px solid #c4b5fd;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .filter-clear:hover {
          border-color: #7c3aed;
          color: #7c3aed;
          background-color: #faf5ff;
        }
        
        .filter-results {
          font-size: 0.9375rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
          padding-left: 0.5rem;
        }
        
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
        }
        
        .empty-state p {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 1.5rem;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .gallery-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1.125rem;
          overflow: hidden;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px -3px rgba(124, 58, 237, 0.15);
          border-color: #c4b5fd;
        }
        
        .gallery-card:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .gallery-card-header {
          position: relative;
          background: #f3e8ff;
          padding: 1rem;
          border-bottom: 1px solid #e9d5ff;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .gallery-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          min-height: 2.6rem;
        }
        
        .gallery-card-meta {
          font-size: 0.875rem;
          color: #6b46c1;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        
        .gallery-card-meta code.rulepack-name {
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
          font-size: 0.875rem;
          background: #f3e8ff;
          padding: 0.125rem 0.5rem;
          border-radius: 0.375rem;
          color: #4c1d95;
          font-weight: 600;
        }
        
        .gallery-card-meta .rulepack-version {
          display: inline-block;
          background: #e9d5ff;
          color: #6b46c1;
          padding: 0.125rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
          margin-left: 0.375rem;
          font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
        }
        
        .gallery-card-meta time {
          color: #6b46c1;
        }
        
        .gallery-card-badge {
          display: inline-block;
          background: #f3e8ff;
          color: #6b46c1;
          padding: 0.25rem 0.75rem;
          border-radius: 1.25rem;
          font-size: 0.75rem;
          font-weight: 500;
          margin-top: auto;
          align-self: flex-start;
        }
        
        .gallery-card-screenshot {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          border-bottom: 1px solid #e9d5ff;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b46c1;
          font-size: 0.875rem;
        }
        
        .gallery-card-screenshot::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(124, 58, 237, 0.05) 10px,
            rgba(124, 58, 237, 0.05) 20px
          );
          pointer-events: none;
          z-index: 0;
        }
        
        .gallery-card-screenshot.has-image {
          background: transparent;
          display: block;
        }
        
        .gallery-card-screenshot.has-image::before {
          display: none;
        }
        
        .gallery-card-screenshot img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 1;
        }
        
        .gallery-card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .status-badge {
          display: inline-block;
          padding: 0.375rem 0.875rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.8125rem;
          margin-bottom: 1rem;
        }
        
        .status-badge.fail {
          background: #f3e8ff;
          color: #6b46c1;
        }
        
        .status-badge.warn {
          background: #fef3c7;
          color: #d97706;
        }
        
        .status-badge.pass {
          background: #d1fae5;
          color: #059669;
        }
        
        .gallery-card-audience {
          font-size: 0.9375rem;
          color: #6b46c1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          padding: 0.875rem;
          background: #faf5ff;
          border-left: 3px solid #7c3aed;
          border-radius: 0.5rem;
        }
        
        .gallery-card-audience strong {
          color: #4c1d95;
          font-weight: 600;
        }
        
        .gallery-card-section {
          margin-bottom: 1.25rem;
        }
        
        .gallery-card-section:last-child {
          margin-bottom: 0;
        }
        
        .gallery-card-section-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .gallery-card-list {
          list-style: none;
          padding: 0;
        }
        
        .gallery-card-list li {
          font-size: 0.875rem;
          color: #6b46c1;
          padding: 0.375rem 0;
          padding-left: 1.25rem;
          position: relative;
          line-height: 1.6;
        }
        
        .gallery-card-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #7c3aed;
          font-weight: 700;
        }
        
        .expand-toggle {
          margin-top: 0.75rem;
          padding: 0.5rem 1rem;
          background: transparent;
          color: #7c3aed;
          border: 1px solid #c4b5fd;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-block;
        }
        
        .expand-toggle:hover {
          background: #faf5ff;
          border-color: #7c3aed;
          color: #6d28d9;
        }
        
        .expand-toggle:focus {
          outline: 2px solid #7c3aed;
          outline-offset: 0.125rem;
        }
        
        .warning-note {
          margin-top: 1rem;
          padding: 0.875rem;
          background: #fef3c7;
          border-left: 3px solid #d97706;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #92400e;
          line-height: 1.6;
        }
        
        .warning-note strong {
          color: #78350f;
          font-weight: 600;
        }
        
        .gallery-card-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #f3e8ff;
        }
        
        .gallery-card-link a {
          color: #7c3aed;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s ease;
        }
        
        .gallery-card-link a:hover {
          color: #6d28d9;
          text-decoration: underline;
        }
        
        .disclaimer-section {
          padding: 4rem 0;
          background-color: #f3e8ff;
          border-top: 2px solid #e9d5ff;
          border-bottom: 2px solid #e9d5ff;
        }
        
        .disclaimer-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .disclaimer-title {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .disclaimer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .disclaimer-card {
          background: #ffffff;
          border: 2px solid #e9d5ff;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
        }
        
        .disclaimer-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .disclaimer-card p {
          color: #6b46c1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .disclaimer-card .btn {
          display: inline-block;
          background-color: #7c3aed;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
        }
        
        .disclaimer-card .btn:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        .disclaimer-card .btn-secondary {
          background-color: transparent;
          color: #7c3aed;
          border: 2px solid #7c3aed;
        }
        
        .disclaimer-card .btn-secondary:hover {
          background-color: #faf5ff;
        }
        
        .disclaimer-note {
          text-align: center;
          font-size: 0.9375rem;
          color: #6b46c1;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffffff;
          border: 1px solid #e9d5ff;
          border-radius: 0.75rem;
        }
        
        .disclaimer-note strong {
          color: #4c1d95;
        }
        
        .cta-section {
          padding: 4rem 0;
          background-color: #faf5ff;
          text-align: center;
        }
        
        .cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #4c1d95;
          margin-bottom: 1rem;
        }
        
        .cta-section p {
          font-size: 1.125rem;
          color: #6b46c1;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
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
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 0 2rem;
          }
          
          .hero h1 {
            font-size: 2rem;
          }
          
          .hero .subtitle {
            font-size: 1.125rem;
          }
          
          .filters-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }
          
          .filter-group {
            min-width: 100%;
          }
          
          .filter-clear {
            width: 100%;
            text-align: center;
          }
          
          .featured-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .featured-header h2 {
            font-size: 1.75rem;
          }
          
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .disclaimer-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
      
      <main>
        <section className="hero">
          <div className="container">
            <h1>Report Gallery</h1>
            <p className="subtitle">
              Explore real FAIRy validation reports from different repositories and data types. See what fails, why it matters, and how to fix it.
            </p>
          </div>
        </section>
        
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-intro">
              <p>
                Each report below shows actual validation results from FAIRy rulepacks. These examples demonstrate common issues researchers encounter when preparing datasets for submission. Click any report to view the full details.
              </p>
            </div>
            
            <div className="featured-section">
              <div className="featured-header">
                <h2>Start here</h2>
                <p>Rulepacks based on community feedback — examples inspired by common issues</p>
              </div>
              <div className="featured-grid">
                {featuredItems.map(item => renderCard(item, true))}
              </div>
            </div>
            
            <div className="filters-container">
              <div className="filter-group">
                <label className="filter-label">Repository</label>
                <select 
                  className="filter-select"
                  value={selectedRepository}
                  onChange={(e) => setSelectedRepository(e.target.value)}
                >
                  <option value="all">All repositories</option>
                  {uniqueRepositories.map(repo => (
                    <option key={repo} value={repo}>
                      {repo === 'GEO' ? 'GEO (Gene Expression Omnibus)' :
                       repo === 'SRA' ? 'SRA (Sequence Read Archive)' :
                       repo === 'BioProject' ? 'NCBI BioProject' :
                       repo}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Data type</label>
                <select 
                  className="filter-select"
                  value={selectedDataType}
                  onChange={(e) => setSelectedDataType(e.target.value)}
                >
                  <option value="all">All data types</option>
                  {uniqueDataTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'bulk RNA-seq' ? 'Bulk RNA-seq' : 
                       type === 'scRNA' ? 'Single-cell RNA-seq (scRNA)' :
                       type === 'multi-omics' ? 'Multi-omics' :
                       type === 'general purpose' ? 'General purpose' :
                       type === 'microarray' ? 'Microarray' :
                       type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Severity</label>
                <select 
                  className="filter-select"
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                >
                  <option value="all">All severities</option>
                  <option value="has-fail">Has FAIL</option>
                  <option value="only-warn">Only WARN</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label className="filter-label">Sort by</label>
                <select 
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="severity">Severity (most actionable first)</option>
                  <option value="recently-updated">Recently updated</option>
                  <option value="repository">Repository</option>
                </select>
              </div>
              
              {(selectedRepository !== 'all' || selectedDataType !== 'all' || selectedSeverity !== 'all') && (
                <button 
                  className="filter-clear"
                  onClick={() => {
                    setSelectedRepository('all');
                    setSelectedDataType('all');
                    setSelectedSeverity('all');
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
            
            <div className="filter-results">
              Showing {filteredItems.length} of {galleryItems.filter(item => item.isPublic).length} reports
            </div>
            
            <div className="gallery-grid">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => renderCard(item))
              ) : (
                <div className="empty-state">
                  <p>No reports match the selected filters.</p>
                  <button 
                    className="btn-primary"
                    onClick={() => {
                      setSelectedRepository('all');
                      setSelectedDataType('all');
                      setSelectedSeverity('all');
                    }}
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="disclaimer-section">
          <div className="container">
            <div className="disclaimer-content">
              <h2 className="disclaimer-title">Services & Licensing</h2>
              
              <div className="disclaimer-grid">
                <div className="disclaimer-card">
                  <h3>Free for academic use</h3>
                  <p>
                    FAIRy-core is available free for academic and non-commercial use. Get started with starter templates and common rulepacks.
                  </p>
                  <a href="/researchers" className="btn">
                    Get FAIRy-core on GitHub →
                  </a>
                </div>
                
                <div className="disclaimer-card">
                  <h3>Guided pilot (paid)</h3>
                  <p>
                    We encode your institution's intake rules and deliver a readiness report + attestation. Custom rulepacks for your repository.
                  </p>
                  <a href="/preflight-mapping" className="btn btn-secondary">
                    Request a pilot scope →
                  </a>
                </div>
              </div>
              
              <div className="disclaimer-note">
                <strong>Note:</strong> The reports shown in this gallery are examples generated from test fixtures. They demonstrate common validation scenarios but do not represent actual user data. All reports are generated locally and no data is transmitted to external servers.
              </div>
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <h2>Ready to validate your dataset?</h2>
            <p>
              Run FAIRy locally on your data and get a detailed readiness report before submission.
            </p>
            <div className="cta-buttons">
              <a href="/try" className="btn-primary">
                Try FAIRy now
              </a>
              <a href="/docs" className="btn-primary" style={{ backgroundColor: 'transparent', color: '#7c3aed', border: '2px solid #7c3aed' }}>
                View documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

