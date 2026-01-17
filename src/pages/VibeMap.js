import React from 'react';
import { useNavigate } from 'react-router-dom';

const VibeMap = () => {
  const navigate = useNavigate();

  const zones = [
    { name: 'Common Room', vibe: 'Active', color: 'bg-green-100 dark:bg-green-900/20', emoji: '🟢' },
    { name: 'Library', vibe: 'Quiet & Focused', color: 'bg-blue-100 dark:bg-blue-900/20', emoji: '🔵' },
    { name: 'Cafeteria', vibe: 'Moderate', color: 'bg-yellow-100 dark:bg-yellow-900/20', emoji: '🟡' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Hostel Vibe Map</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Current Hostel Zones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {zones.map((zone, index) => (
              <div key={index} className={`${zone.color} rounded-lg p-6 text-center`}>
                <div className="text-4xl mb-2">{zone.emoji}</div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{zone.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{zone.vibe}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
            No people shown • Zones update based on activity patterns
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
          <button className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">🗺️</span>
            <span className="text-xs font-medium">Vibe Map</span>
          </button>
          <button onClick={() => navigate('/rewards')} className="flex flex-col items-center p-3 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-110">
            <span className="text-xl mb-1">🏆</span>
            <span className="text-xs font-medium">Rewards</span>
          </button>
          <button onClick={() => navigate('/settings')} className="flex flex-col items-center p-3 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 hover:scale-110">
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default VibeMap;