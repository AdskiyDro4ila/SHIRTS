'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-48 w-48">
              <Image
                src="/images/404-illustration.svg"
                alt="Error Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold text-primary">Something went wrong!</h1>
          <p className="mb-8 text-lg text-muted">
            {error.message || "We encountered an unexpected error. Don't worry though, we've got plenty of amazing t-shirt designs waiting for you!"}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="btn btn-primary"
            >
              Try again
            </button>
            <Link href="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-xl font-semibold text-primary">You might be interested in:</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/designs" className="card hover-card-animation p-4 text-center">
                <h3 className="mb-2 font-medium">Browse Designs</h3>
                <p className="text-sm text-muted">Check out our latest t-shirt designs</p>
              </Link>
              <Link href="/how-it-works" className="card hover-card-animation p-4 text-center">
                <h3 className="mb-2 font-medium">How It Works</h3>
                <p className="text-sm text-muted">Learn about our community-driven process</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 