import { BASE, IMG, BACK_WORK, header, footer, initLayout } from './shared/layout.js'
import { caseBody, caseLabel, caseMedia, casePager, initCaseToc } from './cases/case.js'
import './case-coucou.css'

const img = `${IMG}/coucou`
const text = (t) => `<p class="case-text">${t}</p>`
const lead = (t) => `<p class="case-text case-lead">${t}</p>`

const IG_DIGITAL = 'https://www.instagram.com/coucou.bei/'
const IG_HAND = 'https://www.instagram.com/hellohellobeibei/'
const GIPHY = 'https://giphy.com/hsingbei'

const igIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`

// Pill link to a social account, e.g. "@coucou.bei →"
const social = (href, label) => `<a class="cc-social" href="${href}" target="_blank" rel="noopener">${igIcon}<span>${label} →</span></a>`

// A grid cell: image, looping video, or a grey placeholder until the artwork is ready
const cell = ({ src, video, alt = '', caption = '', fit = 'cover' } = {}) => `
  <figure class="cc-cell">
    <div class="cc-cell-frame${src || video ? '' : ' is-placeholder'}">
      ${video ? `<video src="${video}" autoplay muted loop playsinline aria-label="${alt}"></video>`
        : src ? `<img src="${src}" alt="${alt}" loading="lazy" style="object-fit:${fit}" />` : ''}
    </div>
    ${caption ? `<figcaption>${caption}</figcaption>` : ''}
  </figure>
`

const character = ({ name, note, desc, src }) => `
  <article class="cc-char">
    <div class="cc-char-art${src ? '' : ' is-placeholder'}">${src ? `<img src="${src}" alt="${name}" loading="lazy" />` : ''}</div>
    <p class="cc-char-name"><span class="tag">角色名</span><strong>${name}</strong>${note ? `<span class="note">${note}</span>` : ''}</p>
    <p class="cc-char-desc">${desc}</p>
  </article>
