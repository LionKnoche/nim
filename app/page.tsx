// src/app/(main)/page.tsx (oder wo immer deine Personal Komponente ist)
'use client'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { XIcon } from 'lucide-react'

// Deine Visualisierungen
import SoftSkillsVisualization from '@/components/ui/SoftSkillsVisualization'
// --- Importiere die neue Komponente ---
import HardSkillsVisualization from '@/components/ui/HardSkillsVisualization'
 // <-- Passe den Pfad ggf. an

// Daten-Imports
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  BLOG_POSTS,
  // EMAIL, // wird nur im Header genutzt
  SOCIAL_LINKS,
  EducationEntry, // Import specific type if needed
  WorkExperience as WorkExperienceType // Alias type to avoid naming conflict with component
} from './data' // Assuming data.tsx is in the same directory or adjust path

// Animation-Variants
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
const TRANSITION_SECTION = { duration: 0.3 }
const TRANSITION_HOVER_CONTENT = { duration: 0.2 } // Animation duration for content switch

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  // ... (ProjectVideo component remains the same)
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 p-1">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full border border-zinc-300 dark:border-zinc-600 bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

// Social Link (mit dünnem Rahmen)
function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  // ... (MagneticSocialLink component remains the same)
   return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank" // Added for external links
        rel="noopener noreferrer" // Added for security
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full border border-zinc-300 dark:border-zinc-600 px-2.5 py-1 text-sm text-black transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100" // Added dark:text-zinc-100
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5V9C12 9.27615 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27615 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </Magnetic>
  )
}

// Einleitungstext (ohne doppelte Namens-/Kontaktangaben)
const markdownContent = `
**Hallo und herzlich willkommen in meinem Online-Portfolio!**

Ich freue mich sehr, dass du den Weg hierher gefunden hast. Ich bin Lion – und hier findest du alles Wichtige über mich und meine Projekte, klar, anschaulich und dynamisch präsentiert. *Garantiert spannender als ein herkömmlicher Lebenslauf!*
`

