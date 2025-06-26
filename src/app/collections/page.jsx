import Image from 'next/image'
import Link from 'next/link'
import { artworkClient } from '@/sanity/lib/queries/artworkClient'
import { getCollections } from '@/sanity/lib/queries/getCollections'

export const revalidate = 60

function getRandomArtworks(artworks, count = 2) {
    return artworks.sort(() => 0.5 - Math.random()).slice(0, count)
}

export default async function CollectionsPage() {
    const collections = await artworkClient.fetch(getCollections)

    return (
        <main>
        {/* Page Title */}
        <header className="mb-16 bg-[var(--light-gray)] py-8">
            {/* Breadcrumb Nav */}
            <nav className="text-xs uppercase tracking-wider font-sub-heading mb-4 text-[var(--blue-purple)] px-6 md:px-24">
            <Link href="/" className="hover:underline]">Home</Link> <span className="text-[var(--black)]"> / </span><span className="text-[var(--black)]">Collections</span>
            </nav>
            <h1 className="text-6xl md:text-7xl font-sub-heading font-bold uppercase tracking-tight leading-none text-[var(--black)] px-6 md:px-24 mb-8">
            Collections
            </h1>
        </header>

        {/* Collection Sections */}
        <div className="space-y-32 px-6 md:px-10 max-w-7xl mx-auto">
            {collections.map((collection) => {
            const previewArtworks = getRandomArtworks(collection.artworks, 2)

            return (
                <section key={collection._id} className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start border-b py-12 pt-16">
                {/* Column 1: Title */}
                <div>
                    <Link href={`/collections/${collection.slug.current}`}>
                    <h2 className="text-3xl md:text-4xl font-heading uppercase font-bold tracking-tight hover:underline transition-opacity">
                        {collection.title}
                    </h2>
                    </Link>
                </div>

                {/* Column 2: Description + CTA */}
                <div className="font-body text-base leading-relaxed space-y-4 max-w-xl">
                    <p className="italic text-[var(--gray-blue)]">{collection.tagline}</p>
                    <p>{collection.description}</p>
                    <Link
                    href={`/collections/${collection.slug.current}`}
                    className="inline-block font-sub-heading text-sm uppercase tracking-wider mt-4 border-b-2 border-[var(--gray-blue)] hover:opacity-80 transition-opacity text-[var(--pink)]"
                    >
                    View Full Collection →
                    </Link>
                </div>

                {/* Column 3: Images */}
                <div className="space-y-6">
                    {previewArtworks.map((art) => (
                    <div key={art._id} className="space-y-1">
                        <div className="relative w-full aspect-[4/3] bg-[var(--light-gray)] overflow-hidden rounded">
                        <Image
                            src={art.image.asset.url}
                            alt={art.image.alt || art.title}
                            fill
                            className="object-cover"
                        />
                        </div>
                        <h3 className="text-sm font-heading uppercase tracking-wide">
                        {art.title}
                        </h3>
                    </div>
                    ))}
                </div>
                </section>
            )
            })}
        </div>
        </main>
    )
}