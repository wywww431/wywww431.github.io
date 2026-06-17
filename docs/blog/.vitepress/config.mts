export default {
  title: 'Blog',
  description: '学习笔记与技术文章',
  base: '/blog/',
  ignoreDeadLinks: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/blog/icon.svg' }]],
  appearance: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/posts/notes.html' },
      { text: '技术', link: '/posts/tech.html' },
      { text: 'Gateway', link: 'https://wywww431.github.io/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wywww431' }
    ],
    search: {
      provider: 'local'
    }
  }
}
