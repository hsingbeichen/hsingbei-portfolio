import { IMG, BACK_WORK, header, footer, initLayout } from './shared/layout.js'
import { text, lead, caseHero, caseBody, caseLabel, caseMedia, caseScroll, casePager, initCaseToc } from './cases/case.js'
import { pagerFor } from './shared/works.js'

const img = `${IMG}/giant`

// 文字為依目前資訊整理的草稿，待 Hsingbei 修訂；未提供 src 的圖會顯示灰色「圖片待補」框
const sections = [
  {
    id: 'background', num: '01', zh: '專案背景', en: 'BACKGROUND',
    content: `
      ${lead('2020 年，巨匠旅遊的官網仍是只為桌機設計的版本，沒有支援 RWD。我負責整個官網的改版規劃，讓網站能在手機上順暢瀏覽，同時重新整理塞滿首頁的資訊。')}
      ${text('從資訊架構、視覺設計到 RWD 規劃都由我獨立完成。每個階段先與主管討論，再經老闆們審閱定案，最後交由前端工程師切版上線；2021 年離職前，整個網站架構已全數完成，只剩「關於我們」等少數小內頁。')}
      ${caseLabel('工作流程 WORKFLOW')}
      <ul class="skill-tags">
        ${['規劃架構與視覺', '與主管討論', '老闆們審閱定案', '交付前端切版', '上線'].map((t, i) => `<li class="skill-tag">${String(i + 1).padStart(2, '0')} ${t}</li>`).join('')}
      </ul>
    `,
  },
  {
    id: 'before', num: '02', zh: '改版前的問題', toc: '改版前', en: 'BEFORE',
    content: `
      ${lead('舊版首頁把所有資訊都放了上來，結果每個區塊都在搶注意力。')}
      ${text('Banner 尺寸與風格不一、區塊之間沒有主次、文字資訊密集難以快速掃讀，使用者很難在第一眼找到「我要去哪裡、怎麼找行程」。')}
      ${caseLabel('改版前首頁 BEFORE')}
      ${caseScroll({ src: `${img}/before.png`, alt: '改版前的巨匠旅遊首頁' })}
      ${caseMedia({ alt: '改版前首頁：標出問題點的標註版', ratio: '603 / 340' })}
    `,
  },
  {
    id: 'decisions', num: '03', zh: '資訊架構與設計決策', toc: '設計決策', en: 'DESIGN DECISIONS',
    content: `
      ${lead('讓使用者一進來就能找行程，再用一致的區塊模式，帶著他往下逛。')}
      ${text('主視覺輪播下方緊接著搜尋列，團體旅遊、國際機票、機＋酒、航空自由行四種入口一次到位。往下依序是熱門國家、主題企劃、珍藏旅遊／新視界假期、精選亞洲、口碑熱銷、特惠促銷，每一區都使用同一套「標題＋分類標籤＋卡片格線」，使用者學會一區，就看得懂每一區。')}
      ${text('「主題企劃」以品牌紅色帶包覆，成為頁面中段的視覺重心，也讓長頁面有了節奏。')}
      <p class="case-note">思考方向：先解決「找行程」這個最主要的任務，再用可重複的區塊模式承載大量商品，讓網站能隨業務需求增減區塊，而不必重新設計。</p>
      ${caseLabel('首頁資訊架構 ARCHITECTURE')}
      ${caseMedia({ alt: '首頁資訊架構圖：區塊順序與層級', ratio: '603 / 360' })}
      ${caseLabel('改版後首頁（電腦版） AFTER')}
      ${caseScroll({ src: `${img}/after-desktop.png`, alt: '改版後的巨匠旅遊首頁（電腦版）' })}
      ${caseLabel('導覽選單展開 NAVIGATION')}
      ${caseScroll({ src: `${img}/after-menu.png`, alt: '導覽下拉選單展開狀態' })}
    `,
  },
  {
    id: 'rwd', num: '04', zh: 'RWD 規劃', en: 'RESPONSIVE',
    content: `
      ${lead('同一套區塊，在手機上換一種讀法。')}
      ${text('區塊改為上下堆疊；商品卡片改成橫向滑動，分類標籤也能左右滑；服務入口收成一排圓形圖示。電腦版與手機版共用同一套結構，前端只需維護一份內容。')}
      ${caseLabel('改版後首頁（手機版） MOBILE')}
      ${caseScroll({ src: `${img}/after-mobile.png`, alt: '改版後的巨匠旅遊首頁（手機版）', phone: true })}
      ${caseLabel('電腦版 ↔ 手機版區塊對照')}
      ${caseMedia({ alt: '電腦版與手機版的區塊對照圖', ratio: '603 / 340' })}
      ${caseLabel('延伸到內頁：小館 PAGES')}
      <div class="case-grid case-grid--2">
        ${caseMedia({ alt: '小館內頁（電腦版）', ratio: '1 / 1' })}
        ${caseMedia({ alt: '小館內頁（手機版）', ratio: '1 / 1' })}
      </div>
    `,
  },
  {
    id: 'result', num: '05', zh: '成果', en: 'RESULT',
    content: `
      ${lead('上線多年後，現在的巨匠旅遊官網仍沿用約 80–85% 的架構與規範。')}
      ${text('後來公司因品牌調整新增了多個區塊，例如日本搶先報、關係企業專區，都是直接套用原本的區塊模式擴充，而不是推翻重做。對我來說，這是最好的驗證：一套好的架構，能撐住業務的變化。')}
      ${caseLabel('當時 vs 現在 THEN & NOW')}
      <div class="case-grid case-grid--2">
        ${caseMedia({ alt: '當時設計稿：熱門國家區塊', ratio: '4 / 3' })}
        ${caseMedia({ alt: '現在線上：同一區塊', ratio: '4 / 3' })}
      </div>
    `,
  },
  {
    id: 'more', num: '06', zh: '其他設計', en: 'MORE WORK',
    content: `
      ${lead('在巨匠的四年，也負責日常的 Banner、GDN 廣告與 DM 設計。')}
      <div class="case-grid case-grid--3">
        ${['Banner', 'GDN 廣告', 'DM'].map((t) => caseMedia({ alt: t, ratio: '223 / 262' })).join('')}
      </div>
    `,
  },
]

document.querySelector('#app').innerHTML = `
  ${header('works', { back: BACK_WORK })}
  <main>
    ${caseHero({
      titleZh: '巨匠旅遊',
      titleEn: 'ARTISAN TOUR',
      images: [
        { shape: 'square', page: true, src: `${img}/after-desktop.png`, alt: '改版後首頁（電腦版）' },
        { shape: 'card', page: true, src: `${img}/after-mobile.png`, alt: '改版後首頁（手機版）' },
        { shape: 'card', page: true, src: `${img}/before.png`, alt: '改版前首頁' },
      ],
      meta: [
        { label: '類別', value: ['官網改版・RWD 規劃'] },
        { label: '製作年份', value: ['官網改版 2020 – 2021', '任職 2016.12 – 2021.01'] },
        { label: '產業', value: ['旅遊業｜旅行社'] },
        { label: '合作形式', value: ['在職'] },
        { label: '專案範圍', value: ['資訊架構・視覺設計・RWD 規劃', 'Banner・GDN・DM'] },
      ],
    })}
    ${caseBody({ name: 'ARTISAN TOUR', sections })}
    ${casePager(pagerFor('giant'))}
  </main>
  ${footer()}
`

initLayout()
initCaseToc()
