
import React from 'react';
import type { LearningSectionProps, LearningActivity } from '../types';

interface ActivityItemProps {
  activity: LearningActivity;
  isCompleted: boolean;
  onToggle: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, isCompleted, onToggle }) => {
  return (
    <li
      className="group flex items-center space-x-4 p-3 rounded-xl transition-all duration-300 hover:bg-indigo-50/50 cursor-pointer border border-transparent hover:border-indigo-100"
      onClick={onToggle}
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          className="form-checkbox h-6 w-6 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500/30 transition-all duration-300 cursor-pointer shadow-sm"
        />
      </div>
      <div className={`flex-1 text-base font-medium transition-all duration-300 ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
        {activity.text}
        {activity.link && (
          <a 
            href={activity.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} 
            className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${isCompleted ? 'bg-slate-100 text-slate-400' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'} transition-colors duration-200`}
          >
            Link
          </a>
        )}
      </div>
    </li>
  );
};

const LearningSection: React.FC<LearningSectionProps> = ({ data, topic, completedActivities, onToggleActivity }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200 transition-all duration-300 hover:border-indigo-200 hover:shadow-md">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{data.level}</h3>
        <p className="text-slate-500 mt-1 text-sm font-medium">{data.description}</p>
      </div>
      <div className="p-6">
        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Activities */}
            <div className="lg:col-span-3">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4 flex items-center">
                Læringsaktiviteter
              </h4>
              <ul className="space-y-1">
                {data.activities.map((activity, index) => (
                  <ActivityItem 
                    key={index} 
                    activity={activity} 
                    isCompleted={completedActivities[index] || false} 
                    onToggle={() => onToggleActivity(index)}
                  />
                ))}
              </ul>
            </div>
            
            {/* Purpose & Work Method */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Formål</h4>
                <ul className="text-slate-600 list-none space-y-2 text-sm">
                  {data.purpose.map((p, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {data.workMethod && (
                 <div className="pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-3">Arbejdsform</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{data.workMethod}</p>
                 </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;