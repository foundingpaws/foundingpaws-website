import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green mb-4">404</h1>
        <p className="text-charcoal mb-8">Seite nicht gefunden</p>
        <Link href="/" className="btn-primary pill bg-copper text-cream px-6 py-3">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
