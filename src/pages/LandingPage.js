import React from 'react';
import { useNavigate } from 'react-router-dom';
import HostelPulseLogo from '../components/HostelPulseLogo';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Mock sign in, navigate to permission screen
    navigate('/permissions');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <HostelPulseLogo size={80} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Your hostel life, in balance.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A personal wellness mirror + community helper
        </p>
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LandingPage;