// Helper Function to render the content inside the box (Default or Details)
const renderBoxContent = (
    item: EducationEntry | WorkExperienceType,
    isHovered: boolean
) => {
  const hasDetails = Boolean(item.details);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isHovered && hasDetails ? (
        // --- Details View ---
        <motion.div
          key={`${item.id || item.title}-details`} // Use unique key
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={TRANSITION_HOVER_CONTENT}
          className="text-sm text-zinc-600 dark:text-zinc-400 p-4 leading-relaxed" // Use slightly smaller text for details
        >
          {item.details}
        </motion.div>
      ) : (
        // --- Default View ---
        <motion.div
          key={`${item.id || item.title}-default`} // Use unique key
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={TRANSITION_HOVER_CONTENT}
          className="relative flex w-full flex-col sm:flex-row justify-between p-4" // Use flex-col on small screens
        >
          <div className="mb-1 sm:mb-0">
            <h4 className="font-normal dark:text-zinc-100">
              {item.title}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400">
              {item.company}
            </p>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 shrink-0"> {/* Ensure date doesn't wrap unnecessarily */}
            { 'end' in item && item.end ? `${item.start} - ${item.end}` : item.start }
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default function Personal() {
  // Standard: Hard Skills / Ausbildung
  const [showSoftSkills, setShowSoftSkills] = useState(false)
  const [showEducation, setShowEducation] = useState(true)
  // State für Hover-Effekt (gemeinsam für Ausbildung & Erfahrung)
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  return (
    <motion.main
      className="max-w-3xl mx-auto px-4 space-y-12 pb-20" // Added pb-20 for bottom space
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Einleitung */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </motion.section>

      {/* Lebenslauf */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-semibold">Lebenslauf</h3>
        {/* Buttons zum Umschalten */}
        <div className="flex space-x-2 mb-5">
           <button
            onClick={() => setShowEducation(true)}
            className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
              showEducation
                ? 'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800' // Highlight active button slightly more
                : 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Ausbildung
          </button>
          <button
            onClick={() => setShowEducation(false)}
            className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
              !showEducation
                ? 'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800' // Highlight active button slightly more
                : 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Erfahrungen
          </button>
        </div>

        {/* --- Ausbildung mit internem Hover-Effekt --- */}
        {showEducation && (
          <div className="flex flex-col space-y-2">
            {EDUCATION.map((edu) => {
               // Ensure ID exists, generate fallback if necessary (though data.tsx has them)
              const key = edu.id || `${edu.company}-${edu.title}`;
              const hasDetails = Boolean(edu.details);

              return (
                <div // Wrapper für Hover-Events
                  key={key}
                  className="relative block overflow-hidden rounded-md border border-zinc-300 dark:border-zinc-600 p-1" // Outer padding for spotlight effect maybe? Or keep p-0? Let's try p-1
                  onMouseEnter={hasDetails ? () => setHoveredItemId(edu.id) : undefined}
                  onMouseLeave={() => setHoveredItemId(null)}
                  // Add cursor pointer if details exist to indicate interactivity
                  style={{ cursor: hasDetails ? 'pointer' : 'default' }}
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  {/* Inner container for background and content switching */}
                   <div className="relative h-full w-full rounded-md bg-white dark:bg-zinc-950 min-h-[80px] flex items-center"> {/* Added min-height and flex for alignment */}
                     {/* Use helper function to render content */}
                     {renderBoxContent(edu, hoveredItemId === edu.id)}
                   </div>
                </div>
              );
            })}
          </div>
        )}

        {/* --- Erfahrungen mit internem Hover-Effekt --- */}
        {!showEducation && (
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => {
              const key = job.id || `${job.company}-${job.title}`; // Use ID if available
              const hasDetails = Boolean(job.details);
              const hasLink = Boolean(job.link); // Check if there's a link

              // Decide the wrapper element based on link presence
               const WrapperElement = hasLink ? 'a' : 'div';
               const wrapperProps = hasLink ? { href: job.link, target: '_blank', rel: 'noopener noreferrer' } : {};


              return (
                 <WrapperElement // Use 'a' or 'div'
                  key={key}
                  className="relative block overflow-hidden rounded-md border border-zinc-300 dark:border-zinc-600 p-1 group" // Add group for potential future link styling
                  onMouseEnter={hasDetails ? () => setHoveredItemId(job.id!) : undefined} // Assuming ID exists if details exist
                  onMouseLeave={() => setHoveredItemId(null)}
                   // Add cursor pointer if details OR link exist
                  style={{ cursor: (hasDetails || hasLink) ? 'pointer' : 'default' }}
                  {...wrapperProps} // Spread link props if it's an 'a' tag
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                   {/* Inner container */}
                  <div className="relative h-full w-full rounded-md bg-white dark:bg-zinc-950 min-h-[80px] flex items-center"> {/* Added min-height and flex */}
                     {/* Use helper function */}
                    {renderBoxContent(job, hoveredItemId === job.id)}
                  </div>
                </WrapperElement>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* Fähigkeiten */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-semibold">Fähigkeiten</h3>
        <div className="flex space-x-2 mb-5">
          {/* Hard Skills Button */}
          <button
            onClick={() => setShowSoftSkills(false)}
            className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
              !showSoftSkills
                ? 'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
                : 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Hard Skills
          </button>
           {/* Soft Skills Button */}
          <button
            onClick={() => setShowSoftSkills(true)}
             className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
              showSoftSkills
                ? 'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
                : 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            Soft Skills
          </button>
        </div>

        <AnimatePresence mode="wait">
          {showSoftSkills ? (
             // --- Soft Skills Anzeige ---
            <motion.div
              key="soft"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <SoftSkillsVisualization />
            </motion.div>
          ) : (
             // --- Hard Skills Anzeige (mit neuer Komponente) ---
            <motion.div
              key="hard"
              initial={{ opacity: 0 }} // Einfaches Fade-in für den Bereich
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* --- Verwende die neue HardSkillsVisualization Komponente --- */}
              <HardSkillsVisualization />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Projekte */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {/* ... (Projects section remains the same) ... */}
         <h3 className="mb-3 text-lg font-semibold">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-md border border-zinc-200 dark:border-zinc-800 p-1">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span> {/* Added dark:bg-zinc-50 */}
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
         {/* ... (Blog section remains the same) ... */}
        <h3 className="mb-3 text-lg font-semibold">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden" // Added overflow-hidden
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3 block hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-150" // Added block, hover styles, transition
                href={post.link}
                data-id={post.uid} // data-id is likely for AnimatedBackground, keep it
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400"> {/* Adjusted text size */}
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {/* ... (Connect section remains the same) ... */}
         <h3 className="mb-3 text-lg font-semibold">Connect</h3>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">
          Du möchtest mehr über meine Projekte erfahren oder dich vernetzen? Dann schreib mir gerne oder folge mir auf meinen Kanälen! {/* Adjusted text slightly */}
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3"> {/* Use gap for spacing, flex-wrap for smaller screens */}
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}