# Branding Guidelines

## Email Signature

The Datadabra email signature is available in `public/brand/signature/` for use across the team.

### Files

- **`signature.html`** - Copy-pasteable HTML snippet ready for email clients
- **`signature-preview.html`** - Full page preview for visual checks
- **`datadabra-mark.png`** - Logo placeholder (if needed)

### How to Use in Gmail

Gmail's signature settings do not support raw HTML code directly. You must use an HTML editor to create your signature and then copy the rendered HTML to paste into Gmail.

**Steps:**

1. Open `public/brand/signature/signature-preview.html` in your web browser
   - Double-click the file, or
   - Drag it into your browser window
   - Or right-click → Open with → Browser

2. Select and copy the signature section
   - Highlight the purple signature text (between the "COPY FROM HERE" and "COPY TO HERE" comments)
   - Copy it (Ctrl+C / Cmd+C)

3. In Gmail:
   - Go to **Settings** (gear icon) → **See all settings**
   - Navigate to **General** tab
   - Scroll to **Signature** section
   - Click **Create new** or edit an existing signature
   - Paste the copied signature content
   - Save your changes

**Alternative:** You can also directly copy the contents of `signature.html` and paste into Gmail's signature editor. Gmail will preserve the formatting.

### How to Use in Outlook

1. Open Outlook and go to **File** → **Options** → **Mail** → **Signatures**

2. Create a new signature or edit an existing one

3. Click the **HTML** button or paste the content from `signature.html` directly into the signature editor

4. Save your changes

**Note:** Outlook may strip some styling. If formatting looks off, try using the table-based version (see source styles in `src/brand/signature.css`).

### How to Use in Other Email Clients

Most modern email clients support HTML signatures. The signature uses inline styles for maximum compatibility:

- **Apple Mail:** Preferences → Signatures → Create new → Paste HTML
- **Thunderbird:** Tools → Account Settings → [Your Account] → Composition & Addressing → Attach signature → Paste HTML
- **Other clients:** Look for signature settings in preferences/options and paste the HTML content

### Customization

The signature is designed to match the Datadabra website color scheme:

- **Primary text:** `#4c1d95` (dark purple)
- **Secondary text:** `#6b46c1` (medium purple)  
- **Links:** `#7c3aed` (bright purple)
- **Font:** System font stack (San Francisco on macOS, Segoe UI on Windows, etc.)

Source styles are available in `src/brand/signature.css` for reference, but the final signature uses inline styles for email client compatibility.

### Best Practices

- ✅ Use the signature as-is for consistent branding
- ✅ Test in your email client before sending
- ✅ Keep signature concise and professional
- ✅ Ensure links are clickable after pasting
- ❌ Don't modify colors without updating the brand guidelines
- ❌ Don't add images or logos without ensuring they're publicly accessible
- ❌ Don't use external CSS - all styles must be inline

### Troubleshooting

**Signature looks broken in email:**
- Make sure you copied the complete HTML including all opening and closing tags
- Try pasting into a plain text editor first, then copying again to remove hidden formatting
- Some email clients strip certain CSS properties - inline styles should work in most cases

**Links don't work:**
- Ensure the `href` attributes are present in the `<a>` tags
- Some email clients require full URLs (including `https://`)

**Colors don't match:**
- Verify the hex color codes are correct: `#4c1d95`, `#6b46c1`, `#7c3aed`
- Some email clients may render colors slightly differently

### Support

For questions or updates to the signature, contact the team or update this documentation.

