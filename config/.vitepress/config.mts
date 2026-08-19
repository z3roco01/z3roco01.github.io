import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
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
        text: 'Commands',
        base: '/usage/commands/',
        collapsed: false,
        items: [
          { text: 'Commands Overview', link: 'index' },
          { text: 'Player Commands', link: 'player' },
          { text: '/watcher lives', link: 'lives' },
          { text: '/watcher boogey', link: 'boogey' },
          { text: '/watcher session', link: 'session' },
          { text: '/watcher lock', link: 'lock' },
          { text: '/watcher soulmates', link: 'soulmates' }
        ]
      },
      {
        text: 'Configuration',
        base: '/config',
        collapsed: false,
        items: [
          { text: 'Config Overview', link: 'index' },
          { text: 'autostart.conf', link: 'autostart' },
          { text: 'boogey.conf', link: 'boogey' },
          { text: 'gameplay.conf', link: 'gameplay' },
          { text: 'session.conf', link: 'session' },
          { text: 'soulmates.conf', link: 'soulmates' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3roco01/lifed' },
      { icon: 'discord', link: 'https://discord.gg/azxQ9ZBDKv' }
    ]
  }
})
