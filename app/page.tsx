/* oxlint-disable next/no-img-element -- Hand-authored responsive assets use explicit dimensions and sources. */
import Link from 'next/link';

type SystemBriefProps = {
  title: string;
  category: string;
  summary: string;
  proof: string;
  flow: string[];
  href: string;
  source: string;
  secondarySource?: { label: string; href: string };
};

function SystemBrief({
  title,
  category,
  summary,
  proof,
  flow,
  href,
  source,
  secondarySource,
}: SystemBriefProps) {
  return (
    <article className="system-brief">
      <div className="brief-top">
        <span>SYSTEM BRIEF</span>
        <span>{category}</span>
      </div>
      <h3>
        <Link href={href}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <div className="brief-proof">
        <span>PROOF</span>
        <strong>{proof}</strong>
      </div>
      <ol className="brief-flow" aria-label={`${title} system flow`}>
        {flow.map((step, index) => (
          <li key={step}>
            {step}
            {index < flow.length - 1 && <i aria-hidden="true">→</i>}
          </li>
        ))}
      </ol>
      <div className="brief-links">
        <Link href={href}>Case study →</Link>
        <a href={source} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        {secondarySource && (
          <a href={secondarySource.href} target="_blank" rel="noreferrer">
            {secondarySource.label} ↗
          </a>
        )}
      </div>
    </article>
  );
}

const moreWork = [
  [
    'Skill Tree',
    'AI learning tool',
    'Goals become prerequisite graphs, resources, quests, and progress.',
    'https://github.com/RealWooblay/skill-tree',
  ],
  [
    'Frontier Rover',
    'Current physical build',
    'A measured path through Jetson, sensing, control, and autonomy.',
    'https://github.com/RealWooblay/frontier-rover',
  ],
  [
    'Stables Yield Optimiser',
    'Market intelligence',
    'Risk-adjusted Solana yield ranking, leverage simulation, and allocation.',
    'https://github.com/RealWooblay/stables-yield-optimiser',
  ],
  [
    'USX Agent Pong',
    'Autonomous transactions',
    'Agents settle game outcomes through tool use, swaps, and transfers.',
    'https://github.com/RealWooblay/usx-agent-pingpong',
  ],
  [
    'Solstice Pay',
    'Payments prototype',
    'Stablecoin payments built around embedded wallets and readable recipients.',
    'https://github.com/RealWooblay/solstice-pay',
  ],
];

