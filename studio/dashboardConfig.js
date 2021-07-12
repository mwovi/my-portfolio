export default {
  widgets: [
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
                  buildHookId: '60ec05875a8535b9e08e0963',
                  title: 'Sanity Studio',
                  name: 'my-portfolio-studio-3wro4fxo',
                  apiId: '3801db31-0b7f-486b-ae74-6b0cf776c23e'
                },
                {
                  buildHookId: '60ec0588a51335dc8ba1b4f0',
                  title: 'Blog Website',
                  name: 'my-portfolio-web-25iozyn8',
                  apiId: '9343fa7a-07f8-4afc-9250-3e075d69909f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mwovi/my-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-portfolio-web-25iozyn8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
