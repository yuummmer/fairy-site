/**
 * Google Apps Script for FAIRy Feedback Forms
 * This script receives form submissions and writes them to a Google Sheet
 */

// Replace this with your actual Google Sheet ID
const SPREADSHEET_ID = '1ifrVD_lfEijmVu56aZgy-xNIae5EVyzdio1JXs4Q9eI';
// Optional: set to use a specific tab; if not found, falls back to the first sheet
const SHEET_NAME = 'Feedback Submissions';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Add headers
      sheet.getRange(1, 1, 1, 11).setValues([
        ['Timestamp', 'Email', 'User Type', 'UTM Source', 'Form Type', 'Name', 'Org', 'Role', 'Data Type', 'Pilot Readiness', 'Additional Data']
      ]);
      // Format headers
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 11).setBackground('#f0f0f0');
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const email = data.email || '';
    const userType = data.user_type || '';
    const utmSource = data.utm_source || '';
    const formType = data.form_type || '';
    
    // Pull common fields out of additional_data for easy filtering
    const addl = data.additional_data || {};
    const name = addl.name || '';
    const org = addl.org || '';
    const role = addl.role || '';
    const dataType = addl.data_type || addl.dataType || '';
    const pilotReadiness = addl.pilot_readiness || addl.willingToPilot || '';
    // Convert entire additional_data to JSON string as well
    const additionalData = JSON.stringify(addl);
    
    // Add the new row
    // Ensure headers exist (old sheets) and extend if needed
    const headerRange = sheet.getRange(1, 1, 1, Math.max(11, sheet.getLastColumn()));
    const headers = headerRange.getValues()[0];
    const desiredHeaders = ['Timestamp', 'Email', 'User Type', 'UTM Source', 'Form Type', 'Name', 'Org', 'Role', 'Data Type', 'Pilot Readiness', 'Additional Data'];
    if (headers.slice(0, desiredHeaders.length).join('|') !== desiredHeaders.join('|')) {
      sheet.getRange(1, 1, 1, desiredHeaders.length).setValues([desiredHeaders]);
    }

    sheet.appendRow([
      timestamp,
      email,
      userType,
      utmSource,
      formType,
      name,
      org,
      role,
      dataType,
      pilotReadiness,
      additionalData
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 11);
    console.log('Row appended', { email, userType, utmSource, formType, name, org, role, dataType, pilotReadiness });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({ 
      message: 'FAIRy Feedback Handler is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the script works
 * Run this manually to test the connection
 */
function testConnection() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName('Feedback Submissions');
    
    if (sheet) {
      console.log('✅ Connection successful! Sheet found.');
      console.log('Sheet name:', sheet.getName());
      console.log('Sheet ID:', sheet.getSheetId());
    } else {
      console.log('⚠️ Sheet "Feedback Submissions" not found. It will be created on first submission.');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Connection failed:', error);
    return false;
  }
}
