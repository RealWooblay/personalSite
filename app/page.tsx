import { projectBySlug } from '@/lib/projects';

const proof = [
  ["02", "hackathon wins"],
  ["14+", "systems shipped"],
  ["03", "merged viem PRs"],
];

const wooblay = projectBySlug['wooblay-ai'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wooblay home">WBL<span>·</span>01</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#lab">Lab</a>
          <a href="#trajectory">Direction</a>
          <a href="https://github.com/RealWooblay" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-rail" aria-hidden="true">
          <span>SOFTWARE</span><i /><span>INFRASTRUCTURE</span><i />
          <span>AI SYSTEMS</span><i /><span>MACHINES</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> Systems / AI / Physical computing</p>
          <h1>I build systems<br />that have to <em>work.</em></h1>
          <p className="hero-intro">
            Wooblay is a software and AI systems engineer building across infrastructure,
            intelligent products, agent tooling, and increasingly the physical world.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">Explore the work <span>↓</span></a>
            <a className="quiet-link" href="https://github.com/RealWooblay" target="_blank" rel="noreferrer">View source ↗</a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Selected evidence">
          <div className="proof-head"><span>BUILD INDEX</span><span>LIVE / 2026</span></div>
          <div className="proof-grid">
            {proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="proof-now"><span className="pulse" /><p>Now building edge AI, autonomous systems, and spatial computing.</p></div>
        </aside>
        <div className="hero-marker" aria-hidden="true">W / 001</div>
      </section>

      <section className="featured" id="work">
        <div className="section-index"><span>SELECTED WORK</span><span>01 / GOLAZO</span></div>
        <div className="project-grid">
          <div className="project-copy">
            <p className="project-kicker">REAL-TIME SYSTEMS · MOBILE · SOLANA</p>
            <h2>Golazo</h2>
            <p className="project-lede">A live event-market engine built for the seconds when a match changes.</p>
            <dl className="project-facts">
              <div><dt>WHAT</dt><dd>React Native client, AI-assisted feed watcher, parimutuel engine, and Solana settlement.</dd></div>
              <div><dt>HARD PART</dt><dd>Keeping event detection, market state, pricing, and settlement coherent while the game is moving.</dd></div>
              <div><dt>RESULT</dt><dd>A working end-to-end product with real interface, payout flow, tests, and launch media.</dd></div>
            </dl>
            <div className="link-row">
              <a className="source-link" href="/work/golazo">Explore project <span>→</span></a>
              <a className="source-link" href="https://github.com/RealWooblay/golazo" target="_blank" rel="noreferrer">Source <span>↗</span></a>
            </div>
          </div>
          <div className="golazo-stage">
            <div className="video-shell">
              <div className="media-meta"><span>PRODUCT CAPTURE</span><span>00:06 LOOP</span></div>
              <video autoPlay muted loop playsInline aria-label="Golazo mobile product demonstration">
                <source src="/media/golazo/golazo_hero_vertical.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="screen-shell screen-a"><img src="/media/golazo/screen-live-match.svg" alt="Golazo live match market interface" /></div>
            <div className="screen-shell screen-b"><img src="/media/golazo/screen-payout.svg" alt="Golazo payout interface" /></div>
          </div>
        </div>
      </section>

      <section className="firewall-feature">
        <div className="section-index"><span>AGENT INFRASTRUCTURE</span><span>02 / WOOBLAY AI</span></div>
        <div className="firewall-grid">
          <div>
            <p className="project-kicker lime">POLICY · CREDENTIALS · EXECUTION</p>
            <h2>{wooblay.title}</h2>
            <p className="project-lede">{wooblay.description}</p>
            <a className="source-link" href="/work/wooblay-ai">Open system notes <span>→</span></a>
          </div>
          <div className="execution-diagram" aria-label="Wooblay AI execution architecture">
            {wooblay.architecture.map((node, index) => (
              <div className={index === 1 || index === 2 ? 'gate-node' : ''} key={node}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{node}</strong>{index < wooblay.architecture.length - 1 && <i>↓</i>}
              </div>
            ))}
            <p>Nothing acts without crossing the boundary.</p>
          </div>
        </div>
      </section>

      <section className="wins-section">
        <div className="section-index"><span>BUILT UNDER PRESSURE</span><span>03 / HACKATHON WINS</span></div>
        <div className="wins-intro">
          <h2>Two clocks.<br />Two working systems.</h2>
          <p>Not pitch decks. Shipped prototypes with live flows, technical depth, and results.</p>
        </div>
        <article className="bubble-feature">
          <a className="bubble-media" href="https://www.youtube.com/watch?v=uPW20IUHC1Y&t=4902s" target="_blank" rel="noreferrer" aria-label="Watch the Bubble Wars ETHGlobal presentation">
            <img src="/media/bubblewars/banner.png" alt="Bubble Wars, an ETHGlobal Bangkok winning project" />
            <span className="play-mark">PLAY PRESENTATION ↗</span>
          </a>
          <div className="win-copy">
            <p className="project-kicker pink">ETHGLOBAL BANGKOK · WINNER</p>
            <h3>Bubble Wars</h3>
            <p>A Telegram-native on-chain strategy game combining verified identity, factions, referrals, randomised raids, indexed state, and a trusted AI runtime.</p>
            <div className="link-row"><a className="source-link" href="/work/bubble-wars">Project story →</a><a className="source-link" href="https://github.com/RealWooblay/bubblewars" target="_blank" rel="noreferrer">Source ↗</a></div>
          </div>
        </article>
        <article className="meridian-feature">
          <div className="genome-visual" aria-label="MERIDIAN governed genome processing architecture">
            <span className="gene-axis">GENOME / EVIDENCE / GUIDANCE</span>
            {['A', 'C', 'G', 'T', 'G', 'A', 'C', 'T', 'A', 'G', 'C', 'T'].map((base, index) => <i key={`${base}-${index}`}>{base}</i>)}
            <div className="constraint-band">SOURCE-BOUND GENERATION</div>
          </div>
          <div className="win-copy">
            <p className="project-kicker blue">PHARMACOGENOMICS · WINNER</p>
            <h3>MERIDIAN</h3>
            <p>A privacy-first pharmacogenomics system with governed genome processing, evidence-bound guidance, and constrained medical AI.</p>
            <div className="link-row"><a className="source-link" href="/work/meridian">Project story →</a><a className="source-link" href="https://github.com/RealWooblay/medhack" target="_blank" rel="noreferrer">Source ↗</a></div>
          </div>
        </article>
      </section>

      <section className="wisp-section">
        <div className="section-index"><span>PHYSICAL SYSTEMS</span><span>04 / WISP LAB</span></div>
        <div className="wisp-head">
          <div><p className="project-kicker amber">JETSON · VISION · PROJECTION</p><h2>Software,<br />off the screen.</h2></div>
          <div><p>WISP is an embedded spatial computer: perception, planning, head-tracked rendering, hand interaction, and projection mapping on ordinary surfaces.</p><a className="source-link" href="/work/wisp-lab">Enter WISP Lab →</a></div>
        </div>
        <div className="wisp-media-grid">
          <figure className="wisp-main"><img src="/media/wisp/wisp-hero-real.png" alt="WISP spatial computing device projecting an interface" /><figcaption>PRODUCT DIRECTION / PROJECTION CONCEPT</figcaption></figure>
          <figure><img src="/media/wisp/workshop-mode.png" alt="WISP workshop projection concept" /><figcaption>WORKSHOP MODE</figcaption></figure>
          <figure><img src="/media/wisp/device-prototype.png" alt="WISP physical device prototype concept" /><figcaption>DEVICE FORM</figcaption></figure>
        </div>
        <div className="benchmarks">
          <div><strong>31.6</strong><span>FPS / YOLOv8n TensorRT FP16</span></div>
          <div><strong>8.6</strong><span>FPS / POSE PERCEPTION</span></div>
          <div><strong>04</strong><span>POINT PROJECTION CALIBRATION</span></div>
          <div><strong>NOW</strong><span>PHYSICAL PROJECTOR VALIDATION</span></div>
        </div>
      </section>

      <section className="worlds-section">
        <div className="section-index"><span>GAME SYSTEMS / AGENTS</span><span>05 / WORLDS</span></div>
        <div className="worlds-grid">
          <article>
            <span className="world-number">A</span><p className="project-kicker violet">UNITY 6 · FISHNET</p><h3>Bender</h3>
            <p>A multiplayer prototype with lobby matchmaking, headless dedicated sessions, dynamic ports, and live client handoff.</p>
            <div className="network-map"><span>LOBBY :7777</span><i>→</i><span>SESSION MANAGER</span><i>→</i><span>GAME :DYNAMIC</span></div>
            <a className="source-link" href="/work/bender">Inspect the system →</a>
          </article>
          <article>
            <span className="world-number">B</span><p className="project-kicker green">UNITY · LANGGRAPH · AI NPCS</p><h3>MiniTown AI</h3>
            <p>A Unity world whose lore, events, dialogue, and NPC actions are generated by a stateful agent backend.</p>
            <div className="network-map"><span>WORLD STATE</span><i>→</i><span>AGENT SERVICE</span><i>→</i><span>STRUCTURED EVENT</span></div>
            <a className="source-link" href="/work/minitown-ai">Inspect the system →</a>
          </article>
        </div>
      </section>

      <section className="lab-section" id="lab">
        <div className="section-index"><span>LAB / PROTOTYPES / ODD IDEAS</span><span>06 / ARCHIVE</span></div>
        <div className="lab-title"><h2>Built to find out.</h2><p>Smaller systems, experiments, market mechanics, learning tools, and unfinished edges. The point is range—not polish theatre.</p></div>
        <div className="lab-grid">
          <a className="lab-item lab-wide" href="/work/ai-action-os"><span>AGENT INTERFACES</span><h3>AI Action OS</h3><p>Conductor, auditor, executor, approval-gated tools, and an event-sourced ledger.</p><i>01</i></a>
          <a className="lab-item" href="/work/prove-me-wrong"><span>PREDICTION SYSTEMS</span><h3>Prove Me Wrong</h3><p>Browser claims, evidence agents, and settlement.</p><i>02</i></a>
          <a className="lab-item lab-tall" href="https://github.com/RealWooblay/skill-tree" target="_blank" rel="noreferrer"><span>LEARNING TOOLS</span><h3>Skill Tree</h3><p>Open-ended goals become visual prerequisite graphs, quests, progress, and XP.</p><i>03</i></a>
          <a className="lab-item" href="https://github.com/RealWooblay/frontier-rover" target="_blank" rel="noreferrer"><span>CURRENT BUILD</span><h3>Frontier Rover</h3><p>Jetson, sensing, control, safety, and the measured path into autonomy.</p><i>04</i></a>
          <a className="lab-item lab-wide" href="https://github.com/RealWooblay/stables-yield-optimiser" target="_blank" rel="noreferrer"><span>MARKET INTELLIGENCE</span><h3>Stables Yield Optimiser</h3><p>Risk-adjusted ranking, leverage simulation, and live Solana yield intelligence.</p><i>05</i></a>
          <a className="lab-item" href="https://github.com/RealWooblay/usx-agent-pingpong" target="_blank" rel="noreferrer"><span>AUTONOMOUS TRANSACTIONS</span><h3>USX Agent Pong</h3><p>Agents settle game outcomes through tool use, swaps, and transfers.</p><i>06</i></a>
          <a className="lab-item" href="https://github.com/RealWooblay/solstice-pay" target="_blank" rel="noreferrer"><span>PAYMENTS</span><h3>Solstice Pay</h3><p>Stablecoin payments built around embedded wallets and readable recipients.</p><i>07</i></a>
        </div>
      </section>

      <section className="opensource-section">
        <div className="section-index"><span>OPEN SOURCE</span><span>07 / WORKING IN EXISTING SYSTEMS</span></div>
        <div className="opensource-grid">
          <div><p className="project-kicker lime">VIEM · MERGED CONTRIBUTIONS</p><h2>Good code has context.</h2></div>
          <div className="pr-list">
            <a href="https://github.com/wevm/viem/pull/2444" target="_blank" rel="noreferrer"><span>PR 2444</span><strong>XR Sepolia chain support</strong><i>MERGED ↗</i></a>
            <a href="https://github.com/wevm/viem/pull/3116" target="_blank" rel="noreferrer"><span>PR 3116</span><strong>XR One chain support</strong><i>MERGED ↗</i></a>
            <a href="https://github.com/wevm/viem/pull/3309" target="_blank" rel="noreferrer"><span>PR 3309</span><strong>XR One chain corrections</strong><i>MERGED ↗</i></a>
          </div>
        </div>
      </section>

      <section className="trajectory-section" id="trajectory">
        <div className="section-index"><span>DIRECTION</span><span>08 / EXPANDING THE BOUNDARY</span></div>
        <div className="trajectory-copy">
          <p>Software became infrastructure.</p><p>Infrastructure became intelligent systems.</p><p>Intelligent systems learned to act.</p><p className="active">Now the software is meeting machines.</p>
        </div>
        <div className="trajectory-note"><span>CURRENT VECTOR</span><p>Edge computing · robotics · autonomy · manufacturing · physical AI</p></div>
      </section>

      <footer className="site-footer">
        <p className="eyebrow"><span>09</span> Open channel</p>
        <h2>Building<br />something hard?</h2>
        <p>Early teams. Real systems. Problems that refuse to stay inside one layer.</p>
        <a className="footer-link" href="https://github.com/RealWooblay" target="_blank" rel="noreferrer">Start with the work <span>↗</span></a>
        <div className="footer-base"><span>WOOBLAY / 2026</span><span>SYSTEMS · AI · MACHINES</span></div>
      </footer>
    </main>
  );
}
