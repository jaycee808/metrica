export const getCollectionBySlug = `
    *[_type == "collection" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        tagline,
        description,
        "artworks": *[_type == "artwork" && references(^._id)] | order(order asc){
        _id,
        title,
        slug,
        tagline,
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
        }
    }
`