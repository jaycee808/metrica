'use client'

import Image from 'next/image'
import Link from 'next/link'

// --- Copy Content ---
const heroHeadline = 'Raw Beauty.'

const overview = [
  `Metrica is a curated collection of abstract artworks. It's where geometry meets emotion. Every piece is a conversation between raw materials and clean design, stripped of pretense and rooted in bold form.`,
  `Metrica speaks in layers, tension, and contrast. It evokes rhythm and presence.`,
]

const collections = [
  {
    name: 'Ivory',
    text: 'A study in restraint. The Ivory collection explores quiet contrast and negative space through muted tones layered on raw textures.',
  },
  {
    name: 'Noir',
    text: 'Noir is shadow made visible. It is a bold interplay of black, depth, and structural minimalism that grounds the intangible.',
  },
  {
    name: 'Chroma',
    text: 'Vibrant and deliberate. Chroma is a visual pulse. It is where electric color cuts across order, and geometry.',
  },
]

export default function Home() {
  return (
    <main className="text-[var(--black)] bg-[var(--white)]">
      {/* Hero Image with Tagline */}
      <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
        <Image
          src="/gallery/gallery-2.png"
          alt="Metrica Hero"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute bottom-10 right-6 md:bottom-16 md:right-16 z-10">
          <h1 className="text-5xl md:text-7xl font-heading tracking-tight leading-none uppercase bg-[var(--white)] px-4 py-2">
            {heroHeadline}
          </h1>
        </div>
      </section>

      {/* Overview Text */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-24 space-y-8 font-body text-lg leading-relaxed">
        {overview.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </section>

      {/* Collections Section */}
      <section className="bg-[var(--light-gray)] px-6 md:px-10 py-32">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Heading */}
          <div className="text-4xl md:text-5xl font-heading uppercase tracking-tight">
            Collections
          </div>

          {/* Grid */}
          <div className="grid gap-24 md:grid-cols-3">
            {collections.map((col) => (
              <div key={col.name} className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-tight">{col.name}</h2>
                <p className="font-body text-base leading-relaxed">{col.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-12">
            <Link
              href="/collections"
              className="inline-block font-sub-heading text-xl md:text-2xl uppercase tracking-wide border-b-2 border-[var(--black)] hover:opacity-80 transition-opacity"
            >
              Explore the Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}