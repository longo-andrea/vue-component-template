import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vue Component Template",
  description: "A basic Vue component library template",
  themeConfig: {
    sidebar: [
      {
        text: 'Getting Started',
        link: 'getting-started'
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          { text: 'ComponentA', link: '/components/componentA' },
          { text: 'ComponentB', link: '/components/componentB' }
        ]
      },
      {
        text: 'Utilities',
        collapsed: true,
        items: [
          { text: 'Add', link: '/utils/add' },
          { text: 'Multiply', link: '/utils/multiply' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/longo-andrea/vue-component-template' }
    ]
  }
})
