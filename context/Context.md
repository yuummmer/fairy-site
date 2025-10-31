Cursor Brief — FAIRy Website (by Datadabra)
Purpose

Build a credible, enterprise-ready marketing & docs site for FAIRy, a local-first validator/fixer/packager for research datasets. The site must persuade institutions (libraries, cores, research IT) to pilot and purchase, while keeping an on-ramp for solo researchers. 

FAIRy _ Datadabra — Strategy

Audience & Positioning

Primary buyers: Library/RDM teams, core facilities, grants/compliance.

Secondary users: Individual researchers/small labs (Solo, free).

Solo researcher persona:
Grad student, postdoc, small lab, or single PI sitting on:
- an RNA-seq dataset,
- or environmental samples,
- or an imaging collection,
- or a small field survey,
…who now has to submit this to GEO / SRA / ENA / Dryad / Zenodo / "that one data portal the journal told us to use" and they are dreading it.

They do not have a Jason. They are Jason, badly, for one weekend, with no guidance.

Solo researcher pain points:
- "The repository says my metadata is incomplete but won't tell me what I actually have to fix."
- "I didn't know filenames had to follow a pattern."
- "Wait, they want sample IDs to match across all these different TSVs? I didn't track that cleanly…"
- "We didn't document instrument model / platform / protocol info in a consistent field and now they're asking for it."
- "The journal won't accept the manuscript until the data is deposited, I am going to scream."

No curator, no data manager, no internal QC. Just them vs. a wall.

Position: Not an authoring tool; not just a FAIR score. FAIRy = validator → fixer → packager → attestation, local-first (Solo) with an institution layer (Campus/Core). 

FAIRy _ Datadabra — Strategy

Value Prop (site copy anchors)

"Fix your data before you submit—local, open, and fast."

Reduce bounced submissions and last-minute fixes.

Normalize dates/units/IDs/terms; produce a deposit-ready export; generate evidence.

Local-first privacy: nothing leaves the device unless the user exports.

Institution-specific value prop:
FAIRy helps institutions get their datasets into public repositories without bouncing, by pushing checks for metadata completeness, ID consistency, and file standards upstream — and by giving data stewards a repeatable "this is ready to publish" receipt instead of forcing them to clean every submission by hand.

Solo researcher value prop:
FAIRy is the "ready-to-submit check" you run on your dataset and metadata bundle before you upload it to a public repository.

What FAIRy does for solo researchers:
- Tells them what's missing ("These 3 required fields are blank, fill them in or GEO/Zenodo will reject you.")
- Tells them what's wrong format-wise ("This date is not ISO 8601, fix it or you'll get asked to resubmit.")
- Tells them where they're inconsistent ("You used SAMPLE_01 here and Sample1 there — those need to match.")
- Generates: a one-page readiness report they can screenshot/attach to their PI saying "here's what's left" and an attestation file saying "I checked this bundle with FAIRy vX using rulepack Y on [timestamp]."

The pitch in their words:
"Before you upload to the repository, run FAIRy locally. It'll tell you what's going to get you rejected, give you a short to-do list, and spit out a 'this is ready' summary you can hand to your PI or attach to your submission."

