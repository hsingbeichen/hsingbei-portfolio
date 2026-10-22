# 圖片命名規則

全站統一，2026-10-22 起適用。

## 作品圖（案例頁、其他作品）
```
public/images/{專案}/{段落}-{主題}-{版本}.{副檔名}
```
- **專案**：資料夾，不寫進檔名 → `giant/`、`letao/`、`azaleah/`、`coucou/`
- **段落**：對應案例頁段落的 id（例：giant 的 `home`、`pages`、`rwd`、`brand`、`more`；coucou 的 `hand-drawn`、`shift`、`scenes`、`gifs`；azaleah 的 `process`、`application`、`business-card`）；案例頁最上方的主視覺用 `hero`
- **其他作品素材**：段落改用類別 → `print`（DM／EDM／雜誌）、`social`（社群廣告）、`banner`、`campaign`（電商活動頁）、`feature`（行程特色頁）
- **主題**：這張是什麼 → `region`、`trip`、`cat-goldfish`
- **版本**：`before`／`after`、`desktop`／`mobile`、序號

## 寫法
- 全小寫英文，單字用 `-` 連接；不用中文、空格、底線
- 序號一律兩位數：`01`、`02`…
- 本機素材庫 `design-assets/` 的原檔用同一個檔名，一對一對得上

## 例子
| 檔案 | 說明 |
|---|---|
| `giant/pages-region-before.png` | 巨匠 · 03 三層架構 · 大館 · 改版前 |
| `giant/home-banner-after-01.png` | 巨匠 · 02 首頁 · 大圖 · 改版後第 1 張 |
| `coucou/hand-drawn-portrait-01.jpg` | Coucoubei · 02 手繪時期 · 寵物肖像第 1 張 |
| `azaleah/business-card-print-02.jpg` | 杜鵑花開了 · 06 名片 · 印刷實拍第 2 張 |
| `giant/print-dm-wall.jpg` | 其他作品 · DM／印刷 · 巨匠 DM 集錦 |

## 介面圖示（不適用上面規則）
`home/`、`layout/`、`about/`、`tools/` 放網站介面用的 SVG，用類型開頭：`icon-`、`logo-`、`arrow-`，或工具名稱（`figma.svg`）。
