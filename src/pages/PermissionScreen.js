import React from 'react';
import { useNavigate } from 'react-router-dom';
import HostelPulseLogo from '../components/HostelPulseLogo';

const PermissionScreen = () => {
  const navigate = useNavigate();

  const handleAllow = () => {
    // Mock allowing permissions, navigate to dashboard
    navigate('/dashboard');
  };

  const handleSkip = () => {
    // Skip to dashboard with limited experience
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex justify-center mb-6">
          <HostelPulseLogo size={60} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Allow HostelPulse to access
        </h2>
        <div className="space-y-4 mb-8">
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 dark:text-blue-400">😴</span>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Sleep Summary</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Track your rest patterns</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 dark:text-green-400">🚶</span>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Step Count</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Monitor your daily activity</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 dark:text-purple-400">📚</span>
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Class Schedule</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sync with your academic calendar</p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <button
            onClick={handleAllow}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Allow
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Skip (Limited Experience)
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionScreen;