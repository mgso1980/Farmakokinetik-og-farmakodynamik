
import React, { useState } from 'react';
import { PHARMACOKINETICS_DATA, PHARMACODYNAMICS_DATA } from './constants';
import LearningSection from './components/LearningSection';
import { BookOpenIcon, BeakerIcon } from './components/icons/TopicIcons';

type Tab = 'kinetics' | 'dynamics';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('kinetics');

  const tabs = [
    { id: 'kinetics', name: 'Farmakokinetik', icon: <BookOpenIcon /> },
    { id: 'dynamics', name: 'Farmakodynamik', icon: <BeakerIcon /> },
  ];

  const activeData = activeTab === 'kinetics' ? PHARMACOKINETICS_DATA : PHARMACODYNAMICS_DATA;

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <header className="bg-slate-800/50 backdrop-blur-sm sticky top-0 z-10 shadow-lg shadow-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between h-24 sm:h-16">
            <h1 className="text-2xl font-bold text-cyan-400 my-2 sm:my-0">
              Interaktiv Læringsplatform
            </h1>
            <nav>
              <ul className="flex space-x-2 sm:space-x-4">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id as Tab)}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-cyan-500 text-white shadow-md'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
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
      </header>

      <main key={activeTab} className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 fade-in">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
            {activeData.title}
          </h2>
          <div className="space-y-8">
            {activeData.sections.map((section, index) => (
              <LearningSection key={index} data={section} topic={activeTab} />
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Udviklet til farmakologiundervisning.</p>
      </footer>
    </div>
  );
};

export default App;