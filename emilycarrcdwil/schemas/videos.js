export default {
    name: 'videos',
    title: 'Videos',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },


      {
        name: 'link',
        title: 'Link',
        type: 'string',
      },


    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`,
        })
      },
    },
  }
  