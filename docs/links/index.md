---
layout: home

hero:
  name: Links
  text: 友情链接
  tagline: 互联网上的朋友们 🔗
---

## 友情链接

<div class="links-grid">

<a class="link-card" href="https://chenyuheee.github.io/" target="_blank" rel="noreferrer">
  <div class="link-name">ChenyuHeee</div>
  <div class="link-desc">ZJU CS Student · VitePress 风格个人网站</div>
</a>

<a class="link-card" href="https://github.com/wywww431" target="_blank" rel="noreferrer">
  <div class="link-name">我的 GitHub</div>
  <div class="link-desc">代码仓库与开源项目</div>
</a>

</div>

## 收藏站点

| 站点 | 说明 |
|------|------|
| [VitePress](https://vitepress.dev/) | 本站使用的静态网站框架 |
| [MDN](https://developer.mozilla.org/) | Web 技术权威文档 |
| [GitHub](https://github.com/) | 代码托管与协作平台 |
| [LeetCode](https://leetcode.cn/) | 算法练习平台 |

<style>
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.link-card {
  display: block;
  padding: 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.2s;
}
.link-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.link-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}
.link-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
