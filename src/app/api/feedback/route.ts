import { NextRequest, NextResponse } from 'next/server';

// Environment variable for your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields based on form type
    if (body.form_type === 'demo' && (!body.email || !body.name || !body.title || !body.institution)) {
      return NextResponse.json(
        { success: false, error: 'Name, title, email, and institution are required for demo requests' },
        { status: 400 }
      );
    } else if (body.form_type !== 'demo' && !body.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Prepare data for Google Sheets
    const submissionData = {
      email: body.email,
      user_type: body.user_type || '',
      utm_source: body.utm_source || 'website',
      form_type: body.form_type || 'waitlist',
      additional_data: {
        name: body.name || '',
        title: body.title || '',
        phone: body.phone || '',
        institution: body.institution || '',
        department: body.department || '',
        dataset_count: body.dataset_count || '',
        current_tools: body.current_tools || '',
        timeline: body.timeline || '',
        budget_range: body.budget_range || '',
        additional_info: body.additional_info || '',
        website: body.website || '', // honeypot field
        // Survey-specific fields
        current_pain_points: body.current_pain_points || '',
        repository_preference: body.repository_preference || '',
        technical_comfort: body.technical_comfort || '',
        submission_frequency: body.submission_frequency || '',
        compliance_requirements: body.compliance_requirements || '',
        current_workflow: body.current_workflow || '',
        biggest_challenge: body.biggest_challenge || '',
        timestamp: new Date().toISOString(),
        user_agent: request.headers.get('user-agent') || '',
        ip_address: request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown'
      }
    };
    
    // Check honeypot field (bot protection)
    if (body.website) {
      return NextResponse.json(
        { success: false, error: 'Bot detected' },
        { status: 400 }
      );
    }
    
    // Send to Google Apps Script
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable not set');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });
    
    if (!response.ok) {
      throw new Error(`Google Script API responded with status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Unknown error from Google Script');
    }
    
    return NextResponse.json({
      success: true,
      message: 'Thank you! Your information has been saved.',
      timestamp: result.timestamp
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save your information. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