Language differences:
- For Jason / BRIT / institutions: "Stop doing manual cleanup for everyone else." "Push your rules upstream." "Generate an attestation so you don't have to defend your standards manually." (That's governance, standardization, and time saved.)
- For solo researchers / PIs: "Don't get rejected." "Know exactly what to fix." "Submit once, not four times." "Give your PI / journal / repository something that proves the dataset is complete and documented." (That's survival, not governance.) 

Core pilot promise

One run → a human-readable readiness sheet (PASS / WARN / FAIL + how to fix) → plus a structured summary you can archive.

Example

fairy validate /path/to/dataset --out out/

Outputs

readiness-report.html — what to fix, in plain English

validation-summary.json — machine-readable summary

FAIRy _ Datadabra — Strategy

Must-have pages (and intent)

Home / → Outcomes + trust; link to Platform, Security, Resources.

GEO Pre-check /geo-precheck & Zenodo Pre-check /zenodo-precheck → repository-specific checklists + sample Evidence/Export.

Export Pack /export-pack → explain ZIP contents: metadata.json, manifest.csv (SHA-256), README, checksums.

Early Access /early-access → pilot/sales intake form.

Platform /platform → architecture: local engine, rulepacks, evidence, institution control plane.

Security /security → data-flow diagram, on-device model, attestation format, accessibility & procurement notes.

Resources /resources → whitepapers, case studies, guides (filterable).
(Pre-check, export, evidence, rulepacks, policy rollouts tie back to product pillars.) 

FAIRy _ Datadabra — Strategy

CTAs

Primary (institution): “Request pilot” / “Talk to sales.”

Secondary (solo): “Download FAIRy Solo” / “See sample Export Pack (ZIP)” / “Open Submission Summary (PDF).” 

Contact

Email: hello@datadabra.com

FAIRy _ Datadabra — Strategy

Product Pillars (surface visually)

Fix-Queue (preview + undo)

Pre-check (Dry-Run) for one (Solo) or many repositories (Campus)

Export Pack (ZIP)

Submission Summary / Evidence Kit (PDF for Solo, signed JSON for Campus)

Policy & Rulepacks (versioned, signed)

Bulk Campaigns & Exceptions (Campus) 

FAIRy _ Datadabra — Strategy

Tone & Design

Enterprise-credible, concise, standards-mapped.

Neutral palette + one accent; generous whitespace; restrained motion.

Prefer product UI, diagrams, and checklists over stock photos.

Plain language labels: “Check my files,” “Standard date,” “Pre-check,” “Export.” 

FAIRy _ Datadabra — Strategy

UX Principles to enforce

Flow: Drop → Scan → Fix all → Export.

Always offer a local-first explanation and an evidence callout.

Show repository adapters (GEO, Zenodo) and rulepack levels (community/verified/certified). 

FAIRy _ Datadabra — Strategy

Tech constraints (for Cursor)

Framework: Next.js 15 (App Router) in src/app/*; styling without Tailwind (semantic HTML + accessible components).

Use semantic HTML, accessible components (WCAG 2.1 AA intent).

Keep static-friendly; plan for output: "export" option in next.config.ts.

Header: FAIRy product-forward; Footer: Datadabra company/legal.

Create src/app/{platform,security,resources}/page.tsx scaffolds with hero, 3–4 sections, CTA panel.

Evidence & Assets (to create stubs for)

Sample Export Pack (ZIP) and Submission Summary (PDF-lite) for links on pre-check/export pages.

Architecture diagram (Client engine, Signed Registries, Campus control plane).

Security data-flow (files stay local; optional signed evidence JSON). 

FAIRy _ Datadabra — Strategy

Pricing tiers (how to reference)

Solo (free/open): single-rule apply, 1-repo pre-check, Export Pack, Evidence PDF-lite, local AI micro-drafts.

Campus/Core (paid): bulk apply, multi-repo what-if, signed Evidence JSON, policy rollouts, drift detection, campaigns, SSO/SCIM, SIEM export, SLAs. (Market to this tier.)

Rulepack philosophy:
- Institutional rulepacks solve "please don't waste Jason's time." (E.g., "BRIT-ESN-Carlquist-v0.1" encoding BRIT's internal rules.)
- Repository rulepacks solve "please don't get rejected by ENA / GEO / Zenodo at 2am." (E.g., "GEO bulk RNA-seq submission v0.1", "Dryad bundle with required metadata", "Zenodo-ready dataset with required descriptive fields", "Journal supplementary data checklist for [Journal X template]".)
Same engine. Different lens. Solo researchers need repository-specific rulepacks, not institutional standards. 

FAIRy _ Datadabra — Strategy

Success signals (site KPIs to optimize)

CTA clicks: Request pilot, Download Solo, Sample ZIP/PDF.

Conversion to pilot sign-ups; evidence that reduces time-to-green and retry rates. 

FAIRy _ Datadabra — Strategy

“Don’t” list

Don’t present FAIRy as an authoring tool (e.g., CEDAR).

Don’t imply cloud upload by default; reinforce on-device.

Don’t over-scope AI; keep validation deterministic, AI for text blocks only.