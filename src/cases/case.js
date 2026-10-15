// Shared case-study building blocks; each case page passes its own data.
import '../shared/layout.js'
import './case.css'

export const caseHero = ({ titleZh, titleEn, images, meta }) => `
  <section class="case-hero" id="top">
    <div class="shell case-shell">
      <h1 class="case-title rise">
        <span class="case-title-en">${titleEn}</span>
        <span class="case-title-zh">${titleZh}</span>
      </h1>
      <div class="case-hero-body reveal">
        <div class="case-gallery">
          ${images.map((img) => `
            <figure class="case-shot case-shot--${img.shape}">
              <img src="${img.src}" alt="${img.alt}" />
            </figure>
          `).join('')}
        </div>
        <dl class="case-meta">
          ${meta.map((m) => `
            <div>
              <dt>${m.label}</dt>
              <dd>${m.value.join('<br />')}</dd>
            </div>
          `).join('')}
        </dl>
      </div>
    </div>
  </section>
`

// Body: sticky table of contents on the left, numbered sections on the right.
export const caseBody = ({ name, sections }) => `
  ${caseProgress()}
  <div class="shell case-shell case-body">
    <nav class="case-toc" aria-label="${name} 段落">
      <p class="case-toc-name">${name}</p>
      <ol>
        ${sections.map((s) => `<li><a href="#${s.id}" data-toc="${s.id}">${s.num} ${s.toc ?? s.zh}</a></li>`).join('')}
      </ol>
    </nav>
    <div class="case-sections">
      ${sections.map((s) => `
        <section class="case-section reveal" id="${s.id}">
          <h2 class="case-heading">
            <span class="num">${s.num}</span><span class="zh">${s.zh}</span><span class="en">${s.en}</span>${s.aside ? `<span class="aside">${s.aside}</span>` : ''}
          </h2>
          ${s.content}
        </section>
      `).join('')}
    </div>
  </div>
`

export const text = (t) => `<p class="case-text">${t}</p>`
export const lead = (t) => `<p class="case-text case-lead">${t}</p>`

export const caseLabel = (text) => `<p class="case-label">${text}</p>`

// A figure slot; without src it renders a placeholder box until the real image arrives.
export const caseMedia = ({ src, alt = '', ratio, caption = '', fit = 'cover', bare = false }) => `
  <figure class="case-media">
    <div class="case-media-frame${src ? '' : ' is-placeholder'}${bare ? ' is-bare' : ''}" style="aspect-ratio:${ratio}">
      ${src ? `<img src="${src}" alt="${alt}" style="object-fit:${fit}" />` : `<span>${alt}（圖片待補）</span>`}
    </div>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>
`

// Highlight the TOC entry of the section in view.
export const initCaseToc = () => {
  const links = document.querySelectorAll('[data-toc]')
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      links.forEach((link) => link.classList.toggle('is-active', link.dataset.toc === entry.target.id))
    })
  }, { rootMargin: '-30% 0px -60% 0px' })
  document.querySelectorAll('.case-section').forEach((el) => spy.observe(el))
  initCaseProgress()
}

// Side-by-side proposals; the chosen one gets the accent frame.
export const caseProposals = (items) => `
  <div class="case-grid case-grid--2 case-proposals">
    ${items.map((p) => `
      <figure class="case-proposal${p.chosen ? ' is-chosen' : ''}">
        <div class="case-proposal-art">${p.src ? `<img src="${p.src}" alt="${p.name}" />` : `<span>${p.name}（圖片待補）</span>`}</div>
        <figcaption><strong>${p.name}</strong><span>${p.desc}</span></figcaption>
      </figure>
    `).join('')}
  </div>
`

// Where the TOC is hidden (≤1024px), a slim bar under the navbar names the section in view
// and fills as you read. caseBody() adds it; initCaseToc() starts it.
const caseProgress = () => `
  <div class="case-progress" aria-hidden="true">
    <div class="shell case-progress-inner"><span class="case-progress-num"></span><span class="case-progress-name"></span></div>
    <span class="case-progress-bar"></span>
  </div>
`

const initCaseProgress = () => {
  const bar = document.querySelector('.case-progress')
  const body = document.querySelector('.case-body')
  if (!bar || !body) return
  const num = bar.querySelector('.case-progress-num')
  const name = bar.querySelector('.case-progress-name')
  const sections = [...document.querySelectorAll('.case-section')]
  let queued = false
  const update = () => {
    queued = false
    const top = body.getBoundingClientRect().top
    const height = body.offsetHeight - window.innerHeight * 0.5
    const progress = Math.min(Math.max(-top / height, 0), 1)
    // Show while the sections are on screen; hide over the hero and once the pager comes up
    bar.classList.toggle('is-on', top < window.innerHeight * 0.3 && progress < 1)
    bar.style.setProperty('--progress', progress)
    const line = window.innerHeight * 0.35
    const current = sections.filter((s) => s.getBoundingClientRect().top < line).pop() ?? sections[0]
    num.textContent = current.querySelector('.num').textContent
    name.textContent = current.querySelector('.zh').textContent
  }
  const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update) } }
  window.addEventListener('scroll', queue, { passive: true })
  window.addEventListener('resize', queue)
  update()
}

// Under the last section: the next project as a card with its cover, prev as a quiet link below
// (dropped when prev and next are the same project, i.e. only two pages are ready).
export const casePager = ({ prev, next }) => `
  <nav class="shell case-shell case-pager-wrap" aria-label="其他作品">
    <div class="case-next">
      <a class="case-next-card" href="${next.href}">
        <span class="case-next-cover">${next.cover ? `<img src="${next.cover}" alt="" loading="lazy" />` : ''}</span>
        <span class="case-next-text">
          <span class="case-pager-label">NEXT PROJECT — P.${next.num}</span>
          <span class="case-next-title">${next.title}<svg width="34" height="30" viewBox="0 0 34 30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15h24M18 5l10 10-10 10" /></svg></span>
          <span class="case-next-tags">${next.tags}</span>
        </span>
      </a>
      ${prev.href === next.href ? '' : `
        <a class="case-next-prev" href="${prev.href}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          PREV PROJECT — P.${prev.num} ${prev.title}
        </a>
      `}
    </div>
  </nav>
`
