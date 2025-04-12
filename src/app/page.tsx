import Link from 'next/link'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="mb-8 inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Vote. Create. Wear.
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-muted">
              Join our community-driven t-shirt platform where your vote shapes the next big designs.
              Get early access to popular items and express your unique style.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/designs" className="btn btn-primary">
                Browse Designs
              </Link>
              <Link href="/how-it-works" className="btn btn-outline">
                How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-gray-950 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      </section>

      {/* Trending Designs Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Trending Designs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={`/placeholder-design-${i}.jpg`}
                    alt="T-shirt design"
                    width={500}
                    height={500}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Design Title</h3>
                <p className="mb-4 text-sm text-muted">By Designer Name</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$29.99</span>
                  <button className="btn btn-primary">Vote →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="border-y border-border bg-muted/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Join Our Growing Community</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">1000+</p>
              <p className="mt-2 text-muted">Active Designers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">5000+</p>
              <p className="mt-2 text-muted">Designs Created</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">10k+</p>
              <p className="mt-2 text-muted">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 