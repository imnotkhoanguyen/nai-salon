import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	const name = String(formData.get('name') || '').trim();
	const email = String(formData.get('email') || '').trim();
	const date = String(formData.get('date') || '').trim();
	const service = String(formData.get('service') || '').trim();

	if (!name || !email || !date || !service) {
		return new Response(
			`<div id="booking-panel" class="error"><p>Please complete all fields.</p><a class=\"btn\" href=\"/book\">Back</a></div>`,
			{ status: 422, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
		);
	}

	// Try to send an email via Resend if environment is configured (non-fatal on failure)
	try {
		await sendEmail({
			subject: `New booking request from ${name}`,
			html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Date:</strong> ${escapeHtml(date)}</p><p><strong>Service:</strong> ${escapeHtml(service)}</p>`,
			replyTo: email,
		});
	} catch {}

	const html = `
	<div id="booking-panel" class="success">
		<h3>Thanks, ${escapeHtml(name)}!</h3>
		<p>We received your request for <strong>${escapeHtml(service)}</strong> on <strong>${escapeHtml(date)}</strong>.
		We’ll confirm via <strong>${escapeHtml(email)}</strong>.</p>
		<a class="btn" href="/">Return Home</a>
	</div>`;

	return new Response(html, { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};

function escapeHtml(input: string): string {
	return input
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}

async function sendEmail(params: { subject: string; html: string; replyTo?: string }) {
	const apiKey = process.env.RESEND_API_KEY;
	const to = process.env.RESEND_TO;
	const from = process.env.RESEND_FROM || 'Nai Salon <no-reply@naisalon.local>';
	if (!apiKey || !to) return; // not configured
	await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${apiKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ from, to, subject: params.subject, html: params.html, reply_to: params.replyTo })
	});
}


