'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { EMAIL } from './data' // Stelle sicher, dass der Pfad zu deiner Datenquelle korrekt ist

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
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
    </header>
  )
}
