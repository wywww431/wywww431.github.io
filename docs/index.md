---
layout: home

hero:
  name: wywww431
  text: CS Student
  tagline: 记录学习与生活的点滴 ✨
  actions:
    - theme: brand
      text: 进入 Blog
      link: https://wywww431.github.io/blog/
    - theme: alt
      text: 查看 Portfolio
      link: https://wywww431.github.io/portfolio/

features:
  - title: Blog
    details: 笔记 / 技术文章
    link: https://wywww431.github.io/blog/
  - title: Portfolio
    details: 项目 / 荣誉 / 简历
    link: https://wywww431.github.io/portfolio/
  - title: Life
    details: 生活随笔 / 摄影 / 书单
    link: https://wywww431.github.io/life/
  - title: Links
    details: 友情链接 / 收藏站点
    link: https://wywww431.github.io/links/
---

## 联系方式

<div class="contact-grid">
  <a class="contact-card" href="mailto:88288309@qq.com">
    <div class="contact-title">Email</div>
    <div class="contact-detail">88288309@qq.com</div>
  </a>
  <a class="contact-card" href="https://github.com/wywww431" target="_blank" rel="noreferrer">
    <div class="contact-title">GitHub</div>
    <div class="contact-detail">github.com/wywww431</div>
  </a>
</div>

<style>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.contact-card {
  display: block;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.contact-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.contact-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  margin-bottom: 4px;
}
.contact-detail {
  font-size: 13px;
  color: var(--vp-c-text-2);
  word-break: break-all;
}
</style>
