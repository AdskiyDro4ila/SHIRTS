'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/designs' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Community', href: '/community' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Design Democracy
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive(item.href)
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/cart"
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              Cart
            </Link>
            <div className="ml-3 flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-500 hover:text-gray-700"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 