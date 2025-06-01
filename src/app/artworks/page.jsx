import Image from 'next/image'
import { artworkClient } from '@/sanity/lib/client'

export const revalidate = 60

async function getArtworks() {
    const query = `*[_type == "artwork"] | order(order asc){
        _id,
        title,
        tagline,
        slug,
        description,
        price,
        productId,
        dimensions,
        image {
        asset->{
            _id,
            url
        },
        alt
        }
    }`

    return await artworkClient.fetch(query)
    }

    export default async function ArtworksPage() {
    const artworks = await getArtworks()

    return (
        <main className="px-8 py-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tight">Artworks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {artworks.map((artwork) => (
            <div key={artwork._id} className="flex flex-col gap-4 pt-4">
                <div className="relative w-full aspect-[4/5] bg-gray-100">
                <Image
                    src={artwork.image.asset.url}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className="object-cover"
                />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">{artwork.title}</h2>
                <h3 className="text-sm tracking-tight text-gray-600">{artwork.tagline}</h3>
                <p className="text-base text-black leading-snug">{artwork.description}</p>
                <p className="text-sm tracking-widest text-gray-600">{artwork.dimensions}</p>
                <span className="text-lg font-bold tracking-tight">£{artwork.price}</span>

                <button
                className="snipcart-add-item bg-black text-white px-4 py-2 mt-2 w-fit"
                data-item-id={artwork.productId || artwork._id}
                data-item-price={artwork.price}
                data-item-url="/artworks"
                data-item-description={artwork.tagline || artwork.description}
                data-item-image={artwork.image.asset.url}
                data-item-name={artwork.title}
                >
                Add to Cart
                </button>
            </div>
            ))}
        </div>
        </main>
    )
}