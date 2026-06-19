import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-slate-500">404</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The link may be broken, or the page may have been moved or deleted.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Go back home
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Search products
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
