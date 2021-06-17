export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        title: 'Program',
        name: 'program',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            { title: '2D Animation', value: '2d-animation' },
            { title: '3D Animation', value: '3d-animation' },
            { title: 'Film & Screen Art', value: 'film-and-screen-art' },
            { title: 'FMSA', value: 'fmsa' },
            { title: 'Photography', value: 'photography' },
            { title: 'Illustration', value: 'illustration' },
            { title: 'Visual Arts', value: 'visual-arts' },
            { title: 'CRCP', value: 'crcp' },
            { title: 'Interaction Design', value: 'interaction-design' },
            { title: 'Industrial Design', value: 'industrial-design' },
            { title: 'Communication Design', value: 'communication-design' },
            { title: 'All', value: 'all' },
          ],
        },
      },
      
      {
        title: 'Category',
        name: 'category',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            { title: 'Soft Skill', value: 'soft-skill' },
            { title: 'Hard Skill', value: 'hard-skill' },
            { title: 'Software', value: 'software' },
            { title: 'All', value: 'all' },
  
          ],
        },
      },
/*       {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }, */
      {
        title: 'Related',
        name: 'related',
        type: 'object',
        fields: [
          {name: 'one', type: 'string', title: 'One'},
          {name: 'two', type: 'string', title: 'Two'},
          {name: 'three', type: 'string', title: 'Three'}
        ]
      }
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
  