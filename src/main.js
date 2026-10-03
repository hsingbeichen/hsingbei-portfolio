import './style.css'

const IMG = `${import.meta.env.BASE_URL}images/home`

const featured = [
  { slug: 'giant', title: '巨匠旅遊', subtitle: 'Artisan Tour', tags: 'Banner / GDN / 網站UI / DM設計', period: '2016.12 – 2021.01' },
  { slug: 'letao', title: '樂淘', subtitle: 'Letao', tags: 'Banner / GDN / 活動頁面 / 視覺優化 / Design-to-Code', period: '2021.01 - 至今(在職中)' },
  { slug: 'azaleah', title: '杜鵑花開了', subtitle: 'Azaleah studio', tags: '品牌識別設計 / LOGO / 名片設計', period: '2021.06 - 2022.12' },
  { slug: 'coucou', title: 'Coucoubei', tags: 'Illustration × Character × GIF × Sticker × Personal Branding', period: '2026.02 - 至今(持續創作中)' },
]

const values = [
  { label: 'Question', icon: 'icon-question.svg', w: 25.1921, h: 27.0303 },
  { label: 'Notice', icon: 'icon-notice.svg', w: 21, h: 17 },
  { label: 'Discover', icon: 'icon-discover.svg', w: 5.28917, h: 22.6679 },
  { label: 'Create', icon: 'icon-create.svg', w: 20.0015, h: 20.0015 },
]

const pad = (n) => String(n).padStart(2, '0')

// Pill button (Figma component "View Case Study"): outline by default, filled on hover.
const pillInner = (label) => `
  <span class="pill-label">${label}</span>
  <span class="pill-arrow" aria-hidden="true">
    <img src="${IMG}/arrow-outline.svg" width="8" height="14" alt="" />
    <img class="is-hover" src="${IMG}/arrow-hover.svg" width="8" height="14" alt="" />
  </span>
`

document.querySelector('#app').innerHTML = `
  <header class="navbar" id="navbar">
    <div class="shell navbar-inner">
      <a class="logo" href="#home" aria-label="Hsingbei Chen home">
        <img src="${IMG}/logo-header.svg" width="29.809" height="32" alt="" />
        <span class="logo-text">HSINGBEI CHEN</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#works" data-section="works" data-label="WORK">WORK</a>
        <a href="#about" data-section="about" data-label="ABOUT">ABOUT</a>
        <a href="#contact" data-section="contact" data-label="CONTACT">CONTACT</a>
      </nav>
    </div>
  </header>

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
        <h2 class="section-title reveal">精選作品 <span>SELECTED WORKS</span></h2>
        <div class="featured-list">
          ${featured.map((work, index) => `
            <a class="featured-row reveal" href="#case-${work.slug}">
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
        <h2 class="section-title reveal">關於我 <span>ABOUT</span></h2>
        <div class="about-body reveal">
          <img class="avatar" src="${IMG}/logo-avatar.svg" width="160.131" height="171.901" alt="Hsingbei 插畫頭像" />
          <div class="about-text">
            <p class="about-title">I believe good design starts with a question.</p>
            <p class="about-intro">Since2016 of visual design, now bridging design and code.</p>
            <ul class="values">
              ${values.map((v) => `
                <li>
                  <img src="${IMG}/${v.icon}" width="${v.w}" height="${v.h}" alt="" />
                  <span>${v.label}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <a class="pill-btn pill-btn--wide" href="#about-full">${pillInner('認識我更多')}</a>
        </div>
      </div>
    </section>

    <section class="section other-works" id="other-works">
      <div class="shell">
        <h2 class="section-title reveal">其他作品 <span>OTHER WORKS</span></h2>
        <!-- 卡片內容待補，先保留 Figma 尺寸 -->
        <ul class="other-works-grid reveal">
          ${Array.from({ length: 4 }, () => '<li class="other-work-card"></li>').join('')}
        </ul>
      </div>
    </section>
  </main>

  <footer class="contact" id="contact">
    <div class="shell reveal">
      <h2>LET'S WORK TOGETHER</h2>
      <p class="contact-sub">Design-to-Code · Based in Taipei</p>
      <p class="contact-line">
        <a href="mailto:zingbay0624@gmail.com">Email : zingbay0624@gmail.com</a>
        <span>Portfolio</span>
        <span>© 2026 Hsingbei</span>
      </p>
    </div>
  </footer>
`

const navbar = document.querySelector('#navbar')
const updateNavbar = () => navbar.classList.toggle('is-scrolled', window.scrollY > 40)
window.addEventListener('scroll', updateNavbar, { passive: true })
updateNavbar()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('in')
    observer.unobserve(entry.target)
  })
}, { threshold: 0.15 })
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

// Highlight the nav link of the section currently in view.
const navLinks = document.querySelectorAll('.navbar nav a')
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    navLinks.forEach((link) => link.classList.toggle('is-active', link.dataset.section === entry.target.id))
  })
}, { rootMargin: '-45% 0px -50% 0px' })
document.querySelectorAll('#home, #works, #about, #contact').forEach((el) => spy.observe(el))
