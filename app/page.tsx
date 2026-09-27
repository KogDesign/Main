'use client'

import { ArrowDown, ArrowRight, Check, CircleArrowRight, Link2, Mail, Menu, Monitor, MousePointer2, PenTool, Smartphone, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Hitsnoozestudios',
    category: 'E-commerce / Clothing Brand',
    image: '/images/HitSnoozeStudios.png',
  },
  {
    title: 'JS Morlu',
    category: 'Professional Services / Accounting',
    image: '/images/jsmorlu.png',
  },
  {
    title: 'JJM Restoration',
    category: 'Local Service Business / Remodeling',
    image: '/images/jjmrestoration.png',
  },
]

const services = [
  { icon: Monitor, title: 'Landing Pages', price: 'From $500', items: ['High-converting design', 'Mobile responsive', 'Fast turnaround'] },
  { icon: MousePointer2, title: 'Business Websites', price: 'From $800', items: ['Custom design', 'SEO ready', 'Content setup'] },
  { icon: PenTool, title: 'Website Redesigns', price: 'From $600', items: ['Modern look & feel', 'Better performance', 'Improved UX'] },
]

function ProjectPreview({ title, image }: { title: string; image: string }) {
  return (
    <div className="project-preview">
      <img
        src={image}
        alt={title}
        title={title}
        className="project-image"
        loading="lazy"
      />
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [sent, setSent] = useState(false)
  return (
    <main className="site-shell">
      <section className="hero" id="work">
        <header className="nav"><a className="brand" href="#top">Kog<span>Design</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a className="active" href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowRight size={13} /></a><button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></header>
        <div className="hero-grid" id="top"><div className="hero-copy"><div className="eyebrow">WEB DESIGN &amp; DEVELOPMENT</div><h1>I build websites<br />that help businesses<br /><span>grow.</span></h1><p>Modern, high-converting websites for brands,<br />local businesses, and creators.</p><div className="hero-actions"><a className="button primary" href="#projects">View My Work <ArrowDown size={14} /></a><a className="button outline" href="#contact">Let&apos;s Talk</a></div></div><div className="hero-art"><div className="scribble">Clean design.<br />Real results.</div><div className="arrow-scribble">↘</div><div className="laptop"><div className="laptop-screen"><div className="screen-top">✣ <span>WORK &nbsp; SERVICES &nbsp; ABOUT</span></div><div className="screen-title">MORE<br />THAN JUST<br /><b>MERCH</b></div><div className="screen-pill">SHOP NOW</div><div className="screen-hoodie" /></div><div className="laptop-base" /></div><div className="phone"><div className="phone-screen"><div className="phone-title">MORE<br />THAN JUST<br /><b>MERCH</b></div><div className="phone-image" /></div></div></div></div>
      </section>

      <section className="projects section" id="projects"><div className="section-heading"><div><div className="eyebrow">FEATURED PROJECTS</div><h2>Selected Work</h2></div><a className="text-link" href="#contact">View all projects <ArrowRight size={14} /></a></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><ProjectPreview title={project.title} image={project.image} /><div className="project-info"><h3>{project.title}</h3><p>{project.category}</p><a href="#contact">View Project <ArrowRight size={12} /></a></div></article>)}</div></section>

      <section className="services section" id="services"><div className="section-heading"><div><div className="eyebrow">WHAT I DO</div><h2>Website Services</h2></div></div><div className="service-grid">{services.map(({ icon: Icon, title, price, items }) => <article className="service" key={title}><div className="service-icon"><Icon size={18} /></div><h3>{title}</h3><strong>{price}</strong><ul>{items.map(item => <li key={item}><Check size={12} />{item}</li>)}</ul></article>)}</div></section>

      <section className="why section" id="about"><div className="why-top"><div><div className="eyebrow">WHY WORK WITH ME?</div><h2>Built fast. Designed<br />for results.</h2><p>I focus on quality, clear communication, and creating<br />websites that actually bring in customers.</p></div><div className="benefits"><div><span><CircleArrowRight size={19} /></span><b>Fast Turnaround</b><small>Most projects in 3-7 days.</small></div><div><span><Smartphone size={19} /></span><b>Mobile Friendly</b><small>Looks great on all devices.</small></div><div><span><Sparkles size={19} /></span><b>Custom Design</b><small>No templates. Ever.</small></div><div><span><Link2 size={19} /></span><b>Direct Communication</b><small>You&apos;ll always know the status.</small></div></div></div><div className="about-row"><div className="about-image-wrap"><img src="/images/raw.png" alt="About KogDesign" className="about-image" /></div><div className="about-copy"><div className="eyebrow">ABOUT ME</div><h3>I&apos;m a web designer and developer who loves creating clean, modern websites that make an impact.</h3><p>I help businesses and creators turn their ideas into beautiful, functional websites. I&apos;m passionate about good design, clean code, and building long-term relationships with my clients.</p></div></div></section>

      <section className="contact-banner" id="contact"><div><div className="mini-label">READY TO GET STARTED?</div><h2>Have a website in mind?</h2><p>Let&apos;s bring your vision to life. Get in touch and I&apos;ll get back to you as soon as possible.</p></div><button className="button primary" type="button" onClick={() => { setContactOpen(true); setSent(false) }}>Contact Me <ArrowRight size={14} /></button></section>
      <footer><a className="brand" href="#top">Kog<span>Design</span></a><div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="socials"><span>♥</span><span>◎</span><span>▶</span><small>© 2025 KogDesign. All rights reserved.</small></div></footer>

      {contactOpen && <div className="contact-modal" style={{ display: 'grid' }} role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setContactOpen(false) }}><div className="contact-card"><button className="modal-close" type="button" aria-label="Close contact form" onClick={() => setContactOpen(false)}><X size={18} /></button><div className="modal-icon"><Mail size={18} /></div><div className="eyebrow">LET&apos;S CONNECT</div><h2 id="contact-title">Get in touch</h2>{sent ? <div className="form-success"><h3>Message ready to send.</h3><p>Thanks for reaching out. I&apos;ll get back to you as soon as possible.</p><button className="button primary" type="button" onClick={() => setContactOpen(false)}>Close <ArrowRight size={14} /></button></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><p className="modal-intro">Have a project in mind or a question about my services? I&apos;d love to hear from you.</p><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label><span className="label-with-icon"><Mail size={14} />Email address</span><input name="email" type="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" placeholder="Tell me a little about your project..." rows={5} required /></label><button className="modal-submit" type="submit">Send message <ArrowRight size={14} /></button></form>}</div></div>}
    </main>
  )
}
