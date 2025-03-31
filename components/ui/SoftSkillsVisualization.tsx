// SoftSkillsVisualization.tsx
import { motion } from 'framer-motion'

const skills = [
  { name: 'Teamfähigkeit', level: 0.85 },
  { name: 'Kreativität', level: 0.75 },
  { name: 'Kommunikationsfähigkeit & Freundlichkeit', level: 0.9 },
  { name: 'Selbstständigkeit & Initiative', level: 0.8 },
  { name: 'Problemlösungskompetenz', level: 0.7 },
]

export default function SoftSkillsVisualization() {
  return (
    <div className="flex flex-col gap-3">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col space-y-1">
          {/* Skill-Titel + Prozentzahl in einer Zeile */}
          <div className="flex items-center justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <span>{skill.name}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {Math.round(skill.level * 100)}%
            </span>
          </div>

          {/* Hintergrund-Balken (schmaler) */}
          <div className="relative h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
            {/* Animierter Füll-Balken */}
            <motion.div
              className="absolute left-0 top-0 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
