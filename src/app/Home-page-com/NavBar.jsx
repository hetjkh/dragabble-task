'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { debounce } from 'lodash';

function NavBar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 10);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [handleScroll]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/tasks', label: 'All Tasks' },
    { href: '#features', label: 'Features' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
          >
            <span className="hidden md:inline">TaskMaster</span>
            <span className="md:hidden">TM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button variant="gradient" className="transition-transform hover:scale-105">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-background/95 backdrop-blur-md border-b shadow-md">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="gradient" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default memo(NavBar);