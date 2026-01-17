import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import HostelPulseLogo from '../components/HostelPulseLogo';

const Settings = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    // Mock logout - in a real app, this would clear authentication tokens
    // For now, just navigate back to landing page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl"></div>
      </div>
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg p-4 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <HostelPulseLogo size={32} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Settings</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Customize your experience</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            <span className="text-lg">✕</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 pb-32 space-y-6">
        {/* About Us */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg shadow-lg">
              <span className="text-white text-lg">ℹ️</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">About HostelPulse</h2>
          </div>
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              HostelPulse is a comprehensive wellness platform designed specifically for students living in hostels.
              We understand the unique challenges of student life and how maintaining balance between academics,
              social life, and personal well-being can be difficult.
            </p>
            <p>
              Our app helps you track your daily habits, monitor your wellness patterns, and make informed decisions
              to improve your overall balance. From sleep tracking to class attendance, step counting to mood monitoring,
              HostelPulse provides insights that help you build healthier routines and achieve better academic performance.
            </p>
            <p>
              Join thousands of students who are already using HostelPulse to transform their hostel experience
              and create a more balanced, productive, and fulfilling student life.
            </p>
            <p>
              At HostelPulse, we believe that every student deserves to thrive, not just survive. Our platform goes beyond
              basic tracking by providing personalized insights, gentle reminders, and actionable recommendations that
              adapt to your unique lifestyle and goals.
            </p>
            <p>
              Whether you're struggling with late-night study sessions, inconsistent sleep patterns, or finding it hard
              to maintain social connections, HostelPulse is here to guide you towards a healthier, more balanced lifestyle.
              Our intelligent algorithms analyze your daily patterns and provide tailored suggestions to help you optimize
              your energy levels, improve your focus, and enhance your overall well-being.
            </p>
            <p>
              We are committed to supporting the next generation of leaders, innovators, and change-makers by ensuring
              they have the tools and knowledge to maintain their physical and mental health during their crucial
              academic journey. HostelPulse is more than an app – it's your personal wellness companion for student life.
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg">
              <span className="text-white text-lg">💬</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
              <div className="p-2 bg-blue-500 rounded-lg">
                <span className="text-white text-sm">📞</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Contact Number</p>
                <a href="tel:+917439317476" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  +91 7439317476
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
              <div className="p-2 bg-green-500 rounded-lg">
                <span className="text-white text-sm">✉️</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">Email</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roupyadeepghosal@gmail.com" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline text-sm font-medium">
                  roupyadeepghosal@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-red-200/50 dark:border-red-800/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-lg">
              <span className="text-white text-lg">🚪</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Account</h2>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            🚪 Logout
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 text-center">
            This will log you out and return to the home page
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
        <div className="max-w-4xl mx-auto flex justify-around py-3">
          <button onClick={() => navigate('/dashboard')} className="flex flex-col items-center p-3 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-110">
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          <button onClick={() => navigate('/vibe-map')} className="flex flex-col items-center p-3 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-110">
            <span className="text-xl mb-1">🗺️</span>
            <span className="text-xs font-medium">Vibe Map</span>
          </button>
          <button onClick={() => navigate('/rewards')} className="flex flex-col items-center p-3 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-110">
            <span className="text-xl mb-1">🏆</span>
            <span className="text-xs font-medium">Rewards</span>
          </button>
          <button className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Settings;
