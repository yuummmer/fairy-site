# Institution Survey Setup Guide

## Overview
This guide walks you through setting up the external institution survey for the FAIRy website and how to access the results.

## Survey Platform Options

### Option 1: Google Forms (Recommended - Free & Easy)
- **Pros**: Free, integrates with Google Drive, easy to set up, good analytics
- **Cons**: Basic styling options, Google branding
- **Best for**: Quick setup, budget-conscious

### Option 2: Typeform (Professional & Beautiful)
- **Pros**: Beautiful design, great UX, advanced logic, professional appearance
- **Cons**: Paid plans for advanced features, more complex setup
- **Best for**: Professional appearance, advanced features

### Option 3: Calendly + Survey (Enterprise Standard)
- **Pros**: Industry standard for B2B, booking integration, professional
- **Cons**: More complex setup, paid plans
- **Best for**: Enterprise buyers, booking consultations

## Step-by-Step Setup (Google Forms)

### 1. Create the Survey

1. **Go to Google Forms**: https://forms.google.com
2. **Click "Blank"** to create a new form
3. **Title**: "FAIRy Institution Survey"
4. **Description**: "Help us understand your institution's data submission needs"

### 2. Add Survey Questions

Copy and paste these questions into your Google Form:

#### **Question 1: Institution Information**
- **Type**: Short answer
- **Question**: "What is your institution name?"
- **Required**: Yes

#### **Question 2: Your Role**
- **Type**: Multiple choice
- **Question**: "What is your role?"
- **Options**:
  - Core facility manager
  - Research data manager / Librarian
  - IT administrator / Security
  - Principal investigator / Lab head
  - Other (please specify)
- **Required**: Yes

#### **Question 3: Institution Size**
- **Type**: Multiple choice
- **Question**: "How many labs/research groups does your institution support?"
- **Options**:
  - 1-10 labs
  - 11-50 labs
  - 51-100 labs
  - 100+ labs
- **Required**: Yes

#### **Question 4: Current Challenges**
- **Type**: Multiple choice (multiple answers allowed)
- **Question**: "What are your biggest data submission challenges? (Select all that apply)"
- **Options**:
  - Metadata errors and missing fields
  - File naming and formatting issues
  - Compliance checking and validation
  - Too time-consuming to prepare submissions
  - Submissions get bounced/rejected
  - Too many manual processes
  - Lack of standardization across labs
  - Other (please specify)
- **Required**: Yes

#### **Question 5: Repository Usage**
- **Type**: Multiple choice (multiple answers allowed)
- **Question**: "Which repositories do your researchers submit to most often?"
- **Options**:
  - GEO (Gene Expression Omnibus)
  - Zenodo
  - Dryad
  - Figshare
  - SRA (Sequence Read Archive)
  - Institutional repository
  - Other (please specify)
- **Required**: Yes

#### **Question 6: Submission Volume**
- **Type**: Multiple choice
- **Question**: "How many datasets does your institution submit per month?"
- **Options**:
  - 1-5 datasets
  - 6-20 datasets
  - 21-50 datasets
  - 50+ datasets
- **Required**: Yes

#### **Question 7: Technical Comfort**
- **Type**: Multiple choice
- **Question**: "How comfortable are your researchers with command-line tools?"
- **Options**:
  - Very comfortable - most use CLI daily
  - Comfortable - can use CLI when needed
  - Somewhat - prefer GUI but can do CLI
  - Not comfortable - prefer visual interfaces
- **Required**: Yes

#### **Question 8: Current Tools**
- **Type**: Multiple choice (multiple answers allowed)
- **Question**: "What tools does your institution currently use for data preparation?"
- **Options**:
  - Manual spreadsheet checking
  - Custom scripts and tools
  - Repository-specific tools
  - Consultation with data librarians
  - Trial and error approach
  - No formal process
  - Other (please specify)
- **Required**: Yes

#### **Question 9: Timeline**
- **Type**: Multiple choice
- **Question**: "When would you like to evaluate FAIRy?"
- **Options**:
  - Within 1 month
  - Within 3 months
  - Within 6 months
  - Just exploring options
- **Required**: Yes

#### **Question 10: Contact Information**
- **Type**: Short answer
- **Question**: "What is your email address?"
- **Required**: Yes
- **Description**: "We'll use this to contact you about FAIRy"

