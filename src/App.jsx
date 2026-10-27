import { useEffect, useState } from "react";
import Reveal from "./components/Reveal";
import Pills from "./components/Pills";
import Shots from "./components/Shots";
import Lightbox from "./components/Lightbox";
import { LI, GH, MAIL, NAV, JOBS, CARDS, SKILLS, PHOTO, RESUME } from "./data";

const Rv = Reveal;

function App() {
  const [on, setOn] = useState("home");
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState(null);
  useEffect(() => { const k = e => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const flip = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n); document.documentElement.dataset.theme = n;
    try { localStorage.setItem("pk-theme", n); } catch (e) {}
  };
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setOn(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach(([id]) => { const el = document.getElementById(id); el && o.observe(el); });
    return () => o.disconnect();
  }, []);
  return (<>
    <header><div className="wrap bar">
      <a className="logo" href="#home"><img className="av" src={PHOTO} alt="" width="32" height="32" onError={e => e.currentTarget.style.display = "none"} />PATCHAIYAPPAN K</a>
      <nav id="menu" className={"links" + (open ? " open" : "")} aria-label="Sections">{NAV.map(([id, l]) => <a key={id} href={"#" + id} className={on === id ? "on" : ""} onClick={() => setOpen(false)}>{l}</a>)}</nav>
      <a className="btn sm dl" href={RESUME} download="Patchaiyappan_K_Resume.pdf">Resume</a>
      <a className="btn p sm cta-n" href="#contact">Contact Me</a>
      <button className="tg" onClick={flip} aria-pressed={theme === "dark"} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>{theme === "dark" ? "☀" : "☾"}</button>
      <button className="hb" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? "✕" : "☰"}</button>
    </div></header>

    <main>
    <section id="home" style={{ paddingTop: 0 }}><div className="wrap hero">
      <div>
        <Rv><div className="hi">Hello, I’m</div><h1>PATCHAIYAPPAN K</h1><div className="role">Full Stack Developer</div></Rv>
        <Rv d={.1}><p>Full Stack Developer specializing in building scalable web applications, enterprise ERP systems, RESTful APIs and user-focused digital products using React, Node.js and Python.</p>
        <p style={{ marginTop: 12 }}>Experienced across frontend development, backend architecture, API development, database integration and production-ready business applications.</p></Rv>
        <Rv d={.2}><div className="cta"><a className="btn p" href="#projects">View My Work</a><a className="btn" href="#contact">Contact Me</a><a className="btn" href={RESUME} download="Patchaiyappan_K_Resume.pdf">Download Resume</a></div>
        <div className="soc"><a href={LI} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={GH} target="_blank" rel="noopener noreferrer">GitHub</a><a href={"mailto:" + MAIL}>Email</a></div></Rv>
      </div>
      <Rv d={.15}><div className="vis"><div className="glow" aria-hidden="true"/><div className="ph"><span className="ini" aria-hidden="true">PATCHAIYAPPAN K</span><img src={PHOTO} alt="Portrait of Patchaiyappan K" onError={e => e.currentTarget.style.display = "none"} /><span className="open"><i/>Open to opportunities</span></div>
        <div className="win w1" aria-hidden="true"><div className="dots"><span/><span/><span/></div><em>function</em> <b>OrderList</b>() {"{"}<br/>&nbsp;&nbsp;<em>const</em> [rows] = <b>useOrders</b>();<br/>&nbsp;&nbsp;<em>return</em> &lt;<b>DataTable</b> rows={"{rows}"} /&gt;;<br/>{"}"}</div>
        <div className="win w2" aria-hidden="true"><div className="dots"><span/><span/><span/></div>@router.<b>get</b>(<em>"/orders"</em>)<br/><em>async def</em> <b>list_orders</b>(db):<br/>&nbsp;&nbsp;<em>return await</em> db.<b>fetch_all</b>()</div>
        <div className="win w3" aria-hidden="true">{["React","Node.js","Python","TypeScript","FastAPI","SQL"].map(x => <span key={x}>{x}</span>)}</div>
      </div></Rv>
    </div></section>

    <section id="about"><div className="wrap">
      <Rv><div className="label">ABOUT ME</div><h2>Building Reliable Digital Products from Frontend to Backend</h2>
      <p className="lead">Highly motivated and results-driven Full Stack Developer with strong backend expertise in Python and frontend proficiency in React using JavaScript and TypeScript.</p>
      <p className="lead">Experienced in building scalable applications, designing RESTful APIs, and delivering production-ready solutions. Passionate about developing user-centric digital products, optimizing performance, and collaborating with cross-functional teams.</p></Rv>
      <div className="grid3" style={{ marginTop: 32 }}>
        {[["Frontend Development","React.js, JavaScript, TypeScript, HTML5, CSS3, Material UI and Bootstrap."],["Backend & APIs","Node.js, Express.js, Python FastAPI and RESTful API development."],["Database & Integration","SQL Server, PostgreSQL, MySQL, MongoDB and API integration."]].map(([t, d], i) =>
          <Rv key={t} d={i * .1} className="card"><h3>{t}</h3><p>{d}</p></Rv>)}
      </div>
    </div></section>

    <section id="experience" style={{ background: "var(--s2)" }}><div className="wrap">
      <Rv><div className="label">EXPERIENCE</div><h2>Professional Journey</h2></Rv>
      <div className="tl">{JOBS.map(j => (
        <Rv key={j.org} className="job">
          <div className="when">{j.when}</div><h3>{j.role}</h3><p className="org">{j.org}</p>
          {j.intro && <p className="lead">{j.intro}</p>}
          <div className="sub">{j.projects.map(p => (
            <div className="proj" key={p.n}><h4>{p.n}</h4><p>{p.d}</p>
              {p.items && <Pills list={p.items} mod />}
              {p.more && <p style={{ marginTop: 10, marginBottom: 0 }}>{p.more}</p>}
              {p.stack && <div className="stk">{p.stack}</div>}
            </div>))}</div>
        </Rv>))}</div>
    </div></section>

    <section id="projects"><div className="wrap">
      <Rv><div className="label">SELECTED WORK</div><h2>Projects I’ve Worked On</h2></Rv>
      <div className="grid2">{CARDS.map(([n, name, sub, cat, d, key, my, tech, shots], i) => (
        <Rv key={n} d={(i % 2) * .1} className="card pc">
          <div className="top"><span className="num">{n}</span><span className="cat">{cat}</span></div>
          <Shots shots={shots} name={name} onOpen={setBox} />
          <div><h3 style={{ marginBottom: 2 }}>{name}</h3><div className="k">{sub}</div></div>
          <p>{d}</p>
          <div className="k"><b>Key functionality:</b> {key}</div>
          <div className="k"><b>My contribution:</b> {my}</div>
          <Pills list={tech} />
        </Rv>))}</div>
    </div></section>

    <section id="skills" style={{ background: "var(--s2)" }}><div className="wrap">
      <Rv><div className="label">TECH STACK</div><h2>Technologies I Work With</h2></Rv>
      <div className="grid3">{SKILLS.map(([t, l], i) => (
        <Rv key={t} d={(i % 3) * .08} className="card"><h3>{t}</h3><Pills list={l} /></Rv>))}</div>
      <Rv><p className="lead" style={{ marginTop: 24 }}>Core technologies: React, Node.js, Python, FastAPI, TypeScript and SQL Server.</p></Rv>
    </div></section>

    <section id="education"><div className="wrap">
      <Rv><div className="label">EDUCATION</div><h2>Academic Background</h2></Rv>
      <div className="tl edu">
        {[["MBA — General","Christ Institute of Technology, Pondicherry University","2026 – Pursuing"],
          ["B.Tech — Electrical and Electronics Engineering","Christ College of Engineering & Technology, Pondicherry University","2017 – 2021 · CGPA 7.89","Academic project: Piezoelectric Energy Harvesting. Generated 5W power from vibrations and improved conversion efficiency by 12%.","Internship: Supreme & Co. Pvt Ltd, Kolkata. Contributed to power transmission manufacturing processes and quality testing."],
          ["HSC","Jothi Vallalar Higher Secondary School, State Board of Tamil Nadu","2016 – 2017 · 55%"],
          ["SSLC","Kolping Matriculation Higher Secondary School, State Board of Tamil Nadu","2014 – 2015 · 74%"]].map(([t, s, y, ...x]) => (
          <Rv key={t} className="job card"><div className="yr when">{y}</div><h3>{t}</h3><p>{s}</p>{x.map(z => <p key={z} style={{ marginTop: 8 }}>{z}</p>)}</Rv>))}
      </div>
    </div></section>

    <section id="contact" style={{ paddingTop: 24 }}><div className="wrap"><Rv className="cbox">
      <h2 style={{ margin: 0, maxWidth: "none" }}>Let’s Build Something Great Together.</h2>
      <p className="lead" style={{ marginTop: 16 }}>I’m open to opportunities where I can contribute to building scalable, reliable and user-focused software products.</p>
      <div className="cgrid">
        <div><small>Email</small><a href={"mailto:" + MAIL}>{MAIL}</a></div>
        <div><small>Phone</small><a href="tel:+919791579586">+91 97915 79586</a></div>
        <div><small>Location</small><span>Puducherry, India</span></div>
        <div><small>LinkedIn · GitHub</small><a href={LI} target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href={GH} target="_blank" rel="noopener noreferrer">GitHub</a></div>
      </div>
      <div className="cta" style={{ marginTop: 0 }}><a className="btn p" href={"mailto:" + MAIL}>Send Me an Email</a><a className="btn" href={LI} target="_blank" rel="noopener noreferrer">View LinkedIn</a><a className="btn" href={RESUME} download="Patchaiyappan_K_Resume.pdf">Download Resume</a></div>
    </Rv></div></section>
    </main>
    <Lightbox box={box} onClose={() => setBox(null)} />

    <footer><div className="wrap fr">
      <div><b>Patchaiyappan K</b><br/>Full Stack Developer<br/>React • Node.js • Python</div>
      <div style={{ textAlign: "right" }}><a href={LI}>LinkedIn</a> | <a href={GH}>GitHub</a> | <a href={"mailto:" + MAIL}>Email</a><br/>© 2026 Patchaiyappan K. All Rights Reserved.</div>
    </div></footer>
  </>);
}

export default App;
