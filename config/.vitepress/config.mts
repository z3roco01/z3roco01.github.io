import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lifed-docs/',
  srcDir: '../docs',
  
  title: 'Lifed Documentation',
  description: 'Documentation for the Lifed Minecraft Fabric mod.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Usage',
        base: '/usage/',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: 'getting-started' }
        ]
      },
      {
        text: 'Configuration',
        base: '/config',
        collapsed: false,
        items: [
          { text: 'Config Introduction', link: 'index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3roco01/lifed' },
      { icon: 'discord', link: 'https://discord.gg/azxQ9ZBDKv' }
    ]
  }
})
