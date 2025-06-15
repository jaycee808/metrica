export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string'
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96
        }
        },
        {
        name: 'tagline',
        title: 'Tagline',
        type: 'string'
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text'
        }
    ]
}