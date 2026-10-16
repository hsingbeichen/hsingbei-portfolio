# Hsingbei Chen Portfolio

求職用設計作品集，定位「Design-to-Code」。
頁面：Home / Works / About / Contact，另有 Case_Giant、Case_Letao、Case_Azaleah、Case_Coucou 案例頁。
版面基準 1440px，需同時做 Desktop 與 Mobile。

## Color Tokens
- Text: Primary #333333 / Secondary #666666 / Muted #999999
- Background: Default #F7F7F5 / Surface #EEEEEC
- Border: Default #DCDCD8
- Accent: Default #04374A / Hover #06536C / Dark #022936
（不要使用紅色、橘色或其他強調色）

## Typography
- Display / H1–H4：Inter 600/500
- Body L/M/S：Noto Sans TC 400
- Caption：Inter 12/18 400

## Grid（Desktop）
Frame 1440、Content 1200、12 欄、Gutter 24、Margin 120

## Spacing
4 / 8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 160

## Radius
圖片 0–4px、卡片 0–8px、按鈕與標籤 999px（刻意的直角 vs 全圓角對比）

## Motion
Micro 150ms、Normal 250ms、Transition 400–600ms，ease-out

## 規則
- 所有顏色、字級、間距一律寫成 CSS 變數（design tokens），不要寫死數值
- 實作 Figma 畫面時優先使用 Figma MCP 取得設計內容。

## 新增一篇案例頁（例如巨匠、樂淘）
1. 複製 `case-azaleah.html` → `case-xxx.html`，改 `<title>`、description、og 標籤與 script 路徑（vite 會自動把根目錄的 .html 都當成頁面，不用改 `vite.config.js`）
2. 新增 `src/case-xxx.js`：用 `cases/case.js` 的 `caseHero` / `caseBody` / `text` / `lead` / `caseMedia` 等組內容，最後放 `casePager(pagerFor('xxx'))`，結尾呼叫 `initLayout()`、`initCaseToc()`
3. 在 `src/shared/works.js` 那一筆補上 `page` 與 `cover`（下一篇卡片的封面）
   - 有 `page` 才算完成：首頁那列與上一篇／下一篇才會變成可點
   - 沒有 `page` 的作品照編號仍出現在原位，但顯示「整理中」、不能點
4. 圖片放 `public/images/xxx/`
