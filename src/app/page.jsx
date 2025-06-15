import Image from 'next/image'

// --- Copy Variables ---
const headline = 'Raw Beauty.'

const heroParagraph1 = `Metrica is a curated collection of abstract artworks, it's where geometry meets emotion. 
Every piece is a conversation between raw materials and clean design, stripped of pretense and rooted in bold form.`

const heroParagraph2 = `Art here doesn’t ask for permission. It speaks in layers, tension, and contrast to evoking rhythm, and presence.`

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero Image */}
      <div className="mb-16">
        <Image
          src="/gallery/gallery-2.png"
          width={1920}
          height={1080}
          alt="Metrica Art Gallery"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Headline */}
      <h1 className="text-8xl md:text-[10rem] leading-none font-bold tracking-tight mb-12 font-heading">
        {headline}
      </h1>

      {/* Overview Copy */}
      <div className="max-w-3xl font-body text-lg leading-relaxed space-y-6">
        <p>{heroParagraph1}</p>
        <p>{heroParagraph2}</p>
      </div>
    </main>
  )
}