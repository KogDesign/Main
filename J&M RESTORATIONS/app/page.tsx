const projects = [
  { title: 'Rooted Travel Co.', category: 'Website design', tone: 'placeholder-one' },
  { title: 'Moss & Matter', category: 'Brand identity', tone: 'placeholder-two' },
  { title: 'Sunday Supply', category: 'Digital experience', tone: 'placeholder-three' },
]

function ImageBox({ title, category, tone }: { title: string; category: string; tone: string }) {
  return <div className={`image-box ${tone}`} role="img" aria-label={`${title} image placeholder`}><span>Image placeholder</span><strong>{title}</strong><small>{category}</small></div>
}

export default function Page() {
  return <main className="site-shell" id="top">
    <header className="site-header">
      <div className="header-center"><a className="wordmark" href="#top">KogDesign<span>®</span></a><div className="header-links"><nav className="header-nav" aria-label="Primary navigation"><a href="#about">About</a><a href="#services">Services</a></nav><nav className="header-nav" aria-label="Project navigation"><a href="#work">Recent projects</a><a href="#contact">Contact</a></nav></div></div>
      <a href="#contact" className="header-cta">Let&apos;s work together</a>
    </header>

    <section className="project-layout" id="about">
      <div className="project-left"><div className="project-copy"><p className="project-label">Website design</p><h1>HITSNOOZESTUDIOS</h1><div className="copy-body"><p>Hit Snooze is a playful knitwear brand with a strong focus on unique, illustrated pieces. I wanted the website to feel clean and minimal while letting the colorful photography and bold designs take center stage. The simple layout makes it easy to browse collections and shop the latest pieces, while keeping the overall experience fun and true to the brand.</p></div><p className="project-date">Jan 2026 — March 2026</p></div><div className="bottom-box"><ImageBox title={projects[2].title} category={projects[2].category} tone={projects[2].tone} /></div></div>
      <div className="project-images" id="work"><ImageBox title={projects[0].title} category={projects[0].category} tone={projects[0].tone} /><ImageBox title={projects[1].title} category={projects[1].category} tone={projects[1].tone} /></div>
    </section>

    <footer className="site-footer" id="contact"><div className="footer-name"><span>KogDesign</span><small>Independent design studio</small></div><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Projects</a><a href="mailto:hello@fieldnote.studio">Contact</a></nav><div className="socials"><a href="#contact">Instagram</a><a href="#contact">Behance</a><a href="#contact">LinkedIn</a></div></footer>
  </main>
}
