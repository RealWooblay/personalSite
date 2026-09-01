import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="missing-page">
      <Link className="brand" href="/">
        WOOBLAY<span>●</span>
      </Link>
      <div>
        <span>404 / OUTSIDE THE SYSTEM</span>
        <h1>Nothing is running here.</h1>
        <p>The route does not exist, but the work does.</p>
        <Link className="button button-signal" href="/#selected">
          Return to selected work →
        </Link>
      </div>
    </main>
  );
}
