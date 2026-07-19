import { useState, useEffect, useRef } from 'react';

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Oil Lamps',
    href: '#products',
    submenu: [
      { label: 'Kuthu Vilakku', href: '#products' },
      { label: 'Deepa Lakshmi Lamp', href: '#products' },
      { label: 'Hanging Lamps', href: '#products' },
      { label: 'Temple Lamps', href: '#products' },
    ],
  },
  {
    label: 'Collections',
    href: '#collections',
    submenu: [
      { label: 'Pooja Essentials', href: '#collections' },
      { label: 'Festival Special', href: '#collections' },
      { label: 'Gift Sets', href: '#collections' },
    ],
  },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSubmenu(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-drawer' : ''
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-center py-2 px-4 text-xs font-medium tracking-wider overflow-hidden">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          <span className="mx-8">✨ Authentic handcrafted brass lamps &nbsp;&nbsp;&nbsp; ✨ Traditional South Indian craftsmanship &nbsp;&nbsp;&nbsp; ✨ Pure brass — built to last generations &nbsp;&nbsp;&nbsp; ✨ Pan India delivery available &nbsp;&nbsp;&nbsp;</span>
          <span className="mx-8">✨ Authentic handcrafted brass lamps &nbsp;&nbsp;&nbsp; ✨ Traditional South Indian craftsmanship &nbsp;&nbsp;&nbsp; ✨ Pure brass — built to last generations &nbsp;&nbsp;&nbsp; ✨ Pan India delivery available &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white border-b border-brand-border">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Search (desktop) */}
            <div className="hidden md:flex items-center gap-2 w-48">
              <div className="flex items-center border border-brand-border px-3 py-2 w-full">
                <input
                  type="text"
                  placeholder="Search lamps..."
                  className="text-xs text-brand-text outline-none w-full font-body placeholder-brand-text"
                />
                <svg className="w-4 h-4 text-brand-text ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                    <path d="M24 4 C24 4 18 10 18 18 C18 22 20 25 24 27 C28 25 30 22 30 18 C30 10 24 4 24 4Z" fill="#6c1212" />
                    <ellipse cx="24" cy="27" rx="8" ry="3" fill="#85641b" />
                    <rect x="16" y="30" width="16" height="3" rx="1" fill="#85641b" />
                    <path d="M12 33 L36 33 L38 44 L10 44 Z" fill="#c9a84c" />
                    <path d="M10 44 L38 44 L40 47 L8 47 Z" fill="#85641b" />
                    <circle cx="24" cy="18" r="3" fill="#FFD700" opacity="0.8" />
                  </svg>
                </div>
                <div>
                  <div className="font-heading text-lg md:text-xl text-primary leading-tight">Vignesh</div>
                  <div className="font-heading text-lg md:text-xl text-accent-gold leading-tight">Metals</div>
                </div>
              </div>
              <div className="text-[9px] tracking-[0.2em] text-brand-text uppercase hidden md:block">Traditional Brass Crafts</div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4 w-48 justify-end">
              {/* Mobile menu button */}
              <button
                className="md:hidden text-primary"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center justify-center gap-0 border-t border-brand-border">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-1 px-5 py-4 text-xs font-medium tracking-widest uppercase text-primary hover:text-primary-light transition-colors"
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-brand-border shadow-drawer z-50 min-w-[200px] py-2">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href)}
                        className="block w-full text-left px-5 py-2 text-xs text-brand-text hover:text-primary hover:bg-secondary transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-b border-brand-border shadow-drawer">
          <div className="px-5 py-4">
            <div className="flex items-center border border-brand-border px-3 py-2 mb-4">
              <input
                type="text"
                placeholder="Search lamps..."
                className="text-xs text-brand-text outline-none w-full font-body"
              />
              <svg className="w-4 h-4 text-brand-text ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                  className="flex items-center justify-between w-full py-3 text-xs font-medium tracking-widest uppercase text-primary border-b border-brand-border"
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className={`w-3 h-3 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="pl-4 py-2 bg-secondary">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href)}
                        className="block w-full text-left py-2 text-xs text-brand-text hover:text-primary"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
