export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63693e577ca74505fff510cd',
                  title: 'Sanity Studio',
                  name: 'slower-motions-site-studio',
                  apiId: '24227a12-f652-440a-b595-0ac8bd1003cb'
                },
                {
                  buildHookId: '63693e570a4c3c006e5a407c',
                  title: 'Portfolio Website',
                  name: 'slower-motions-site',
                  apiId: 'a37940b1-f116-4c67-a735-1ee19024b7c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomwrankmore/Slower-Motions-Site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://slower-motions-site.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['interview']},
      layout: {width: 'medium'}
    }
  ]
}