export default function Home() {
  return (
    <main className="home-page">
      <a className="skip-link" href="#selected">
        Skip to selected work
      </a>
      <header className="topbar">
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            WOOBLAY<span>●</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#selected">Selected work</a>
            <a href="#index">More work</a>
            <a className="nav-direction" href="#direction">
              Direction
            </a>
            <a
              href="https://github.com/RealWooblay"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-v2 shell" id="top">
        <div className="hero-main">
          <p className="overline">
            <span>SOFTWARE + AI SYSTEMS ENGINEER</span>
            <span>BUILDING ACROSS THE STACK</span>
          </p>
          <h1>
            I build systems
            <br />
            that have to <em>work.</em>
          </h1>
          <p className="hero-deck">
            Real-time products, agent infrastructure, multiplayer systems, and
            physical AI.
          </p>
          <div className="hero-links">
            <a className="button button-signal" href="#selected">
              See the strongest work ↓
            </a>
            <a
              className="text-link"
              href="https://github.com/RealWooblay"
              target="_blank"
              rel="noreferrer"
            >
              Inspect the code ↗
            </a>
          </div>
        </div>
        <aside className="scope-panel" aria-label="Engineering scope">
          <p className="panel-label">CAPABILITY MAP</p>
          <div>
            <span>01</span>
            <strong>Agent systems</strong>
            <p>Policy, approvals, tools, audit trails.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Products in motion</strong>
            <p>Real-time state, markets, multiplayer.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Software in the world</strong>
            <p>Jetson, vision, projection, autonomy.</p>
          </div>
        </aside>
        <ul className="proof-bar" aria-label="Selected proof">
          <li>
            <strong>02</strong>
            <span>hackathon winners</span>
          </li>
          <li>
            <strong>03</strong>
            <span>merged viem contributions</span>
          </li>
          <li>
            <strong>31.6 FPS</strong>
            <span>Jetson TensorRT inference</span>
          </li>
        </ul>
      </section>

      <section className="work-section shell" id="selected">
        <div className="section-heading">
          <div>
            <span>SELECTED WORK</span>
            <span>START HERE</span>
          </div>
          <h2>
            Three capabilities.
            <br />
            Nine projects.
          </h2>
          <p>Source-linked case studies with concrete technical proof.</p>
        </div>

        <article className="media-case golazo-case">
          <div className="case-media golazo-media">
            <div className="media-caption">
              <span>REAL PRODUCT CAPTURE</span>
              <span>MOBILE / LIVE MARKET</span>
            </div>
            <video
              muted
              controls
              playsInline
              preload="none"
              poster="/media/golazo/screen-live-match.svg"
              aria-label="Golazo live market product capture"
            >
              <source
                src="/media/golazo/golazo_hero_vertical.mp4"
                type="video/mp4"
              />
            </video>
            <img
              className="golazo-screen"
              src="/media/golazo/screen-payout.svg"
              alt="Golazo payout screen"
              width="1242"
              height="2208"
            />
          </div>
          <div className="case-copy">
            <p className="project-meta">
              <span>FLAGSHIP 01</span>
              <span>REAL-TIME PRODUCT</span>
            </p>
            <h3>Golazo</h3>
            <p className="case-summary">
              A live event-market engine built for the seconds when a match
              changes.
            </p>
            <p className="case-proof">
              <span>WORKING PROOF</span> 12 passing core tests · strict
              typecheck · complete mobile/feed/market code path · real product
              capture.
            </p>
            <div className="case-actions">
              <Link className="button button-dark" href="/work/golazo">
                Case study →
              </Link>
              <a
                className="text-link dark-link"
                href="https://github.com/RealWooblay/golazo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </article>

        <article className="media-case wisp-case">
          <div className="case-copy dark-copy">
            <p className="project-meta">
              <span>FLAGSHIP 02</span>
              <span>PHYSICAL AI / CURRENT</span>
            </p>
            <h3>WISP Lab</h3>
            <p className="case-summary">
              A Jetson-powered spatial computer that senses people, renders for
              their viewpoint, and maps interaction onto physical surfaces.
            </p>
            <p className="case-proof">
              <span>MEASURED PROOF</span> 31.6 FPS TensorRT detection · pose
              stream · head tracking · hand input · four-point calibration.
            </p>
            <div className="case-actions">
              <Link className="button button-light" href="/work/wisp-lab">
                Case study →
              </Link>
              <a
                className="text-link"
                href="https://github.com/RealWooblay/wisp-lab"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
          <figure className="case-media wisp-media">
            <picture>
              <source
                media="(max-width: 760px)"
                srcSet="/media/wisp/wisp-hero-real-960.webp"
              />
              <img
                src="/media/wisp/wisp-hero-real-1600.webp"
                alt="WISP spatial computer projecting an interface onto a physical surface"
                width="1600"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption>
              <span>PRODUCT DIRECTION</span>
              <span>CONCEPT RENDER — RUNTIME BENCHMARKED ON JETSON</span>
            </figcaption>
          </figure>
        </article>

        <article className="agent-case">
          <div className="agent-intro">
            <p className="project-meta">
              <span>FLAGSHIP 03</span>
              <span>AGENT INFRASTRUCTURE</span>
            </p>
            <h3>Agents that can act—without hiding the consequences.</h3>
            <p>
              Two related systems: one controls the execution boundary; the
              other makes plans, approvals, and outcomes visible to an operator.
            </p>
          </div>
          <div className="agent-products">
            <section>
              <div className="agent-name">
                <span>EXECUTION LAYER</span>
                <strong>Wooblay AI</strong>
              </div>
              <p>
                Policy gates, isolated credentials, human approval, controlled
                execution, and tamper-evident receipts.
              </p>
              <p className="record-label">REPRESENTATIVE CONTROL RECORD</p>
              <dl
                className="decision-record"
                aria-label="Example Wooblay AI policy decision"
              >
                <div>
                  <dt>INTENT</dt>
                  <dd>write:repository</dd>
                </div>
                <div>
                  <dt>POLICY</dt>
                  <dd className="review">REVIEW</dd>
                </div>
                <div>
                  <dt>APPROVAL</dt>
                  <dd>REQUIRED</dd>
                </div>
                <div>
                  <dt>OUTPUT</dt>
                  <dd>RECEIPT #042</dd>
                </div>
              </dl>
              <div className="brief-links">
                <Link href="/work/wooblay-ai">Case study →</Link>
                <a
                  href="https://github.com/RealWooblay/WooblayAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </section>
            <section>
              <div className="agent-name">
                <span>OPERATOR LAYER</span>
                <strong>AI Action OS</strong>
              </div>
              <p>
                A generative interface with conductor, auditor, executor,
                approval-gated tools, and an event-sourced ledger.
              </p>
              <p className="record-label">REPRESENTATIVE EXECUTION LEDGER</p>
              <ol
                className="ledger-record"
                aria-label="AI Action OS execution ledger"
              >
                <li>
                  <span>01</span>
                  <strong>PLAN PROPOSED</strong>
                  <i>RECORDED</i>
                </li>
                <li>
                  <span>02</span>
                  <strong>AUDIT COMPLETE</strong>
                  <i>RECORDED</i>
                </li>
                <li>
                  <span>03</span>
                  <strong>HUMAN APPROVAL</strong>
                  <i>PENDING</i>
                </li>
              </ol>
              <div className="brief-links">
                <Link href="/work/ai-action-os">Case study →</Link>
                <a
                  href="https://github.com/RealWooblay/ai-ui"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </section>
          </div>
        </article>

        <section
          className="validation-section"
          aria-labelledby="validation-heading"
        >
          <div className="validation-copy">
            <p className="project-meta">
              <span>EXTERNAL VALIDATION</span>
            </p>
            <h3 id="validation-heading">
              Two wins.
              <br />
              Three merged PRs.
            </h3>
            <p>Awards and upstream contributions.</p>
          </div>
          <Link
            className="validation-card bubble-card"
            href="/work/bubble-wars"
          >
            <img
              src="/media/bubblewars/banner.webp"
              alt="Bubble Wars project banner"
              width="1792"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <div>
              <span>ETHGLOBAL BANGKOK · WINNER</span>
              <strong>Bubble Wars</strong>
              <p>
                Telegram strategy game with verified identity, raids, indexed
                state, and contracts.
              </p>
              <i>Case study →</i>
            </div>
          </Link>
          <Link className="validation-card meridian-card" href="/work/meridian">
            <ol className="evidence-chain" aria-label="MERIDIAN evidence chain">
              <li>GENOME</li>
              <i aria-hidden="true">→</i>
              <li>SOURCE</li>
              <i aria-hidden="true">→</i>
              <li>GUIDANCE</li>
            </ol>
            <div>
              <span>HACKATHON WINNER</span>
              <strong>MERIDIAN</strong>
              <p>
                Governed pharmacogenomics with source-bound, constrained medical
                AI.
              </p>
              <i>Case study →</i>
            </div>
          </Link>
          <div className="validation-card viem-card">
            <div>
              <span>OPEN SOURCE · MERGED</span>
              <strong>viem</strong>
              <p>
                XR Sepolia, XR One, and XR One chain corrections accepted
                upstream.
              </p>
            </div>
            <div className="pr-links">
              <a
                href="https://github.com/wevm/viem/pull/2444"
                target="_blank"
                rel="noreferrer"
              >
                #2444 ↗
              </a>
              <a
                href="https://github.com/wevm/viem/pull/3116"
                target="_blank"
                rel="noreferrer"
              >
                #3116 ↗
              </a>
              <a
                href="https://github.com/wevm/viem/pull/3309"
                target="_blank"
                rel="noreferrer"
              >
                #3309 ↗
              </a>
            </div>
          </div>
        </section>

        <section
          className="supporting-section"
          aria-labelledby="supporting-heading"
        >
          <div className="subsection-heading">
            <span>MORE CASE STUDIES</span>
            <h3 id="supporting-heading">Architecture-first prototypes.</h3>
            <p>
              The evidence is in the working boundary: what enters, what
              changes, and what the system can prove.
            </p>
          </div>
          <div className="brief-grid">
            <SystemBrief
              title="Bender"
              category="COLLABORATIVE UNITY"
              summary="A multiplayer prototype with lobby matchmaking and client handoff into headless dedicated sessions."
              proof="The repository implements a stable lobby, dynamic session ports, process lifecycle, and TargetRpc handoff."
              flow={['CLIENT', 'LOBBY', 'SESSION', 'HANDOFF']}
              href="/work/bender"
              source="https://github.com/RealWooblay/bender"
            />
            <SystemBrief
              title="MiniTown AI"
              category="AI NPC WORLD"
              summary="A Unity simulation driven by a stateful agent service for lore, dialogue, and world events."
              proof="Two public repos complete the loop from world state to an executable structured event."
              flow={['WORLD', 'AGENT', 'EVENT', 'NPC']}
              href="/work/minitown-ai"
              source="https://github.com/RealWooblay/minitown-ai-game"
              secondarySource={{
                label: 'Agent service',
                href: 'https://github.com/RealWooblay/ai-npcs-cdp',
              }}
            />
            <SystemBrief
              title="Prove Me Wrong"
              category="PREDICTION SYSTEM"
              summary="Claims captured in the browser, investigated by evidence agents, and settled in contracts."
              proof="Browser extension + FastAPI resolution agents + Solidity settlement."
              flow={['CLAIM', 'MARKET', 'EVIDENCE', 'SETTLE']}
              href="/work/prove-me-wrong"
              source="https://github.com/RealWooblay/prove-me-wrong"
            />
          </div>
        </section>
      </section>

      <section className="index-section" id="index">
        <div className="shell">
          <div className="index-heading">
            <span>EXPERIMENT INDEX</span>
            <h2>
              Focused builds.
              <br />
              One idea at a time.
            </h2>
          </div>
          <div className="project-index">
            {moreWork.map(([title, category, description, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={title}>
                <strong>{title}</strong>
                <span className="index-category">{category}</span>
                <p>{description}</p>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="direction-section" id="direction">
        <div className="shell direction-grid">
          <div>
            <span className="direction-label">CURRENT DIRECTION</span>
            <h2>Now focused on edge computing, autonomy, and physical AI.</h2>
          </div>
          <ol className="trajectory-line" aria-label="Technical trajectory">
            <li>SOFTWARE</li>
            <i aria-hidden="true">→</i>
            <li>INFRASTRUCTURE</li>
            <i aria-hidden="true">→</i>
            <li>AGENTS</li>
            <i aria-hidden="true">→</i>
            <li className="trajectory-current">MACHINES</li>
          </ol>
        </div>
      </section>

      <footer className="footer-v2">
        <div className="shell">
          <div>
            <span>FULL PROFILE</span>
            <h2>See how the systems are built.</h2>
            <p>
              Source, contribution history, and the rest of the project archive.
            </p>
          </div>
          <a
            className="button button-dark"
            href="https://github.com/RealWooblay"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub profile ↗
          </a>
          <div className="footer-meta">
            <span>WOOBLAY / 2026</span>
            <span>SYSTEMS · AI · MACHINES</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
