/**
 * API Route for Customer Enquiries
 * Handles enquiry submission and persistence
 * 
 * NOTE: This is a basic implementation. In production:
 * - Store enquiries in a database
 * - Send confirmation email to customer
 * - Notify team via Slack/email
 * - Implement rate limiting
 * - Add CSRF protection
 */

export async function POST(request) {
  try {
    const enquiry = await request.json();

    // Validate required fields
    if (!enquiry.customerName || !enquiry.customerPhone || !enquiry.customerCity) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Save to database
    // const savedEnquiry = await saveEnquiryToDatabase(enquiry);

    // TODO: Send confirmation email to customer
    // await sendConfirmationEmail(enquiry.customerEmail, enquiry);

    // TODO: Notify team
    // await notifyTeam(enquiry);

    // For now, just return success with the enquiry ID
    return new Response(
      JSON.stringify({
        success: true,
        id: enquiry.id,
        message: 'Enquiry received successfully. Our team will contact you soon.'
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Enquiry submission error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
