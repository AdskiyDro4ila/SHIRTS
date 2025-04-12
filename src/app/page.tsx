import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
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
        <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:bg-gray-950 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      </section>

      {/* Trending Designs Section */}
      <section className="section-padding bg-muted/5">
        <div className="container">
          <h2 className="mb-12 text-center gradient-text">Trending Designs</h2>
          <div className="grid-layout">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card hover-card-animation group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-[var(--radius)] bg-muted/10">
                  <Image
                    src={`/placeholder-design-${i}.jpg`}
                    alt="T-shirt design"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Design Title</h3>
                <p className="mb-4 text-sm text-muted">By Designer Name</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$29.99</span>
                  <button className="btn btn-primary">
                    <span>Vote</span>
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="section-padding border-y border-border bg-card">
        <div className="container">
          <h2 className="mb-12 text-center gradient-text">Join Our Growing Community</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card text-center hover-card-animation">
              <p className="text-4xl font-bold gradient-text">1000+</p>
              <p className="mt-2 text-muted">Active Designers</p>
            </div>
            <div className="card text-center hover-card-animation">
              <p className="text-4xl font-bold gradient-text">5000+</p>
              <p className="mt-2 text-muted">Designs Created</p>
            </div>
            <div className="card text-center hover-card-animation">
              <p className="text-4xl font-bold gradient-text">10k+</p>
              <p className="mt-2 text-muted">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="mb-12 text-center gradient-text">Why Choose Us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card hover-card-animation">
              <div className="mb-4 text-primary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Create Designs</h3>
              <p className="text-muted">Upload your unique t-shirt designs and share them with our community.</p>
            </div>
            <div className="card hover-card-animation">
              <div className="mb-4 text-secondary">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Vote & Earn</h3>
              <p className="text-muted">Vote on your favorite designs and earn points for participation.</p>
            </div>
            <div className="card hover-card-animation">
              <div className="mb-4 text-accent">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Wear & Share</h3>
              <p className="text-muted">Get your hands on the most voted designs and show them off to the world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 