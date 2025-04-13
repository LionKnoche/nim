'use client'
// Import necessary types from framer-motion
import React, { useState, useRef, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion' // Import Variants and Transition
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background' // Placeholder
import { Spotlight } from '@/components/ui/spotlight' // Placeholder
import { Magnetic } from '@/components/ui/magnetic' // Placeholder
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog' // Placeholder

// Icons
import { XIcon, EyeIcon, PlayIcon, PauseIcon } from 'lucide-react'

// Visualizations (Placeholders)
import SoftSkillsVisualization from '@/components/ui/SoftSkillsVisualization'
import HardSkillsVisualization from '@/components/ui/HardSkillsVisualization'

// Data Imports (Placeholder)
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  BLOG_POSTS,
  SOCIAL_LINKS,
  EducationEntry,
  WorkExperience as WorkExperienceType,
} from './data'

// Animation Variants (Typed)
const VARIANTS_CONTAINER: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const VARIANTS_SECTION: Variants = { hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } };
const TRANSITION_SECTION: Transition = { duration: 0.3 };
const TRANSITION_HOVER_CONTENT: Transition = { duration: 0.2 };

// Project Video Component
type ProjectVideoProps = { src: string };
function ProjectVideo({ src }: ProjectVideoProps) {
  // Prüfen, ob es sich um eine Website handelt
  const isWebsite = src.startsWith('http');
  // Prüfen, ob es sich um ein Bild handelt
  const isImage = src.endsWith('.jpeg') || src.endsWith('.jpg') || src.endsWith('.png');
  
  if (isWebsite) {
    return (
      <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
        <MorphingDialogTrigger>
          <div className="aspect-video w-full cursor-zoom-in rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-200" />
            <iframe 
              src={src}
              className="w-full h-full"
              title="Website Preview"
              loading="lazy"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              style={{ 
                transform: 'scale(0.5)',
                transformOrigin: '0 0',
                width: '200%',
                height: '200%'
              }}
              onError={(e) => {
                const target = e.target as HTMLIFrameElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800';
                fallback.innerHTML = `
                  <div class="text-center p-4">
                    <p class="text-zinc-600 dark:text-zinc-400">Vorschau nicht verfügbar</p>
                    <a href="${src}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                      Seite öffnen
                    </a>
                  </div>
                `;
                target.parentNode?.insertBefore(fallback, target);
              }}
            />
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 p-1">
            <div className="w-full h-full overflow-auto">
              <iframe 
                src={src}
                className="w-full h-full"
                title="Website Preview"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                style={{ minHeight: '100vh' }}
                onError={(e) => {
                  const target = e.target as HTMLIFrameElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800';
                  fallback.innerHTML = `
                    <div class="text-center p-4">
                      <p class="text-zinc-600 dark:text-zinc-400">Vorschau nicht verfügbar</p>
                      <a href="${src}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                        Seite öffnen
                      </a>
                    </div>
                  `;
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full border border-zinc-300 dark:border-zinc-600 bg-white p-1"
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } }, exit: { opacity: 0, transition: { duration: 0 } } }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    );
  }

  if (isImage) {
    return (
      <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
        <MorphingDialogTrigger>
          <img 
            src={src} 
            alt="Project Preview" 
            className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 p-1">
            <img 
              src={src} 
              alt="Project Preview" 
              className="w-full h-full rounded-xl object-contain"
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full border border-zinc-300 dark:border-zinc-600 bg-white p-1"
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } }, exit: { opacity: 0, transition: { duration: 0 } } }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    );
  }

  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        <video src={src} autoPlay loop muted playsInline className="aspect-video w-full cursor-zoom-in rounded-xl object-cover" />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl border border-zinc-200 dark:border-zinc-800 p-1">
          <video src={src} autoPlay loop muted playsInline className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]" />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full border border-zinc-300 dark:border-zinc-600 bg-white p-1"
          variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } }, exit: { opacity: 0, transition: { duration: 0 } } }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

// Magnetic Social Link Component
function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full border border-zinc-300 dark:border-zinc-600 px-2.5 py-1 text-sm text-black transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100">
        {children}
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3">
          <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5V9C12 9.27615 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27615 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </svg>
      </a>
    </Magnetic>
  );
}

