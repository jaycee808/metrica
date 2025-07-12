'use client'

import Image from 'next/image'
import Link from 'next/link'

const philosophyPoints = [
  {
    number: "01",
    title: "Form",
    text: "Each piece begins with structure. A bold shape, a spatial rhythm. Form guides meaning.",
  },
  {
    number: "02",
    title: "Texture",
    text: "Raw canvas, concrete, grain. Material isn't surface, it's story. Texture adds weight and memory.",
  },
  {
    number: "03",
    title: "Emotion",
    text: "Metrica uses clarity, contrast, and space to evoke presence. Simplicity in precision.",
  },
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

      {/* --- Hero --- */}
      <section className="relative w-full h-[85vh] bg-[var(--light-gray)] text-[var(--black)] overflow-hidden">
        <Image
          src="/gallery/met-hero-1.png"
          alt="Metrica Gallery"
          fill
          priority
          className="object-cover object-right md:object-center mix-blend-darken"
        />
        <div className="absolute bottom-16 left-6 md:left-16 z-10">
          <h1 className="text-6xl md:text-8xl font-heading uppercase tracking-tight bg-[var(--white)] px-4 py-3 leading-none">
            <span className="hero-image-1">Raw </span>
            <span className="hero-image-2">Beauty.</span>
          </h1>
        </div>
      </section>

      {/* --- Brand Philosophy --- */}
      <section className="bg-[var(--white)] px-6 md:px-24 py-32">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              <h2 className="text-5xl font-sub-heading uppercase tracking-tight text-[var(--navy)]">
                What is Metrica?
              </h2>
              <p className="font-body text-lg leading-relaxed text-[var(--black)]">
                Metrica is a curated collection of abstract artworks. It's where geometry meets emotion. Each piece is a dialogue between raw material and refined structure, a visual expression of rhythm and restraint.
              </p>
            </div>
            <div className="text-left">
              <p className="text-3xl font-heading uppercase heading-image">
                Form. Tension. Presence.
              </p>
              <div className="w-12 h-[2px] bg-[var(--navy)] mt-4"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {philosophyPoints.map((item) => (
              <div key={item.number} className="space-y-4">
                <h3 className="text-xl uppercase tracking-wide font-heading text-[var(--navy)]">
                  {item.title}
                </h3>
                <p className="font-body text-base text-[var(--black)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Visual Gallery --- */}
      <section className="px-6 md:px-10 py-32 bg-[var(--light-gray)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <Image
              src="/gallery/met-gallery-1.png"
              alt="Artwork Texture"
              width={800}
              height={600}
              className="w-full rounded-md object-cover"
            />
            <p className="text-sm uppercase font-sub-heading tracking-wide text-[var(--dark-gray)]">
              Texture is memory.
            </p>
          </div>
          <div className="space-y-4">
            <Image
              src="/gallery/met-gallery-2.png"
              alt="Gallery Composition"
              width={800}
              height={600}
              className="w-full rounded-md object-cover"
            />
            <p className="text-sm uppercase font-sub-heading tracking-wide text-[var(--dark-gray)]">
              Space creates rhythm.
            </p>
          </div>
        </div>
      </section>

      {/* --- Collections --- */}
      <section className="px-6 md:px-24 py-32 bg-[var(--white)]">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-6xl md:text-8xl font-sub-heading uppercase tracking-tight text-[var(--black)]">
            Collections
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {collections.map((col) => (
              <div key={col.name} className="space-y-4">
                <h3 className="text-3xl font-heading uppercase tracking-tight text-[var(--navy)]">
                  {col.name}
                </h3>
                <p className="font-body text-base leading-relaxed text-[var(--dark-gray)]">
                  {col.text}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/collections"
              className="inline-block font-sub-heading text-lg uppercase tracking-wider border-b-2 border-[var(--pink)] text-[var(--black)] hover:opacity-80 transition-opacity"
            >
              Explore the Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="bg-[var(--black)] text-[var(--white)] px-6 md:px-24 py-32">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-5xl font-sub-heading uppercase tracking-tight">
            Ready to explore Metrica?
          </h2>
          <p className="font-body text-lg leading-relaxed text-[var(--light-gray)]">
            Step inside the gallery. Discover pieces that speak in shape, silence, and structure.
          </p>
          <Link
            href="/gallery"
            className="inline-block text-xl uppercase font-sub-heading tracking-wider border-b-2 border-[var(--white)] hover:opacity-80"
          >
            Enter the Gallery →
          </Link>
        </div>
      </section>
    </main>
  )
}