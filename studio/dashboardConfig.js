export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624d59079ebe0a0072d864ad',
                  title: 'Sanity Studio',
                  name: 'new-online-messages-studio',
                  apiId: '7fc1d289-be81-4aad-b945-9f3e9c78760b'
                },
                {
                  buildHookId: '624d5908d5ac4e007b04ea66',
                  title: 'Landing pages Website',
                  name: 'new-online-messages',
                  apiId: 'c0779eee-2768-4c28-ac75-d003745e54b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smounge/New-online-messages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://new-online-messages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
