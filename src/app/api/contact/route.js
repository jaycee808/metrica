import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { name, email, message } = await req.json();

    try {
        const data = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New contact form submission from ${name}`,
        reply_to: email,
        text: `
    Name: ${name}
    Email: ${email}
    Message: ${message}
        `,
        });

        return new Response(JSON.stringify({ success: true }), {
        status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Email failed to send' }), {
        status: 500,
        });
    }
}