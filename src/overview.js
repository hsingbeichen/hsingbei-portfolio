import { BASE, IMG, header, footer, initLayout, pillInner } from './shared/layout.js'
import { initLightbox } from './cases/lightbox.js'
import './overview.css'

// One-page overview for interviewers: what I do, the proof in numbers, the work, then the detail pages.
// Copy marked 〔草稿〕 is placeholder until the wording is settled.

const nav = [
  { key: 'work', label: 'WORK', href: '#work' },
  { key: 'about', label: 'ABOUT', href: '#about' },
  { key: 'contact', label: 'CONTACT', href: '#contact' },
]

// Proof numbers: every figure here is from the resume or confirmed by Hsingbei
const stats = [
  { value: '9+', unit: '年', label: '視覺設計經驗', note: '從平面、廣告到網站與前端' },
  { value: '80–85%', label: '巨匠官網架構仍在線上', note: '改版多年後仍沿用', href: `${BASE}#works` },
  { value: '1 → 30+', label: '一組元件延展的尺寸', note: '樂淘活動視覺，每月 5–6 檔' },
  { value: '4', unit: '個市場', label: '台・港・馬・新', note: '跨境電商的節奏與規模' },
]

// Featured case studies; ones without a page yet show 整理中
const featured = [
  { title: '巨匠旅遊', en: 'ARTISAN TOUR', stat: '80–85%', statNote: '官網架構沿用至今', tags: '官網改版・RWD・品牌 CIS', cover: `${IMG}/giant/hero-mockup.jpg` },
  { title: '樂淘', en: 'LETAO', stat: '1 → 30+', statNote: '元件化的活動視覺', tags: '活動視覺・GDN・Design-to-Code' },
  { title: '杜鵑花開了', en: 'AZALEAH STUDIO', stat: '2 輪', statNote: '提案到定案', tags: '品牌識別・LOGO・名片', cover: `${IMG}/azaleah/hero-card-front.jpg`, href: `${BASE}case-azaleah.html` },
  { title: 'Coucoubei', en: 'ILLUSTRATION', stat: '51 萬+', statNote: 'GIPHY 觀看次數', tags: '插畫・角色・GIF 貼圖', cover: `${IMG}/coucou/hand-drawn-competition.jpg`, href: `${BASE}case-coucou.html` },
]

// Work wall: one entry per piece, filtered by category
const categories = [
  { key: 'all', label: '全部' },
  { key: 'web', label: '網站／UI' },
  { key: 'marketing', label: '行銷視覺' },
  { key: 'brand', label: '品牌識別' },
  { key: 'illustration', label: '插畫／GIF' },
]
const wall = [
  { cat: 'web', src: `${IMG}/giant/home-after-desktop.jpg`, alt: '巨匠旅遊官網首頁改版', top: true },
  { cat: 'web', src: `${IMG}/giant/pages-region-after.jpg`, alt: '巨匠旅遊大館（地區頁）', top: true },
  { cat: 'marketing', src: `${IMG}/giant/home-banner-after-01.png`, alt: '巨匠旅遊首頁大圖' },
  { cat: 'marketing', src: `${IMG}/giant/home-banner-after-02.png`, alt: '巨匠旅遊首頁大圖' },
  { cat: 'marketing', src: `${IMG}/giant/print-dm-wall.jpg`, alt: '巨匠旅遊行程 DM' },
  { cat: 'marketing', src: `${IMG}/giant/print-magazine-01.png`, alt: '巨匠旅遊雜誌廣告' },
  { cat: 'marketing', src: `${IMG}/giant/social-fb-01.png`, alt: '巨匠旅遊臉書廣告' },
  { cat: 'marketing', src: `${IMG}/giant/print-edm.png`, alt: '巨匠旅遊 EDM 公版', top: true },
  { cat: 'brand', src: `${IMG}/azaleah/hero-card-front.jpg`, alt: '杜鵑花開了名片' },
  { cat: 'brand', src: `${IMG}/azaleah/application-lightbox.jpg`, alt: '杜鵑花開了工作室燈箱' },
  { cat: 'brand', src: `${IMG}/giant/brand-logo-guide.png`, alt: '巨匠旅遊 LOGO 規範', contain: true },
  { cat: 'illustration', src: `${IMG}/coucou/hand-drawn-competition.jpg`, alt: '參賽作品《無聲的盟約》' },
  { cat: 'illustration', src: `${IMG}/coucou/scenes-halloween.jpg`, alt: '場景插畫：萬聖節的兔子' },
  { cat: 'illustration', src: `${IMG}/coucou/gifs-sticker-02.gif`, alt: 'GIF 貼圖：捧咖啡杯的鬥牛犬', contain: true },
]

const skills = [
  { group: 'Visual Design', items: 'Photoshop・Illustrator・Procreate' },
  { group: 'UI / Web', items: 'Figma（Component・Variant・Auto Layout・Dev Mode）' },
  { group: 'Front-end', items: 'HTML・CSS・RWD・Vue 模板修改' },
  { group: 'AI 協作', items: 'Claude Code' },
  { group: 'Marketing', items: 'Banner・GDN・EDM・社群・印刷' },
]

