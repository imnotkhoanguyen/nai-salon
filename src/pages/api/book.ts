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


