'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="glass-effect border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <span className="gradient-text text-xl font-bold">Design Democracy</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/designs" className="text-foreground/80 hover:text-foreground transition-colors">
                Designs
              </Link>
              <Link href="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="/community" className="text-foreground/80 hover:text-foreground transition-colors">
                Community
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                className="btn btn-outline p-2"
                onClick={() => router.push('/cart')}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </button>

              {/* Auth Buttons */}
              <div className="hidden md:flex md:items-center md:space-x-2">
                <Link href="/login" className="btn btn-outline">
                  Log in
                </Link>
                <Link href="/signup" className="btn btn-primary">
                  Sign up
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden btn btn-outline p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="glass-effect md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Link
                href="/designs"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted/10"
              >
                Designs
              </Link>
              <Link
                href="/how-it-works"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted/10"
              >
                How It Works
              </Link>
              <Link
                href="/community"
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted/10"
              >
                Community
              </Link>
              <div className="mt-4 space-y-2">
                <Link
                  href="/login"
                  className="block w-full rounded-md px-3 py-2 text-center text-base font-medium text-foreground/80 hover:bg-muted/10"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-dark"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 