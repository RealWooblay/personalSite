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

      <nav className="profile-nav shell" aria-label="Profile links">
        <a className="profile-nav-name" href="#top">
          Jack Coleman
        </a>
        <div>
          <a
            href="https://www.linkedin.com/in/jack-coleman-921611270/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/RealWooblay"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      <section className="portfolio-intro shell" id="top">
        <h1>
          Building technology for a future measured by how fully people can
          live.
        </h1>
        <aside className="ai-note" aria-label="An observation from Jack’s AI">
          <span>WHAT MY AI SAID ABOUT ME</span>
          <div className="ai-machine-read">
            <code>
              01000010 01010101 01001001 01001100 01000100 00100000
              01010101 01001110 01010100 01001001 01001100 00100000
              01010010 01000101 01000001 01001100 00101110
            </code>
            <details>
              <summary>translate</summary>
              <p>
                He keeps building until the idea survives reality.
              </p>
            </details>
          </div>
        </aside>
      </section>

      <section className="work-v3" id="featured">
        <div className="shell selected-heading">
          <h2>Selected work</h2>
        </div>

        <div className="shell portfolio-grid">
          <article className="project-stage stage-rover">
            <div className="stage-copy">
              <p className="project-meta">
                <span>WORKING ROBOT</span>
                <span>NVIDIA JETSON</span>
              </p>
              <h3>Frontier Rover</h3>
              <p>
                A 4WD robotics platform with bounded motor control, live vision
                transport and a fail-safe watchdog.
              </p>
              <div className="feature-links">
                <a href="/work/frontier-rover">Project ↗</a>
                <a href="https://github.com/RealWooblay/frontier-rover" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="rover-compact-scene">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/media/rover/trailer-poster.jpg"
                aria-label="Frontier Rover motion test"
              >
                <source src="/media/rover/trailer.mp4" type="video/mp4" />
              </video>
              <img
                src="/media/rover/hardware.jpg"
                alt="Frontier Rover control hardware"
                width="1400"
                height="1866"
                loading="lazy"
                decoding="async"
              />
              <span>350 MS WATCHDOG</span>
              <strong>VISION → CONTROL → MOTION</strong>
            </div>
          </article>

          <article className="project-stage stage-golazo">
            <div className="stage-copy">
              <p className="project-meta">
                <span>SHIPPED</span>
                <span>REAL USERS</span>
                <span>LIVE SPORTS</span>
              </p>
              <h3>Golazo</h3>
              <p>
                A live sports market taken from prototype to production and
                into real users’ hands.
              </p>
              <div className="feature-links">
                <a href="/work/golazo">Project ↗</a>
                <a href="https://x.com/RealWooblay/status/2073341008818131377" target="_blank" rel="noreferrer">
                  Product on X ↗
                </a>
              </div>
            </div>
            <div className="golazo-real-scene" aria-label="Real Golazo product captures posted on X">
              <span className="golazo-live-line" aria-hidden="true">THE NEXT MOMENT IS THE MARKET</span>
              <img
                className="golazo-app app-one"
                src="/media/golazo/real/croatia-portugal-live.jpg"
                alt="Golazo live Croatia versus Portugal market"
                width="1080"
                height="1920"
                loading="lazy"
                decoding="async"
              />
              <img
                className="golazo-app app-two"
                src="/media/golazo/real/spain-austria-live.jpg"
                alt="Golazo live Spain versus Austria market"
                width="1080"
                height="1920"
                loading="lazy"
                decoding="async"
              />
              <img
                className="golazo-proof"
                src="/media/golazo/real/settled.webp"
                alt="Golazo market settled instantly"
                width="960"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              <span className="golazo-source">REAL PRODUCT MEDIA · @REALWOOBLAY</span>
            </div>
          </article>

          <article className="project-stage stage-bubble">
            <img
              className="bubble-stage-backdrop"
              src="/media/bubblewars/banner.webp"
              alt=""
              width="1792"
              height="1024"
              loading="lazy"
              decoding="async"
              aria-hidden="true"
            />
            <div className="bubble-stage-pitch">
              <iframe
                src="https://www.youtube-nocookie.com/embed/uPW20IUHC1Y?start=4823&end=4890&rel=0"
                title="Jack presenting Bubble Wars at ETHGlobal Bangkok"
                width="1280"
                height="720"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <span>JACK’S STAGE SEGMENT</span>
            </div>
            <div className="stage-copy">
              <p className="project-meta">
                <span>ETHGLOBAL BANGKOK WINNER</span>
                <span>4 SPONSOR PRIZES</span>
              </p>
              <h3>Bubble Wars</h3>
              <p>Invite allies. Raid rivals. Grow the biggest bubble.</p>
              <div className="feature-links">
                <a href="/work/bubble-wars">Project ↗</a>
                <a href="https://ethglobal.com/showcase/bubblewars-rgjpk" target="_blank" rel="noreferrer">
                  ETHGlobal ↗
                </a>
              </div>
            </div>
          </article>

          <article className="project-stage stage-meridian">
            <div className="meridian-stage-video">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/media/meridian/jack-pitch-poster.jpg"
                aria-label="Jack presenting MERIDIAN at Stone and Chalk"
              >
                <source src="/media/meridian/jack-pitch.mp4" type="video/mp4" />
                <track kind="captions" src="/media/meridian/jack-pitch.en.vtt" srcLang="en" label="English" default />
              </video>
              <span className="meridian-video-label">MY PITCH · 01:44</span>
              <span className="meridian-play-cue" aria-hidden="true">
                <i>▶</i> Play pitch
              </span>
            </div>
            <div className="stage-copy">
              <p className="project-meta">
                <span>HACKATHON WINNER</span>
                <span>GENOMICS</span>
              </p>
              <h3>MERIDIAN</h3>
              <p>Governed pharmacogenomics with evidence built into the path.</p>
              <div className="feature-links">
                <a href="/work/meridian">Project ↗</a>
              </div>
            </div>
          </article>

          <article className="project-stage stage-wisp">
            <div className="stage-copy">
              <p className="project-meta">
                <span>NVIDIA JETSON</span>
                <span>EDGE VISION</span>
              </p>
              <h3>WISP Lab</h3>
              <p>
                Live pose becomes spatial control through TensorRT inference,
                head tracking and projection mapping on Jetson.
              </p>
              <div className="feature-links">
                <a href="/work/wisp-lab">Project ↗</a>
                <a href="https://github.com/RealWooblay/wisp-lab" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="wisp-vision" aria-label="WISP pose tracking signal map">
              <span className="wisp-camera-label">YOLOV8N-POSE · TENSORRT FP16</span>
              <span className="wisp-fps">8.6 FPS</span>
              <svg viewBox="0 0 720 480" aria-label="Tracked human pose with head and wrist points">
                <defs>
                  <filter id="wisp-glow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <rect className="wisp-person-box" x="224" y="38" width="274" height="418" rx="4" />
                <g className="wisp-pose-lines">
                  <path d="M346 98 L374 98 M360 108 L360 137 M300 158 L360 137 L422 158 M300 158 L266 232 L236 301 M422 158 L454 231 L488 296 M360 137 L324 280 L400 280 Z M324 280 L294 365 L275 447 M400 280 L432 365 L451 447" />
                </g>
                <g className="wisp-keypoints" filter="url(#wisp-glow)">
                  <circle cx="360" cy="88" r="5" />
                  <circle cx="346" cy="98" r="4" /><circle cx="374" cy="98" r="4" />
                  <circle cx="300" cy="158" r="5" /><circle cx="422" cy="158" r="5" />
                  <circle cx="266" cy="232" r="5" /><circle cx="454" cy="231" r="5" />
                  <circle className="wisp-hand" cx="236" cy="301" r="7" /><circle className="wisp-hand" cx="488" cy="296" r="7" />
                  <circle cx="324" cy="280" r="5" /><circle cx="400" cy="280" r="5" />
                  <circle cx="294" cy="365" r="5" /><circle cx="432" cy="365" r="5" />
                  <circle cx="275" cy="447" r="5" /><circle cx="451" cy="447" r="5" />
                </g>
                <path className="wisp-head-vector" d="M360 88 L530 68 L530 44" />
                <text x="539" y="48">HEAD +0.12 / -0.04 / Z4.8</text>
                <path className="wisp-hand-vector" d="M488 296 L588 254" />
                <text x="596" y="257">WRIST R</text>
              </svg>
              <ol aria-label="WISP processing path">
                <li>CAMERA</li><li>POSE</li><li>HEAD + HANDS</li><li>RENDER</li>
              </ol>
            </div>
          </article>

          <article className="project-stage stage-pmw">
            <div className="stage-copy">
              <p className="project-meta">
                <span>ETHGLOBAL CANNES</span>
                <span>FLARE 3RD PLACE</span>
              </p>
              <h3>Prove Me Wrong</h3>
              <p>Tweet a claim. Take a side. Settle it with evidence.</p>
              <div className="feature-links">
                <a href="/work/prove-me-wrong">Project ↗</a>
                <a href="https://ethglobal.com/showcase/prove-me-wrong-2j4ks" target="_blank" rel="noreferrer">
                  ETHGlobal ↗
                </a>
              </div>
            </div>
            <img
              src="/media/prove-me-wrong/market-wallet.jpg"
              alt="Prove Me Wrong market embedded in X with Flare wallet approval"
              width="1590"
              height="1244"
              loading="lazy"
              decoding="async"
            />
          </article>

          <article className="project-stage stage-vela">
            <div className="stage-copy">
              <p className="project-meta">
                <span>AUTONOMOUS MANUFACTURING</span>
                <span>SYSTEMS VENTURE</span>
              </p>
              <h3>Vela</h3>
              <p>
                Scoped an autonomous CNC production system from first
                principles, then built the operating model, factory simulation
                and customer platform needed to de-risk it.
              </p>
              <div className="feature-links">
                <a href="/work/vela">Project ↗</a>
              </div>
              <ol className="vela-sequence" aria-label="Vela development path">
                <li>Research</li>
                <li>System</li>
                <li>Simulation</li>
                <li>Platform</li>
              </ol>
            </div>
            <div className="vela-scene" aria-label="Vela simulation and platform">
              <video
                className="vela-factory"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/media/vela/factory-poster.jpg"
                aria-label="Simulation of an autonomous production cell"
              >
                <source src="/media/vela/factory-simulation.mp4" type="video/mp4" />
              </video>
              <span className="vela-simulation-label">AUTONOMOUS CELL SIMULATION</span>
              <div className="vela-console">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/media/vela/platform-poster.jpg"
                  aria-label="Vela production control platform walkthrough"
                >
                  <source src="/media/vela/platform-walkthrough.mp4" type="video/mp4" />
                </video>
                <span>WORKING PLATFORM · 9 OPERATIONAL VIEWS</span>
              </div>
              <span className="vela-axis axis-x">ROBOTICS</span>
              <span className="vela-axis axis-y">INSPECTION</span>
              <span className="vela-axis axis-z">CONTROL</span>
            </div>
          </article>

          <article className="project-stage stage-firewall">
            <div className="stage-copy">
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
                <a href="https://github.com/RealWooblay/WooblayAI" target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
            <div className="firewall-product-scene" aria-label="Agent Firewall product interface">
              <span className="firewall-rule">NO ACTION WITHOUT A DECISION</span>
              <img
                className="firewall-product-main"
                src="/media/agent-firewall/command-center.png"
                alt="Agent Firewall command center"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <img
                className="firewall-product-approval"
                src="/media/agent-firewall/approvals.png"
                alt="Agent Firewall approval queue"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <ol aria-label="Agent execution control path">
                <li>Intent</li>
                <li>Policy</li>
                <li>Approval</li>
                <li>Receipt</li>
              </ol>
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
