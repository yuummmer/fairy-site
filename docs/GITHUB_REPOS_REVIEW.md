# GitHub Repositories & Website Content Review

## Summary

This document reviews the list of key items that should be highlighted on datadabra.com based on the GitHub repositories, and provides recommendations for what should be added or improved.

## Current Coverage Analysis

### ✅ Already Well Covered

1. **fairy-core repository** - Linked in multiple places:
   - `/open-science` page (Resources section)
   - `/docs` page (references)
   - `/researchers` page (download CTA)
   - Navigation dropdown

2. **Open source licensing (AGPL-3.0)** - Covered on `/open-science` page

3. **Citation information** - Covered on `/open-science` page with APA and BibTeX formats

4. **Basic repository links** - fairy-core GitHub link is present

### ⚠️ Partially Covered (Needs Enhancement)

1. **Documentation links** - `/docs` page exists but doesn't directly link to specific GitHub docs:
   - `docs/getting-started.md` - Not directly linked
   - `docs/cli.md` - Not directly linked
   - `docs/katas/index.md` - Not directly linked
   - `docs/reporting.md` - Not directly linked

2. **Commercial licensing** - Mentioned briefly in open-science page but could be more prominent

3. **Pilot program** - Exists on `/preflight-mapping` but could be more discoverable

4. **Key features** - Scattered across pages but not consolidated in one prominent place

### ❌ Missing or Not Prominent

1. **fairy-lab repository** - Not mentioned anywhere on the site
   - Should be added as a key resource
   - Streamlit UI with project workspaces and guided fixes

2. **Direct links to GitHub documentation** - No direct links to:
   - Getting started guide
   - CLI usage docs
   - Kata gallery
   - Reporting documentation

3. **Commercial licensing details** - Needs a dedicated section or more prominent placement

4. **Pilot program details** - Should be more visible with clear contact info

5. **Security issues reporting** - Not mentioned (SECURITY.md reference)

6. **Contributing guidelines** - CONTRIBUTING.md not referenced

7. **Current status (early alpha)** - Not clearly stated on main pages

8. **CC0-1.0 rulepack licensing** - Mentioned but could be clearer

9. **Multi-table validation & foreign key checks** - Feature exists but not prominently highlighted

10. **Machine-readable (JSON) reports** - Mentioned but could be more prominent

## Recommendations

### Priority 1: High Impact, Easy to Add

1. **Add fairy-lab repository link**
   - Add to `/open-science` Resources table
   - Add to `/docs` page
   - Consider adding to navigation or home page

2. **Add direct links to GitHub documentation**
   - Update `/docs` page with direct links to:
     - Getting started: `https://github.com/yuummmer/fairy-core/blob/main/docs/getting-started.md`
     - CLI usage: `https://github.com/yuummmer/fairy-core/blob/main/docs/cli.md`
     - Kata gallery: `https://github.com/yuummmer/fairy-core/blob/main/docs/katas/index.md`
     - Reporting: `https://github.com/yuummmer/fairy-core/blob/main/docs/reporting.md`

3. **Add "Get Started" section to home page**
   - Create a prominent section linking to:
     - GitHub repos (fairy-core and fairy-lab)
     - Documentation
     - Commercial/pilot contact info

4. **Add current status badge/notice**
   - Add "Early alpha" notice to key pages
   - Mention that interfaces may change before v1.0

### Priority 2: Important Enhancements

5. **Enhance commercial licensing section**
   - Add dedicated section or expand existing mention
   - Include: "Available for organizations that cannot adopt AGPL"
   - Contact: hello@datadabra.com

6. **Enhance pilot program visibility**
   - Add to home page or create prominent CTA
   - Include: "For institutions and labs interested in pilots or dashboards"
   - Contact options: hello@datadabra.com or GitHub issue with label `pilot-inquiry`

7. **Add security reporting information**
   - Add to `/open-science` page or footer
   - Reference SECURITY.md
   - Contact: hello@datadabra.com

8. **Add contributing guidelines reference**
   - Add to `/open-science` page
   - Link to CONTRIBUTING.md in GitHub

9. **Consolidate key features list**
   - Create a prominent features section highlighting:
     - Local-first validation
     - Repository-specific rulepacks (GEO, SRA, Zenodo, etc.)
     - Machine-readable (JSON) and human-readable (Markdown) reports
     - CLI and Python API
     - Multi-table validation with foreign key checks

### Priority 3: Nice to Have

10. **Update citation information**
    - Update to reflect v0.2 if that's the current version
    - Ensure repository URL is correct

11. **Add rulepack licensing clarity**
    - Make CC0-1.0 licensing more prominent
    - Explain that rulepacks are public domain

12. **Add roadmap/status page**
    - Consider a dedicated status page showing:
      - Current version
      - Roadmap items
      - Active development status

## Implementation Suggestions

### Option A: Enhance Existing Pages

1. **Update `/open-science` page:**
   - Add fairy-lab to Resources table
   - Add security reporting section
   - Add contributing guidelines link
   - Enhance commercial licensing section

2. **Update `/docs` page:**
   - Add direct links to GitHub documentation files
   - Add fairy-lab repository link
   - Add current status notice

3. **Update home page (`/`):**
   - Add "Get Started" section with links to repos and docs
   - Add pilot program CTA
   - Add commercial licensing mention

### Option B: Create New Section/Page

1. **Create "Get Started" page or section:**
   - Links to both GitHub repos
   - Links to documentation
   - Commercial/pilot contact info
   - Current status

2. **Create "For Organizations" page:**
   - Commercial licensing details
   - Pilot program information
   - Contact information

## Specific Items to Add

### fairy-lab Repository
- **URL:** https://github.com/yuummmer/fairy-lab
- **Description:** Streamlit UI with project workspaces and guided fixes
- **Where to add:** 
  - `/open-science` Resources table
  - `/docs` page
  - Home page "Get Started" section

### Documentation Links
- Getting started: `https://github.com/yuummmer/fairy-core/blob/main/docs/getting-started.md`
- CLI usage: `https://github.com/yuummmer/fairy-core/blob/main/docs/cli.md`
- Kata gallery: `https://github.com/yuummmer/fairy-core/blob/main/docs/katas/index.md`
- Reporting: `https://github.com/yuummmer/fairy-core/blob/main/docs/reporting.md`

### Commercial Licensing
- **Text:** "Available for organizations that cannot adopt AGPL"
- **Contact:** hello@datadabra.com
- **Where:** Home page, `/open-science`, or dedicated section

### Pilot Program
- **Text:** "For institutions and labs interested in pilots or dashboards"
- **Contact:** hello@datadabra.com or open a GitHub issue with label `pilot-inquiry`
- **Where:** Home page CTA, `/preflight-mapping` enhancement

### Security Issues
- **Text:** "Report security issues to hello@datadabra.com (per SECURITY.md)"
- **Where:** Footer or `/open-science` page

### Contributing
- **Text:** "Contributions welcome (see CONTRIBUTING.md)"
- **Link:** `https://github.com/yuummmer/fairy-core/blob/main/CONTRIBUTING.md`
- **Where:** `/open-science` page

### Current Status
- **Text:** "Early alpha (interfaces may change before v1.0)"
- **Where:** Home page, `/docs` page, repository links

## Next Steps

1. Review this document and prioritize items
2. Decide on implementation approach (enhance existing vs. create new)
3. Implement Priority 1 items first
4. Test and iterate on Priority 2 items
5. Consider Priority 3 items for future updates