const timeline = [
  { period: '2021.01 – 至今', company: '樂淘', role: '視覺設計', points: ['4 個市場的活動視覺，每月 5–6 檔', 'Figma 元件化：一組元件延展 30+ 尺寸', '商品型 GDN 統整為 3 站模板', '2026 起投入設計還原與前端優化'] },
  { period: '2016.12 – 2021.01', company: '巨匠旅遊', role: '視覺設計主任', points: ['與行銷主管改版官網，架構仍保留 80–85%', '重整 3 個品牌的 CIS 規範', '帶領 4–6 人設計團隊'] },
]

const sectionTitle = (zh, en) => `<h2 class="ov-title reveal"><span class="zh">${zh}</span><span class="en">${en}</span></h2>`

document.querySelector('#app').innerHTML = `
  ${header('', { nav })}
  <main id="top">
    <section class="ov-hero">
      <div class="shell">
        <p class="ov-role rise"><span>Designer</span><i aria-hidden="true">｜</i><span>&lt;Coder&gt;</span></p>
        <h1 class="ov-headline rise">從設計稿到上線，<br />同一個人負責到底。</h1>
        <p class="ov-sub rise">〔草稿〕少一輪交接，畫面不走樣。陳星蓓 Hsingbei Chen，Design-to-Code 視覺設計師。</p>
        <div class="ov-actions rise">
          <a class="pill-btn" href="#work">${pillInner('看作品')}</a>
          <a class="ov-link" href="${BASE}resume.pdf" target="_blank" rel="noopener">下載履歷 PDF</a>
        </div>
        <ul class="ov-stats reveal">
          ${stats.map((s) => `
            <li>
              <p class="ov-stat-value">${s.value}${s.unit ? `<small>${s.unit}</small>` : ''}</p>
              <p class="ov-stat-label">${s.label}</p>
              <p class="ov-stat-note">${s.note}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section class="ov-section" id="work">
      <div class="shell">
        ${sectionTitle('精選作品', 'SELECTED WORK')}
        <ul class="ov-featured">
          ${featured.map((w) => `
            <li class="reveal">
              <${w.href ? `a href="${w.href}"` : 'div'} class="ov-card${w.href ? '' : ' is-soon'}">
                <span class="ov-card-cover">${w.cover ? `<img src="${w.cover}" alt="" loading="lazy" />` : '<span class="ov-card-empty">整理中</span>'}</span>
                <span class="ov-card-body">
                  <span class="ov-card-stat">${w.stat}<small>${w.statNote}</small></span>
                  <span class="ov-card-title">${w.title}<em>${w.en}</em></span>
                  <span class="ov-card-tags">${w.tags}</span>
                  <span class="ov-card-cta">${w.href ? '看完整案例 →' : '案例整理中'}</span>
                </span>
              </${w.href ? 'a' : 'div'}>
            </li>
          `).join('')}
        </ul>

        <div class="ov-filter reveal" role="tablist" aria-label="作品分類">
          ${categories.map((c, i) => `<button type="button" role="tab" data-cat="${c.key}" aria-selected="${i === 0}">${c.label}</button>`).join('')}
        </div>
        <ul class="ov-wall reveal">
          ${wall.map((w) => `
            <li data-cat="${w.cat}"><figure><img src="${w.src}" alt="${w.alt}" loading="lazy" style="object-fit:${w.contain ? 'contain' : 'cover'};${w.top ? 'object-position:top' : ''}" /></figure></li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section class="ov-section ov-about" id="about">
      <div class="shell">
        ${sectionTitle('關於我', 'ABOUT')}
        <div class="ov-about-grid reveal">
          <div>
            <h3>學歷</h3>
            <p>佛光大學 產品媒體設計系</p>
            <h3>經歷</h3>
            <p>〔草稿〕9 年多的視覺設計經驗，從平面、活動視覺一路做到網站介面與前端實作。曾任巨匠旅遊視覺設計主任，與行銷主管一起改版官網，這套架構至今仍保留 80–85%；也帶領過 4–6 人的設計團隊。現在在樂淘負責 4 個市場的活動視覺，用 Figma 元件把製作系統化，並直接修改 Vue 模板與 CSS 做設計還原。</p>
          </div>
          <dl class="ov-skills">
            ${skills.map((s) => `<div><dt>${s.group}</dt><dd>${s.items}</dd></div>`).join('')}
          </dl>
        </div>
        <ol class="ov-timeline reveal">
          ${timeline.map((t) => `
            <li>
              <p class="ov-tl-period">${t.period}</p>
              <h3>${t.company}<span>${t.role}</span></h3>
              <ul>${t.points.map((p) => `<li>${p}</li>`).join('')}</ul>
            </li>
          `).join('')}
        </ol>
        <a class="pill-btn pill-btn--wide ov-more" href="${BASE}about.html">${pillInner('認識我更多')}</a>
      </div>
    </section>
  </main>
  ${footer()}
`

initLayout()

// Category filter for the work wall
const tabs = document.querySelectorAll('.ov-filter button')
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)))
  document.querySelectorAll('.ov-wall > li').forEach((li) => { li.hidden = tab.dataset.cat !== 'all' && li.dataset.cat !== tab.dataset.cat })
}))

initLightbox(['.ov-wall figure > img'])
