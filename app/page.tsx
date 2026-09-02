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
                <span>EMBEDDED VISION</span>
                <span>NVIDIA JETSON ORIN NANO SUPER</span>
              </p>
              <h3>WISP Lab</h3>
              <p>
                Real time pose perception, head tracked rendering and spatial
                interaction on local NVIDIA hardware.
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
            <div
              className="wisp-scene"
              aria-label="WISP pose perception and measured Jetson performance"
            >
              <div className="wisp-word" aria-hidden="true">
                PERCEPTION
                <br />
                BECOMES
                <br />
                INTERFACE
              </div>
              <img
                className="wisp-pose"
                src="/media/wisp/pose-tracker.png"
                alt="Conceptual 3D visualization of WISP pose tracking"
                width="1024"
                height="1536"
                loading="lazy"
                decoding="async"
              />
              <div className="wisp-orbit orbit-one" aria-hidden="true" />
              <div className="wisp-orbit orbit-two" aria-hidden="true" />
              <div className="wisp-metric metric-detect">
                <span>YOLOV8N · TENSORRT FP16</span>
                <strong>31.6 FPS</strong>
              </div>
              <div className="wisp-metric metric-pose">
                <span>POSE PERCEPTION</span>
                <strong>8.6 FPS</strong>
              </div>
              <div className="wisp-metric metric-output">
                <span>IMPLEMENTED OUTPUT</span>
                <strong>HEAD · HAND · 4 POINT</strong>
              </div>
            </div>
          </article>

          <article className="feature-card rover-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>MOTION VERIFIED</span>
                <span>JETSON LINK LIVE</span>
              </p>
              <h3>Frontier Rover</h3>
              <p>
                A working 4WD platform with bounded motor control, a 350 ms
                watchdog, live camera transport and an NVIDIA Jetson perception
                path.
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
              aria-label="Frontier Rover motion test and hardware build"
            >
              <span className="rover-number" aria-hidden="true">
                01
              </span>
              <div className="rover-video-frame">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/media/rover/trailer-poster.jpg"
                  aria-label="Frontier Rover carrying a citrus payload during a motion test"
                  width="720"
                  height="1280"
                >
                  <source src="/media/rover/trailer.mp4" type="video/mp4" />
                </video>
                <span>REAL MOTION TEST · 4WD</span>
              </div>
              <div className="rover-hardware-frame">
                <img
                  src="/media/rover/hardware.jpg"
                  alt="Frontier Rover wiring, camera and Raspberry Pi control hardware"
                  width="1400"
                  height="1866"
                  loading="lazy"
                  decoding="async"
                />
                <span>THE BENCH IS THE LAB</span>
              </div>
              <div className="rover-signal signal-control">
                <span>CONTROL</span>
                <strong>4 MOTORS · BOUNDED COMMANDS</strong>
              </div>
              <div className="rover-signal signal-watchdog">
                <span>SAFETY</span>
                <strong>350 MS WATCHDOG</strong>
              </div>
              <div className="rover-signal signal-vision">
                <span>VISION PATH</span>
                <strong>IMX708 → JETSON ORIN NANO</strong>
              </div>
            </div>
          </article>

          <article className="feature-card golazo-feature">
            <div className="golazo-scene" aria-label="Golazo product screens">
              <span className="golazo-chant" aria-hidden="true">
                LIVE · LIVE · LIVE · LIVE
              </span>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/media/golazo/screen-card-closeup.svg"
                aria-label="Golazo live market product video"
                width="1080"
                height="1080"
              >
                <source src="/media/golazo/live-market.mp4" type="video/mp4" />
              </video>
              <img
                className="golazo-screen screen-lobby"
                src="/media/golazo/screen-lobby.svg"
                alt="Golazo live match lobby"
                width="1242"
                height="2208"
                loading="lazy"
                decoding="async"
              />
              <img
                className="golazo-screen screen-live"
                src="/media/golazo/screen-live-match.svg"
                alt="Golazo live in match market"
                width="1242"
                height="2208"
                loading="lazy"
                decoding="async"
              />
              <img
                className="golazo-screen screen-payout"
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
                <span>FROM PROTOTYPE</span>
                <span>TO PRODUCTION</span>
                <span>TO REAL USERS</span>
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
                A zero trust execution layer for agents: policy gates, isolated
                credentials, human approval and signed receipts.
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
              aria-label="Agent Firewall command center and approval workflow"
            >
              <div className="firewall-statement" aria-hidden="true">
                <span>AGENTS DECIDE.</span>
                <strong>POLICIES EXECUTE.</strong>
              </div>
              <img
                className="firewall-command"
                src="/media/agent-firewall/command-center.png"
                alt="Agent Firewall command center with actions, blocked requests and approvals"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <img
                className="firewall-approval"
                src="/media/agent-firewall/approvals.png"
                alt="Agent Firewall approval queue for controlled agent actions"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <div className="firewall-gates" aria-label="Execution path">
                <span>REQUEST</span>
                <i>→</i>
                <span>POLICY</span>
                <i>→</i>
                <span>APPROVAL</span>
                <i>→</i>
                <span>ISOLATED EXECUTION</span>
              </div>
              <span>PRODUCT UI · REPRESENTATIVE APPROVAL FLOW</span>
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
            <img
              className="bubble-backdrop"
              src="/media/bubblewars/banner.webp"
              alt=""
              width="1792"
              height="1024"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
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
