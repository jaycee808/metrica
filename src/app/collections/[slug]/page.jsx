import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { artworkClient } from '@/sanity/lib/queries/artworkClient'
import { getCollectionBySlug } from '@/sanity/lib/queries/getCollectionBySlug'

export const revalidate = 60

export default async function CollectionPage({ params }) {
    const { slug } = params
    const collection = await artworkClient.fetch(getCollectionBySlug, { slug })

    if (!collection) return notFound()

    return (
        <main className="bg-[var(--white)] text-[var(--black)] px-6 md:px-10 py-24 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs uppercase tracking-wider font-sub-heading mb-6 text-[var(--blue-purple)]">
            <Link href="/collections" className="hover:underline">Collections</Link> /{' '}
            <span className="text-[var(--black)]">{collection.title}</span>
        </nav>

        {/* Header: 2-column layout */}
        <section className="grid md:grid-cols-3 gap-12 mb-24">
            <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight leading-tight">
                {collection.title}
            </h1>
            </div>

            <div className="md:col-span-2 space-y-6">
            <p className="italic text-lg text-[var(--gray-blue)] font-body">{collection.tagline}</p>
            <p className="text-base font-body leading-relaxed max-w-3xl">{collection.description}</p>
            </div>
        </section>

        {/* Artwork Grid */}
        <section className="grid md:grid-cols-2 gap-16">
            {collection.artworks.map((artwork) => (
            <div key={artwork._id} className="flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] bg-[var(--light-gray)] rounded overflow-hidden">
                <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                />
                </div>

                {/* Title + Metadata */}
                <h2 className="text-2xl font-heading font-semibold uppercase tracking-tight">{artwork.title}</h2>

                {artwork.tagline && (
                <p className="text-sm text-[var(--gray-blue)] font-body tracking-wide italic">{artwork.tagline}</p>
                )}

                {artwork.description && (
                <p className="text-base font-body leading-relaxed">{artwork.description}</p>
                )}

                {artwork.dimensions && (
                <p className="text-xs tracking-widest text-[var(--gray-blue)] font-body">{artwork.dimensions}</p>
                )}

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-heading font-bold tracking-widest">
                    £{artwork.price}
                </span>

                <button
                    className="snipcart-add-item bg-[var(--pink)] text-[var(--white)] px-5 py-2 text-sm uppercase tracking-widest font-heading hover:opacity-90"
                    data-item-id={artwork.productId || artwork._id}
                    data-item-price={artwork.price}
                    data-item-url={`/collections/${slug}`}
                    data-item-description={artwork.tagline || artwork.description}
                    data-item-image={artwork.image.asset.url}
                    data-item-name={artwork.title}
                >
                    Add to Cart
                </button>
                </div>
            </div>
            ))}
        </section>
        
        {/* Back to Collections */}
        <div className="mt-24 text-center">
        <Link
            href="/collections"
            className="inline-block font-sub-heading text-sm md:text-base uppercase tracking-wide border-b-2 border-[var(--black)] hover:opacity-80 transition-opacity"
        >
            ← Back to Collections
        </Link>
        </div>
        </main>
    )
}