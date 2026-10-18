import { IMG, BACK_WORK, header, footer, initLayout } from './shared/layout.js'
import { text, lead, caseHero, caseBody, caseLabel, caseMedia, caseScroll, casePager, initCaseToc } from './cases/case.js'
import { pagerFor } from './shared/works.js'

const img = `${IMG}/giant`

// 文字為依目前資訊整理的草稿，待 Hsingbei 修訂；未提供 src 的圖會顯示灰色「圖片待補」框
// 手機截圖：放在窄的可捲動框裡
const phone = (src, alt) => caseScroll({ src, alt, phone: true })
// 編號步驟膠囊（工作流程、頁面層級共用）
const steps = (items) => `
  <ul class="skill-tags">
    ${items.map((t, i) => `<li class="skill-tag">${String(i + 1).padStart(2, '0')} ${t}</li>`).join('')}
  </ul>
`

const sections = [
  {
    id: 'overview', num: '01', zh: '專案概覽', en: 'OVERVIEW',
    content: `
      ${lead('2020–2021 年，我一個人規劃了巨匠旅遊整個官網的資訊架構、視覺與 RWD。上線多年後，現在的官網仍沿用約 80–85% 的架構與規範。')}
      ${text('改版前的官網只為桌機設計，首頁資訊塞滿、每個區塊都在搶注意力。我的範圍從首頁、大館、小館到行程頁，延伸到會員與產品專頁、子品牌網站，以及三個品牌的 LOGO 規範；2021 年離職前，整個網站架構已全數完成。')}
      ${text('後來公司因品牌調整新增了多個區塊，例如日本搶先報、關係企業專區，都是直接套用原本的區塊模式擴充，而不是推翻重做。')}
      ${caseLabel('工作流程 WORKFLOW')}
      ${steps(['規劃架構與視覺', '與主管討論', '老闆們審閱定案', '交付前端切版', '上線'])}
      ${caseLabel('當時 vs 現在 THEN & NOW')}
      <div class="case-grid case-grid--2">
        ${caseMedia({ alt: '當時設計稿：熱門國家區塊', ratio: '4 / 3' })}
        ${caseMedia({ alt: '現在線上：同一區塊', ratio: '4 / 3' })}
      </div>
    `,
  },
  {
    id: 'home', num: '02', zh: '首頁：從拼貼到系統', toc: '首頁', en: 'HOMEPAGE',
    content: `
      ${lead('舊版首頁把所有資訊都放了上來；新版先解決「找行程」，再用一致的區塊模式，帶著使用者往下逛。')}
      <div class="case-grid case-grid--2" style="align-items: start">
        ${caseScroll({ src: `${img}/before.png`, alt: '改版前的巨匠旅遊首頁', caption: '改版前' })}
        ${caseScroll({ src: `${img}/after-desktop.png`, alt: '改版後的巨匠旅遊首頁（電腦版）', caption: '改版後' })}
      </div>
      ${text('舊版的 Banner 尺寸與風格不一、區塊之間沒有主次、文字密集難以掃讀。改版前我曾參與這個版本的局部調整，也因此確定：小修補解決不了根本問題，必須從架構重新規劃。')}
      ${text('新版在主視覺下方緊接搜尋列，團體旅遊、國際機票、機＋酒、航空自由行四種入口一次到位；往下的熱門國家、主題企劃、精選亞洲、口碑熱銷、特惠促銷，每一區都使用同一套「標題＋分類標籤＋卡片格線」，使用者學會一區，就看得懂每一區。「主題企劃」以品牌紅色帶包覆，讓長頁面有了節奏。')}
      <p class="case-note">思考方向：先解決「找行程」這個最主要的任務，再用可重複的區塊模式承載大量商品，讓網站能隨業務需求增減區塊，而不必重新設計。</p>
      ${caseLabel('首頁大圖規則 HERO BANNER RULES')}
      <div class="case-grid case-grid--2" style="align-items: start">
        ${caseMedia({ src: `${img}/hero-old-1.png`, alt: '改版前首頁大圖', ratio: '695 / 347', caption: '改版前' })}
        <figure class="case-media">
          <div class="case-media-frame gt-rules" style="aspect-ratio: 761 / 380">
            <img src="${img}/hero-new-1.png" alt="改版後首頁大圖：標出文字安全區與手機裁切範圍" />
            <span class="gt-crop"><b>手機裁切</b></span>
            <span class="gt-safe"><b>文字安全區</b></span>
          </div>
          <figcaption>改版後</figcaption>
        </figure>
      </div>
      ${text('大圖只放三樣東西：一張主照片、一個標題、一行副標。行程細節與出發日期全部移到下方的卡片；標題固定落在文字安全區內，裁切成手機版時也不會被切掉。')}
    `,
  },
  {
    id: 'pages', num: '03', zh: '找行程的三層架構', toc: '三層架構', en: 'SITE STRUCTURE',
    content: `
      ${lead('首頁之下，行程分成三層：大館是地區（如東歐），小館是子地區（如克羅埃西亞・巴爾幹），最後是單一行程頁。每一層共用同一套元件，使用者從哪一層進來都不會迷路。')}
      ${steps(['首頁', '大館：地區', '小館：子地區', '行程頁'])}
      ${caseLabel('大館：改版前 → 改版後 REGION PAGE')}
      <div class="case-grid case-grid--2" style="align-items: start">
        ${caseScroll({ src: `${img}/region-before.png`, alt: '大館改版前（東歐）', caption: '改版前' })}
        ${caseScroll({ src: `${img}/region-after.png`, alt: '大館改版後（東歐）', caption: '改版後' })}
      </div>
      ${text('拿掉塞滿主題 Banner 的左側欄，改成單欄，電腦與手機才能共用同一套結構。篩選從一排難點的小勾選框，改成「篩選地區（可複選）」的膠囊按鈕，選中即填色，手指也點得準。')}
      ${text('列表分成三層：行程名稱加粗、紅字亮點、價格放大並靠右對齊，掃一眼就能比價。促銷仍保留在「熱門推薦」輪播，但不再壓過搜尋，業務要的曝光與使用者要的找行程兩邊都顧到。')}
      ${caseLabel('小館：子地區頁 AREA PAGE')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 160px; align-items: start">
        ${caseScroll({ src: `${img}/area-desktop.png`, alt: '小館（克羅埃西亞・巴爾幹）電腦版', caption: '電腦版' })}
        ${phone(`${img}/area-mobile.png`, '小館（克羅埃西亞・巴爾幹）手機版')}
      </div>
      ${text('左側標出所在地區與「更多相鄰旅遊專區」，可以直接跳到鄰近的子地區；行程卡片以色塊標籤區分巨匠旅遊、珍藏旅遊、新視界假期等旗下品牌。')}
      ${caseLabel('行程頁：特色內頁 改版前 → 改版後 TOUR PAGE')}
      <div class="case-grid" style="grid-template-columns: 160px minmax(0, 1fr) 160px; align-items: start">
        ${phone(`${img}/trip-before.png`, '改版前的行程特色內頁（整張長圖）')}
        ${caseScroll({ src: `${img}/trip-desktop.png`, alt: '改版後行程頁（電腦版）', caption: '改版後（電腦版）' })}
        ${phone(`${img}/trip-mobile.png`, '改版後行程頁（手機版）')}
      </div>
      ${text('改版前，行程的特色介紹是一整張設計好的長圖：文字做在圖裡，手機上只能縮小看、搜尋引擎讀不到，每次修改都得重新出圖。')}
      ${text('改版後拆成可重複使用的區塊：出發日曆與價格、航班資訊、行程地圖、特別企劃影片、行程重點、景點介紹卡片，文字都是真正的網頁文字，手機上自動改為單欄。每個行程可以依內容多寡新增或減少區塊，不必每次重新設計整張圖。')}
    `,
  },
  {
    id: 'rwd', num: '04', zh: 'RWD 規劃', en: 'RESPONSIVE',
    content: `
      ${lead('同一套區塊，在手機上換一種讀法。')}
      ${text('區塊改為上下堆疊；商品卡片改成橫向滑動，分類標籤也能左右滑；服務入口收成一排圓形圖示。導覽選單收進右上角，展開後依地區列出，會員與專區入口固定在底部。')}
      ${caseLabel('首頁與導覽選單（手機版） MOBILE')}
      <div class="case-grid case-grid--2">
        ${phone(`${img}/after-mobile.png`, '改版後首頁（手機版）')}
        ${phone(`${img}/mobile-menu.png`, '手機版導覽選單展開')}
      </div>
      ${caseLabel('不只縮小：匠子旅遊誌的篩選 FILTERS')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 160px; align-items: start">
        ${caseScroll({ src: `${img}/blog-desktop.png`, alt: '匠子旅遊誌（電腦版）', caption: '電腦版' })}
        ${phone(`${img}/blog-mobile.png`, '匠子旅遊誌（手機版）')}
      </div>
      ${text('匠子旅遊誌的文章可依主題與國家篩選：電腦版的主題是一整排分類標籤；到了手機上，主題與國家並排成兩個下拉選單，不佔版面也一樣好篩。RWD 不是把電腦版縮小，而是替手機重新安排操作方式。')}
    `,
  },
  {
    id: 'brand', num: '05', zh: '品牌系統', en: 'BRAND SYSTEM',
    content: `
      ${lead('網站之外，我也整合了旗下三個品牌的 LOGO：巨匠旅遊、珍藏旅遊（前身為典藏旅遊 LUXE TRAVEL）與新視界假期。')}
      ${text('2019 年先為巨匠旅遊 LOGO 整理出基本比例、中英文字體與色彩規範（CMYK、RGB、色碼與 Pantone），再以同樣的邏輯調整珍藏旅遊與新視界假期的標誌：統一「字母圖形＋中文品名＋英文副名」的組合方式，並分別給予紅、紫、綠的品牌色，讓三個品牌各自可辨識，放在一起又看得出是同一個家族。')}
      ${caseLabel('巨匠旅遊 LOGO 規範 BRAND GUIDE')}
      ${caseMedia({ src: `${img}/logo-guide.png`, alt: '巨匠旅遊 LOGO 規範：比例、字體與色彩', ratio: '1122 / 746', fit: 'contain' })}
      ${caseLabel('三品牌 LOGO 調整過程與定案 LOGO REFINE')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 428fr) minmax(0, 157fr); align-items: start">
        ${caseMedia({ src: `${img}/logo-versions.png`, alt: '三品牌 LOGO 版本演進與配色', ratio: '428 / 312', fit: 'contain', caption: '調整過程' })}
        ${caseMedia({ src: `${img}/logo-final.png`, alt: '三品牌 LOGO 定案', ratio: '157 / 126', fit: 'contain', caption: '定案' })}
      </div>
      ${caseLabel('延伸到子品牌網站：珍藏旅遊 SUB-BRAND SITE')}
      <div class="case-grid" style="grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, 0.4fr); align-items: start">
        ${[1, 2, 3].map((n) => caseMedia({ src: `${img}/treasure-tab-${n}.png`, alt: `珍藏旅遊分頁切換 ${n}`, ratio: n === 1 ? '248 / 562' : '248 / 636', fit: 'contain' })).join('')}
        ${caseMedia({ src: `${img}/treasure-mobile.png`, alt: '珍藏旅遊手機版', ratio: '84 / 480', fit: 'contain' })}
      </div>
      ${text('同一套網站架構換上珍藏旅遊的紫色與內容配置，就撐起了另一個品牌的網站；前三張是主視覺下方分頁切換時的內容變化，最右為手機版。')}
    `,
  },
  {
    id: 'more', num: '06', zh: '更多頁面', en: 'MORE PAGES',
    content: `
      ${lead('同一套頁首、表單、卡片與頁尾，也延伸到會員、產品專頁與服務頁面。')}
      <div class="case-grid case-grid--3 case-thumbs">
        ${[
          ['member-join', '加入會員'],
          ['forgot-password', '忘記密碼'],
          ['mini-tour', '兩人成行（設計稿示意）'],
          ['air-ticket', '國際機票（設計稿示意）'],
          ['corporate-desktop', '企業專區'],
          ['order-desktop', '我的訂單'],
        ].map(([f, t]) => caseMedia({ src: `${img}/${f}.png`, alt: t, ratio: '4 / 3', caption: t })).join('')}
      </div>
      ${text('同時期的 DM、雜誌與社群廣告等平面作品，收錄在首頁的「其他作品」。')}
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
        { label: '類別', value: ['官網改版・RWD 規劃・品牌系統'] },
        { label: '製作年份', value: ['官網改版 2020 – 2021', '任職 2016.12 – 2021.01'] },
        { label: '產業', value: ['旅遊業｜旅行社'] },
        { label: '合作形式', value: ['在職'] },
        { label: '專案範圍', value: ['資訊架構・視覺設計・RWD 規劃', '三品牌 LOGO 規範'] },
      ],
    })}
    ${caseBody({ name: 'ARTISAN TOUR', sections })}
    ${casePager(pagerFor('giant'))}
  </main>
  ${footer()}
`

initLayout()
initCaseToc()
