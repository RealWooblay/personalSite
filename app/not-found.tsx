/* oxlint-disable next/no-html-link-for-pages -- Standard anchors avoid Vinext RSC prefetch runtime errors. */
export default function NotFound() {
  return (
    <main className="missing-page">
      <a className="missing-home" href="/">
        ← Portfolio
      </a>
      <div>
        <span>404</span>
        <h1>Page not found.</h1>
        <p>This address does not exist.</p>
        <a className="button button-signal" href="/#featured">
          Back to the work →
        </a>
      </div>
    </main>
  );
}
