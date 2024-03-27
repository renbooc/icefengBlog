import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "冰風嘚心文档Blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: '首页', link: '/' },
      { text: '技术', link: '/markdown-examples',
        items: [
          { text: '前端', link: '/markdown-examples' },
          { text: '后端', link: '/markdown-examples' },
          { text: '开源项目', link: '/markdown-examples' },
        ] },
      { text: '阅读', link: '/markdown-examples' },
      { text: '生活', link: '/markdown-examples' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: 'Copyright@ 2024 - 2025 IceFeng'
    },

  }
})