`

const sections = [
  {
    id: 'origin', num: '01', zh: '創作起點', en: 'ORIGIN',
    content: `
      ${lead('Coucou Bei 是給自己的一個出口。提醒自己，在疲憊的日子裡，也能從很小的事情上找到一點幸福。')}
      ${text('比方說，上班累了一整天，下班時看見一道雙彩虹，那個當下，我覺得很幸福。Don’t forget to coucou today.')}
    `,
  },
  {
    id: 'hand-drawn', num: '02', zh: '手繪時期', en: 'HAND-DRAWN',
    aside: '<span>起於 2024 年</span><span>創作媒材：麥克筆</span>',
    content: `
      ${lead('從一百天的挑戰開始，畫出自己的節奏。')}
      ${text('2024 年，我給自己一個挑戰：連續一百天，每天畫一張，看看自己的畫能走到哪。一百天完成後我繼續堅持畫下去，節奏從每天密集，慢慢轉成以畫面規劃為主，不再跟時間比賽。')}
      <div class="cc-head">
        <p class="cc-kicker"><strong>100 DAYS</strong><span>完成百日創作挑戰</span></p>
        ${social(IG_HAND, '@hellohellobeibei')}
      </div>
      <div class="cc-grid cc-grid--4 cc-grid--tall">
        ${cell({ alt: '百日挑戰作品 1' })}
        ${cell({ alt: '百日挑戰作品 2' })}
        ${cell({ alt: '百日挑戰作品 3' })}
        ${cell({ src: `${img}/pug.jpg`, alt: '百日挑戰作品：巴哥' })}
      </div>
      ${caseLabel('參賽作品 COMPETITION')}
      <figure class="cc-competition"><img src="${img}/competition.jpg" alt="參賽作品《無聲的盟約》" loading="lazy" /></figure>
      <div class="cc-entry">
        <div>
          <p class="cc-entry-title"><strong>無聲的盟約</strong>A WORDLESS PROMISE</p>
          <p class="cc-entry-meta">COPIC AWARD 2025・參賽作品・100+ GOOD</p>
          <p class="cc-entry-colors"><span>KEY COLORS</span><i>YG09</i><i>E57</i><i>W5</i></p>
          <a class="cc-entry-link" href="https://copicaward.com/archive2025/work/detail/27578" target="_blank" rel="noopener">參賽頁面 ›</a>
        </div>
        <figure>
          <figcaption>參賽頁面截圖・2026.10</figcaption>
          <img src="${img}/competition-page.jpg" alt="COPIC AWARD 參賽頁面截圖" loading="lazy" />
        </figure>
      </div>
      <div class="cc-grid cc-grid--4 cc-grid--square cc-grid--flush">
        ${/* Temporary detail crops cut from the main artwork (CSS background) until the real detail images arrive */ ''}
        ${['32% 92%', '22% 38%', '62% 70%', '74% 12%'].map((pos, i) => `
          <figure class="cc-cell"><div class="cc-cell-frame cc-detail" role="img" aria-label="參賽作品細節 ${i + 1}" style="background-image:url(${img}/competition.jpg);background-position:${pos}"></div></figure>
        `).join('')}
      </div>
    `,
  },
  {
    id: 'shift', num: '03', zh: '風格轉折', toc: '風格轉折', en: 'THE SHIFT · 2026',
    content: `
      ${lead('工具換了，但想說的是沒變。我嘗試以新的媒材創作，另外發展了一種新的風格。')}
      ${text('手繪沒有停，只是多了另一條路。為了讓角色動起來，也為了能放上平台，2026 年我開始畫電繪，發展出更簡化的角色與色彩，以 Coucou Bei 為名經營數位版；麥克筆畫風則留在原本的帳號。')}
      <ol class="cc-timeline">
        <li><b>2024</b><span>手繪｜100 日企劃 每日密集創作</span></li>
        <li><b>2025</b><span>手繪｜轉為畫面規劃</span></li>
        <li><b>2026</b><span>轉向電繪｜動態化與上架</span></li>
      </ol>
      ${caseLabel('這幾個月的風格琢磨 STYLE・2026.07 – 08')}
      <div class="cc-grid cc-grid--3 cc-grid--captioned">
        ${cell({ src: `${img}/style-1.jpg`, alt: '第一張完整電繪', caption: '2026.07.17・第一張完整電繪' })}
        ${cell({ src: `${img}/style-2.jpg`, alt: '雨 & 虹', caption: '2026.08.01・雨 & 虹' })}
        ${cell({ src: `${img}/style-3.jpg`, alt: '雨 & 虹', caption: '2026.08.01・雨 & 虹' })}
      </div>
      <div class="cc-head">
        <p class="cc-kicker cc-kicker--label"><strong>用角色說故事 COUCOU FRIENDS</strong><span>2026 年新創的角色，每個角色都是各自故事的主角。</span></p>
        ${social(IG_DIGITAL, '@coucou.bei')}
      </div>
      <p class="cc-bar-label">Tiny friends. Big feelings. 一起調皮、一起玩耍的人生夥伴</p>
      <div class="cc-chars">
        ${character({ name: 'Chouchou', note: '在法文裡是被捧在手心的寶貝', desc: '粉紅垂耳的小兔子，活潑有活力，精力用不完，偶爾也會氣呼呼。牠總是第一個對路過的人說 coucou。', src: `${img}/chouchou-doudou.gif` })}
        ${character({ name: 'DouDou', note: '在法文裡是讓人安心的陪伴', desc: '米黃色的狗狗，是 Chouchou 的人生夥伴。穩定、不急，陪在旁邊，用不一樣的視角看同一個世界。' })}
      </div>
      <div class="cc-chars">
        ${character({ name: '雨・Rain', desc: '討厭下雨，卻比誰都還愛掉眼淚。', src: `${img}/rain.png` })}
        ${character({ name: '虹・Bow', desc: '理性的樂天派。喜歡下雨天，相信雨後一定有彩虹。' })}
      </div>
      <p class="cc-bar-label">老朋友・賓賓（賓士貓）・麥克筆 2025.05 OLD FRIEND</p>
      <figure class="case-media cc-bin">
        <div class="case-media-frame" style="aspect-ratio:602 / 426"><img src="${img}/bin-handdrawn.jpg" alt="手繪時期的賓賓" loading="lazy" /></div>
        <figcaption>手繪時期的賓賓，之後也會以新的樣子，和新朋友們一起回來。</figcaption>
      </figure>
      ${caseLabel('數位版的樣子 DIGITAL')}
      <div class="cc-grid cc-grid--3 cc-grid--captioned">
        ${cell({ src: `${img}/bin-digital.gif`, alt: '數位版的賓賓', fit: 'contain' })}
        ${cell({ alt: '數位版的賓賓 2' })}
        ${cell({ alt: '數位版的賓賓 3' })}
      </div>
    `,
  },
  {
    id: 'scenes', num: '04', zh: '場景插畫', en: 'SCENES · 2026 至今',
    content: `
      ${lead('把日常小事，畫成一個個有溫度的場景。')}
      <div class="cc-grid cc-grid--3 cc-grid--scene">
        ${[1, 2, 3, 4, 5, 6, 7].map((n) => cell({ src: `${img}/scene-${n}.jpg`, alt: `場景插畫 ${n}` })).join('')}
        ${cell({ alt: '場景插畫 8' })}
        ${cell({ alt: '場景插畫 9' })}
      </div>
    `,
  },
  {
    id: 'gifs', num: '05', zh: '動態與貼圖', en: 'GIFS & STICKERS',
    content: `
      ${lead('讓角色動起來，也成為可以傳出去的表情。')}
      <div class="cc-grid cc-grid--3 cc-grid--captioned cc-grid--scene">
        ${cell({ video: `${img}/anim-rainbow.mp4`, alt: '逐格動畫：雨與虹', caption: '逐格動畫' })}
        ${cell({ video: `${img}/anim-2.mp4`, alt: '逐格動畫', caption: '逐格動畫' })}
        ${cell({ video: `${img}/anim-3.mp4`, alt: 'GIF 貼圖', caption: 'GIF & 貼圖' })}
      </div>
      ${caseLabel('製作過程 MAKING OF')}
      ${caseMedia({ src: `${img}/making-of.jpg`, alt: '在 Procreate 製作逐格動畫', ratio: '603 / 162', caption: '用 Procreate 做逐格動畫・以每個貼圖的動作構想需要的影格數・每一格都是手畫' })}
      <div class="cc-grid cc-grid--5 cc-grid--sticker">
        ${cell({ src: `${img}/gif-1.gif`, alt: '貼圖 GIF 1', fit: 'contain' })}
        ${cell({ src: `${img}/gif-2.gif`, alt: '貼圖 GIF 2', fit: 'contain' })}
        ${cell({ src: `${img}/bin-digital.gif`, alt: '貼圖 GIF 3', fit: 'contain' })}
        ${cell({ src: `${img}/chouchou-doudou.gif`, alt: '貼圖 GIF 4', fit: 'contain' })}
        ${cell({ video: `${img}/anim-5.mp4`, alt: '貼圖動畫 5' })}
        ${cell({ video: `${img}/anim-1.mp4`, alt: '貼圖動畫 6' })}
        ${cell({})}${cell({})}${cell({})}${cell({})}
      </div>
      <div class="cc-stats">
        <p><span>上傳數量</span><b>31</b></p>
        <p><span>GIF 觀看次數</span><b>513.6K</b></p>
        <small>GIPHY 頁面顯示・2026.10.09</small>
        <a class="cc-social" href="${GIPHY}" target="_blank" rel="noopener"><span>@hsingbei →</span></a>
      </div>
    `,
  },
]

document.querySelector('#app').innerHTML = `
  ${header('works', { back: BACK_WORK })}
  <main>
    <section class="case-hero cc-hero" id="top">
      <div class="shell case-shell">
        <h1 class="cc-title rise">Coucoubei</h1>
        <div class="cc-hero-sub rise">
          <p class="cc-tagline">Every little moment deserves a coucou.</p>
          <p class="cc-tags">Illustration / Character / GIF / Sticker</p>
        </div>
        <div class="cc-hero-panel reveal" aria-hidden="true"></div>
      </div>
    </section>
    ${caseBody({ name: 'Coucoubei', sections })}
    <section class="shell case-shell cc-follow reveal">
      <div class="cc-follow-inner">
        <p class="cc-follow-kicker">FOLLOW COUCOU</p>
        <p class="cc-follow-title">Don’t forget to coucou today.</p>
        <div class="cc-follow-links">
          <div><p class="cc-follow-label">${igIcon}INSTAGRAM</p>
            <a class="cc-chip" href="${IG_DIGITAL}" target="_blank" rel="noopener"><span>數位</span>@coucou.bei ›</a>
            <a class="cc-chip" href="${IG_HAND}" target="_blank" rel="noopener"><span>手繪</span>@hellohellobeibei ›</a>
          </div>
          <div><p class="cc-follow-label">GIPHY</p>
            <a class="cc-chip" href="${GIPHY}" target="_blank" rel="noopener">@hsingbei ›</a>
          </div>
        </div>
      </div>
    </section>
    ${/* Coucoubei is P.04: prev is Azaleah, next loops back to Artisan Tour (page not built yet) */ ''}
    ${casePager({
      prev: { num: '03', title: '杜鵑花開了', href: `${BASE}case-azaleah.html` },
      next: { num: '01', title: '巨匠旅遊', href: `${BASE}#works` },
    })}
  </main>
  ${footer()}
`

initLayout()
initCaseToc()
