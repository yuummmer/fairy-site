export async function GET() {
  return Response.json({
    hasGoogleScriptUrl: !!process.env.GOOGLE_SCRIPT_URL,
    urlLength: process.env.GOOGLE_SCRIPT_URL?.length || 0
  });
}
