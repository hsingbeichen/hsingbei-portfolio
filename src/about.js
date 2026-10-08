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
  { company: '樂淘', period: '2021.01 – 至今(在職中)', desc: '負責電商網站的視覺優化與活動頁面設計，從日常 Banner、GDN 到節慶檔期規劃，持續在轉換率與畫面質感之間找到平衡。' },
  { company: '巨匠旅遊', period: '2016.12 – 2021.01', desc: '主導網站版位規劃與頁面設計，與前端工程師密切合作確保畫面還原度；同時負責品牌主題活動的視覺與 DM 製作，線上線下的視覺溝通都參與其中。' },
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
              <p class="profile-quote">從問題開始，理解需求、整理資訊，<br />再把視覺轉化成真正可以使用的體驗。</p>
              <p class="profile-quote-en">For me, design starts with listening, questioning, and finding the idea behind it.</p>
            </div>
          </div>
          <div class="profile-story">
            <img class="quote-mark quote-mark--open" src="${IMG}/about/quote-open.svg" width="94.3945" height="77.6156" alt="" />
            <p>2016 年從平面與活動視覺踏入設計這行，後來一路到參與網站介面。在巨匠旅遊的四年多，我負責版位規劃與頁面設計，也跟前端反覆討論切版邏輯、緊盯畫面還原的細節——直到現在，那套介面仍有大半留在線上使用。</p>
            <p>這段經驗讓我發現，好看的設計稿只是起點，能被準確實作、被使用者順利操作，才算完成。所以我開始學習 HTML、CSS，目前在樂淘負責電商頁面視覺優化，並用 Claude Code 加速原型與驗證，把「發現問題、做設計判斷、用 Code 解決、驗證結果」串成自己的工作方式。</p>
            <p>同時，我也持續創作個人插畫 Coucoubei——沒有客戶、沒有截稿日，單純練習觀察與表達，讓自己在解決問題之外，還留一點空間純粹地畫畫。</p>
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
