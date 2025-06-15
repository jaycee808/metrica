export const getCollections = `
    *[_type == "collection"] | order(title asc) {
        _id,
        title,
        slug,
        tagline,
        description,
        "artworks": *[_type == "artwork" && references(^._id)]{
        _id,
        title,
        slug,
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