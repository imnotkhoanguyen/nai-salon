export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  if (!name || !email || !message) {
    return new Response(
      `<div id="contact-panel" class="error"><p>Please complete all fields.</p><a class="btn" href="/contact">Back</a></div>`,
      { status: 422, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
  try {
    await sendEmail({
      subject: `New contact from ${name}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message)}</p>`,
      replyTo: email
    });
  } catch {
  }
  const html = `
	<div id="contact-panel" class="success">
		<h3>Thanks, ${escapeHtml(name)}!</h3>
		<p>We received your message and will reply to <strong>${escapeHtml(email)}</strong>.</p>
		<a class="btn" href="/">Return Home</a>
	</div>`;
  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
};
function escapeHtml(input) {
  return input.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
async function sendEmail(params) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RESEND_TO;
  const from = process.env.RESEND_FROM || "Nai Salon <no-reply@naisalon.local>";
  if (!apiKey || !to) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ from, to, subject: params.subject, html: params.html, reply_to: params.replyTo })
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
