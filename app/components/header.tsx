'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sm:px-6 md:px-10 w-full max-w-7xl mt-10 mr-auto ml-auto pr-4 pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="cursor-pointer text-lg font-semibold tracking-tight font-playfair" onClick={() => window.location.href='/'} role="button">S.UNG</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-neutral-700 items-center">
          <a href="#about" className="hover:text-black transition-colors font-medium">About</a>
          <a href="#work" className="hover:text-black transition-colors font-medium">Work</a>
          <a href="#techstack" className="hover:text-black transition-colors font-medium">Tech Stack</a>
          <a href="#contact" className="hover:text-black transition-colors font-medium">Contact</a>
        </nav>
        
        <div className="flex gap-3 items-center">
          <a href="#contact" className="hidden md:inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 rounded-full pr-5 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            Book a tech session
          </a>
          <button 
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition" 
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h16"></path>
                <path d="M4 18h16"></path>
                <path d="M4 6h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-neutral-200">
          <div className="flex flex-col gap-4 pt-4">
            <a href="#about" className="hover:text-black transition-colors font-medium text-neutral-700" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#work" className="hover:text-black transition-colors font-medium text-neutral-700" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#techstack" className="hover:text-black transition-colors font-medium text-neutral-700" onClick={() => setIsMenuOpen(false)}>Tech Stack</a>
            <a href="#contact" className="hover:text-black transition-colors font-medium text-neutral-700" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center hover:bg-neutral-800 transition text-sm text-white bg-neutral-900 h-10 rounded-full pr-5 pl-5 mt-2">
              Book a tech session
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}