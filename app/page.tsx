/* oxlint-disable next/no-img-element -- Hand-authored responsive assets use explicit dimensions. */
/* oxlint-disable next/no-html-link-for-pages -- Standard anchors avoid Vinext RSC prefetch runtime errors. */

type SystemTileProps = {
  title: string;
  category: string;
  line: string;
  flow: string[];
  href: string;
  source: string;
  secondarySource?: { label: string; href: string };
};

function SystemTile({
  title,
  category,
  line,
  flow,
  href,
  source,
  secondarySource,
}: SystemTileProps) {
  return (
    <article className="system-tile">
      <span className="tile-category">{category}</span>
      <h3>
        <a href={href}>{title}</a>
      </h3>
      <p>{line}</p>
      <ol className="tile-flow" aria-label={`${title} system flow`}>
        {flow.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="tile-links">
        <a href={href}>Open project ↗</a>
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
    'Learning systems',
    'https://github.com/RealWooblay/skill-tree',
  ],
  [
    'Stables Yield Optimiser',
    'Market intelligence',
    'https://github.com/RealWooblay/stables-yield-optimiser',
  ],
  [
    'USX Agent Pong',
    'Autonomous transactions',
    'https://github.com/RealWooblay/usx-agent-pingpong',
  ],
  ['Solstice Pay', 'Payments', 'https://github.com/RealWooblay/solstice-pay'],
];

export default function Home() {
  return (
    <main className="home-page">
      <a className="skip-link" href="#featured">
        Skip to selected work
      </a>

      <section className="portfolio-intro shell" id="top">
        <h1>
          Building technology for a future measured by how fully people can
          live.
        </h1>
        <aside className="ai-note" aria-label="What Jack’s AI says about him">
          <span>FROM MY AI</span>
          <p>
            Jack is impatient with anything that looks finished before it feels
            true.
          </p>
        </aside>
      </section>

      <section className="work-v3" id="featured">
        <div className="shell selected-heading">
          <h2>Selected work</h2>
        </div>

        <div className="shell featured-grid">
          <article className="feature-card wisp-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>NVIDIA JETSON</span>
                <span>ORIN NANO SUPER</span>
              </p>
              <h3>WISP Lab</h3>
              <p>
                A Jetson vision stack for turning physical surfaces into
                responsive interfaces.
              </p>
              <div className="feature-links">
                <a href="/work/wisp-lab">Project ↗</a>
                <a
                  href="https://github.com/RealWooblay/wisp-lab"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="wisp-scene" aria-label="WISP measured lab pipeline">
              <div className="wisp-grid-plane" />
              <div className="wisp-layer camera-layer">
                <span>CSI INPUT</span>
                <strong>IMX708</strong>
              </div>
              <div className="wisp-layer vision-layer">
                <span>NVIDIA JETSON</span>
                <strong>14.8 MS</strong>
                <small>FP16 · ISOLATED</small>
              </div>
              <div className="wisp-layer tracking-layer">
                <span>YOLO POSE · 8.6 FPS</span>
                <strong>HEAD + WRISTS</strong>
              </div>
              <div className="wisp-layer surface-layer">
                <span>SPATIAL OUTPUT</span>
                <strong>OFF AXIS + 4 POINT</strong>
              </div>
            </div>
          </article>

          <article className="feature-card rover-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>ROBOTICS</span>
                <span>ACTIVE BUILD</span>
              </p>
              <h3>Frontier Rover</h3>
              <p>
                A safety first 4WD robotics platform with a verified Raspberry
                Pi control layer and staged NVIDIA Jetson perception.
              </p>
              <div className="feature-links">
                <a href="/work/frontier-rover">Project ↗</a>
                <a
                  href="https://github.com/RealWooblay/frontier-rover"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <div
              className="rover-scene"
              aria-label="Frontier Rover verified and planned system layers"
            >
              <div className="rover-grid-plane" />
              <div className="rover-layer rover-jetson">
                <span>PLANNED PERCEPTION</span>
                <strong>JETSON ORIN NANO SUPER</strong>
                <small>VISION · MAPPING · PLANNING</small>
              </div>
              <div className="rover-layer rover-pi">
                <span>VERIFIED CONTROL LAYER</span>
                <strong>RASPBERRY PI 4</strong>
                <small>ARM64 · NETWORK · CLEAN SHUTDOWN</small>
              </div>
              <div className="rover-layer rover-io">
                <span>STAGED HARDWARE</span>
                <strong>MOTORS + SENSORS</strong>
                <small>BOUNDED COMMANDS · WATCHDOG</small>
              </div>
              <ol className="rover-milestones" aria-label="Rover milestones">
                <li className="is-verified">M0 · VERIFIED</li>
                <li>M1 · POWER</li>
                <li>M2 · MOTION</li>
              </ol>
            </div>
          </article>

          <article className="feature-card golazo-feature">
            <div
              className="golazo-scene"
              aria-label="Golazo live market product capture"
            >
              <video
                muted
                controls
                playsInline
                preload="metadata"
                poster="/media/golazo/screen-live-match.svg"
                aria-label="Golazo live market product video"
                width="1080"
                height="1920"
              >
                <source
                  src="/media/golazo/golazo_hero_vertical.mp4"
                  type="video/mp4"
                />
              </video>
              <img
                src="/media/golazo/screen-payout.svg"
                alt="Golazo payout screen"
                width="1242"
                height="2208"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="feature-copy">
              <p className="project-meta">
                <span>SHIPPED TO PRODUCTION</span>
                <span>REAL USERS</span>
              </p>
              <h3>Golazo</h3>
              <p>
                A live sports market that went from prototype to production and
                into real users’ hands.
              </p>
              <div className="feature-links">
                <a href="/work/golazo">Project ↗</a>
                <a
                  href="https://github.com/RealWooblay/golazo"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>

          <article className="feature-card firewall-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>AGENT SECURITY</span>
                <span>SOLO BUILD</span>
              </p>
              <h3>Agent Firewall</h3>
              <p>
                A control plane that keeps credentials away from agents and
                risky actions behind policy and approval.
              </p>
              <div className="feature-links">
                <a href="/work/agent-execution-firewall">Project ↗</a>
                <a
                  href="https://github.com/RealWooblay/WooblayAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <div
              className="firewall-scene"
              aria-label="Agent Firewall command center product capture"
            >
              <img
                src="/media/agent-firewall/dashboard.png"
                alt="Agent Firewall command center showing gateway, credential, policy, approval and audit controls"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <span>REAL PRODUCT CAPTURE · COMMAND CENTER</span>
            </div>
          </article>

          <article className="feature-card meridian-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>HACKATHON WINNER</span>
                <span>GOVERNED GENOMICS</span>
              </p>
              <h3>MERIDIAN</h3>
              <p>
                A privacy first pharmacogenomics pipeline that binds guidance to
                evidence and explicit limits.
              </p>
              <div className="feature-links">
                <a href="/work/meridian">Project ↗</a>
                <a
                  href="https://github.com/RealWooblay/medhack"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <div
              className="meridian-scene"
              aria-label="Jack presenting MERIDIAN’s governed genomics system"
            >
              <div className="meridian-pitch-frame">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/media/meridian/jack-pitch-poster.jpg"
                  aria-label="Jack presenting MERIDIAN at Stone and Chalk"
                  width="720"
                  height="1280"
                >
                  <source
                    src="/media/meridian/jack-pitch.mp4"
                    type="video/mp4"
                  />
                  <track
                    kind="captions"
                    src="/media/meridian/jack-pitch.en.vtt"
                    srcLang="en"
                    label="English"
                    default
                  />
                </video>
                <span>JACK’S PITCH · 01:44</span>
              </div>
              <div className="meridian-pitch-index">
                <span>THE SYSTEM</span>
                <ol>
                  <li>
                    <i>01</i>
                    <strong>GENOME</strong>
                  </li>
                  <li>
                    <i>02</i>
                    <strong>EVIDENCE</strong>
                  </li>
                  <li>
                    <i>03</i>
                    <strong>GUIDANCE</strong>
                  </li>
                </ol>
              </div>
            </div>
          </article>

          <article className="feature-card pmw-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>ETHGLOBAL CANNES</span>
                <span>FLARE 3RD PLACE</span>
              </p>
              <h3>Prove Me Wrong</h3>
              <p>Tweet a claim. Take a side. Settle it with evidence.</p>
              <div className="feature-links">
                <a href="/work/prove-me-wrong">Project ↗</a>
                <a
                  href="https://ethglobal.com/showcase/prove-me-wrong-2j4ks"
                  target="_blank"
                  rel="noreferrer"
                >
                  ETHGlobal ↗
                </a>
              </div>
            </div>
            <div
              className="pmw-scene"
              aria-label="Real Prove Me Wrong product capture"
            >
              <img
                src="/media/prove-me-wrong/market-wallet.jpg"
                alt="Prove Me Wrong market embedded in X with a Flare wallet approval"
                width="1590"
                height="1244"
                loading="lazy"
                decoding="async"
              />
              <span>REAL HACKATHON BUILD · INLINE MARKET + FLARE</span>
            </div>
          </article>

          <article className="feature-card bubble-feature">
            <div className="bubble-pitch">
              <iframe
                src="https://www.youtube-nocookie.com/embed/uPW20IUHC1Y?start=4823&end=4890&rel=0"
                title="Jack presenting Bubble Wars at ETHGlobal Bangkok"
                width="1280"
                height="720"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <span>JACK’S STAGE SEGMENT · ETHGLOBAL BANGKOK</span>
            </div>
            <div className="feature-copy">
              <p className="project-meta">
                <span>ETHGLOBAL BANGKOK WINNER</span>
                <span>4 SPONSOR PRIZES</span>
              </p>
              <h3>Bubble Wars</h3>
              <p>Invite allies. Raid rivals. Grow the biggest bubble.</p>
              <div className="feature-links">
                <a href="/work/bubble-wars">Project ↗</a>
                <a
                  href="https://ethglobal.com/showcase/bubblewars-rgjpk"
                  target="_blank"
                  rel="noreferrer"
                >
                  ETHGlobal ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="systems-v3" id="systems">
        <div className="shell simple-heading">
          <h2>More work</h2>
        </div>
        <div className="shell system-tile-grid">
          <SystemTile
            title="AI Action OS"
            category="OPERATOR SYSTEM"
            line="Plans and consequences stay visible before tools run."
            flow={['PLAN', 'AUDIT', 'APPROVE', 'EXECUTE']}
            href="/work/ai-action-os"
            source="https://github.com/RealWooblay/ai-ui"
          />
          <SystemTile
            title="MiniTown AI"
            category="UNITY WORLD"
            line="A stateful agent service changes a live game world."
            flow={['WORLD', 'AGENT', 'EVENT', 'NPC']}
            href="/work/minitown-ai"
            source="https://github.com/RealWooblay/minitown-ai-game"
            secondarySource={{
              label: 'Agent service',
              href: 'https://github.com/RealWooblay/ai-npcs-cdp',
            }}
          />
          <SystemTile
            title="Bender"
            category="UNITY MULTIPLAYER"
            line="A lobby hands clients into dedicated game sessions."
            flow={['CLIENT', 'LOBBY', 'SESSION', 'HANDOFF']}
            href="/work/bender"
            source="https://github.com/RealWooblay/bender"
          />
        </div>

        <div className="shell archive-block" id="index">
          <span>Archive</span>
          <div className="project-index-v3">
            {moreWork.map(([title, category, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={title}>
                <strong>{title}</strong>
                <span>{category}</span>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="oss-strip">
        <div className="shell oss-grid">
          <span>OPEN SOURCE</span>
          <p>
            <strong>3 merged viem pull requests</strong> added XR Sepolia and XR
            One support.
          </p>
          <div className="oss-links" aria-label="Merged viem pull requests">
            <a
              href="https://github.com/wevm/viem/pull/2444"
              target="_blank"
              rel="noreferrer"
            >
              #2444
            </a>
            <a
              href="https://github.com/wevm/viem/pull/3116"
              target="_blank"
              rel="noreferrer"
            >
              #3116
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

      <footer className="footer-v3">
        <div className="shell">
          <span>SOFTWARE / AI / ROBOTICS</span>
          <a
            href="https://github.com/RealWooblay"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
