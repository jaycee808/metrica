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
        <main className="px-8 md:px-16 py-24 max-w-7xl mx-auto">
        {/* Collection Header */}
        <section className="mb-20">
            <h1 className="text-7xl md:text-8xl font-heading font-bold leading-none tracking-tighter uppercase mb-6">
            {collection.title}
            </h1>
            <p className="text-xl text-gray-700 font-body italic mb-4 tracking-tight">{collection.tagline}</p>
            <p className="text-lg font-body max-w-3xl leading-relaxed">{collection.description}</p>
        </section>

        {/* Artwork Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {collection.artworks.map((artwork) => (
            <div key={artwork._id} className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                />
                </div>

                <h2 className="text-3xl font-heading font-semibold tracking-tight uppercase">{artwork.title}</h2>
                {artwork.tagline && (
                <p className="text-sm text-gray-600 font-inter tracking-wide">{artwork.tagline}</p>
                )}
                {artwork.description && (
                <p className="text-base font-body leading-relaxed">{artwork.description}</p>
                )}
                {artwork.dimensions && (
                <p className="text-xs tracking-widest text-gray-600 font-body">{artwork.dimensions}</p>
                )}

                <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-heading font-bold tracking-widest">
                    £{artwork.price}
                </span>

                <button
                    className="snipcart-add-item bg-black text-white px-4 py-2 text-sm uppercase tracking-widest font-heading"
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
        </main>
    )
}