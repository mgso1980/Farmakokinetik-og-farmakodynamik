
import React, { useState, useEffect, useMemo } from 'react';
import { PHARMACOKINETICS_DATA, PHARMACODYNAMICS_DATA } from './constants';
import LearningSection from './components/LearningSection';
import { BookOpenIcon, BeakerIcon } from './components/icons/TopicIcons';

type Tab = 'kinetics' | 'dynamics';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('kinetics');
  const [completions, setCompletions] = useState<Record<string, boolean[]>>({});

  // Initialize completions from localStorage
  useEffect(() => {
    const allData = [PHARMACOKINETICS_DATA, PHARMACODYNAMICS_DATA];
    const initialCompletions: Record<string, boolean[]> = {};

    allData.forEach(topicData => {
      const topic = topicData.title === 'Farmakokinetik' ? 'kinetics' : 'dynamics';
      topicData.sections.forEach(section => {
        const storageKey = `completion_${topic}_${section.level}`;
        try {
          const saved = window.localStorage.getItem(storageKey);
          if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length === section.activities.length) {
              initialCompletions[storageKey] = parsed;
              return;
            }
          }
        } catch (e) {
          console.error("Error loading completion", e);
        }
        initialCompletions[storageKey] = new Array(section.activities.length).fill(false);
      });
    });

    setCompletions(initialCompletions);
  }, []);

  const handleToggle = (storageKey: string, index: number) => {
    setCompletions(prev => {
      const current = prev[storageKey] || [];
      const next = [...current];
      next[index] = !next[index];
      
      // Save to localStorage
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch (e) {
        console.error("Error saving completion", e);
      }

      return { ...prev, [storageKey]: next };
    });
  };

  const progress = useMemo(() => {
    let total = 0;
    let completed = 0;

    Object.values(completions).forEach((arr: boolean[]) => {
      total += arr.length;
      completed += arr.filter(Boolean).length;
    });

    return total === 0 ? 0 : Math.round((completed / total) * 100);
  }, [completions]);

  const tabs = [
    { id: 'kinetics', name: 'Farmakokinetik', icon: <BookOpenIcon /> },
    { id: 'dynamics', name: 'Farmakodynamik', icon: <BeakerIcon /> },
  ];

  const activeData = activeTab === 'kinetics' ? PHARMACOKINETICS_DATA : PHARMACODYNAMICS_DATA;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-24 sm:h-20">
            <h1 className="text-2xl font-bold text-indigo-600 my-2 sm:my-0">
              Interaktiv Læringsplatform
            </h1>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Samlet fremgang</span>
                <div className="flex items-center space-x-3">
                  <div className="w-48 h-2.5 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-indigo-600 font-mono font-bold text-sm w-10">{progress}%</span>
                </div>
              </div>
              <nav>
                <ul className="flex space-x-2 sm:space-x-4">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id as Tab)}
                        className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-indigo-600'
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Mobile Progress Bar */}
        <div className="md:hidden h-1 bg-slate-100 w-full">
          <div 
            className="h-full bg-indigo-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main key={activeTab} className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8 fade-in">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
            {activeData.title}
          </h2>
          <div className="space-y-10">
            {activeData.sections.map((section, index) => {
              const storageKey = `completion_${activeTab}_${section.level}`;
              return (
                <LearningSection 
                  key={index} 
                  data={section} 
                  topic={activeTab} 
                  completedActivities={completions[storageKey] || []}
                  onToggleActivity={(idx) => handleToggle(storageKey, idx)}
                />
              );
            })}
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm border-t border-slate-100 mt-12">
        <p>© 2026 • Udviklet til farmakologiundervisning</p>
      </footer>
    </div>
  );
};

export default App;