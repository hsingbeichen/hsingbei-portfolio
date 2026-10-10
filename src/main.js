import { BASE, header, footer, initLayout, pillInner } from './shared/layout.js'
import './home.css'

const IMG = `${BASE}images/home`

const featured = [
  { slug: 'giant', title: '巨匠旅遊', subtitle: 'Artisan Tour', tags: 'Banner / GDN / 網站UI / DM設計', period: '2016.12 – 2021.01' },
  { slug: 'letao', title: '樂淘', subtitle: 'Letao', tags: 'Banner / GDN / 活動頁面 / 視覺優化 / Design-to-Code', period: '2021.01 - 至今(在職中)' },
  { slug: 'azaleah', page: `${BASE}case-azaleah.html`, title: '杜鵑花開了', subtitle: 'Azaleah studio', tags: '品牌識別設計 / LOGO / 名片設計', period: '2021.06 - 2022.12' },
  { slug: 'coucou', page: `${BASE}case-coucou.html`, title: 'Coucoubei', tags: 'Illustration × Character × GIF × Sticker × Personal Branding', period: '2026.07 - 至今(持續創作中)' },
]

const values = [
  { label: 'Question', icon: 'icon-question.svg', w: 25.1921, h: 27.0303, scale: 0.86 },
  { label: 'Notice', icon: 'icon-notice.svg', w: 21, h: 17, scale: 0.74 },
  { label: 'Discover', icon: 'icon-discover.svg', w: 5.28917, h: 22.6679, scale: 0.8 },
  { label: 'Create', icon: 'icon-create.svg', w: 20.0015, h: 20.0015, scale: 0.78 },
]

const pad = (n) => String(n).padStart(2, '0')

document.querySelector('#app').innerHTML = `
  ${header()}

  <main>
    <section class="hero" id="home">
      <div class="shell hero-inner">
        <h1 class="hero-title rise">Design-to-<br /><span class="accent">Code</span></h1>
        <p class="hero-skills rise">Visual Design · Web · UI · Digital Experience</p>
        <p class="hero-quote rise">用設計把好看延伸到<br />真正能被使用<span class="stop">。</span></p>
        <div class="scroll-hint rise" aria-hidden="true"><span class="line"></span>Scroll</div>
      </div>
    </section>

    <section class="section works" id="works">
      <div class="shell">
        <h2 class="section-title reveal"><span class="zh">精選作品</span><span class="en">SELECTED WORKS</span><span class="count">${pad(featured.length)} PROJECTS</span></h2>
        <div class="featured-list">
          ${featured.map((work, index) => `
            <a class="featured-row reveal" href="${work.page ?? `#case-${work.slug}`}">
              <span class="num">${pad(index + 1)}</span>
              <div class="info">
                <h3>${work.title}</h3>
                ${work.subtitle ? `<p class="subtitle">${work.subtitle}</p>` : ''}
              </div>
              <div class="meta">
                <p class="tags">${work.tags}</p>
                <p class="period">${work.period}</p>
              </div>
              <span class="pill-btn">${pillInner('查看案例')}</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="shell">
        <h2 class="section-title reveal"><span class="zh">關於我</span><span class="en">ABOUT</span></h2>
        <div class="about-body reveal">
          <img class="avatar" src="${IMG}/logo-avatar.svg" width="160.131" height="171.901" alt="Hsingbei 插畫頭像" />
          <div class="about-text">
            <p class="about-title">I believe good design starts with a question.</p>
            <p class="about-intro">Since 2016 of visual design, now bridging design and code.</p>
            <ul class="values">
              ${values.map((v) => `
                <li style="--icon-scale:${v.scale}">
                  <span class="value-icon"><img src="${IMG}/${v.icon}" width="${v.w}" height="${v.h}" alt="" /></span>
                  <span class="value-label">${v.label}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <a class="pill-btn pill-btn--wide" href="${BASE}about.html">${pillInner('認識我更多')}</a>
        </div>
      </div>
    </section>

    <section class="section other-works" id="other-works">
      <div class="shell">
        <h2 class="section-title reveal"><span class="zh">其他作品</span><span class="en">OTHER WORKS</span></h2>
        <!-- 卡片內容待補，先保留 Figma 尺寸 -->
        <ul class="other-works-grid reveal">
          ${Array.from({ length: 4 }, () => '<li class="other-work-card"></li>').join('')}
        </ul>
      </div>
    </section>
  </main>

  ${footer()}
`

initLayout()

// Highlight the nav link of the section currently in view.
const navLinks = document.querySelectorAll('.navbar nav a')
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.section === entry.target.id))
  })
}, { rootMargin: '-45% 0px -50% 0px' })
document.querySelectorAll('#home, #works, #about, #contact').forEach((el) => spy.observe(el))
