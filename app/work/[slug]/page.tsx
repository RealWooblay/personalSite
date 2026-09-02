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

  const title = `${project.title} | Jack Coleman`;
  const siteUrl = process.env.PORTFOLIO_SITE_URL;
  const publicLaunch = Boolean(
    siteUrl && process.env.PORTFOLIO_PUBLIC_SITE === 'true',
  );
  const socialImage =
    siteUrl && project.media?.type === 'image'
      ? new URL(project.media.src, siteUrl).toString()
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
      images: socialImage
        ? [
            {
              url: socialImage,
              width: project.media?.width,
              height: project.media?.height,
              alt: project.media?.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: socialImage ? [socialImage] : [],
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
      aria-label="Real Prove Me Wrong product captures"
    >
      <div className="detail-shell pmw-detail-stage">
        <figure className="pmw-detail-primary">
          <img
            src="/media/prove-me-wrong/market-wallet.jpg"
            alt="Inline Prove Me Wrong market requesting a Flare wallet approval"
            width="1590"
            height="1244"
            loading="eager"
            decoding="async"
          />
          <figcaption>INLINE MARKET · FLARE APPROVAL</figcaption>
        </figure>
        <figure className="pmw-detail-secondary">
          <img
            src="/media/prove-me-wrong/post-claim.jpg"
            alt="Creating a Prove Me Wrong claim from an X post"
            width="1324"
            height="1682"
            loading="lazy"
            decoding="async"
          />
          <figcaption>CLAIM TO MARKET · REAL BUILD</figcaption>
        </figure>
        <strong className="pmw-award">
          ETHGLOBAL CANNES · FLARE 3RD PLACE
        </strong>
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
      className={`project-visual-v3 ${
        project.media.type === 'video'
          ? 'project-video-v3'
          : project.media.type === 'youtube'
            ? 'project-youtube-v3'
            : ''
      }`}
    >
      <div className="detail-shell project-visual-inner-v3">
        {project.media.type === 'video' && project.media.captions ? (
          <video
            controls
            playsInline
            preload="none"
            poster={project.media.poster}
            aria-label={project.media.alt}
            width={project.media.width}
            height={project.media.height}
          >
            <source src={project.media.src} type="video/mp4" />
            <track
              kind="captions"
              src={project.media.captions}
              srcLang="en"
              label="English"
              default
            />
          </video>
        ) : project.media.type === 'video' ? (
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
        ) : project.media.type === 'youtube' ? (
          <div className="presentation-embed-v3">
            <iframe
              src={project.media.src}
              title={project.media.alt}
              width={project.media.width}
              height={project.media.height}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
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

      <section className="detail-hero-v3 detail-shell">
        <a className="detail-back" href="/#featured">
          ← All work
        </a>
        <p className="detail-overline">
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
            <h2>Build</h2>
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
          <h2>System flow</h2>
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
          <span>RELATED PROJECTS</span>
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
          <a href="/#featured">ALL WORK</a>
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
