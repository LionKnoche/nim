'use client'
import React, { useState, useRef } from 'react'
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

// Augensymbol & Icons
import { XIcon, EyeIcon, PlayIcon, PauseIcon } from 'lucide-react'

// Deine Visualisierungen
import SoftSkillsVisualization from '@/components/ui/SoftSkillsVisualization'
import HardSkillsVisualization from '@/components/ui/HardSkillsVisualization'

// Daten-Imports
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  BLOG_POSTS,
  SOCIAL_LINKS,
  EducationEntry,
  WorkExperience as WorkExperienceType,
} from './data'

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
const TRANSITION_HOVER_CONTENT = { duration: 0.2 }

// Beispiel-Video-Komponente
type ProjectVideoProps = {
  src: string
}
function ProjectVideo({ src }: ProjectVideoProps) {
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

// Social-Link-Komponente
function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full border border-zinc-300 dark:border-zinc-600 px-2.5 py-1 text-sm text-black transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100"
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

// Einleitungstext
const markdownContent = `
**Hallo und herzlich willkommen in meinem Online-Portfolio!**

Ich freue mich sehr, dass du den Weg hierher gefunden hast. Ich bin Lion – und hier findest du alles Wichtige über mich und meine Projekte, klar, anschaulich und dynamisch präsentiert. *Garantiert spannender als ein herkömmlicher Lebenslauf!*
`

// Helper Function zum Anzeigen von Default- oder Detail-Ansicht
const renderBoxContent = (
  item: EducationEntry | WorkExperienceType,
  isHovered: boolean
) => {
  const hasDetails = Boolean(item.details)
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isHovered && hasDetails ? (
        <motion.div
          key={`${item.id || item.title}-details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={TRANSITION_HOVER_CONTENT}
          className="text-sm text-zinc-600 dark:text-zinc-400 p-4 leading-relaxed"
        >
          {item.details}
        </motion.div>
      ) : (
        <motion.div
          key={`${item.id || item.title}-default`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={TRANSITION_HOVER_CONTENT}
          className="relative flex w-full flex-col sm:flex-row justify-between p-4 pr-16"
        >
          <div className="mb-1 sm:mb-0">
            <h4 className="font-normal dark:text-zinc-100">{item.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{item.company}</p>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 shrink-0">
            {'end' in item && item.end ? `${item.start} - ${item.end}` : item.start}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Definiere den Typ für die aktiven Fähigkeiten
type ActiveSkillType = 'hard' | 'soft' | 'languages'

/* Kleiner Sub-Component für Frequenzbars – nur als Beispiel.
   Du kannst diese Animation gerne anpassen oder vereinfachen. */
function FrequencyBars({ isPlaying }: { isPlaying: boolean }) {
  const bars = Array.from({ length: 5 }, (_, i) => i)
  return (
    <div className="flex items-end gap-1">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-zinc-400 dark:bg-zinc-500"
          initial={{ height: '20%' }}
          animate={{
            height: isPlaying
              ? [
                  '20%',
                  '100%',
                  '40%',
                  '85%',
                  '30%',
                  '70%',
                  '20%',
                ] // Abfolge der Höhen als Loop
              : '20%',
          }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  )
}

// MusicTrack Komponente
type MusicTrack = {
  id: string
  title: string
  src: string
}

// Karte für jeden Track: Play/Pause + Frequenzbalken
function MusicTrackCard({
  track,
  isActive,
  onPlay,
}: {
  track: MusicTrack
  isActive: boolean
  onPlay: (id: string) => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Start/Pause-Funktion
  const handleToggle = () => {
    onPlay(track.id)
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 mt-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <div className="flex items-center gap-3">
        {/* Play/Pause Button */}
        <button
          className="border border-zinc-300 dark:border-zinc-500 rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          onClick={handleToggle}
        >
          {isActive ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </button>

        {/* Track-Title */}
        <span className="text-sm text-zinc-800 dark:text-zinc-100">
          {track.title}
        </span>

        {/* Frequenzbars */}
        <div className="ml-2">
          <FrequencyBars isPlaying={isActive} />
        </div>
      </div>

      {/* Audio-Element (unsichtbar), gesteuert per React Ref */}
      <audio ref={audioRef} src={track.src} />
    </div>
  )
}

export default function Personal() {
  const [showEducation, setShowEducation] = useState(true)
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)
  const [activeSkillType, setActiveSkillType] = useState<ActiveSkillType>('hard')

  // State für Freizeit-Bereich
  const [activeHobby, setActiveHobby] = useState<string | null>(null)

  // State: speichert die ID vom aktuell spielenden Track
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null)

  // Beispiel-Array für Sprachkenntnisse
  const languages = [
    {
      name: 'Englisch',
      level: 'C1',
      description:
        'Fließend in Wort und Schrift – ideal für internationale Geschäftsbeziehungen.',
      sequence:
        'I look forward to our fruitful collaboration. Can you keep up with this fast-paced text?',
    },
    {
      name: 'Spanisch',
      level: 'B2',
      description:
        'Gute Kenntnisse, besonders in Konversation und Leseverständnis.',
      sequence:
        'Estoy deseando colaborar contigo. ¿Puedes lesen diese spannende Sprachsequenz?',
    },
    {
      name: 'Französisch',
      level: 'B1',
      description: 'Solide Grundkenntnisse und ein gutes Hörverständnis.',
      sequence:
        'Je suis prêt à relever des défis. Laisse-toi emporter par cette séquence langagière!',
    },
    {
      name: 'Japanisch',
      level: 'A2',
      description: 'Grundkenntnisse, die sich stetig verbessern.',
      sequence: 'はじめまして、よろしくお願いします。Diese fließende Sequenz zeigt dir mein Niveau!',
    },
  ]

  // Beispiel-Musik-Array
  // Hier ggf. Pfade anpassen: /public/audio/song1.mp3
  const musicTracks = [
    { id: 'track1', title: 'Entspannter Song', src: '/audio/song1.mp3' },
    { id: 'track2', title: 'Coole Vibes', src: '/audio/song2.mp3' },
    { id: 'track3', title: 'Energie Pur', src: '/audio/song3.mp3' },
  ]

  // CSS-Klassen für Buttons/Boxen
  const activeBtnClass =
    'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800'
  const inactiveBtnClass =
    'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
  const baseBtnClass = 'px-3 py-1 text-sm rounded-xl transition-all duration-200'
  const skillBoxClasses =
    'p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-950'

  // Startet / pausiert den gewünschten Track
  const handlePlayTrack = (id: string) => {
    setPlayingTrackId((prev) => (prev === id ? null : id))
  }

  return (
    <motion.main
      className="max-w-3xl mx-auto px-4 space-y-12 pb-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* Einleitung */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </motion.section>

      {/* Lebenslauf */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Lebenslauf</h3>
        <div className="flex space-x-2 mb-5">
          <button
            onClick={() => setShowEducation(true)}
            className={`${baseBtnClass} ${showEducation ? activeBtnClass : inactiveBtnClass}`}
          >
            Ausbildung
          </button>
          <button
            onClick={() => setShowEducation(false)}
            className={`${baseBtnClass} ${!showEducation ? activeBtnClass : inactiveBtnClass}`}
          >
            Erfahrungen
          </button>
        </div>

        {/* Ausbildung */}
        {showEducation && (
          <div className="flex flex-col space-y-2">
            {EDUCATION.map((edu) => {
              const key = edu.id || `${edu.company}-${edu.title}`
              const hasDetails = Boolean(edu.details)
              const hasCertificate = Boolean(edu.certificateUrl)
              const isInteractive = hasDetails || hasCertificate

              return (
                <div
                  key={key}
                  className="relative block overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-600 p-1 group"
                  onMouseEnter={() => isInteractive && setHoveredItemId(edu.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  style={{ cursor: isInteractive ? 'pointer' : 'default' }}
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  {/* Hauptinhaltsbereich */}
                  <div className="relative h-full w-full rounded-xl bg-white dark:bg-zinc-950 min-h-[80px] flex items-center">
                    {renderBoxContent(edu, hoveredItemId === edu.id && hasDetails)}
                  </div>

                  {/* Kleine Hover-Box für Zertifikat (Link) */}
                  <AnimatePresence>
                    {hoveredItemId === edu.id && hasCertificate && (
                      <motion.a
                        href={edu.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Zertifikat öffnen"
                        className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20
                                   backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600
                                   rounded-r-xl flex items-center justify-center cursor-pointer z-10"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                      </motion.a>
                    )}
                    {hoveredItemId === edu.id && hasDetails && !hasCertificate && (
                      <motion.div
                        title="Details anzeigen"
                        className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20
                                   backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600
                                   rounded-r-xl flex items-center justify-center
                                   pointer-events-none z-10"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        )}

        {/* Erfahrungen */}
        {!showEducation && (
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => {
              const key = job.id || `${job.company}-${job.title}`
              const hasDetails = Boolean(job.details)
              const hasLink = Boolean(job.link)
              const isInteractive = hasDetails || hasLink

              const WrapperElement = hasLink ? 'a' : 'div'
              const wrapperProps = hasLink
                ? { href: job.link, rel: 'noopener noreferrer' }
                : {}

              return (
                <WrapperElement
                  key={key}
                  className="relative block overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-600 p-1 group"
                  onMouseEnter={() => isInteractive && setHoveredItemId(job.id!)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  style={{ cursor: isInteractive ? 'pointer' : 'default' }}
                  {...wrapperProps}
                >
                  <Spotlight
                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                    size={64}
                  />
                  <div className="relative h-full w-full rounded-xl bg-white dark:bg-zinc-950 min-h-[80px] flex items-center">
                    {renderBoxContent(job, hoveredItemId === job.id && hasDetails)}
                  </div>
                  <AnimatePresence>
                    {hoveredItemId === job.id && isInteractive && (
                      <motion.div
                        title={hasLink ? 'Link öffnen' : 'Details anzeigen'}
                        className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20
                                   backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600
                                   rounded-r-xl flex items-center justify-center
                                   pointer-events-none z-10"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 15 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                      >
                        <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </WrapperElement>
              )
            })}
          </div>
        )}
      </motion.section>

      {/* Fähigkeiten */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Fähigkeiten</h3>
        <div className="flex space-x-2 mb-5">
          <button
            onClick={() => setActiveSkillType('hard')}
            className={`${baseBtnClass} ${
              activeSkillType === 'hard' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Hard Skills
          </button>
          <button
            onClick={() => setActiveSkillType('soft')}
            className={`${baseBtnClass} ${
              activeSkillType === 'soft' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Soft Skills
          </button>
          <button
            onClick={() => setActiveSkillType('languages')}
            className={`${baseBtnClass} ${
              activeSkillType === 'languages' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Sprachen
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeSkillType === 'soft' && (
            <motion.div
              key="soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={skillBoxClasses}>
                <SoftSkillsVisualization />
              </div>
            </motion.div>
          )}
          {activeSkillType === 'hard' && (
            <motion.div
              key="hard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={skillBoxClasses}>
                <HardSkillsVisualization />
              </div>
            </motion.div>
          )}
          {activeSkillType === 'languages' && (
            <motion.div
              key="languages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    className="relative overflow-hidden p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-950 hover:shadow-lg transition-shadow duration-300"
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      variants={{
                        rest: { opacity: 1 },
                        hover: { opacity: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                          {lang.name}
                        </h4>
                        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                          ({lang.level})
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {lang.description}
                      </p>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 p-4"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                        {lang.name}
                      </h4>
                      <div className="relative mt-4 overflow-hidden h-12">
                        <motion.div
                          initial={{ x: '100%' }}
                          animate={{ x: '-100%' }}
                          transition={{
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity,
                          }}
                          className="whitespace-nowrap text-lg italic text-zinc-600 dark:text-zinc-300"
                        >
                          {lang.sequence}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Freizeit */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Freizeit</h3>
        <div className="flex space-x-2 mb-5">
          <button
            onClick={() => setActiveHobby(activeHobby === 'musik' ? null : 'musik')}
            className={`${baseBtnClass} ${
              activeHobby === 'musik' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Musik
          </button>
          <button
            onClick={() => setActiveHobby(activeHobby === 'kunst' ? null : 'kunst')}
            className={`${baseBtnClass} ${
              activeHobby === 'kunst' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Kunst
          </button>
          <button
            onClick={() => setActiveHobby(activeHobby === 'tennis' ? null : 'tennis')}
            className={`${baseBtnClass} ${
              activeHobby === 'tennis' ? activeBtnClass : inactiveBtnClass
            }`}
          >
            Tennis
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeHobby === 'musik' && (
            <motion.div
              key="musik"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={skillBoxClasses}>
                {/* Musik mit Play Icons & Frequenzanimation */}
                {musicTracks.map((track) => (
                  <MusicTrackCard
                    key={track.id}
                    track={track}
                    isActive={track.id === playingTrackId}
                    onPlay={handlePlayTrack}
                  />
                ))}

                <p className="mt-3 text-xs text-zinc-400">
                  (Hinweis: Die Audio-Dateien müssen im Ordner <code>/public/audio</code> liegen
                  oder per URL erreichbar sein)
                </p>
              </div>
            </motion.div>
          )}

          {activeHobby === 'kunst' && (
            <motion.div
              key="kunst"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={skillBoxClasses}>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Hier folgt bald spannender Content zu Kunst!
                </p>
              </div>
            </motion.div>
          )}

          {activeHobby === 'tennis' && (
            <motion.div
              key="tennis"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={skillBoxClasses}>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Hier folgt bald spannender Content zu Tennis!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Projekte */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 p-1">
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
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
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
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3 block hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-150"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Connect</h3>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">
          Du möchtest mehr über meine Projekte erfahren oder dich vernetzen? Dann schreib
          mir gerne oder folge mir auf meinen Kanälen!
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3">
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
