'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 