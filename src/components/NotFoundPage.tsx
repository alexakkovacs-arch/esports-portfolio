import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-4 text-8xl">
        GG, <span className="text-fuchsia-hot">no re</span>
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg">
        This page doesn’t exist, or it moved.
      </p>
      <Link to="/" className="btn btn-pink mt-10">
        Back to the portfolio
      </Link>
    </div>
  )
}
