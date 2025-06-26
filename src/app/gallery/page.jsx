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
        {/* Page Title */}
        <header className="mb-16 bg-[var(--light-gray)] py-8">
            {/* Breadcrumb Nav */}
            <nav className="text-xs uppercase tracking-wider font-sub-heading mb-4 text-[var(--blue-purple)] px-6 md:px-24">
            <Link href="/" className="hover:underline]">Home</Link> <span className="text-[var(--black)]"> / </span><span className="text-[var(--black)]">Gallery</span>
            </nav>
            <h1 className="text-6xl md:text-7xl font-sub-heading font-bold uppercase tracking-tight leading-none text-[var(--black)] px-6 md:px-24 mb-8">
            Gallery
            </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-12 py-24 max-w-7xl mx-auto ">
            {artworks.map((artwork) => (
            <div key={artwork._id} className="flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                />
                </div>

                {/* Text Info */}
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
        </main>
    )
}
