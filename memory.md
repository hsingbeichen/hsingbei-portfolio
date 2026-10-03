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
