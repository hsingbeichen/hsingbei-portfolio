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
    id: 'background', num: '01', zh: '專案背景', en: 'BACKGROUND',
    content: `
      ${lead('2020 年，巨匠旅遊的官網仍是只為桌機設計的版本，沒有支援 RWD。我負責整個官網的改版規劃，讓網站能在手機上順暢瀏覽，同時重新整理塞滿首頁的資訊。')}
      ${text('從資訊架構、視覺設計到 RWD 規劃都由我獨立完成。每個階段先與主管討論，再經老闆們審閱定案，最後交由前端工程師切版上線；2021 年離職前，首頁、大館、小館到子品牌頁的架構已全數完成，只剩「關於我們」等少數小內頁。')}
      ${caseLabel('工作流程 WORKFLOW')}
      ${steps(['規劃架構與視覺', '與主管討論', '老闆們審閱定案', '交付前端切版', '上線'])}
    `,
  },
  {
    id: 'before', num: '02', zh: '改版前的問題', toc: '改版前', en: 'BEFORE',
    content: `
      ${lead('舊版首頁把所有資訊都放了上來，結果每個區塊都在搶注意力。')}
      ${text('Banner 尺寸與風格不一、區塊之間沒有主次、文字資訊密集難以快速掃讀，使用者很難在第一眼找到「我要去哪裡、怎麼找行程」。改版前我曾參與這個版本的局部調整，但也因此確定：小修補解決不了根本問題，必須從架構重新規劃。')}
      ${caseLabel('改版前首頁 BEFORE')}
      ${caseScroll({ src: `${img}/before.png`, alt: '改版前的巨匠旅遊首頁' })}
      ${caseMedia({ alt: '改版前首頁：標出問題點的標註版', ratio: '603 / 340' })}
    `,
  },
  {
    id: 'home', num: '03', zh: '首頁架構與設計決策', toc: '首頁架構', en: 'HOMEPAGE',
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
    id: 'pages', num: '04', zh: '內頁架構', en: 'SITE STRUCTURE',
    content: `
      ${lead('首頁之下，行程分成三層：大館是地區（如東歐），小館是子地區（如克羅埃西亞・巴爾幹），最後是單一行程頁。每一層共用同一套元件，使用者從哪一層進來都不會迷路。')}
      ${steps(['首頁', '大館：地區', '小館：子地區', '行程頁'])}
      ${caseLabel('大館：改版前 → 改版後 REGION PAGE')}
      <div class="case-grid case-grid--2">
        ${caseScroll({ src: `${img}/region-before.png`, alt: '大館改版前（東歐）', caption: '改版前' })}
        ${caseScroll({ src: `${img}/region-after.png`, alt: '大館改版後（東歐）', caption: '改版後' })}
      </div>
      ${text('拿掉塞滿主題 Banner 的左側欄，改成單欄，電腦與手機才能共用同一套結構。篩選從一排難點的小勾選框，改成「篩選地區（可複選）」的膠囊按鈕，選中即填色，手指也點得準。')}
      ${text('列表分成三層：行程名稱加粗、紅字亮點、價格放大並靠右對齊，掃一眼就能比價；地區分組改用米色標題帶加「MORE」。促銷仍保留在「熱門推薦」輪播，但不再壓過搜尋，業務要的曝光與使用者要的找行程兩邊都顧到。')}
      ${caseLabel('小館：子地區頁 AREA PAGE')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 160px; align-items: start">
        ${caseScroll({ src: `${img}/area-desktop.png`, alt: '小館（克羅埃西亞・巴爾幹）電腦版', caption: '電腦版' })}
        ${phone(`${img}/area-mobile.png`, '小館（克羅埃西亞・巴爾幹）手機版')}
      </div>
      ${text('左側標出所在地區與「更多相鄰旅遊專區」，可以直接跳到鄰近的子地區；精選行程卡片以色塊標籤區分巨匠旅遊、珍藏旅遊、新視界假期等旗下品牌。')}
      ${caseLabel('行程頁：特色內頁 改版前 → 改版後 TOUR PAGE')}
      <div class="case-grid" style="grid-template-columns: 160px minmax(0, 1fr) 160px; align-items: start">
        ${phone(`${img}/trip-before.png`, '改版前的行程特色內頁（整張長圖）')}
        ${caseScroll({ src: `${img}/trip-desktop.png`, alt: '改版後行程頁（電腦版）', caption: '改版後（電腦版）' })}
        ${phone(`${img}/trip-mobile.png`, '改版後行程頁（手機版）')}
      </div>
      ${text('改版前，行程的特色介紹是一整張設計好的長圖：文字做在圖裡，手機上只能縮小看、搜尋引擎讀不到，每次修改都得重新出圖。')}
      ${text('改版後拆成可重複使用的區塊：出發日曆與價格、航班資訊、行程地圖、特別企劃影片、行程重點、景點介紹卡片，文字都是真正的網頁文字，手機上自動改為單欄。每個行程可以依內容多寡新增或減少區塊，不必每次重新設計整張圖。')}
      ${caseLabel('會員：註冊與會員中心 MEMBER')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 160px; align-items: start">
        ${caseScroll({ src: `${img}/member-join.png`, alt: '加入會員頁（電腦版）', caption: '加入會員' })}
        ${phone(`${img}/member-mobile.png`, '加入會員頁（手機版）')}
      </div>
      ${caseMedia({ src: `${img}/member-center.png`, alt: '會員中心', ratio: '320 / 284', caption: '會員中心' })}
      ${caseMedia({ src: `${img}/forgot-password.png`, alt: '忘記密碼彈窗', ratio: '1795 / 874', caption: '忘記密碼' })}
      ${text('會員頁沿用同一套頁首、表單欄位與「熱門行程」區塊；下方的紅利積點說明以分頁切換參加方式、兌換辦法等內容，避免一次把所有規則攤開。')}
      ${text('忘記密碼以彈窗呈現，使用者不必離開正在看的頁面；彈窗底部同時放上「還不是會員嗎？立即註冊」，把找不到帳號的人順勢帶往加入會員。')}
      ${caseLabel('產品專頁：兩人成行、國際機票 PRODUCT PAGES')}
      <div class="case-grid case-grid--2">
        ${caseScroll({ src: `${img}/mini-tour.png`, alt: '兩人成行 MINI TOUR 產品專頁', caption: '兩人成行（設計稿示意）' })}
        ${caseScroll({ src: `${img}/air-ticket.png`, alt: '國際機票 AIR TICKET 產品專頁', caption: '國際機票（設計稿示意）' })}
      </div>
      ${text('「兩人成行」以主視覺文案說明賣點，「快速熱搜」用分類標籤切換海島、古文明等主題，搭配大小交錯的目的地拼貼；「國際機票」把查詢表單直接放進主視覺，以分頁切換國際機票與機＋酒，下方再用「推薦行程／優惠行程」分頁延伸。版面依產品個性調整，頁首、麵包屑、卡片與頁尾仍沿用同一套系統。')}
      ${caseLabel('內容專區：匠子旅遊誌 TRAVEL MAGAZINE')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 160px; align-items: start">
        ${caseScroll({ src: `${img}/blog-desktop.png`, alt: '匠子旅遊誌（電腦版）', caption: '電腦版' })}
        ${phone(`${img}/blog-mobile.png`, '匠子旅遊誌（手機版）')}
      </div>
      ${text('匠子旅遊誌集合玩家部落格、領隊、VLOG 與 Podcast。文章可依主題與國家篩選：電腦版的主題是一整排分類標籤；到了手機上，主題與國家並排成兩個下拉選單，不佔版面也一樣好篩。')}
      ${caseLabel('其他內頁：企業專區、我的訂單 MORE PAGES')}
      <div class="case-grid" style="grid-template-columns: minmax(0, 1fr) 110px; align-items: start">
        ${caseScroll({ src: `${img}/corporate-desktop.png`, alt: '企業專區（電腦版）', caption: '企業專區' })}
        ${phone(`${img}/corporate-mobile.png`, '企業專區（手機版）')}
        ${caseScroll({ src: `${img}/order-desktop.png`, alt: '我的訂單（電腦版）', caption: '我的訂單' })}
        ${phone(`${img}/order-mobile.png`, '我的訂單（手機版）')}
      </div>
    `,
  },
  {
    id: 'rwd', num: '05', zh: 'RWD 規劃', en: 'RESPONSIVE',
    content: `
      ${lead('同一套區塊，在手機上換一種讀法。')}
      ${text('區塊改為上下堆疊；商品卡片改成橫向滑動，分類標籤也能左右滑；服務入口收成一排圓形圖示。導覽選單在手機上收進右上角，展開後依地區列出，會員與專區入口固定在底部。')}
      ${caseLabel('首頁與導覽選單（手機版） MOBILE')}
      <div class="case-grid case-grid--2">
        ${phone(`${img}/after-mobile.png`, '改版後首頁（手機版）')}
        ${phone(`${img}/mobile-menu.png`, '手機版導覽選單展開')}
      </div>
      ${caseLabel('電腦版 ↔ 手機版區塊對照')}
      ${caseMedia({ alt: '電腦版與手機版的區塊對照圖', ratio: '603 / 340' })}
      ${caseLabel('大館（手機版）')}
      ${caseMedia({ alt: '大館手機版', ratio: '603 / 340' })}
    `,
  },
  {
    id: 'brand', num: '06', zh: '延伸到子品牌', toc: '子品牌', en: 'SUB-BRAND',
    content: `
      ${lead('同一套架構換上品牌色，就撐起了旗下另一個品牌「珍藏旅遊」。')}
      ${text('主視覺加分頁籤、附英文副標的區塊標題、卡片格線與頁尾，結構與巨匠旅遊一致；換成珍藏旅遊的紫色與內容配置，也一併規劃了手機版。前三張是主視覺下方分頁切換時的內容變化。')}
      ${caseLabel('珍藏旅遊：分頁切換示意與手機版 TREASURE TRAVEL')}
      <div class="case-grid" style="grid-template-columns: repeat(3, minmax(0, 1fr)) minmax(0, 0.4fr); align-items: start">
        ${[1, 2, 3].map((n) => caseMedia({ src: `${img}/treasure-tab-${n}.png`, alt: `珍藏旅遊分頁切換 ${n}`, ratio: n === 1 ? '248 / 562' : '248 / 636', fit: 'contain' })).join('')}
        ${caseMedia({ src: `${img}/treasure-mobile.png`, alt: '珍藏旅遊手機版', ratio: '84 / 480', fit: 'contain' })}
      </div>
    `,
  },
  {
    id: 'result', num: '07', zh: '成果', en: 'RESULT',
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
    id: 'more', num: '08', zh: '其他設計', en: 'MORE WORK',
    content: `
      ${lead('在巨匠的四年，也負責日常的 Banner、GDN 廣告、EDM 與 DM 設計。')}
      ${caseLabel('EDM 公版 EDM TEMPLATE')}
      ${caseScroll({ src: `${img}/edm.png`, alt: 'EDM 公版' })}
      ${text('EDM 做成公版：主視覺、「推薦行程」雙欄卡片、黃色價格標籤與頁尾聯絡資訊位置固定，每一檔活動只需替換圖文，就能快速發送，也維持品牌一致。')}
      ${caseLabel('DM 設計 PRINT DM')}
      ${caseMedia({ src: `${img}/dm-wall.jpg`, alt: '旅遊行程 DM 作品集錦', ratio: '1012 / 1454', fit: 'contain' })}
      ${text('行程 DM 依目的地調整主視覺與字體氣氛，資訊區塊則固定為行程特色、出發日期、價格與頁尾聯絡資訊，讓業務拿到任何一張都能快速找到重點。')}
      ${caseLabel('Banner・GDN 廣告')}
      <div class="case-grid case-grid--2">
        ${['Banner', 'GDN 廣告'].map((t) => caseMedia({ alt: t, ratio: '4 / 3' })).join('')}
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
