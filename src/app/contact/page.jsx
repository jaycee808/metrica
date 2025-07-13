import Link from 'next/link'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <main>
        {/* Header */}
        <header className="bg-[var(--light-gray)] py-8 mb-12">
            <nav className="text-xs uppercase tracking-wider font-sub-heading mb-4 text-[var(--navy)] px-6 md:px-24">
            <Link href="/" className="hover:underline">Metrica</Link> <span className="text-[var(--black)]"> / </span>
            <span className="text-[var(--blue-purple)]">Contact</span>
            </nav>
            <h1 className="text-6xl md:text-7xl font-sub-heading font-bold uppercase tracking-tight leading-none text-[var(--black)] px-6 md:px-24">
            Contact
            </h1>
        </header>

        {/* Contact Form */}
        <section className="mx-auto px-6 md:px-24 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading uppercase font-bold tracking-tight text-[var(--black)] mb-4">
                Get In Touch
            </h2>
            <p className="text-base font-body text-[var(--black)] leading-relaxed max-w-xl">
                Whether it's a question, a custom commission request, or a collaboration idea, just let us know.
            </p>
            <div className="mt-12">
                <ContactForm />
            </div>
        </section>
        </main>
    )
}