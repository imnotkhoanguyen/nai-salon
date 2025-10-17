import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	const name = String(formData.get('name') || '').trim();
	const email = String(formData.get('email') || '').trim();
	const message = String(formData.get('message') || '').trim();

	if (!name || !email || !message) {
		return new Response(
			`<div id="contact-panel" class="error"><p>Please complete all fields.</p><a class="btn" href="/contact">Back</a></div>`,
			{ status: 422, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
		);
	}

	// Here you'd send email or enqueue a task. For demo, echo success.
	const html = `
	<div id="contact-panel" class="success">
		<h3>Thanks, ${escapeHtml(name)}!</h3>
		<p>We received your message and will reply to <strong>${escapeHtml(email)}</strong>.</p>
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



