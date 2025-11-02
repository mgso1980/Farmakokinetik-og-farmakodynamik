
import React, { useState, useEffect } from 'react';
import type { LearningSectionProps, LearningActivity } from '../types';

interface ActivityItemProps {
  activity: LearningActivity;
  isCompleted: boolean;
  onToggle: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, isCompleted, onToggle }) => {
  return (
    <li
      className="group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50 cursor-pointer"
      onClick={onToggle}
    >
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="form-checkbox h-5 w-5 rounded bg-slate-700 border-slate-600 text-cyan-500 focus:ring-cyan-500/50 transition-colors duration-200 cursor-pointer"
      />
      <div className={`flex-1 transition-colors duration-200 ${isCompleted ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
        {activity.text}
        {activity.link && (
          <a href={activity.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`ml-2 ${isCompleted ? 'text-blue-600' : 'text-blue-400'} hover:text-blue-300 hover:underline transition-colors duration-200 break-all`}>
            [Link]
          </a>
        )}
      </div>
    </li>
  );
};

const LearningSection: React.FC<LearningSectionProps> = ({ data, topic }) => {
  const storageKey = `completion_${topic}_${data.level}`;
  
  const [completedActivities, setCompletedActivities] = useState<boolean[]>(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure the saved array matches the current number of activities
        if (Array.isArray(parsed) && parsed.length === data.activities.length) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Failed to parse completion status from localStorage", error);
    }
    return new Array(data.activities.length).fill(false);
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(completedActivities));
    } catch (error) {
      console.error("Failed to save completion status to localStorage", error);
    }
  }, [completedActivities, storageKey]);

  const handleToggleActivity = (index: number) => {
    setCompletedActivities(prev => {
      const newCompleted = [...prev];
      newCompleted[index] = !newCompleted[index];
      return newCompleted;
    });
  };

  return (
    <div className="bg-slate-800/70 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-slate-700">
      <div className="p-6">
        <h3 className="text-xl font-bold text-cyan-300">{data.level}</h3>
        <p className="text-slate-400 mt-1">{data.description}</p>
      </div>
      <div className="bg-slate-800/80 p-6">
        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Activities */}
            <div>
              <h4 className="font-semibold text-lg text-white mb-3">Læringsaktiviteter</h4>
              <ul className="space-y-1">
                {data.activities.map((activity, index) => (
                  <ActivityItem 
                    key={index} 
                    activity={activity} 
                    isCompleted={completedActivities[index]} 
                    onToggle={() => handleToggleActivity(index)}
                  />
                ))}
              </ul>
            </div>
            
            {/* Purpose & Work Method */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-lg text-white mb-3">Formål</h4>
                <ul className="text-slate-300 list-disc list-inside space-y-1">
                  {data.purpose.map((p, index) => <li key={index}>{p}</li>)}
                </ul>
              </div>
              {data.workMethod && (
                 <div>
                    <h4 className="font-semibold text-lg text-white mb-3">Arbejdsform</h4>
                    <p className="text-slate-300">{data.workMethod}</p>
                 </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;