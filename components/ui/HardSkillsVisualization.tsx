// src/components/ui/HardSkillsVisualization.tsx
import React from 'react';
import { DETAILED_HARD_SKILLS, HardSkill, HardSkillCategory } from '@/app/data';

const skillGradients: { [key: string]: string } = {
  photoshop: 'bg-gradient-to-br from-blue-300 via-purple-400 to-red-400',
  illustrator: 'bg-gradient-to-br from-orange-300 via-yellow-300 to-orange-400',
  indesign: 'bg-gradient-to-br from-pink-400 via-fuchsia-400 to-pink-500',
  premiere: 'bg-gradient-to-br from-indigo-400 via-purple-500 to-violet-500',
  react: 'bg-gradient-to-tr from-sky-300 via-cyan-300 to-blue-400',
  nextjs: 'bg-gradient-to-tr from-slate-300 via-gray-400 to-slate-500',
  html: 'bg-gradient-to-tr from-orange-400 to-red-500',
  css: 'bg-gradient-to-tr from-blue-400 to-sky-500',
  js: 'bg-gradient-to-tr from-yellow-300 to-amber-400',
  office: 'bg-gradient-to-tr from-orange-400 via-red-400 to-rose-400',
  python: 'bg-gradient-to-tr from-blue-400 via-yellow-400 to-blue-500',
  Webentwicklung: 'bg-gradient-to-tr from-emerald-200 via-teal-300 to-cyan-400',
  Design: 'bg-gradient-to-tr from-violet-200 via-purple-300 to-fuchsia-400',
  'Software & Tools': 'bg-gradient-to-tr from-lime-200 via-green-300 to-emerald-400',
  default: 'bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800',
};

// Standard-Gradient ermitteln
const getGradientClass = (skill: HardSkill): string => {
  return skillGradients[skill.id] 
    || skillGradients[skill.category] 
    || skillGradients.default;
};

const HardSkillsVisualization: React.FC = () => {
  const skillsByCategory = DETAILED_HARD_SKILLS.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<HardSkillCategory, HardSkill[]>);

  const categoryOrder: HardSkillCategory[] = ['Webentwicklung', 'Design', 'Software & Tools'];

  return (
    <div>
      {categoryOrder.map((category) => {
        const skills = skillsByCategory[category];
        if (!skills || skills.length === 0) return null;

        return (
          <div key={category} className="mb-6 last:mb-0">
            <h4 className="text-md font-semibold mb-3 text-white dark:text-white">
              {category}
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => {
                const baseGradient = getGradientClass(skill);

                return (
                  <div
                    key={skill.id}
                    className={`
                      rounded-lg p-3 shadow-sm flex items-center gap-2
                      text-sm font-medium cursor-default

                      /* Standardzustand */
                      bg-white dark:bg-zinc-800
                      text-zinc-700 dark:text-zinc-300

                      /* Gradient – aber anfangs auf 0% Breite */
                      ${baseGradient}
                      bg-no-repeat bg-left
                      bg-[length:0%_100%]

                      /* Transition-Effekte */
                      transition-all duration-300 ease-in-out
                      /* Oder: transition-[background-size] duration-300 ease-in-out */

                      /* Hover-Effekt: Gradient füllt sich komplett */
                      hover:bg-[length:100%_100%]
                      hover:text-white dark:hover:text-gray-100
                      hover:shadow-md hover:scale-[1.03]
                    `}
                  >
                    <span className="shrink-0 w-5 h-5 flex items-center justify-center bg-white/20 dark:bg-gray-800/20 backdrop-filter backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-full">
                    { React.cloneElement(skill.icon) }
                    </span>
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HardSkillsVisualization;
