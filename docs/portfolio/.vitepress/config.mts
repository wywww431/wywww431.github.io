export default {
  title: 'Portfolio',
  description: '项目 / 荣誉 / 简历',
  base: '/portfolio/',
  head: [['meta', { name: 'theme-color', content: '#F59E0B' }]],
  appearance: true,
  themeConfig: {
    nav: [
      { text: 'Projects', link: '/projects.html' },
      { text: 'Honors', link: '/honors.html' },
      { text: 'CV', link: '/cv.html' },
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
