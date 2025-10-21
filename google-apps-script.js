/**
 * Google Apps Script for FAIRy Feedback Forms
 * This script receives form submissions and writes them to a Google Sheet
 */

// Replace this with your actual Google Sheet ID
const SPREADSHEET_ID = '1ifrVD_lfEijmVu56aZgy-xNIae5EVyzdio1JXs4Q9eI';

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName('Feedback Submissions');
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Feedback Submissions');
      // Add headers
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Timestamp', 'Email', 'User Type', 'UTM Source', 'Form Type', 'Additional Data']
      ]);
      // Format headers
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      sheet.getRange(1, 1, 1, 6).setBackground('#f0f0f0');
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const email = data.email || '';
    const userType = data.user_type || '';
    const utmSource = data.utm_source || '';
    const formType = data.form_type || '';
    
    // Convert additional data to JSON string
    const additionalData = JSON.stringify(data.additionalData || {});
    
    // Add the new row
    sheet.appendRow([
      timestamp,
      email,
      userType,
      utmSource,
      formType,
      additionalData
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 6);
    
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
