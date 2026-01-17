import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import HostelPulseLogo from '../components/HostelPulseLogo';

// Mock data
const mockData = {
  balanceScore: 65,
  message: "You're in a good balance. Keep it up!",
  todaysPulse: {
    sleep: { hours: 6, status: 'warning' },
    steps: { count: 2000, status: 'normal' },
    classes: { attended: 1, total: 3, status: 'warning' }
  },
  timeline: [
    { time: '1:00 AM', event: 'Slept late', impact: -5 },
    { time: '9:00 AM', event: 'Missed class', impact: -10 },
    { time: '12:30 PM', event: 'Stayed indoors', impact: -3 },
    { time: '5:00 PM', event: 'Synced data', impact: +2 }
  ],
  suggestions: [
    '10-minute walk?',
    'Join library study group?',
    'Take a break, you earned it'
  ]
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [data, setData] = useState(mockData);
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedMood, setSelectedMood] = useState('balanced');

  const moodOptions = {
    tired: {
      theme: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20',
      floatingElements: [
        { top: '10%', left: '10%', size: 'w-32 h-32', color: 'bg-gradient-to-br from-blue-400 to-indigo-500', blur: 'blur-3xl' },
        { top: '60%', right: '15%', size: 'w-24 h-24', color: 'bg-gradient-to-br from-purple-400 to-pink-500', blur: 'blur-2xl' },
        { bottom: '20%', left: '20%', size: 'w-40 h-40', color: 'bg-gradient-to-br from-indigo-400 to-blue-500', blur: 'blur-3xl' },
        { bottom: '60%', right: '10%', size: 'w-28 h-28', color: 'bg-gradient-to-br from-cyan-400 to-blue-500', blur: 'blur-2xl' }
      ],
      suggestions: ['Take a short nap?', 'Drink some water?', 'Step outside for fresh air?'],
      message: "You're feeling tired. Rest is important."
    },
    stressed: {
      theme: 'bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 dark:from-red-900/20 dark:via-pink-900/20 dark:to-orange-900/20',
      floatingElements: [
        { top: '15%', left: '15%', size: 'w-36 h-36', color: 'bg-gradient-to-br from-red-400 to-pink-500', blur: 'blur-3xl' },
        { top: '50%', right: '20%', size: 'w-28 h-28', color: 'bg-gradient-to-br from-orange-400 to-red-500', blur: 'blur-2xl' },
        { bottom: '25%', left: '25%', size: 'w-32 h-32', color: 'bg-gradient-to-br from-pink-400 to-orange-500', blur: 'blur-3xl' },
        { bottom: '55%', right: '15%', size: 'w-24 h-24', color: 'bg-gradient-to-br from-red-400 to-pink-500', blur: 'blur-2xl' }
      ],
      suggestions: ['Try deep breathing?', 'Listen to calming music?', 'Talk to a friend?'],
      message: "You're feeling stressed. Take it one step at a time."
    },
    active: {
      theme: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20',
      floatingElements: [
        { top: '12%', left: '12%', size: 'w-34 h-34', color: 'bg-gradient-to-br from-green-400 to-emerald-500', blur: 'blur-3xl' },
        { top: '55%', right: '18%', size: 'w-26 h-26', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', blur: 'blur-2xl' },
        { bottom: '22%', left: '18%', size: 'w-38 h-38', color: 'bg-gradient-to-br from-emerald-400 to-green-500', blur: 'blur-3xl' },
        { bottom: '58%', right: '12%', size: 'w-30 h-30', color: 'bg-gradient-to-br from-cyan-400 to-teal-500', blur: 'blur-2xl' }
      ],
      suggestions: ['Keep up the energy!', 'Share your motivation?', 'Plan your next goal?'],
      message: "You're feeling active! Channel that energy positively."
    },
    balanced: {
      theme: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20',
      floatingElements: [
        { top: '8%', left: '8%', size: 'w-40 h-40', color: 'bg-gradient-to-br from-yellow-400 to-amber-500', blur: 'blur-3xl' },
        { top: '62%', right: '12%', size: 'w-32 h-32', color: 'bg-gradient-to-br from-orange-400 to-yellow-500', blur: 'blur-2xl' },
        { bottom: '18%', left: '15%', size: 'w-36 h-36', color: 'bg-gradient-to-br from-amber-400 to-orange-500', blur: 'blur-3xl' },
        { bottom: '52%', right: '8%', size: 'w-28 h-28', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', blur: 'blur-2xl' }
      ],
      suggestions: ['10-minute walk?', 'Join library study group?', 'Take a break, you earned it'],
      message: "You're in a good balance. Keep it up!"
    }
  };

  // Calculate balance score based on user input
  const calculateBalanceScore = (bedtime, waketime, studyStart, studyDuration) => {
    let score = 50; // Base score

    // Sleep analysis
    const bedtimeHour = parseInt(bedtime.split(':')[0]);
    const waketimeHour = parseInt(waketime.split(':')[0]);
    const sleepDuration = waketimeHour >= bedtimeHour ?
      waketimeHour - bedtimeHour :
      (24 - bedtimeHour) + waketimeHour;

    // Sleep timing bonus (earlier bedtime = higher score)
    if (bedtimeHour <= 22) score += 20; // Before 10 PM
    else if (bedtimeHour <= 23) score += 10; // Before 11 PM
    else if (bedtimeHour <= 24) score += 0; // 11 PM - 12 AM
    else score -= 10; // After 12 AM

    // Sleep duration bonus
    if (sleepDuration >= 7 && sleepDuration <= 9) score += 15;
    else if (sleepDuration >= 6 && sleepDuration <= 10) score += 5;
    else score -= 10;

    // Study analysis
    const studyStartHour = parseInt(studyStart.split(':')[0]);

    // Study timing penalty (later study = lower score)
    if (studyStartHour >= 22) score -= 15; // After 10 PM
    else if (studyStartHour >= 20) score -= 5; // After 8 PM
    else if (studyStartHour >= 18) score += 5; // After 6 PM (good balance)

    // Study duration balance
    if (studyDuration >= 1 && studyDuration <= 3) score += 10;
    else if (studyDuration > 3) score -= 5; // Too much study

    return Math.max(0, Math.min(100, score));
  };

  // Generate personalized story based on user data
  const generatePersonalizedStory = (bedtime, waketime, studyStart, studyDuration) => {
    const bedtimeHour = parseInt(bedtime.split(':')[0]);
    const studyStartHour = parseInt(studyStart.split(':')[0]);

    const story = [];

    // Sleep entry
    let sleepImpact = 0;
    let sleepExplanation = '';
    if (bedtimeHour <= 22) {
      sleepImpact = 8;
      sleepExplanation = 'Early bedtime gave you great morning energy';
    } else if (bedtimeHour <= 23) {
      sleepImpact = 3;
      sleepExplanation = 'Decent bedtime, but could be earlier for better rest';
    } else {
      sleepImpact = -8;
      sleepExplanation = 'Late bedtime affected your morning focus';
    }

    story.push({
      time: bedtime,
      activity: 'When you slept',
      impact: sleepImpact,
      explanation: sleepExplanation
    });

    // Study entry
    let studyImpact = 0;
    let studyExplanation = '';
    if (studyStartHour >= 22) {
      studyImpact = -12;
      studyExplanation = 'Late night studying reduced next day\'s energy';
    } else if (studyStartHour >= 20) {
      studyImpact = -3;
      studyExplanation = 'Evening study session impacted wind-down time';
    } else {
      studyImpact = 5;
      studyExplanation = 'Balanced study timing maintained good rhythm';
    }

    story.push({
      time: studyStart,
      activity: 'When you studied',
      impact: studyImpact,
      explanation: studyExplanation
    });

    // Room time entry (assuming some indoor time)
    story.push({
      time: '12:30',
      activity: 'When you stayed in your room too long',
      impact: -4,
      explanation: 'Extended indoor time reduced social interaction'
    });

    // Data sync entry
    story.push({
      time: '17:00',
      activity: 'When you synced your data',
      impact: 3,
      explanation: 'Regular wellness check-ins build awareness'
    });

    return story;
  };

  // Generate personalized patterns
  const generatePersonalizedPatterns = (bedtime, waketime, studyStart, studyDuration) => {
    const bedtimeHour = parseInt(bedtime.split(':')[0]);
    const studyStartHour = parseInt(studyStart.split(':')[0]);

    const patterns = [];

    if (bedtimeHour <= 22) {
      patterns.push({
        pattern: 'Early Sleep Routine',
        impact: 12,
        explanation: 'Your early bedtime creates a strong foundation for the day'
      });
    } else {
      patterns.push({
        pattern: 'Late Night Sleep',
        impact: -8,
        explanation: 'Late sleep timing reduces morning productivity'
      });
    }

    if (studyStartHour >= 22) {
      patterns.push({
        pattern: 'Late Studying',
        impact: -10,
        explanation: 'Late study sessions impact sleep quality and next day focus'
      });
    } else {
      patterns.push({
        pattern: 'Balanced Study Time',
        impact: 6,
        explanation: 'Well-timed study sessions maintain work-life balance'
      });
    }

    patterns.push({
      pattern: 'Regular Check-ins',
      impact: 4,
      explanation: 'Consistent wellness monitoring helps maintain balance'
    });

    return patterns;
  };

  const handleMoodChange = (mood) => {
    setSelectedMood(mood);
    // Update data with mood-specific message and suggestions
    setData({
      ...data,
      message: moodOptions[mood].message,
      suggestions: moodOptions[mood].suggestions
    });
  };

  const handleSync = () => {
    setIsSyncing(true);
    // Mock sync delay
    setTimeout(() => {
      // Update mock data but preserve mood-specific message and suggestions
      const newData = {
        ...data,
        balanceScore: Math.min(100, data.balanceScore + Math.floor(Math.random() * 10)),
        todaysPulse: {
          sleep: { hours: 7 + Math.floor(Math.random() * 2), status: 'good' },
          steps: { count: 3000 + Math.floor(Math.random() * 2000), status: 'good' },
          classes: { attended: 2, total: 3, status: 'normal' }
        },
        // Keep the mood-specific message and suggestions
        message: moodOptions[selectedMood].message,
        suggestions: moodOptions[selectedMood].suggestions
      };
      setData(newData);
      setIsSyncing(false);
    }, 2000);
  };

  const getMoodTheme = () => {
    return moodOptions[selectedMood].theme;
  };

  const getFloatingElements = () => {
    return moodOptions[selectedMood].floatingElements || [];
  };

  return (
    <div className={`min-h-screen ${getMoodTheme()} relative overflow-hidden`}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {getFloatingElements().map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} ${element.color} ${element.blur} rounded-full`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              bottom: element.bottom,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <HostelPulseLogo size={40} />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">HostelPulse</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Wellness for Students</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Balance Score Circular Meter */}
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray={`${data.balanceScore}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900 dark:text-white">{data.balanceScore}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">{data.message}</p>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Mood Check-in Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg shadow-lg">
              <span className="text-white text-lg">💭</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">How are you feeling right now?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(moodOptions).map(([mood, config]) => (
              <button
                key={mood}
                onClick={() => handleMoodChange(mood)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  selectedMood === mood
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-800/50'
                }`}
              >
                <div className="text-2xl mb-2">
                  {mood === 'tired' && '😴'}
                  {mood === 'stressed' && '😰'}
                  {mood === 'active' && '⚡'}
                  {mood === 'balanced' && '😊'}
                </div>
                <div className={`text-sm font-medium capitalize ${
                  selectedMood === mood
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {mood}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Your Day's Story Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg">
                <span className="text-white text-lg">📖</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Day's Story</h2>
            </div>
            <div className="space-y-4">
              {data.personalizedStory?.map((item, index) => {
                const borderColor = item.impact > 0 ? 'border-green-500' :
                                   item.impact < -5 ? 'border-red-500' : 'border-orange-500';
                const impactColor = item.impact > 0 ? 'text-green-600' : 'text-red-600';

                return (
                  <div key={index} className={`border-l-4 ${borderColor} pl-4`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">🕐 {item.time}</span>
                      <span className={`text-xs font-medium ${impactColor}`}>
                        Balance {item.impact > 0 ? '+' : ''}{item.impact}
                      </span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium">{item.activity}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.explanation}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">💡 Understanding Cause & Effect</h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Each activity creates ripples in your balance. Sleep timing affects energy, study habits impact academics,
                and social time influences wellbeing. Small changes add up to big differences.
              </p>
            </div>
          </div>

        {/* Balance Patterns Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg shadow-lg">
                <span className="text-white text-lg">📊</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Balance Patterns</h2>
            </div>
            <div className="space-y-3">
              {data.personalizedPatterns?.map((pattern, index) => {
                const bgColor = pattern.impact > 0 ? 'bg-green-50 dark:bg-green-900/20' :
                               pattern.impact < -5 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-blue-50 dark:bg-blue-900/20';
                const borderColor = pattern.impact > 0 ? 'border-green-500' :
                                   pattern.impact < -5 ? 'border-red-500' : 'border-blue-500';
                const textColor = pattern.impact > 0 ? 'text-green-800 dark:text-green-200' :
                                 pattern.impact < -5 ? 'text-red-800 dark:text-red-200' : 'text-blue-800 dark:text-blue-200';
                const impactColor = pattern.impact > 0 ? 'text-green-600' : 'text-red-600';

                return (
                  <div key={index} className={`p-3 ${bgColor} rounded-lg border-l-4 ${borderColor}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium ${textColor}`}>Pattern: {pattern.pattern}</span>
                      <span className={`text-xs font-medium ${impactColor}`}>
                        {pattern.impact > 0 ? '+' : ''}{pattern.impact} Balance
                      </span>
                    </div>
                    <p className={`text-sm ${textColor.replace('800', '700').replace('200', '300')}`}>
                      {pattern.explanation}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Insight:</strong> {data.balanceScore >= 70 ?
                  "Your habits are creating positive momentum. Keep building on these patterns!" :
                  "Focus on your sleep and study timing - these have the biggest impact on your balance."}
              </p>
            </div>
          </div>

        {/* Gentle Suggestions Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg shadow-lg">
                <span className="text-white text-lg">💡</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Gentle Suggestions</h2>
            </div>
            <div className="space-y-3">
              {data.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900/30 dark:hover:to-blue-800/30 rounded-xl transition-all duration-200 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

        {/* Sync Button */}
        <div className="text-center pb-24">
          <button
            onClick={handleSync}
            disabled={isSyncing}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isSyncing ? '🔄 Syncing...' : '🔄 Sync My Life'}
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
        <div className="max-w-4xl mx-auto flex justify-around py-3">
          <button className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">🏠</span>
            <span className="text-xs font-medium">Dashboard</span>
          </button>
          <button onClick={() => navigate('/vibe-map')} className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">🗺️</span>
            <span className="text-xs font-medium">Vibe Map</span>
          </button>
          <button onClick={() => navigate('/rewards')} className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">🏆</span>
            <span className="text-xs font-medium">Rewards</span>
          </button>
          <button onClick={() => navigate('/settings')} className="flex flex-col items-center p-3 text-blue-600 rounded-xl bg-blue-50 dark:bg-blue-900/20 transition-all duration-200 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30">
            <span className="text-xl mb-1">⚙️</span>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;