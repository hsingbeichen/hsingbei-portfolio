import { BASE } from './layout.js'

// Single source for project names and order: the home list and every case pager read from here
export const works = [
  { slug: 'giant', title: '巨匠旅遊', subtitle: 'ARTISAN TOUR', tags: 'Banner / GDN / 網站UI / DM設計', period: '2016.12 – 2021.01' },
  { slug: 'letao', title: '樂淘', subtitle: 'Letao', tags: 'Banner / GDN / 活動頁面 / 視覺優化 / Design-to-Code', period: '2021.01 - 至今(在職中)' },
  { slug: 'azaleah', page: `${BASE}case-azaleah.html`, title: '杜鵑花開了', subtitle: 'AZALEAH STUDIO', tags: '品牌識別設計 / LOGO / 名片設計', period: '2021.06 - 2022.12' },
  { slug: 'coucou', page: `${BASE}case-coucou.html`, title: 'Coucoubei', subtitle: 'Every little moment deserves a coucou.', tags: 'Illustration × Character × GIF × Sticker × Personal Branding', period: '2026.07 - 至今(持續創作中)' },
]

export const pad = (n) => String(n).padStart(2, '0')

// Prev/next neighbours of a project, looping at both ends; unbuilt pages fall back to the home list
export const pagerFor = (slug) => {
  const i = works.findIndex((w) => w.slug === slug)
  const at = (j) => {
    const index = (j + works.length) % works.length
    const work = works[index]
    return { num: pad(index + 1), title: work.title, href: work.page ?? `${BASE}#works` }
  }
  return { prev: at(i - 1), next: at(i + 1) }
}
