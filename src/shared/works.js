import { BASE } from './layout.js'

// Single source for project names and order: the home list and every case pager read from here
export const works = [
  { slug: 'giant', title: '巨匠旅遊', subtitle: 'ARTISAN TOUR', tags: 'Banner / GDN / 網站UI / DM設計', period: '2016.12 – 2021.01' },
  { slug: 'letao', title: '樂淘', subtitle: 'Letao', tags: 'Banner / GDN / 活動頁面 / 視覺優化 / Design-to-Code', period: '2021.01 - 至今(在職中)' },
  { slug: 'azaleah', page: `${BASE}case-azaleah.html`, cover: `${BASE}images/azaleah/card-front.jpg`, title: '杜鵑花開了', subtitle: 'AZALEAH STUDIO', tags: '品牌識別設計 / LOGO / 名片設計', period: '2021.06 - 2022.12' },
  { slug: 'coucou', page: `${BASE}case-coucou.html`, cover: `${BASE}images/coucou/competition.jpg`, title: 'Coucoubei', tags: 'Illustration × Character × GIF × Sticker × Personal Branding', period: '2026.07 - 至今(持續創作中)' },
]

export const pad = (n) => String(n).padStart(2, '0')

// A project is "ready" once it has a page. Unready ones show as 整理中 on the home list and are
// skipped here, so adding `page` to a project is all it takes to link it in everywhere.
// Prev/next neighbours among ready projects, looping at both ends.
export const pagerFor = (slug) => {
  const ready = works.map((work, index) => ({ ...work, num: pad(index + 1) })).filter((work) => work.page)
  const i = ready.findIndex((work) => work.slug === slug)
  const at = (j) => {
    const { num, title, tags, cover, page } = ready[(j + ready.length) % ready.length]
    return { num, title, tags, cover, href: page }
  }
  return { prev: at(i - 1), next: at(i + 1) }
}
