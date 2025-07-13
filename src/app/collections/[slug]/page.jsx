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
        <main className="bg-[var(--white)]">
        {/* Page Title Header */}
        <header className="mb-16 bg-[var(--light-gray)] py-8">
            {/* Breadcrumb Nav */}
            <nav className="text-xs uppercase tracking-wider font-sub-heading mb-4 text-[var(--navy)] px-6 md:px-24">
            <Link href="/" className="hover:underline">Metrica</Link>{' '}
            <span className="text-[var(--black)]"> / </span>
            <Link href="/collections" className="hover:underline text-[var(--blue-purple)]">Collections</Link>{' '}
            <span className="text-[var(--black)]"> / </span>
            <span className="text-[var(--plum)]">{collection.title}</span>
            </nav>

            <h1 className="text-6xl md:text-7xl font-sub-heading font-bold uppercase tracking-tight leading-none text-[var(--black)] px-6 md:px-24 mb-8">
            {collection.title}
            </h1>
        </header>

        {/* Header - Tagline & Description */}
        <section className="px-6 md:px-24 mb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Tagline Block */}
            <div>
            <p className="text-3xl font-heading uppercase heading-image">
                {collection.tagline}
            </p>
            <div className="w-12 h-[2px] bg-[var(--navy)] mt-4"></div>
            </div>

            {/* Description Block */}
            <div>
            <p className="text-base font-body leading-relaxed">
                {collection.description}
            </p>
            </div>
        </div>
        </section>


        {/* Artwork Grid */}
        <section className="grid md:grid-cols-2 gap-16 px-6 md:px-24 max-w-7xl mx-auto">
            {collection.artworks.map((artwork) => (
            <div key={artwork._id} className="flex flex-col gap-4">
                <div className="relative w-full aspect-[4/5] bg-[var(--light-gray)] rounded overflow-hidden">
                <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                />
                </div>

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
        <div className="m-24 text-center px-6 md:px-24">
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
