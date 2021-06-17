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
        title: 'Category',
        name: 'category',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            { title: 'Portfolio and Professional Practise', value: 'portfolio' },
            { title: 'CVs/Resumes, Cover Letters and Artist Statements', value: 'resume' },
            { title: 'Applications, Proposals and Grant Writing', value: 'applications' },
            { title: 'Entrepreneurship, Small Businesses and Collectives', value: 'entrepreneurship' },
  
          ],
        },
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
  