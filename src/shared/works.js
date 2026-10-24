import { BASE } from './layout.js'

// Single source for project names and order: the home list and every case pager read from here
export const works = [
  { slug: 'giant', title: '巨匠旅遊', subtitle: 'ARTISAN TOUR', tags: 'Banner / GDN / 網站UI / DM設計', period: '2016.12 – 2021.01' },
  { slug: 'letao', title: '樂淘', subtitle: 'Letao', tags: 'Banner / GDN / 活動頁面 / 視覺優化 / Design-to-Code', period: '2021.01 - 至今(在職中)' },
  { slug: 'azaleah', page: `${BASE}case-azaleah.html`, cover: `${BASE}images/azaleah/hero-card-front.jpg`, title: '杜鵑花開了', subtitle: 'AZALEAH STUDIO', tags: '品牌識別設計 / LOGO / 名片設計', period: '2021.06 - 2022.12' },
  { slug: 'coucou', page: `${BASE}case-coucou.html`, cover: `${BASE}images/coucou/hand-drawn-competition.jpg`, title: 'Coucoubei', tags: 'Illustration × Character × GIF × Sticker × Personal Branding', period: '2026.07 - 至今(持續創作中)' },
]

export const pad = (n) => String(n).padStart(2, '0')

// A project is "ready" once it has a page; until then the home list and the pager show it as 整理中.
// Prev/next always follow the numbering (looping at both ends); href is empty for unready ones.
export const pagerFor = (slug) => {
  const i = works.findIndex((work) => work.slug === slug)
  const at = (j) => {
    const index = (j + works.length) % works.length
    const { title, tags, cover, page } = works[index]
    return { num: pad(index + 1), title, tags, cover, href: page }
  }
  return { prev: at(i - 1), next: at(i + 1) }
}
