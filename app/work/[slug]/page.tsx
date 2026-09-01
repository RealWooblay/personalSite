import type { Metadata } from 'next';
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
  return {
    title,
    description: project.description,
    openGraph: { title, description: project.description, images: [] },
    twitter: { title, description: project.description, images: [] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="detail-page" style={{ '--project-accent': project.accent } as CSSProperties}>
      <header className="detail-header">
        <a href="/">WBL<span>·</span>01</a>
        <a href="/#work">← All work</a>
      </header>

      <section className="detail-hero">
        <div className="detail-meta"><span>{project.kicker}</span><span>{project.status}</span></div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="detail-links">
          <a className="primary-link" href={project.repo} target="_blank" rel="noreferrer">View source <span>↗</span></a>
          {slug === 'bubble-wars' && <a className="quiet-link" href="https://www.youtube.com/watch?v=uPW20IUHC1Y&t=4902s" target="_blank" rel="noreferrer">Watch presentation ↗</a>}
        </div>
      </section>

      {project.media && (
        <section className={`detail-media ${project.media.type === 'video' ? 'detail-video' : ''}`}>
          {project.media.type === 'video' ? (
            <video autoPlay muted loop playsInline aria-label={project.media.alt}><source src={project.media.src} type="video/mp4" /></video>
          ) : <img src={project.media.src} alt={project.media.alt} />}
          <span>REAL PROJECT MEDIA / REPOSITORY SOURCE</span>
        </section>
      )}

      <section className="detail-story">
        <article><span>WHY</span><h2>The reason to build it.</h2><p>{project.why}</p></article>
        <article><span>BUILT</span><h2>The system.</h2><p>{project.built}</p></article>
        <article><span>HARD PART</span><h2>Where it got interesting.</h2><p>{project.hardPart}</p></article>
        <article><span>RESULT</span><h2>What exists now.</h2><p>{project.result}</p></article>
      </section>

      <section className="detail-architecture">
        <div className="detail-section-label"><span>ARCHITECTURE</span><span>PRIMARY FLOW</span></div>
        <div className="architecture-flow">
          {project.architecture.map((node, index) => (
            <div key={node}><i>{String(index + 1).padStart(2, '0')}</i><strong>{node}</strong>{index < project.architecture.length - 1 && <span>→</span>}</div>
          ))}
        </div>
        <div className="tech-line">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="related-work">
        <div className="detail-section-label"><span>KEEP EXPLORING</span><span>RELATED WORK</span></div>
        <div>
          {related.map((item) => <a href={`/work/${item.slug}`} key={item.slug}><span>{item.kicker}</span><strong>{item.title}</strong><i>→</i></a>)}
        </div>
      </section>

      <footer className="detail-footer"><a href="/">WOOBLAY</a><a href="https://github.com/RealWooblay" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
    </main>
  );
}
