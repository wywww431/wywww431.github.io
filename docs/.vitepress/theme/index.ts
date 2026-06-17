import DefaultTheme from 'vitepress/theme'
import './style.css'
import { onMounted, watch } from 'vue'

export default {
  extends: DefaultTheme,
  setup() {
    onMounted(() => {
      initParticles()
    })
  }
}

function initParticles() {
  const canvas = document.createElement('canvas')
  canvas.className = 'vp-home-bg__canvas'
  const overlay = document.createElement('div')
  overlay.className = 'vp-home-bg__overlay'
  const bg = document.createElement('div')
  bg.className = 'vp-home-bg'
  bg.setAttribute('aria-hidden', 'true')
  bg.appendChild(canvas)
  bg.appendChild(overlay)

  const hero = document.querySelector('.VPHero')
  if (hero) {
    hero.parentElement.insertBefore(bg, hero)
  }

  const ctx = canvas.getContext('2d')
  let particles = []
  let animId
  let w, h

  function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const count = Math.min(80, Math.floor(w * h / 15000))

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1
    })
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    const isDark = document.documentElement.classList.contains('dark')
    const dotColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(100,100,180,0.3)'
    const lineColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(100,100,180,0.06)'

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > w) p.vx *= -1
      if (p.y < 0 || p.y > h) p.vy *= -1

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = dotColor
      ctx.fill()

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j]
        const dx = p.x - q.x
        const dy = p.y - q.y
        const dist = dx * dx + dy * dy
        if (dist < 15000) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.strokeStyle = lineColor
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }
    animId = requestAnimationFrame(draw)
  }
  draw()

  // Cleanup on page navigation
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animId)
    })
  }
}
