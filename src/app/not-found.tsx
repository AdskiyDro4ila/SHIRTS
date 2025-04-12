import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/images/404-illustration.svg"
                alt="404 Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold text-primary">Page Not Found</h1>
          <p className="mb-8 text-lg text-muted">
            Oops! The page you're looking for seems to have wandered off into the design wilderness.
            Don't worry though, we've got plenty of amazing t-shirt designs waiting for you!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link href="/designs" className="btn btn-outline">
              Browse Designs
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-xl font-semibold text-primary">You might be interested in:</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/how-it-works" className="card hover-card-animation p-4 text-center">
                <h3 className="mb-2 font-medium">How It Works</h3>
                <p className="text-sm text-muted">Learn about our community-driven design process</p>
              </Link>
              <Link href="/community" className="card hover-card-animation p-4 text-center">
                <h3 className="mb-2 font-medium">Community</h3>
                <p className="text-sm text-muted">Join our creative community of designers</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 