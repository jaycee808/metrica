'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('Sending...');

        const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
        } else {
        setStatus('Failed to send message.');
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="space-y-10 text-[var(--black)] font-body pb-24"
        >
        {/* Name Field */}
        <div className="flex flex-col space-y-2">
            <label
            htmlFor="name"
            className="text-xl md:text-2xl font-sub-heading font-bold uppercase tracking-tight text-[var(--black)]"
            >
            Name
            </label>
            <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--light-gray)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-purple)] rounded-sm"
            />
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-2">
            <label
            htmlFor="email"
            className="text-xl md:text-2xl font-sub-heading font-bold uppercase tracking-tight text-[var(--black)]"
            >
            Email
            </label>
            <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--light-gray)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-purple)] rounded-sm"
            />
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-2">
            <label
            htmlFor="message"
            className="text-xl md:text-2xl font-sub-heading font-bold uppercase tracking-tight text-[var(--black)]"
            >
            Message
            </label>
            <textarea
            id="message"
            placeholder="Enter your message"
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="px-4 py-3 bg-[var(--light-gray)] border border-[var(--mid-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-purple)] rounded-sm"
            />
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="uppercase font-sub-heading font-bold tracking-wider text-[var(--white)] bg-[var(--navy)] px-8 py-4 hover:opacity-90 transition-all"
        >
            Send
        </button>

        {status && (
            <p className="text-sm mt-4 text-[var(--mid-gray)] italic">{status}</p>
        )}
        </form>
    );
}