# Scripts

This directory contains utility scripts for the FAIRy website project.

## Contents

- **convert_to_pdf.py** - Converts the HTML slide deck template to PDF format
- **google-apps-script.js** - Google Apps Script for handling form submissions to Google Sheets

## convert_to_pdf.py

Converts the slide deck HTML template (`docs/slides/slide-deck-template.html`) to a PDF file.

### Usage

```bash
python3 scripts/convert_to_pdf.py
```

### Requirements

- Python 3.x
- weasyprint library: `pip install weasyprint`

### Output

Generates `docs/slides/fairy-slide-deck.pdf` with all slides formatted for printing.

## google-apps-script.js

Google Apps Script that receives form submissions from the FAIRy website and writes them to a Google Sheet.

### Setup

1. Copy the contents of this file to Google Apps Script
2. Update the `SPREADSHEET_ID` constant with your actual Google Sheet ID
3. Deploy as a web app with "Anyone" access
4. Add the web app URL to your `.env.local` file as `GOOGLE_SCRIPT_URL`

### Documentation

See `docs/setup/GOOGLE_SHEETS_SETUP.md` for detailed setup instructions.

## Related Documentation

- Google Sheets setup: `docs/setup/GOOGLE_SHEETS_SETUP.md`
- Slide deck: `docs/slides/SLIDE_DECK_README.md`

