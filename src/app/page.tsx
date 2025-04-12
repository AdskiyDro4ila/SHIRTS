export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
              <span className="block">Design Democracy</span>
              <span className="block text-indigo-600">Vote. Create. Wear.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Join our community-driven t-shirt platform where your vote shapes the next big designs.
              Get early access to popular items and express your unique style.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a
                href="/designs"
                className="rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Designs
              </a>
              <a
                href="/how-it-works"
                className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trending Designs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for featured designs */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  {/* Image placeholder */}
                  <div className="w-full h-64 bg-gray-200 animate-pulse" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Design Title</h3>
                  <p className="mt-1 text-sm text-gray-500">By Designer Name</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-indigo-600 font-semibold">$29.99</span>
                    <button className="text-sm text-gray-500 hover:text-indigo-600">
                      Vote →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Active Designers</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5000+</div>
              <div className="text-gray-600">Designs Created</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 