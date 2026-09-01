/* oxlint-disable next/no-html-link-for-pages -- Standard anchors avoid Vinext RSC prefetch runtime errors. */
export default function NotFound() {
  return (
    <main className="missing-page">
      <a className="brand" href="/">
        WOOBLAY<span>●</span>
      </a>
      <div>
        <span>404 / OUTSIDE THE SYSTEM</span>
        <h1>Nothing is running here.</h1>
        <p>The route does not exist, but the work does.</p>
        <a className="button button-signal" href="/#featured">
          Return to selected work →
        </a>
      </div>
    </main>
  );
}
