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
        <main className="px-8 py-16">
        <h1 className="text-6xl font-bold uppercase mb-12 tracking-tight font-heading">Collections</h1>

        {collections.map((collection) => {
            const previewArtworks = getRandomArtworks(collection.artworks, 2)

            return (
            <section key={collection._id} className="mb-20">
                <Link href={`/collections/${collection.slug.current}`}>
                <h2 className="text-4xl font-bold mb-2 font-heading hover:underline cursor-pointer">
                    {collection.title}
                </h2>
                </Link>
                <p className="text-lg text-gray-700 font-body italic mb-4">{collection.tagline}</p>
                <p className="text-base font-body max-w-2xl mb-6">{collection.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {previewArtworks.map((art) => (
                    <div key={art._id}>
                    <div className="relative w-full aspect-[4/5] bg-gray-100">
                        <Image
                        src={art.image.asset.url}
                        alt={art.image.alt || art.title}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-bold mt-2 font-heading">{art.title}</h3>
                    </div>
                ))}
                </div>
            </section>
            )
        })}
        </main>
    )
}