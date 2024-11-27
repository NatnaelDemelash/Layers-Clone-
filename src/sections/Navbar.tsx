'use client';

import Image from 'next/image';
import layersLogo from '../assets/images/logo.svg';
import Button from '../components/Buttont';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container max-w-5xl">
        <div className="border border-white/15 bg-neutral-950/70 backdrop-blur rounded-[27px]">
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center  p-2 px-4 md:mr-2">
            <div>
              <Image
                src={layersLogo}
                alt="Layers logo"
                className="h-9 w-auto md:h-auto"
                priority
              />
            </div>

            <div className="lg:flex justify-center items-center hidden">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* mobile menu */}
            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    'origin-left transition',
                    isOpen && 'rotate-45 -translate-y-1'
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge('transition', isOpen && 'opacity-0')}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    'origin-left transition',
                    isOpen && '-rotate-45 translate-y-1'
                  )}
                ></line>
              </svg>

              <Button variant="secondary" className="hidden md:inline-block">
                Login
              </Button>
              <Button variant="primary" className="hidden md:inline-block">
                Sign up
              </Button>
            </div>
          </div>

          {/* mobile menu */}
          {isOpen && (
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}

              <Button variant="secondary">Log In</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
