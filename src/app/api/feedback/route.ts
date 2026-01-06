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
    } else if (body.form_type === 'preflight_mapping' && (!body.email || !body.name || !body.institution || 
               !body.repo_standard || !body.dataset_types || !body.timeline_urgency || !body.biggest_headache)) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled in' },
        { status: 400 }
      );
    } else if (body.form_type !== 'demo' && body.form_type !== 'biofair_pilot_interest' && body.form_type !== 'preflight_mapping' && body.form_type !== 'preflight_mapping_deep' && !body.email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }
    
    // Validate email format if provided (some forms may omit email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Prepare data for Google Sheets
    const submissionData = {
      email: body.email || '',
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
        // BIOFAIR short inline form custom fields
        org: body.org || body.institution || '',
        role: body.role || body.title || '',
        data_type: body.dataType || body.data_type || '',
        pilot_readiness: body.willingToPilot || body.pilot_readiness || '',
        // Preflight mapping specific fields
        repo_standard: body.repo_standard || '',
        dataset_types: body.dataset_types || '',
        timeline_urgency: body.timeline_urgency || '',
        biggest_headache: body.biggest_headache || '',
        anything_else: body.anything_else || '',
        sample_volume: body.sample_volume || '',
        can_share_sample: body.can_share_sample || '',
        // Preflight mapping deep fields
        controlled_vocab: body.controlled_vocab || '',
        controlled_vocab_other: body.controlled_vocab_other || '',
        controlled_vocab_not_sure: body.controlled_vocab_not_sure || false,
        stakeholders_timeline: body.stakeholders_timeline || '',
        example_links: body.example_links || '',
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
    
    // Log minimal payload for troubleshooting (visible in server logs)
    try {
      if (submissionData.form_type === 'biofair_pilot_interest') {
        console.log('biofair submission', {
          email: submissionData.email,
          org: submissionData.additional_data.org,
          role: submissionData.additional_data.role,
          data_type: submissionData.additional_data.data_type,
          pilot_readiness: submissionData.additional_data.pilot_readiness
        });
      } else if (submissionData.form_type === 'preflight_mapping') {
        console.log('preflight_mapping submission', {
          email: submissionData.email,
          name: submissionData.additional_data.name,
          org: submissionData.additional_data.org,
          institution: submissionData.additional_data.institution,
          repo_standard: submissionData.additional_data.repo_standard,
          dataset_types: submissionData.additional_data.dataset_types,
          timeline_urgency: submissionData.additional_data.timeline_urgency,
          biggest_headache: submissionData.additional_data.biggest_headache,
          biggest_headache_other: submissionData.additional_data.biggest_headache_other,
          sample_volume: submissionData.additional_data.sample_volume
        });
      } else if (submissionData.form_type === 'preflight_mapping_deep') {
        console.log('preflight_mapping_deep submission', {
          email: submissionData.email,
          name: submissionData.additional_data.name,
          institution: submissionData.additional_data.institution,
          controlled_vocab: submissionData.additional_data.controlled_vocab,
          controlled_vocab_other: submissionData.additional_data.controlled_vocab_other,
          stakeholders_timeline: submissionData.additional_data.stakeholders_timeline,
          example_links: submissionData.additional_data.example_links
        });
      }
    } catch {}

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