#### **Question 11: Additional Information**
- **Type**: Paragraph
- **Question**: "Any additional information about your institution's data submission needs?"
- **Required**: No

### 3. Customize the Survey

1. **Click the palette icon** (customize theme)
2. **Choose colors** that match your brand (purple theme: #7c3aed)
3. **Add your logo** if desired
4. **Set header image** to something professional

### 4. Configure Settings

1. **Click the gear icon** (Settings)
2. **General tab**:
   - ✅ Collect email addresses
   - ✅ Limit to 1 response per person
   - ✅ Show progress bar
3. **Responses tab**:
   - ✅ Accepting responses
   - ✅ Notify me of new responses

### 5. Get the Survey Link

1. **Click "Send"** button
2. **Click the link icon** (🔗)
3. **Copy the link** - it will look like: `https://forms.google.com/d/1ABC123...`
4. **Update the website** with this link

## Updating the Website

### ✅ Survey Link Successfully Updated

The survey link has been successfully implemented in `/src/app/institutions/page.tsx`:

**Current implementation:**
```javascript
href="https://forms.gle/mALqVs2Y26SS5wRr8"
```

**Survey Details:**
- **Title**: FAIRy Institution Survey
- **Purpose**: Help us understand your institution's data submission needs
- **Status**: ✅ Live and ready to collect responses
- **Link**: [https://forms.gle/mALqVs2Y26SS5wRr8](https://forms.gle/mALqVs2Y26SS5wRr8)

## Accessing Survey Results

### Method 1: Google Forms Dashboard
1. **Go to Google Forms**: https://forms.google.com
2. **Find your survey** in the list
3. **Click on it** to open
4. **Click "Responses" tab** to see all responses
5. **View individual responses** or **summary charts**

### Method 2: Google Sheets Integration
1. **In Google Forms**, click "Responses" tab
2. **Click the green Sheets icon** (📊)
3. **Choose "Create a new spreadsheet"**
4. **Name it**: "FAIRy Institution Survey Results"
5. **Access via Google Drive** or direct Sheets link

### Method 3: Email Notifications
- **Set up email alerts** in Google Forms settings
- **Get notified** when new responses come in
- **Forward to team** as needed

## Survey Analytics & Tracking

### Google Forms Built-in Analytics
- **Response count** and completion rate
- **Question-by-question** response summaries
- **Charts and graphs** for multiple choice questions
- **Export to CSV** for further analysis

### Website Analytics Integration
The survey link includes tracking:
```javascript
onClick={() => trackCTA('institution_survey_click', 'external_survey_link')}
```

This tracks:
- **Click-through rate** from website to survey
- **Conversion funnel** analysis
- **Traffic sources** and user behavior

## Best Practices

### Survey Management
1. **Check responses daily** during launch
2. **Respond to inquiries** within 24 hours
3. **Export data weekly** for backup
4. **Update survey** based on feedback

### Follow-up Process
1. **New response notification** → Check Google Forms
2. **Review response** → Qualify lead
3. **Send personalized email** → Reference their specific challenges
4. **Schedule consultation** → Use Calendly or similar
5. **Track in CRM** → Add to your sales pipeline

### Data Privacy
- **Google Forms** automatically handles GDPR compliance
- **Email addresses** are collected securely
- **Data export** includes all responses
- **Delete requests** can be handled manually

## Troubleshooting

### Common Issues
1. **Survey not loading**: Check link format
2. **Responses not appearing**: Check form settings
3. **Email notifications not working**: Check spam folder
4. **Mobile issues**: Test on different devices

### Support Resources
- **Google Forms Help**: https://support.google.com/forms
- **Typeform Help**: https://help.typeform.com
- **Calendly Help**: https://help.calendly.com

## Next Steps After Launch

1. **Monitor response rate** (aim for 10-15% of institution page visitors)
2. **Qualify leads** based on institution size and timeline
3. **Follow up quickly** with personalized outreach
4. **Track conversion** from survey → consultation → pilot
5. **Iterate on survey** based on response patterns

## Contact Information

- **Technical issues**: Check this guide first
- **Survey design questions**: Reference the questions above
- **Analytics questions**: Check Google Forms documentation
- **Follow-up process**: Create your own CRM workflow

---

*This guide should get you and Sylvia set up with a professional institution survey that integrates seamlessly with your website and provides clear data for lead qualification and follow-up.*
