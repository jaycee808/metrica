import Image from 'next/image'
import Link from 'next/link'
import { artworkClient } from '@/sanity/lib/queries/artworkClient'

export const revalidate = 60

async function getArtworks() {
    const query = `*[_type == "artwork"] | order(order asc){
        _id,
        title,
        slug,
        image {
        asset->{
            _id,
            url
        },
        alt
        },
        collection->{
        title,
        slug
        }
    }`

    return await artworkClient.fetch(query)
}

export default async function GalleryPage() {
    const artworks = await getArtworks()

    return (
        <main>
        {/* Header */}
        <header className="bg-[var(--light-gray)] py-8 mb-12">
            <nav className="text-xs uppercase tracking-wider font-sub-heading mb-4 text-[var(--blue-purple)] px-6 md:px-24">
            <Link href="/" className="hover:underline">Home</Link> <span className="text-[var(--black)]"> / </span>
            <span className="text-[var(--black)]">Gallery</span>
            </nav>
            <h1 className="text-6xl md:text-7xl font-sub-heading font-bold uppercase tracking-tight leading-none text-[var(--black)] px-6 md:px-24">
            Gallery
            </h1>
        </header>

        {/* Horizontal Scroll Section */}
        <section className="px-6 md:px-12 mb-24">
            <div className="flex gap-12 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-12">
            {artworks.map((artwork) => (
                <div
                key={artwork._id}
                className="flex-shrink-0 w-[70vw] sm:w-[50vw] md:w-[33vw] snap-start flex flex-col gap-4"
                >
                {/* Artwork Image */}
                <div className="relative w-full aspect-[4/5] bg-[var(--light-gray)]">
                    <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                    />
                </div>

                {/* Artwork - Info */}
                <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-heading uppercase font-semibold tracking-tight">
                    {artwork.title}
                    </h2>
                    {artwork.collection && (
                    <Link
                        href={`/collections/${artwork.collection.slug.current}`}
                        className="text-sm font-sub-heading uppercase tracking-widest text-[var(--blue-purple)] hover:underline"
                    >
                        {artwork.collection.title}
                    </Link>
                    )}
                </div>
                </div>
            ))}
            </div>
        </section>
        </main>
    )
}