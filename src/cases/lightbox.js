import './lightbox.css'

// Click-to-enlarge viewer for artwork. Each group (a CSS selector for images/videos)
// pages on its own: arrows, swipe and ←/→ move within the group; Esc, ✕ or the backdrop close it.
export const initLightbox = (groups) => {
  const box = document.createElement('div')
  box.className = 'lb'
  box.hidden = true
  box.setAttribute('role', 'dialog')
  box.setAttribute('aria-modal', 'true')
  box.setAttribute('aria-label', '放大檢視')
  box.innerHTML = `
    <button class="lb-btn lb-close" type="button" aria-label="關閉">✕</button>
    <button class="lb-btn lb-prev" type="button" aria-label="上一張">‹</button>
    <figure class="lb-figure"><div class="lb-media"></div><figcaption class="lb-caption"></figcaption></figure>
    <button class="lb-btn lb-next" type="button" aria-label="下一張">›</button>
  `
  document.body.append(box)
  const media = box.querySelector('.lb-media')
  const caption = box.querySelector('.lb-caption')
  const prevBtn = box.querySelector('.lb-prev')
  const nextBtn = box.querySelector('.lb-next')

  let items = []
  let index = 0
  let opener = null

  const show = (i) => {
    index = (i + items.length) % items.length
    const el = items[index]
    const label = el.getAttribute('alt') || el.getAttribute('aria-label') || ''
    media.innerHTML = el.tagName === 'VIDEO'
      ? `<video src="${el.currentSrc || el.src}" autoplay muted loop playsinline aria-label="${label}"></video>`
      : `<img src="${el.currentSrc || el.src}" alt="${label}" />`
    caption.textContent = items.length > 1 ? `${label}　${index + 1} / ${items.length}` : label
    prevBtn.hidden = nextBtn.hidden = items.length < 2
  }

  const open = (group, el) => {
    items = group
    opener = el
    show(group.indexOf(el))
    box.hidden = false
    document.documentElement.classList.add('lb-open')
    box.querySelector('.lb-close').focus()
  }

  const close = () => {
    box.hidden = true
    media.innerHTML = ''
    document.documentElement.classList.remove('lb-open')
    opener?.closest('.lb-zoom')?.focus()
  }

  groups.forEach((selector) => {
    const group = [...document.querySelectorAll(selector)]
    group.forEach((el) => {
      const target = el.parentElement
      target.classList.add('lb-zoom')
      target.tabIndex = 0
      target.setAttribute('role', 'button')
      target.setAttribute('aria-label', `放大檢視：${el.getAttribute('alt') || el.getAttribute('aria-label') || '作品'}`)
      target.addEventListener('click', () => open(group, el))
      target.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(group, el) }
      })
    })
  })

  box.querySelector('.lb-close').addEventListener('click', close)
  prevBtn.addEventListener('click', () => show(index - 1))
  nextBtn.addEventListener('click', () => show(index + 1))
  box.addEventListener('click', (e) => { if (e.target === box || e.target.classList.contains('lb-figure')) close() })
  document.addEventListener('keydown', (e) => {
    if (box.hidden) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft' && items.length > 1) show(index - 1)
    if (e.key === 'ArrowRight' && items.length > 1) show(index + 1)
  })

  // Swipe left/right on touch screens
  let startX = null
  box.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX }, { passive: true })
  box.addEventListener('touchend', (e) => {
    if (startX === null || items.length < 2) return
    const dx = e.changedTouches[0].clientX - startX
    if (Math.abs(dx) > 40) show(index + (dx < 0 ? 1 : -1))
    startX = null
  })
}
