/* oxlint-disable next/no-img-element -- Project media is pre-sized and must render without an image-optimization service. */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { CSSProperties } from 'react';
import { projectBySlug, projects } from '@/lib/projects';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};

  const title = `${project.title} — Wooblay`;
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
                alt: 'Wooblay — Systems, AI, Machines',
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const related = project.relatedSlugs
    .map((relatedSlug) => projectBySlug[relatedSlug])
    .filter(Boolean);

  return (
    <main
      className="detail-page"
      style={{ '--project-accent': project.accent } as CSSProperties}
    >
      <a className="skip-link" href="#project-story">
        Skip to project story
      </a>

      <header className="detail-topbar">
        <div className="detail-shell detail-nav">
          <Link className="brand" href="/">
            WOOBLAY<span>●</span>
          </Link>
          <Link href="/#selected">← Selected work</Link>
        </div>
      </header>

      <section className="detail-hero-v2 detail-shell">
        <p className="detail-overline">
          <span>CASE STUDY</span>
          <span>{project.kicker}</span>
        </p>
        <div className="detail-hero-grid">
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

        <dl className="project-snapshot">
          <div>
            <dt>ROLE / CONTEXT</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>MATURITY</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>STRONGEST PROOF</dt>
            <dd>{project.proof}</dd>
          </div>
          <div>
            <dt>CORE STACK</dt>
            <dd>{project.tech.slice(0, 4).join(' · ')}</dd>
          </div>
        </dl>
      </section>

      {project.media ? (
        <figure
          className={`project-visual ${project.media.type === 'video' ? 'project-video' : ''}`}
        >
          <div className="detail-shell project-visual-inner">
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
            <figcaption>
              <span>{project.media.caption}</span>
              <span>{project.status}</span>
            </figcaption>
          </div>
        </figure>
      ) : (
        <section
          className="project-evidence-visual"
          aria-label={`${project.title} system evidence`}
        >
          <div className="detail-shell evidence-visual-grid">
            <div>
              <span className="detail-label">WORKING BOUNDARY</span>
              <h2>{project.proof}</h2>
            </div>
            <div className="evidence-record">
              <div>
                <span>BUILD CONTEXT</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>CURRENT STATE</span>
                <strong>{project.currentState}</strong>
              </div>
              <div>
                <span>NEXT TEST</span>
                <strong>{project.nextStep}</strong>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="detail-story-v2 detail-shell" id="project-story">
        <div className="detail-section-heading">
          <span>THE BUILD</span>
          <h2>What mattered.</h2>
        </div>
        <div className="story-grid">
          <article>
            <span>01 / PROBLEM</span>
            <h3>Why this system exists.</h3>
            <p>{project.why}</p>
          </article>
          <article>
            <span>02 / SYSTEM</span>
            <h3>What the build connects.</h3>
            <p>{project.built}</p>
          </article>
          <article className="decision-story">
            <span>03 / TECHNICAL DECISION</span>
            <h3>The part that could not be hand-waved.</h3>
            <p>{project.hardPart}</p>
          </article>
        </div>
      </section>

      <section
        className="outcome-section detail-shell"
        aria-labelledby="outcome-heading"
      >
        <div className="detail-section-heading">
          <span>EVIDENCE</span>
          <h2 id="outcome-heading">Where it stands.</h2>
        </div>
        <div className="outcome-grid">
          <article>
            <span>OUTCOME</span>
            <p>{project.result}</p>
          </article>
          <article>
            <span>CURRENT STATE</span>
            <p>{project.currentState}</p>
          </article>
          <article>
            <span>NEXT STEP</span>
            <p>{project.nextStep}</p>
          </article>
        </div>
      </section>

      <section
        className="architecture-section detail-shell"
        aria-labelledby="architecture-heading"
      >
        <div className="detail-section-heading">
          <span>SYSTEM MAP</span>
          <h2 id="architecture-heading">Primary flow.</h2>
        </div>
        <ol className="architecture-flow-v2">
          {project.architecture.map((node, index) => (
            <li key={node}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{node}</strong>
            </li>
          ))}
        </ol>
        <ul className="tech-list" aria-label="Technology used">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className="related-section detail-shell"
        aria-labelledby="related-heading"
      >
        <div className="detail-section-heading">
          <span>NEXT</span>
          <h2 id="related-heading">Related systems.</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link href={`/work/${item.slug}`} key={item.slug}>
              <span>{item.kicker}</span>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <i>Case study →</i>
            </Link>
          ))}
        </div>
      </section>

      <footer className="detail-footer-v2">
        <div className="detail-shell">
          <Link href="/">WOOBLAY</Link>
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
