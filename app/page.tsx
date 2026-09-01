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
    'Frontier Rover',
    'Safety first robotics',
    'https://github.com/RealWooblay/frontier-rover',
  ],
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

      <header className="topbar">
        <div className="shell nav-inner">
          <a className="brand" href="#top">
            WOOBLAY<span>●</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#featured">Selected work</a>
            <a href="#systems">Systems</a>
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

      <section className="hero-v3 shell" id="top">
        <div className="hero-copy-v3">
          <p className="overline">NVIDIA JETSON / AGENTS / PHYSICAL SYSTEMS</p>
          <h1>
            Systems that
            <br />
            <em>move.</em>
          </h1>
          <p>
            On device vision, spatial tracking, autonomous agents and products
            in motion.
          </p>
          <div className="hero-links">
            <a className="button button-signal" href="#featured">
              See the work ↓
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

        <aside className="hero-system" aria-label="How Wooblay systems work">
          <span className="scene-kicker">PERCEPTION TO ACTION</span>
          <ol className="hero-system-stack">
            <li>
              <span>01</span>
              <strong>SENSE</strong>
              <small>camera · detection · pose</small>
            </li>
            <li>
              <span>02</span>
              <strong>DECIDE</strong>
              <small>state · policy · intent</small>
            </li>
            <li>
              <span>03</span>
              <strong>ACT</strong>
              <small>projection · agents · machines</small>
            </li>
          </ol>
        </aside>
      </section>

      <section className="work-v3" id="featured">
        <div className="shell compact-heading">
          <span>SELECTED WORK</span>
          <h2>The strongest builds.</h2>
        </div>

        <div className="shell featured-grid">
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
            <div className="pmw-scene" aria-label="Prove Me Wrong product flow">
              <div className="pmw-browser">
                <div className="browser-chrome">
                  <i />
                  <i />
                  <i />
                  <span>EXAMPLE / INLINE MARKET</span>
                </div>
                <p>Bitcoin will top $150k by 2026.</p>
                <div className="market-choice">
                  <strong>YES</strong>
                  <strong>NO</strong>
                </div>
              </div>
              <div className="pmw-resolver">
                <span>EVIDENCE</span>
                <strong>RESOLVER</strong>
              </div>
              <div className="pmw-settlement">
                <span>FLARE</span>
                <strong>SETTLEMENT</strong>
              </div>
            </div>
          </article>

          <article className="feature-card bubble-feature">
            <img
              src="/media/bubblewars/banner.webp"
              alt="Bubble Wars project banner"
              width="1792"
              height="1024"
              loading="lazy"
              decoding="async"
            />
            <div className="feature-copy">
              <p className="project-meta">
                <span>BANGKOK FINALIST</span>
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

          <article className="feature-card wisp-feature">
            <div className="feature-copy">
              <p className="project-meta">
                <span>NVIDIA JETSON</span>
                <span>ORIN NANO SUPER</span>
              </p>
              <h3>Vision that turns a wall into an interface.</h3>
              <p>
                Head and wrist tracking, off axis rendering and projector ready
                mapping.
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

          <article className="feature-card golazo-feature">
            <div className="golazo-scene">
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
                <span>LIVE SPORTS</span>
                <span>MARKETS</span>
              </p>
              <h3>Golazo</h3>
              <p>A market that moves with the match.</p>
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
        </div>
      </section>

      <section className="systems-v3" id="systems">
        <div className="shell compact-heading compact-heading-dark">
          <span>MORE SYSTEMS</span>
          <h2>Built across the stack.</h2>
        </div>
        <div className="shell system-tile-grid">
          <SystemTile
            title="Wooblay AI"
            category="AGENT SECURITY"
            line="Intent, policy, approval, execution and receipt in one chain."
            flow={['INTENT', 'POLICY', 'APPROVAL', 'RECEIPT']}
            href="/work/wooblay-ai"
            source="https://github.com/RealWooblay/WooblayAI"
          />
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
            title="MERIDIAN"
            category="GOVERNED GENOMICS"
            line="Genomic guidance stays tied to sources and explicit limits."
            flow={['GENOME', 'SOURCE', 'MODEL', 'GUIDANCE']}
            href="/work/meridian"
            source="https://github.com/RealWooblay/medhack"
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
      </section>

      <section className="viem-v3">
        <div className="shell viem-grid">
          <div className="viem-statement">
            <span>OPEN SOURCE / VIEM</span>
            <h2>I put XR One on viem.</h2>
            <p>
              Three merged PRs shipped testnet and mainnet support into the
              TypeScript interface for Ethereum.
            </p>
          </div>
          <a
            className="viem-metric"
            href="https://www.npmjs.com/package/viem"
            target="_blank"
            rel="noreferrer"
          >
            <strong>22M+</strong>
            <span>monthly npm downloads</span>
          </a>
          <div className="viem-prs" aria-label="Merged viem pull requests">
            <a
              href="https://github.com/wevm/viem/pull/2444"
              target="_blank"
              rel="noreferrer"
            >
              XR Sepolia <span>#2444</span>
            </a>
            <a
              href="https://github.com/wevm/viem/pull/3116"
              target="_blank"
              rel="noreferrer"
            >
              XR One <span>#3116</span>
            </a>
            <a
              href="https://github.com/wevm/viem/pull/3309"
              target="_blank"
              rel="noreferrer"
            >
              Mainnet correction <span>#3309</span>
            </a>
          </div>
        </div>
      </section>

      <section className="index-v3" id="index">
        <div className="shell compact-heading compact-heading-dark">
          <span>PROJECT ARCHIVE</span>
          <h2>More builds.</h2>
        </div>
        <div className="shell project-index-v3">
          {moreWork.map(([title, category, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={title}>
              <strong>{title}</strong>
              <span>{category}</span>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer-v3">
        <div className="shell">
          <span>CURRENT DIRECTION</span>
          <h2>Edge computing. Autonomy. Machines.</h2>
          <a
            className="button button-dark"
            href="https://github.com/RealWooblay"
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub ↗
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
