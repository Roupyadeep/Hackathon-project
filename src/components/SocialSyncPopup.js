import React, { useState, useEffect } from 'react';

const SocialSyncPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mock popup appearing after some time
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show after 10 seconds for demo

    return () => clearTimeout(timer);
  }, []);

  const handleJoin = () => {
    setIsVisible(false);
    // Mock joining
    alert('Joined the study group! 📚');
  };

  const handleNotNow = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm w-full">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">👥</div>
          <p className="text-gray-900 dark:text-white">
            Someone nearby is heading to the library.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Studying together helps reduce stress.
          </p>
        </div>
        <div className="space-y-3">
          <button
            onClick={handleJoin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Join
          </button>
          <button
            onClick={handleNotNow}
            className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialSyncPopup;