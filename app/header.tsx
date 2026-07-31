'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import MagneticSocialLink from '@/components/magnetic-social-link'
import { SOCIAL_LINKS } from './data'
export function Header() {
  const link = SOCIAL_LINKS[2]
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Ali Kheirkhah<span className="ml-0.5 text-red-600 dark:text-red-500 text-xl">.</span>
        </Link>
        <div className="flex items-center gap-2">
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Fullstack Engineer
          </TextEffect>
          <MagneticSocialLink key={link.label} link={link.link}>
            {link.label}
          </MagneticSocialLink>
        </div>
      </div>
    </header>
  )
}
