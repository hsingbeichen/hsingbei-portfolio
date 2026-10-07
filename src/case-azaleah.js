import { BASE, IMG, BACK_WORK, header, footer, initLayout } from './shared/layout.js'
import { caseHero, caseBody, caseLabel, caseMedia, caseProposals, casePager, initCaseToc } from './cases/case.js'

const img = `${IMG}/azaleah`
const text = (t) => `<p class="case-text">${t}</p>`
const lead = (t) => `<p class="case-text case-lead">${t}</p>`

const sections = [
  {
    id: 'background', num: '01', zh: '專案背景', en: 'BACKGROUND',
    content: `
      ${lead('業主 Leah 是我在巨匠旅遊時期因鄰近公司結識的舊識，她長年旅居海外後，才透過社群重新聯繫上我。')}
      ${text('當時她說想回台創立嬋柔教室，幫助更多人找回身體的正確使用方式，店名定為「杜鵑花開了」，希望我幫她設計商標。<br />正巧 Azalea 的正式中文名稱就是杜鵑花——這個巧合讓花與人自然融合進品牌。<br />AZA 取自 Azalea ＋ LEAH 是她的英文名，「AZALEAH」只屬於她的工作室，獨一無二的結果。')}
    `,
  },
  {
    id: 'decisions', num: '02', zh: '設計決策', en: 'DESIGN DECISIONS',
    content: `
      ${lead('把身體的延展意象帶進商標：舞者在花瓣上輕盈躍動，如同卡頓的身體從此得以綻放。')}
      ${text('LOGO 裡的黑色曲線是舞者側面剪影、雙手向後延展到最開的瞬間——不是用花朵比喻人，而是把「人在動作中的樣子」直接變成商標本身，像舞者輕盈躍上花瓣一般。原本卡頓、僵硬的身體，來到工作室後得以舒展、重新找回律動。<br />花瓣包覆舞者剪影外緣，像動作延展到極限時綻放的痕跡；深到淺的漸層呼應「僵硬到舒展」的轉變。')}
      <p class="case-note">思考方向：業主的名字（LEAH）對應杜鵑花命名（Azalea）；舞者的伸展動作對應花瓣造型與漸層。每個視覺元素的存在都有意義。</p>
    `,
  },
  {
    id: 'process', num: '03', zh: '商標設計過程', toc: '設計過程', en: 'PROCESS',
    content: `
      ${lead('造型定案前其實做了兩輪篩選，先用兩個方向的草圖讓業主比較，選定後再反覆微調配色層次，才走到最終定案版本。')}
      ${caseLabel('手繪草圖 SKETCH')}
      ${caseMedia({ src: `${img}/sketch.jpg`, alt: '手繪草圖', ratio: '603 / 279' })}
      ${caseLabel('造型雛形 ITERATION')}
      ${caseMedia({ src: `${img}/iteration.png`, alt: '造型雛形與配色微調', ratio: '603 / 132', fit: 'scale-down', bare: true })}
      ${caseLabel('定案提案 FINAL')}
      ${caseProposals([
        { name: '提案A', desc: '強調蝶與動態的活動性', src: `${img}/proposal-a.svg` },
        { name: '提案B', desc: '延展與綻放，花與舞者並重', src: `${img}/proposal-b.svg`, chosen: true },
      ])}
      <div class="case-quote-bar">
        ${text('提案B 的花瓣更貼近杜鵑花本身的花形，體驗者（舞者）動態的身形將其收進花瓣線條裡，呈現舞動即綻放；提案A 以動感更為強調，花情的示意度較低。因而業主選擇 B 作為「杜鵑花開了」商標設計的最終版本。')}
      </div>
    `,
  },
  {
    id: 'scope', num: '04', zh: '負責範圍', en: 'SCOPE',
    content: `
      ${lead('獨立接案，從商標設計發想到印刷檔案。')}
      <ul class="skill-tags">
        ${['品牌故事延伸', '商標設計', '草圖與雙配色提案', '字體組合（Lockup）設計', '名片版面與印刷檔案製作'].map((t) => `<li class="skill-tag">${t}</li>`).join('')}
      </ul>
    `,
  },
  {
    id: 'application', num: '05', zh: '實際應用', en: 'APPLICATION',
    content: `
      ${lead('LOGO 上線後持續使用超過一年，從店面招牌到工作室日常陳設，識別系統禁得起實際場景的考驗。')}
      <blockquote class="case-testimonial">
        「有妳當時的巧思，讓我在市場上有這如此獨樹一格的 logo 陪伴，在我的人生當中，也名列前茅了非常有意義的一件事。」<cite>—— 業主 Leah</cite>
      </blockquote>
      ${caseLabel('工作室燈箱實拍')}
      ${caseMedia({ src: `${img}/lightbox.jpg`, alt: '工作室燈箱實拍', ratio: '601 / 245' })}
      ${caseLabel('業主工作室現場實拍')}
      <div class="case-grid case-grid--wide">
        ${caseMedia({ src: `${img}/studio-1.jpg`, alt: '工作室空間實拍', ratio: '253 / 201' })}
        ${caseMedia({ src: `${img}/studio-2.jpg`, alt: '工作室 LOGO 燈牆實拍', ratio: '341 / 201' })}
      </div>
    `,
  },
  {
    id: 'business-card', num: '06', zh: '名片設計', en: 'BUSINESS CARD',
    content: `
      ${lead('LOGO 完成一年半後，業主回頭請託延伸設計名片，沿用同一套色彩與造型邏輯。')}
      ${caseLabel('業主實際發印')}
      <div class="case-grid case-grid--3">
        ${[1, 2, 3].map((n) => caseMedia({ src: `${img}/print-${n}.jpg`, alt: `名片印刷實拍 ${n}`, ratio: '223 / 262' })).join('')}
      </div>
    `,
  },
]

document.querySelector('#app').innerHTML = `
  ${header('works', { back: BACK_WORK })}
  <main>
    ${caseHero({
      titleZh: '杜鵑花開了',
      titleEn: 'AZALEAH STUDIO',
      images: [
        { shape: 'square', src: `${img}/logo.svg`, alt: 'Azaleah Studio LOGO' },
        { shape: 'card', src: `${img}/card-front.jpg`, alt: '名片正面' },
        { shape: 'card', src: `${img}/card-back.png`, alt: '名片背面' },
      ],
      meta: [
        { label: '類別', value: ['品牌識別設計'] },
        { label: '製作年份', value: ['LOGO 2021.06', '名片 2022.12'] },
        { label: '案主產業', value: ['皮拉提斯｜嬋柔®｜瑜伽 工作室'] },
        { label: '合作形式', value: ['獨立接案'] },
        { label: '專案範圍', value: ['LOGO設計・字體組合・名片設計'] },
      ],
    })}
    ${caseBody({ name: 'Azaleah Studio', sections })}
    ${/* TODO: point at case-letao.html / case-coucou.html once those pages exist */ ''}
    ${casePager({
      prev: { num: '02', title: '樂淘Letao', href: `${BASE}#works` },
      next: { num: '04', title: 'Coucou.bei', href: `${BASE}#works` },
    })}
  </main>
  ${footer()}
`

initLayout()
initCaseToc()
