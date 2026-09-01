/* oxlint-disable next/no-img-element -- Project media is pre-sized and must render without an image service. */
/* oxlint-disable next/no-html-link-for-pages -- Standard anchors avoid Vinext RSC prefetch runtime errors. */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import type { Project } from '@/lib/projects';
import { projectBySlug, projects } from '@/lib/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};

  const title = `${project.title} | Wooblay`;
  const siteUrl = process.env.WOOBLAY_SITE_URL;
  const publicLaunch = Boolean(
    siteUrl && process.env.WOOBLAY_PUBLIC_SITE === 'true',
  );
  const socialImage = siteUrl
    ? new URL('/og.jpg', siteUrl).toString()
    : undefined;
  const canonical = publicLaunch
    ? new URL(`/work/${project.slug}`, siteUrl).toString()
    : undefined;

  return {
    title,
    description: project.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title,
      description: project.description,
      type: 'website',
      ...(canonical ? { url: canonical } : {}),
      ...(socialImage
        ? {
            images: [
              {
                url: socialImage,
                width: 1200,
                height: 630,
                alt: 'Wooblay | Software, AI, Robotics',
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
  };
}

function WispScene() {
  return (
    <section className="detail-tech-scene" aria-label="WISP lab pipeline">
      <div className="detail-shell detail-tech-stage wisp-detail-stage">
        <div className="detail-grid-plane" />
        <div className="tech-plane tech-plane-input">
          <span>CSI INPUT</span>
          <strong>IMX708 CAMERA</strong>
        </div>
        <div className="tech-plane tech-plane-runtime">
          <span>NVIDIA JETSON</span>
          <strong>14.8 MS</strong>
          <small>FP16 · ISOLATED</small>
        </div>
        <div className="tech-plane tech-plane-state">
          <span>YOLO POSE · 8.6 FPS</span>
          <strong>HEAD + WRISTS</strong>
        </div>
        <div className="tech-plane tech-plane-output">
          <span>OFF AXIS RENDERER</span>
          <strong>4 POINT MAPPING</strong>
        </div>
      </div>
    </section>
  );
}

function PmwScene() {
  return (
    <section
      className="detail-tech-scene pmw-detail-scene"
      aria-label="Prove Me Wrong product flow"
    >
      <div className="detail-shell pmw-detail-stage">
        <div className="detail-pmw-browser">
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
        <ol className="pmw-detail-flow">
          <li>
            <span>01</span>
            <strong>CLAIM</strong>
          </li>
          <li>
            <span>02</span>
            <strong>MARKET</strong>
          </li>
          <li>
            <span>03</span>
            <strong>EVIDENCE</strong>
          </li>
          <li>
            <span>04</span>
            <strong>FLARE</strong>
          </li>
        </ol>
        <strong className="pmw-award">FLARE MAIN TRACK · 3RD PLACE</strong>
      </div>
    </section>
  );
}

function SystemScene({ project }: { project: Project }) {
  return (
    <section
      className="detail-tech-scene generic-detail-scene"
      aria-label={`${project.title} system map`}
    >
      <div className="detail-shell generic-scene-stage">
        <span className="scene-kicker">SYSTEM FLOW</span>
        <ol>
          {project.architecture.map((node, index) => (
            <li key={node} style={{ '--depth': index } as CSSProperties}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{node}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === 'wisp-lab') return <WispScene />;
  if (project.slug === 'prove-me-wrong') return <PmwScene />;

  if (!project.media) return <SystemScene project={project} />;

  return (
    <figure
      className={`project-visual-v3 ${project.media.type === 'video' ? 'project-video-v3' : ''}`}
    >
      <div className="detail-shell project-visual-inner-v3">
        {project.media.type === 'video' ? (
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={project.media.poster}
            aria-label={project.media.alt}
            width={project.media.width}
            height={project.media.height}
          >
            <source src={project.media.src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.media.src}
            alt={project.media.alt}
            width={project.media.width}
            height={project.media.height}
            loading="lazy"
            decoding="async"
          />
        )}
        <figcaption>{project.media.caption}</figcaption>
      </div>
    </figure>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const related = project.relatedSlugs
    .map((relatedSlug) => projectBySlug[relatedSlug])
    .filter(Boolean);

  return (
    <main
      className="detail-page-v3"
      style={{ '--project-accent': project.accent } as CSSProperties}
    >
      <a className="skip-link" href="#build">
        Skip to the build
      </a>

      <header className="detail-topbar">
        <div className="detail-shell detail-nav">
          <a className="brand" href="/">
            WOOBLAY<span>●</span>
          </a>
          <a href="/#featured">← Selected work</a>
        </div>
      </header>

      <section className="detail-hero-v3 detail-shell">
        <p className="detail-overline">
          <span>PROJECT</span>
          <span>{project.kicker}</span>
        </p>
        <div className="detail-title-grid">
          <h1>{project.title}</h1>
          <div>
            <p className="detail-description">{project.description}</p>
            <div className="detail-actions">
              {project.repoLinks.map((link, index) => (
                <a
                  className={index === 0 ? 'button button-signal' : 'text-link'}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="detail-signal">
          <p>{project.signal}</p>
          <dl>
            <div>
              <dt>ROLE</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>STATE</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ProjectVisual project={project} />

      <section className="build-v3" id="build">
        <div className="detail-shell">
          <div className="detail-heading-v3">
            <span>THE BUILD</span>
            <h2>Two things matter.</h2>
          </div>
          <div className="build-grid-v3">
            <article>
              <span>WHAT IT DOES</span>
              <p>{project.built}</p>
            </article>
            <article>
              <span>HARD PART</span>
              <p>{project.hardPart}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="state-v3">
        <div className="detail-shell state-grid-v3">
          <div>
            <span>RESULT</span>
            <h2>{project.result}</h2>
          </div>
          <dl>
            <div>
              <dt>NOW</dt>
              <dd>{project.currentState}</dd>
            </div>
            <div>
              <dt>NEXT</dt>
              <dd>{project.nextStep}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="system-map-v3 detail-shell">
        <div className="detail-heading-v3 detail-heading-dark">
          <span>SYSTEM MAP</span>
          <h2>Primary flow.</h2>
        </div>
        <ol className="architecture-flow-v3">
          {project.architecture.map((node, index) => (
            <li key={node}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{node}</strong>
            </li>
          ))}
        </ol>
        <ul className="tech-list-v3" aria-label="Technology used">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="related-v3">
        <div className="detail-shell">
          <span>KEEP LOOKING</span>
          <div className="related-grid-v3">
            {related.map((item) => (
              <a href={`/work/${item.slug}`} key={item.slug}>
                <strong>{item.title}</strong>
                <i>↗</i>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="detail-footer-v3">
        <div className="detail-shell">
          <a href="/">WOOBLAY</a>
          <a
            href="https://github.com/RealWooblay"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
