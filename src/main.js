import './style.css'

const projects = [
  { title: 'Giant', type: 'Brand experience / Digital', year: '2024', className: 'project-giant' },
  { title: 'Letao', type: 'E-commerce / Product', year: '2023', className: 'project-letao' },
  { title: 'Coucou', type: 'Identity / Campaign', year: '2022', className: 'project-coucou' },
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home">HC<span>.</span></a>
    <nav aria-label="Primary navigation">
      <a href="#works">Works</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <button class="menu-button" type="button" aria-label="Open menu">Menu</button>
  </header>

  <main>
    <section class="hero section-shell" id="home">
      <p class="eyebrow">Designer / Developer</p>
      <h1>Turning ideas<br /><em>into interfaces.</em></h1>
      <div class="hero-footer">
        <p>設計與程式之間，<br />建立清晰、好用且有感的數位體驗。</p>
        <a class="text-link" href="#works">Scroll to explore <span>↓</span></a>
      </div>
    </section>

    <section class="works section-shell" id="works">
      <div class="section-heading">
        <p class="eyebrow">Selected works</p>
        <p class="section-index">01 — 03</p>
      </div>
      <div class="project-list">
        ${projects.map((project, index) => `
          <a class="project-card" href="#case-${project.title.toLowerCase()}" aria-label="View ${project.title} case study">
            <div class="project-visual ${project.className}"><span>0${index + 1}</span></div>
            <div class="project-meta">
              <div><h2>${project.title}</h2><p>${project.type}</p></div>
              <p>${project.year} <span>↗</span></p>
            </div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="about section-shell" id="about">
      <div class="section-heading"><p class="eyebrow">About me</p><p class="section-index">02</p></div>
      <div class="about-content">
        <h2>From pixels<br />to <em>possibilities.</em></h2>
        <div>
          <p class="lead">我是 Hsingbei，一名專注於 Design-to-Code 的設計師。</p>
          <p>我喜歡把複雜的問題拆解成簡單的系統，從研究、策略、視覺設計到前端實作，讓每一個細節都能被看見，也能真正被使用。</p>
          <a class="text-link" href="#contact">More about me <span>↗</span></a>
        </div>
      </div>
    </section>

    <section class="contact section-shell" id="contact">
      <p class="eyebrow">Have a project in mind?</p>
      <h2>Let's make something<br /><em>meaningful.</em></h2>
      <a class="contact-link" href="mailto:hello@hsingbei.design">hello@hsingbei.design <span>↗</span></a>
    </section>
  </main>

  <footer class="site-footer section-shell">
    <p>© 2024 Hsingbei Chen</p><p>Design / Code / Curiosity</p>
  </footer>
`
