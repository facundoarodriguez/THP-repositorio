const members = [
  { name: "Facundo Rodriguez", role: "Guitarra", image: "/media/facundo.webp", tone: "violet" },
  { name: "Fabrizio Ciampichini", role: "Voz", image: "/media/fabrizio.webp", tone: "ember" },
  { name: "Guillermo Gantcheff", role: "Batería", image: "/media/guillermo.webp", tone: "blue" },
  { name: "Martin Estruch", role: "Bajo", image: "/media/martin.webp", tone: "green" },
  { name: "Elias Guaycochea", role: "Guitarra", image: "/media/elias.jpeg", tone: "magenta" },
];

const tracks = ["Enough?", "Enough!", "Simulacrum", "Chrysalis", "Butterfly"];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegación principal">
        <a className="nav-mark" href="#inicio" aria-label="The Horizon Problem — inicio">
          THE HORIZON PROBLEM
        </a>
        <div className="nav-links">
          <a href="#transition">Transition</a>
          <a href="#banda">La banda</a>
          <a href="#escuchar">Escuchar</a>
        </div>
        <a className="nav-social" href="https://www.instagram.com/the.horizon.problem/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </nav>

      <section className="hero" id="inicio">
        <img className="hero-photo" src="/media/hero.webp" alt="The Horizon Problem a contraluz" />
        <div className="hero-wash" />
        <div className="noise" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-content">
          <p className="kicker">Buenos Aires · Argentina</p>
          <img className="wordmark" src="/media/logotipo.png" alt="The Horizon Problem" />
          <h1>Beauty dissolves<br />into <em>noise.</em></h1>
        </div>
        <a className="scroll" href="#transition"><span>Scroll to transition</span><i /></a>
      </section>

      <section className="manifesto" id="transition">
        <div className="manifesto-symbol"><img src="/media/isotipo.png" alt="Isotipo de The Horizon Problem" /></div>
        <div className="manifesto-copy">
          <p className="section-label">01 / The next form</p>
          <blockquote>“You better save your words<br />you can’t control me”</blockquote>
          <p className="manifesto-note">Entre la forma y su disolución. Entre la violencia y el aire. The Horizon Problem construye canciones donde lo pesado, lo progresivo y lo ambiental comparten un mismo horizonte.</p>
        </div>
      </section>

      <section className="release">
        <div className="release-visual">
          <img className="release-cover" src="/media/transition-cover.png" alt="Portada de Transition" />
          <div className="release-haze" />
          <span className="vertical-type">TRANSMISSION / 2026</span>
        </div>
        <div className="release-copy">
          <p className="section-label">02 / Próximo EP</p>
          <p className="overline">A process in five movements</p>
          <h2>TRANS<br /><i>ITION</i></h2>
          <ol className="tracklist">
            {tracks.map((track, index) => <li key={track}><span>0{index + 1}</span><strong>{track}</strong><i /></li>)}
          </ol>
          <p className="release-note">Cinco canciones sobre conflicto, ruptura y transformación.</p>
        </div>
      </section>

      <section className="members" id="banda">
        <header className="members-head">
          <div><p className="section-label">03 / The bodies behind the sound</p><h2>FIVE<br /><i>FIGURES</i></h2></div>
          <p>Cinco músicos, una arquitectura de tensión, textura y movimiento.</p>
        </header>
        <div className="members-grid">
          {members.map((member, index) => (
            <article className={`member ${member.tone}`} key={member.name}>
              <img src={member.image} alt={`${member.name}, ${member.role}`} />
              <div className="member-fog" />
              <span>0{index + 1}</span>
              <div><p>{member.role}</p><h3>{member.name}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="listen" id="escuchar">
        <div className="listen-copy">
          <p className="section-label">04 / First transmission</p>
          <h2>ENOUGH<span>?</span></h2>
          <p>La primera señal ya está afuera.</p>
          <div className="actions">
            <a className="primary" href="https://www.youtube.com/watch?v=v1l7AvF8sb8" target="_blank" rel="noreferrer">Ver en YouTube <span>↗</span></a>
            <a href="https://www.youtube.com/@TheHorizonProblemBA" target="_blank" rel="noreferrer">Canal oficial <span>↗</span></a>
          </div>
        </div>
        <div className="video-shell">
          <iframe src="https://www.youtube-nocookie.com/embed/v1l7AvF8sb8" title="Enough? — The Horizon Problem" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </section>

      <section className="closing">
        <img src="/media/band-room.webp" alt="The Horizon Problem" />
        <div className="closing-copy"><p>Not everything beyond the horizon<br />is meant to be understood.</p></div>
      </section>

      <footer>
        <img src="/media/logotipo.png" alt="The Horizon Problem" />
        <div><a href="https://www.instagram.com/the.horizon.problem/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/@TheHorizonProblemBA" target="_blank" rel="noreferrer">YouTube ↗</a></div>
        <p>Buenos Aires · 2026<br />All signals remain.</p>
      </footer>
    </main>
  );
}
