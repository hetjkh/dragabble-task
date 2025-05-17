'use client';

import { memo, useState } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  const navLinks = {
    product: [
      { href: '/calendar', label: 'Calendar' },
      { href: '/tasks', label: 'Task Dashboard' },
      { href: '#features', label: 'Features' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing', label: 'Pricing' },
    ],
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
      { href: '/press', label: 'Press' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              TaskMaster
            </h3>
            <p className="text-gray-400 max-w-xs">
              Empowering individuals and teams to achieve more through intelligent task management.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { href: '#', icon: <Github size={20} />, label: 'Github' },
                { href: '#', icon: <Twitter size={20} />, label: 'Twitter' },
                { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { href: 'mailto:hello@taskmaster.com', icon: <Mail size={20} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Product</h4>
            <ul className="space-y-3">
              {navLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-3">
              {navLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4 text-gray-100">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe for tips, updates, and early access.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-gray-200 rounded-md px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                aria-label="Email for newsletter"
                required
              />
              <Button
                variant="default"
                size="icon"
                className="bg-blue-600 hover:bg-blue-700"
                aria-label="Submit newsletter subscription"
              >
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>© {currentYear} TaskMaster. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((link) => (
              <Link key={link} href="#" className="hover:text-blue-400 transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);