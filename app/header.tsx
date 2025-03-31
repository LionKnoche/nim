'use client'
import React, { useEffect, useRef } from 'react';
import { TextEffect } from '@/components/ui/text-effect';
import Link from 'next/link';
import { EMAIL } from './data';
import './header-background.css';

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      if (headerRef.current) {
        // Hole die Position des Containers relativ zum Viewport
        const rect = headerRef.current.getBoundingClientRect();
        // Berechne die relative Mausposition innerhalb des Containers
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        headerRef.current.style.setProperty('--mouse-x', `${x}px`);
        headerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document.body.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleGlobalMouseMove);
      if (headerRef.current) {
        headerRef.current.style.removeProperty('--mouse-x');
        headerRef.current.style.removeProperty('--mouse-y');
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative mb-8 overflow-hidden p-4 rounded-lg header-container"
    >
      {/* Dynamischer Hintergrund */}
      <div className="header-dynamic-background" />

      {/* Inhalt */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Lion Knoche
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Student
          </TextEffect>
        </div>
        <div className="text-right">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            E-Mail:{' '}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Tel: +49 525 52771470
          </p>
        </div>
      </div>
    </header>
  );
}