// Introduction Markdown
const markdownContent = `
**Hallo und herzlich willkommen in meinem Online-Portfolio!**

Ich freue mich sehr, dass du den Weg hierher gefunden hast. Ich bin Lion – und hier findest du alles Wichtige über mich und meine Projekte, klar, anschaulich und dynamisch präsentiert. *Garantiert spannender als ein herkömmlicher Lebenslauf!*
`;

// CV Item Content Renderer
const renderBoxContent = (item: EducationEntry | WorkExperienceType, isHovered: boolean) => {
  const hasDetails = Boolean(item.details);
  return (
    <AnimatePresence mode="wait" initial={false}>
      {isHovered && hasDetails ? (
        <motion.div key={`${item.id || item.title}-details`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={TRANSITION_HOVER_CONTENT} className="text-sm text-zinc-600 dark:text-zinc-400 p-4 leading-relaxed">
          {item.details}
        </motion.div>
      ) : (
        <motion.div key={`${item.id || item.title}-default`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={TRANSITION_HOVER_CONTENT} className="relative flex w-full flex-col sm:flex-row justify-between p-4 pr-16">
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
  );
};

// Active Skill Type
type ActiveSkillType = 'hard' | 'soft' | 'languages';

// Frequency Bars Component
function FrequencyBars({ isPlaying }: { isPlaying: boolean }) {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  // Define the transition for the 'playing' state separately with explicit type
  const playingTransition: Transition = {
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop' // This should be acceptable for the RepeatType
  };

  // Define variants with explicit type
  const barVariants: Variants = {
    paused: {
        height: '20%',
        transition: { duration: 0.2, ease: 'easeOut' }
    },
    playing: {
        height: ['20%', '100%', '40%', '85%', '30%', '70%', '20%'],
        // Reference the separately defined transition object
        transition: playingTransition
    }
  };

  return (
    <div className="flex items-end gap-1 h-4">
      {bars.map((bar) => (
          <motion.div
              key={bar}
              className="w-1 bg-zinc-400 dark:bg-red-500"
              variants={barVariants}
              animate={isPlaying ? 'playing' : 'paused'}
              initial="paused"
          />
      ))}
    </div>
  );
}

// Music Track Type
type MusicTrack = { id: string; title: string; src: string };

// Music Track Card Component
function MusicTrackCard({ track, isActive, onPlay }: { track: MusicTrack; isActive: boolean; onPlay: (id: string) => void }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (!audioRef.current) return;
    if (isActive) { audioRef.current.play().catch(console.error); }
    else { audioRef.current.pause(); if (audioRef.current.currentTime > 0) audioRef.current.currentTime = 0; }
  }, [isActive]);
  const handleToggle = () => onPlay(track.id);
  return (
    <div className="flex items-center justify-between px-3 py-2 mt-2 rounded-lg border border-zinc-200 dark:border-zinc-700">
      <div className="flex items-center gap-3">
        <button className="border border-zinc-300 dark:border-zinc-500 rounded-full p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" onClick={handleToggle} aria-label={isActive ? `Pause ${track.title}` : `Play ${track.title}`}>
          {isActive ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </button>
        <span className="text-sm text-zinc-800 dark:text-zinc-100">{track.title}</span>
        <div className="ml-2"><FrequencyBars isPlaying={isActive} /></div>
      </div>
      <audio ref={audioRef} src={track.src} preload="metadata" key={track.src} />
    </div>
  );
}

// --- Type Definition for a Ball ---
type Ball = {
    id: number;
    x: number; y: number; dx: number; dy: number; radius: number;
};

// ------------------------------------------------------------------------
// TennisAnimation Component
// ------------------------------------------------------------------------
function TennisAnimation() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameId = useRef<number | null>(null);
    const ballIntervalId = useRef<NodeJS.Timeout | null>(null);
    const balls = useRef<Ball[]>([]);
    const paddle = useRef({ x: 30, y: 105, width: 10, height: 40 });
    const wallX = useRef(385);
    const startTime = useRef<number>(0);
    const isGameOver = useRef<boolean>(false);
    const finalTime = useRef<number>(0);
    const nextBallId = useRef<number>(0);
    const maxSpeed = 8; // Maximum horizontal speed

    const createBall = (canvas: HTMLCanvasElement, ballIndex: number): Ball => {
        nextBallId.current += 1;
        let initialDY = 0;
        if (ballIndex > 0) {
            initialDY = (Math.random() > 0.5 ? 1 : -1) * (1 + Math.random() * 0.5);
        }
        return {
            id: nextBallId.current, x: canvas.width / 2, y: canvas.height / 2,
            dx: 3 + Math.random() * 0.5, dy: initialDY, radius: 5,
        };
    };

    const addBall = useCallback(() => {
        const canvas = canvasRef.current;
        if (isGameOver.current || balls.current.length >= 3 || !canvas) {
            if (isGameOver.current && ballIntervalId.current) {
                clearInterval(ballIntervalId.current);
                ballIntervalId.current = null;
            }
            return;
        }
        balls.current.push(createBall(canvas, balls.current.length));
    }, []);

    const drawGameOverScreen = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'center';
        ctx.font = '24px "Press Start 2P", monospace';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '16px "Press Start 2P", monospace';
        const timePlayed = (finalTime.current / 1000).toFixed(1);
        ctx.fillText(`Zeit: ${timePlayed}s`, canvas.width / 2, canvas.height / 2 + 20);
        ctx.fillRect(paddle.current.x, paddle.current.y, paddle.current.width, paddle.current.height);
        ctx.fillRect(wallX.current, 0, 5, canvas.height);
    }, []);

    const gameLoop = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
        if (isGameOver.current) { drawGameOverScreen(ctx, canvas); return; }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const activeBalls: Ball[] = [];
        balls.current.forEach((ball) => {
            ball.x += ball.dx; ball.y += ball.dy;
            if (ball.x + ball.radius > wallX.current) { ball.x = wallX.current - ball.radius; ball.dx *= -1; }
            if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) { ball.y = (ball.y - ball.radius < 0) ? ball.radius : canvas.height - ball.radius; ball.dy *= -1; }
            if (ball.x - ball.radius < paddle.current.x + paddle.current.width && ball.x - ball.radius > paddle.current.x && ball.y > paddle.current.y && ball.y < paddle.current.y + paddle.current.height && ball.dx < 0) {
                ball.x = paddle.current.x + paddle.current.width + ball.radius; ball.dx *= -1;
                // Increase speed on paddle hit
                ball.dx *= 1.02;
                if (Math.abs(ball.dx) > maxSpeed) { ball.dx = maxSpeed * Math.sign(ball.dx); }
            }
            if (ball.x + ball.radius > 0) { activeBalls.push(ball); }
        });
        balls.current = activeBalls;
        if (balls.current.length === 0 && !isGameOver.current) {
            isGameOver.current = true; finalTime.current = Date.now() - startTime.current;
            if (ballIntervalId.current) { clearInterval(ballIntervalId.current); ballIntervalId.current = null; }
            requestAnimationFrame(() => drawGameOverScreen(ctx, canvas)); return;
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(paddle.current.x, paddle.current.y, paddle.current.width, paddle.current.height);
        ctx.fillRect(wallX.current, 0, 5, canvas.height);
        balls.current.forEach(ball => { ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); ctx.fill(); ctx.closePath(); });
        animationFrameId.current = requestAnimationFrame(() => gameLoop(ctx, canvas));
    }, [drawGameOverScreen]); // Dependency

    useEffect(() => {
        const canvas = canvasRef.current; if (!canvas) return;
        const ctx = canvas.getContext('2d'); if (!ctx) return;
        ctx.imageSmoothingEnabled = false; isGameOver.current = false; finalTime.current = 0; startTime.current = Date.now();
        wallX.current = canvas.width - 15; paddle.current.x = 10; paddle.current.y = (canvas.height - paddle.current.height) / 2;
        nextBallId.current = 0; balls.current = [createBall(canvas, 0)];
        const handleMouseMove = (event: MouseEvent) => {
            if (isGameOver.current) return;
            const rect = canvas.getBoundingClientRect();
            let relativeY = event.clientY - rect.top - paddle.current.height / 2;
            relativeY = Math.max(0, Math.min(relativeY, canvas.height - paddle.current.height));
            paddle.current.y = relativeY;
        };
        canvas.addEventListener('mousemove', handleMouseMove);
        if (ballIntervalId.current) clearInterval(ballIntervalId.current);
        ballIntervalId.current = setInterval(addBall, 10000);
        animationFrameId.current = requestAnimationFrame(() => gameLoop(ctx, canvas));
        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            if (ballIntervalId.current) clearInterval(ballIntervalId.current);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [gameLoop, addBall]); // Dependencies

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <canvas ref={canvasRef} width="400" height="250" className="bg-black rounded-lg border border-zinc-500 block mx-auto cursor-none" aria-label="Interaktives Retro Tennis Spiel">
                Dein Browser unterstützt das Canvas-Element nicht.
            </canvas>
        </>
    );
}

