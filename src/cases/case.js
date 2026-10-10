// Shared case-study building blocks; each case page passes its own data.
import '../shared/layout.js'
import './case.css'

export const caseHero = ({ titleZh, titleEn, images, meta }) => `
  <section class="case-hero" id="top">
    <div class="shell case-shell">
      <h1 class="case-title rise">
        <span class="case-title-zh">${titleZh}</span>
        <span class="case-title-en">${titleEn}</span>
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

// Prev / next project pager under the last section, centred on the content column.
// Next is the primary path (large, dark); prev is quieter (smaller, muted).
export const casePager = ({ prev, next }) => `
  <nav class="shell case-shell case-pager-wrap" aria-label="其他作品">
    <div class="case-pager">
      <a class="case-pager-link case-pager-prev" href="${prev.href}">
        <span class="case-pager-label">PREV PROJECT — P.${prev.num}</span>
        <span class="case-pager-title"><svg width="34" height="30" viewBox="0 0 34 30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M30 15H6M16 5L6 15l10 10" /></svg>${prev.title}</span>
      </a>
      <span class="case-pager-divider" aria-hidden="true"></span>
      <a class="case-pager-link case-pager-next" href="${next.href}">
        <span class="case-pager-label">NEXT PROJECT — P.${next.num}</span>
        <span class="case-pager-title">${next.title}<svg width="34" height="30" viewBox="0 0 34 30" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15h24M18 5l10 10-10 10" /></svg></span>
      </a>
    </div>
  </nav>
`
