// Shared page chrome (header, footer, pill button) and the behaviours every page uses.
// Every page imports this file, so editing it (or tokens.css / layout.css) updates the whole site.
import './tokens.css'
import './layout.css'

export const BASE = import.meta.env.BASE_URL
export const IMG = `${BASE}images`

const navItems = [
  { key: 'works', label: 'WORK', href: `${BASE}#works` },
  { key: 'about', label: 'ABOUT', href: `${BASE}about.html` },
  { key: 'contact', label: 'CONTACT', href: '#contact' },
]

const socials = [
  { label: 'GitHub', icon: 'icon-github.svg', href: 'https://github.com/hsingbeichen' },
  { label: 'Instagram', icon: 'icon-instagram.svg', href: 'https://www.instagram.com/coucou.bei/' },
]

// Pill button (Figma component "View Case Study"): outline by default, filled on hover.
export const pillInner = (label, arrow = 'arrow-outline.svg') => `
  <span class="pill-label">${label}</span>
  <span class="pill-arrow" aria-hidden="true">
    <img src="${IMG}/home/${arrow}" width="8" height="14" alt="" />
    <img class="is-hover" src="${IMG}/home/arrow-hover.svg" width="8" height="14" alt="" />
  </span>
`

export const header = (active) => `
  <header class="navbar" id="navbar">
    <div class="shell navbar-inner">
      <a class="logo" href="${BASE}" aria-label="Hsingbei Chen home">
        <img src="${IMG}/home/logo-header.svg" width="29.809" height="32" alt="" />
        <span class="logo-text">HSINGBEI CHEN</span>
      </a>
      <nav aria-label="Primary navigation">
        ${navItems.map((item) => `
          <a href="${item.href}" data-section="${item.key}" data-label="${item.label}"${item.key === active ? ' class="is-active" aria-current="page"' : ''}>${item.label}</a>
        `).join('')}
      </nav>
    </div>
  </header>
`

export const footer = (active) => `
  <footer class="site-footer" id="contact">
    <div class="shell">
      <div class="reveal">
        <h2>LET'S WORK TOGETHER</h2>
        <p class="footer-sub">Design-to-Code · Based in Taipei</p>
        <a class="footer-mail" href="mailto:zingbay0624@gmail.com">
          <img src="${IMG}/layout/icon-mail.svg" width="22.0002" height="18" alt="" />
          zingbay0624@gmail.com
        </a>
        <div class="footer-links">
          <nav class="footer-nav" aria-label="Footer navigation">
            ${navItems.map((item) => `
              <a href="${item.href}"${item.key === active ? ' class="is-current" aria-current="page"' : ''}>${item.label}</a>
            `).join('')}
          </nav>
          <ul class="footer-social">
            ${socials.map((s) => `
              <li><a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">
                <img src="${IMG}/layout/${s.icon}" width="24" height="24" alt="" />
              </a></li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
    <!-- Full-bleed rule: the divider runs edge to edge, content stays on the grid -->
    <div class="footer-bottom">
      <div class="shell footer-bottom-inner">
        <small>© 2026 Hsingbei Chen</small>
        <a class="back-top" href="#top">
          Back To Top
          <img src="${IMG}/layout/icon-back-top.svg" width="13.3333" height="13.3333" alt="" />
        </a>
      </div>
    </div>
  </footer>
`

export const initLayout = () => {
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

  document.querySelector('.back-top').addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0 })
  })
}
