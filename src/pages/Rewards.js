import React from 'react';
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
  const navigate = useNavigate();

  const rewards = {
    dailyStreak: 7,
    achievements: [
      { name: 'Early Bird', description: 'Woke up before 8 AM for 5 days', unlocked: true },
      { name: 'Step Master', description: 'Walked 10,000 steps in a day', unlocked: true },
      { name: 'Study Buddy', description: 'Attended all classes for a week', unlocked: false },
      { name: 'Zen Master', description: 'Maintained balance score above 80 for 3 days', unlocked: false }
    ],
    progressBar: 65 // percentage
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-36 h-36 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-10 w-28 h-28 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full blur-2xl"></div>
      </div>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Pulse Points</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 space-y-6 pb-32">
        {/* Daily Streak */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 text-center">
          <div className="text-4xl mb-2">🔥</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{rewards.dailyStreak}</h2>
          <p className="text-gray-600 dark:text-gray-300">Day Streak</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Goal Progress</h3>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${rewards.progressBar}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{rewards.progressBar}% complete</p>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
          <div className="space-y-3">
            {rewards.achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked
                    ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                    : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`text-2xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                    {achievement.unlocked ? '🏆' : '🔒'}
                  </div>
                  <div>
                    <h4 className={`font-medium ${achievement.unlocked ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                      {achievement.name}
                    </h4>
                    <p className={`text-sm ${achievement.unlocked ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
          <button className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
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

export default Rewards;