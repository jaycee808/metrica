export default {
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
            {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'For screen readers and SEO'
            }
        ]
        },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'price', title: 'Price (£)', type: 'number' },
        { name: 'productId', title: 'Product ID', type: 'string' },
        { name: 'dimensions', title: 'Dimensions', type: 'string' }
    ]
}