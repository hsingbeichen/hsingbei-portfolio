import { BASE, IMG, BACK_HOME, header, footer, initLayout, pillInner } from './shared/layout.js'
import './about.css'

const skills = [
  { group: 'Visual Design', tags: [{ label: 'Brand Identity', href: `${BASE}case-azaleah.html` }, 'Graphic Design', 'Illustration'] },
  { group: 'Marketing &amp; <br />Campaign Design', tags: ['GDN', 'EDM', 'Landing Page', 'Event Visual', 'Social Media', 'Print Design', 'GIF / Animation'] },
  { group: 'UI / Web', tags: ['Design System', 'Responsive Layout', 'Auto Layout', 'Component', 'Variant', 'Prototype', 'Dev Mode'] },
  { group: 'Front-end &amp; AI-assisted <br />Development', tags: ['HTML', 'CSS', 'RWD', 'Design-to-Code Workflow'] },
]

const tools = [
  { file: 'github', name: 'GitHub' },
  { file: 'claude-code', name: 'Claude Code' },
  { file: 'claude', name: 'Claude' },
  { file: 'figma', name: 'Figma' },
  { file: 'vscode', name: 'VS Code' },
  { file: 'css3', name: 'CSS3' },
  { file: 'html5', name: 'HTML5' },
  { file: 'photoshop', name: 'Photoshop' },
  { file: 'illustrator', name: 'Illustrator' },
  { file: 'procreate', name: 'Procreate' },
  { file: 'giphy', name: 'GIPHY' },
]

const jobs = [
  { company: '樂淘', period: '2021.01 – 至今(在職中)', desc: '跨境電商視覺設計，服務台灣、香港、馬來西亞、新加坡 4 個市場。', points: [
    '每月主導 5–6 檔活動，從 KV 延伸到雙站活動頁、Banner、GDN、EDM 等，單檔 30+ 尺寸',
    '以 Figma 共用元件從同一組元件延展出各尺寸素材，修改母版即同步更新',
    '統整商品型 GDN 為台、港、新馬 3 站模板系統；2026 起投入設計還原與前端優化',
  ] },
  { company: '巨匠旅遊', period: '2016.12 – 2021.01', desc: '從行銷視覺做到官網改版，後期升任視覺設計主任。', points: [
    '與行銷主管合作改版官網，負責版面架構、UI 與 RWD，改版至今仍保留 80–85%',
    '重整旗下 3 個品牌的 CIS 規範，延伸到 DM 公版',
    '帶領 4–6 人設計團隊，負責 Banner、DM、雜誌與社群廣告等行銷視覺',
  ] },
]

const title = (num, zh, en) => `
  <h2 class="about-heading">
    <span class="num">${num}</span>
    <span class="label"><span class="zh">${zh}</span><span class="en">${en}</span></span>
  </h2>
`

const tag = (t) => typeof t === 'string'
  ? `<li class="skill-tag">${t}</li>`
  : `<li><a class="skill-tag skill-tag--more" href="${t.href}">${t.label}<img src="${IMG}/about/chevron-right.svg" width="19" height="19" alt="" /></a></li>`

document.querySelector('#app').innerHTML = `
  ${header('about', { back: BACK_HOME })}

  <main class="about-page" id="top">
    <section class="about-section profile">
      <div class="about-shell">
        ${title('01', '自我介紹', 'PROFILE')}
        <div class="about-col profile-col reveal">
          <div class="profile-lead">
            <img class="profile-avatar" src="${IMG}/home/logo-avatar.svg" width="160.131" height="171.901" alt="Hsingbei 插畫頭像" />
            <div>
              <p class="profile-quote"><span>從問題開始，</span><span>理解需求、整理資訊，</span><br /><span>再把視覺轉化成</span><span>真正可以使用的體驗。</span></p>
              <p class="profile-quote-en">For me, design starts with listening, questioning, and finding the idea behind it.</p>
            </div>
          </div>
          <div class="profile-story">
            <img class="quote-mark quote-mark--open" src="${IMG}/about/quote-open.svg" width="94.3945" height="77.6156" alt="" />
            <p>我是陳星蓓（Hsingbei）。在巨匠旅遊時，我與行銷主管一起改版官網，主導版面架構、UI、RWD 與前端協作，這套架構至今仍有 80–85% 在線上使用；後期也帶領 4–6 人的設計團隊。從平面一路做到網站介面，累積 9 年多的設計經驗。</p>
            <p>我相信設計稿只是起點，被準確做出來、被順利使用，才算完成。現在在樂淘，我負責 4 個市場的活動視覺，用 Figma 元件把製作系統化，也直接修改 Vue 模板與 CSS 做設計還原。</p>
            <p>工作之外，我畫個人插畫 Coucoubei，在 GIPHY 累積超過 51 萬次觀看，是我練習觀察與表達的地方。</p>
            <img class="quote-mark quote-mark--close" src="${IMG}/about/quote-close.svg" width="94.3945" height="77.6156" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about-shell">
        ${title('02', '技能', 'SKILL')}
        <dl class="about-col skills reveal">
          ${skills.map((s) => `
            <div class="skill-row">
              <dt>${s.group}</dt>
              <dd><ul class="skill-tags">${s.tags.map(tag).join('')}</ul></dd>
            </div>
          `).join('')}
        </dl>
      </div>
    </section>

    <section class="about-section">
      <div class="about-shell">
        ${title('03', '主要工具', 'TOOLS')}
        <ul class="tools reveal">
          ${tools.map((t) => `
            <li><img src="${IMG}/tools/${t.file}.svg" alt="${t.name}" title="${t.name}" /></li>
          `).join('')}
        </ul>
      </div>
    </section>

    <section class="about-section">
      <div class="about-shell">
        ${title('04', '工作經歷', 'EXPERIENCE')}
        <ol class="about-col jobs reveal">
          ${jobs.map((j) => `
            <li class="job">
              <h3>${j.company}<span>${j.period}</span></h3>
              <p>${j.desc}</p>
              ${j.points ? `<ul class="job-points">${j.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>` : ''}
            </li>
          `).join('')}
        </ol>
      </div>
    </section>

    <section class="about-section resume">
      <div class="about-shell">
        ${title('05', '履歷', 'RESUME')}
        <div class="resume-row reveal">
          <p>把完整經歷整理成一份精簡版履歷方便快速瀏覽。</p>
          <a class="pill-btn pill-btn--muted" href="${BASE}resume.pdf" download>${pillInner('下載履歷PDF', 'arrow-muted.svg')}</a>
        </div>
      </div>
    </section>
  </main>

  ${footer('about')}
`

initLayout()