// ------------------------------------------------------------------------
// ArtGallery Component
// ------------------------------------------------------------------------
type ImageItem = {
    id: string | number;
    src: string;
    alt: string;
    width: number;
    height: number;
};

function ArtGallery({ images }: { images: ImageItem[] }) {
    if (!images || images.length === 0) {
        return <p className="text-sm text-zinc-500 dark:text-zinc-400">Keine Kunstwerke vorhanden.</p>;
    }
    return (
        <div className="columns-2 md:columns-3 gap-4">
            {images.map((image) => (
                <div key={image.id} className="mb-4 break-inside-avoid">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/${image.width || 300}x${image.height || 200}/EEE/31343C?text=Bild+nicht+gefunden`;
                          target.alt = "Platzhalterbild: Bild konnte nicht geladen werden";
                        }}
                    />
                </div>
            ))}
        </div>
    );
}


// Main Personal Portfolio Component
export default function Personal() {
  // State
  const [showEducation, setShowEducation] = useState(true);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [activeSkillType, setActiveSkillType] = useState<ActiveSkillType>('hard');
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);

  // Data (example)
  const languages = [
    { name: 'Englisch', level: 'C1', description: 'Fließend in Wort und Schrift.', sequence: 'I look forward to our fruitful collaboration...' },
    { name: 'Spanisch', level: 'B2', description: 'Gute Kenntnisse.', sequence: 'Estoy deseando colaborar contigo...' },
    { name: 'Französisch', level: 'B1', description: 'Solide Grundkenntnisse.', sequence: 'Je suis prêt à relever des défis...' },
    { name: 'Japanisch', level: 'A2', description: 'Gute Kenntnisse.', sequence: 'はじめまして、よろしくお願いします...' },
  ];
  const musicTracks: MusicTrack[] = [
    { id: 'track1', title: 'Entspannter Song', src: '/audio/audio1.mp3' },
    { id: 'track2', title: 'Coole Vibes', src: '/audio/Girl_Boss.wav' },
    { id: 'track3', title: 'Energie Pur', src: '/audio/song3.mp3' },
  ];

   // --- Placeholder Data for Art Gallery ---
   const kunstImageData: ImageItem[] = [
    { id: 1, src: '/kunst/img1.png', alt: 'Abstrakte Kunst 1', width: 600, height: 400 },
    { id: 2, src: '/kunst/img2.png', alt: 'Porträtzeichnung', width: 300, height: 450 },
    { id: 3, src: '/kunst/img3.png', alt: 'Landschaftsmalerei', width: 500, height: 300 },
    { id: 4, src: '/kunst/img4.png', alt: 'Foto einer Skulptur', width: 400, height: 400 },
    { id: 5, src: '/kunst/img5.png', alt: 'Stillleben', width: 350, height: 500 },
    { id: 6, src: '/kunst/img6.png', alt: 'Digitale Kunst', width: 600, height: 350 },
    { id: 7, src: '/kunst/img7.png', alt: 'Abstrakte Kunst 2', width: 400, height: 600 },
    { id: 8, src: '/kunst/img8.png', alt: 'Abstrakte Kunst 2', width: 400, height: 600 },
    { id: 9, src: '/kunst/img9.png', alt: 'Abstrakte Kunst 2', width: 400, height: 600 },
   ];


  // Styles
  const activeBtnClass = 'border border-zinc-500 text-zinc-900 dark:border-zinc-500 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800';
  const inactiveBtnClass = 'border border-zinc-300 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800';
  const baseBtnClass = 'px-3 py-1 text-sm rounded-xl transition-all duration-200';
  const skillBoxClasses = 'p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-950';

  // Handlers
  const handlePlayTrack = (id: string) => { setPlayingTrackId((prev) => (prev === id ? null : id)); };

  return (
    <motion.main className="max-w-3xl mx-auto px-4 space-y-12 pb-20" variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
      {/* Introduction */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <div className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </motion.section>

      {/* CV */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Lebenslauf</h3>
        <div className="flex space-x-2 mb-5">
          <button onClick={() => setShowEducation(true)} className={`${baseBtnClass} ${showEducation ? activeBtnClass : inactiveBtnClass}`}>Ausbildung</button>
          <button onClick={() => setShowEducation(false)} className={`${baseBtnClass} ${!showEducation ? activeBtnClass : inactiveBtnClass}`}>Erfahrungen</button>
        </div>
        {showEducation && (
          <div className="flex flex-col space-y-2">
            {EDUCATION.map((edu) => {
              const key = edu.id || `${edu.company}-${edu.title}`;
              const hasDetails = Boolean(edu.details);
              const hasCertificate = Boolean(edu.certificateUrl);
              const isInteractive = hasDetails || hasCertificate;
              return (
                <div key={key} className="relative block overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-600 p-1 group" onMouseEnter={() => isInteractive && setHoveredItemId(edu.id)} onMouseLeave={() => setHoveredItemId(null)} style={{ cursor: isInteractive ? 'pointer' : 'default' }}>
                  <Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" size={64} />
                  <div className="relative h-full w-full rounded-xl bg-white dark:bg-zinc-950 min-h-[80px] flex items-center">
                    {renderBoxContent(edu, hoveredItemId === edu.id && hasDetails)}
                  </div>
                  <AnimatePresence>
                    {hoveredItemId === edu.id && hasCertificate && (
                      <motion.a href={edu.certificateUrl} target="_blank" rel="noopener noreferrer" title="Zertifikat öffnen" className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20 backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600 rounded-r-xl flex items-center justify-center cursor-pointer z-10" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
                        <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                      </motion.a>
                    )}
                    {hoveredItemId === edu.id && hasDetails && !hasCertificate && (
                       <motion.div title="Details anzeigen" className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20 backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600 rounded-r-xl flex items-center justify-center pointer-events-none z-10" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
                         <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
        {!showEducation && (
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => {
              const key = job.id || `${job.company}-${job.title}`;
              const hasDetails = Boolean(job.details);
              const hasLink = Boolean(job.link);
              const isInteractive = hasDetails || hasLink;
              const WrapperElement = hasLink ? 'a' : 'div';
              const wrapperProps = hasLink ? { href: job.link, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <WrapperElement key={key} className="relative block overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-600 p-1 group" onMouseEnter={() => isInteractive && setHoveredItemId(job.id!)} onMouseLeave={() => setHoveredItemId(null)} style={{ cursor: isInteractive ? 'pointer' : 'default' }} {...wrapperProps}>
                   <Spotlight className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50" size={64} />
                   <div className="relative h-full w-full rounded-xl bg-white dark:bg-zinc-950 min-h-[80px] flex items-center">
                     {renderBoxContent(job, hoveredItemId === job.id && hasDetails)}
                   </div>
                   <AnimatePresence>
                     {hoveredItemId === job.id && isInteractive && (
                       <motion.div title={hasLink ? 'Link öffnen' : 'Details anzeigen'} className="absolute top-1 right-1 bottom-1 w-10 px-2 bg-white/20 dark:bg-zinc-800/20 backdrop-blur-md border-l border-zinc-300 dark:border-zinc-600 rounded-r-xl flex items-center justify-center pointer-events-none z-10" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 15 }} transition={{ duration: 0.2, ease: 'easeInOut' }}>
                         <EyeIcon className="h-4 w-4 text-zinc-600 dark:text-zinc-400 transition-colors" />
                       </motion.div>
                     )}
                   </AnimatePresence>
                </WrapperElement>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* Skills */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
         <h3 className="mb-3 text-lg font-semibold">Fähigkeiten</h3>
         <div className="flex space-x-2 mb-5">
           <button onClick={() => setActiveSkillType('hard')} className={`${baseBtnClass} ${activeSkillType === 'hard' ? activeBtnClass : inactiveBtnClass}`}>Hard Skills</button>
           <button onClick={() => setActiveSkillType('soft')} className={`${baseBtnClass} ${activeSkillType === 'soft' ? activeBtnClass : inactiveBtnClass}`}>Soft Skills</button>
           <button onClick={() => setActiveSkillType('languages')} className={`${baseBtnClass} ${activeSkillType === 'languages' ? activeBtnClass : inactiveBtnClass}`}>Sprachen</button>
         </div>
         <AnimatePresence mode="wait">
           {activeSkillType === 'soft' && (<motion.div key="soft" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><div className={skillBoxClasses}><SoftSkillsVisualization /></div></motion.div>)}
           {activeSkillType === 'hard' && (<motion.div key="hard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}><div className={skillBoxClasses}><HardSkillsVisualization /></div></motion.div>)}
           {activeSkillType === 'languages' && (
             <motion.div key="languages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {languages.map((lang) => (
                   <motion.div key={lang.name} className="relative overflow-hidden p-4 border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-950 hover:shadow-lg transition-shadow duration-300" initial="rest" animate="rest" whileHover="hover">
                     <motion.div variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }} transition={{ duration: 0.3 }}>
                       <div className="flex items-center justify-between"><h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{lang.name}</h4><span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">({lang.level})</span></div>
                       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{lang.description}</p>
                     </motion.div>
                     <motion.div className="absolute inset-0 p-4" variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.3 }}>
                       <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{lang.name}</h4>
                       <div className="relative mt-4 overflow-hidden h-12">
                         <motion.div initial={{ x: '100%' }} animate={{ x: '-100%' }} transition={{ duration: 8, ease: 'linear', repeat: Infinity }} className="whitespace-nowrap text-lg italic text-zinc-600 dark:text-zinc-300 absolute left-0 top-0">{lang.sequence}</motion.div>
                       </div>
                     </motion.div>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.section>

      {/* Hobbies */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Freizeit</h3>
        <div className="flex space-x-2 mb-5">
          <button onClick={() => setActiveHobby(activeHobby === 'musik' ? null : 'musik')} className={`${baseBtnClass} ${activeHobby === 'musik' ? activeBtnClass : inactiveBtnClass}`}>Musik</button>
          <button onClick={() => setActiveHobby(activeHobby === 'kunst' ? null : 'kunst')} className={`${baseBtnClass} ${activeHobby === 'kunst' ? activeBtnClass : inactiveBtnClass}`}>Kunst</button>
          <button onClick={() => setActiveHobby(activeHobby === 'tennis' ? null : 'tennis')} className={`${baseBtnClass} ${activeHobby === 'tennis' ? activeBtnClass : inactiveBtnClass}`}>Tennis</button>
        </div>
        <AnimatePresence mode="wait">
          {activeHobby === 'musik' && (
            <motion.div key="musik" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
              <div className={skillBoxClasses}>
                {musicTracks.map((track) => <MusicTrackCard key={track.id} track={track} isActive={track.id === playingTrackId} onPlay={handlePlayTrack} />)}
                <p className="mt-3 text-xs text-zinc-400">(Hinweis: Audio-Dateien müssen im Ordner <code>/public/audio</code> liegen.)</p>
              </div>
            </motion.div>
          )}
          {/* Updated Art Section */}
          {activeHobby === 'kunst' && (
            <motion.div key="kunst" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
              {/* Use skillBoxClasses for padding/border */}
              <div className={skillBoxClasses}>
                 <ArtGallery images={kunstImageData} />
              </div>
            </motion.div>
          )}
          {activeHobby === 'tennis' && (
            <motion.div key="tennis" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={skillBoxClasses}>
              <TennisAnimation />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Projects */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-2">
              <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 p-1"><ProjectVideo src={project.video} /></div>
              <div className="px-1">
                <a className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50" href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-zinc-600 dark:text-zinc-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Blog */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
         <h3 className="mb-3 text-lg font-semibold">Blog</h3>
         <div className="flex flex-col space-y-0">
           <AnimatedBackground enableHover className="h-full w-full rounded-lg border border-zinc-200 dark:border-zinc-800 overflow-hidden" transition={{ type: 'spring', bounce: 0, duration: 0.2 }}>
             {BLOG_POSTS.map((post) => (
               <Link key={post.uid} className="-mx-3 rounded-xl px-3 py-3 block hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors duration-150" href={post.link} target="_blank" rel="noopener noreferrer" data-id={post.uid}>
                 <div className="flex flex-col space-y-1">
                   <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                   <p className="text-sm text-zinc-500 dark:text-zinc-400">{post.description}</p>
                 </div>
               </Link>
             ))}
           </AnimatedBackground>
         </div>
      </motion.section>

      {/* Connect */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-semibold">Connect</h3>
        <p className="mb-4 text-zinc-600 dark:text-zinc-400">Du möchtest mehr erfahren oder dich vernetzen? Schreib mir gerne!</p>
        <div className="flex flex-wrap items-center justify-start gap-3">
          {SOCIAL_LINKS.map((link) => <MagneticSocialLink key={link.label} link={link.link}>{link.label}</MagneticSocialLink>)}
        </div>
      </motion.section>
    </motion.main>
  )
}
