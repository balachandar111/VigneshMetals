import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LegalPageLayoutProps {
  title: string;
  eyebrow: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, eyebrow, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="font-body bg-white">
      <Navbar />

      {/* Page Header */}
      <div className="relative bg-secondary pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}></div>
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center relative">
          <nav className="flex items-center justify-center gap-2 text-xs text-brand-text mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-dark">{title}</span>
          </nav>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-accent-gold"></div>
            <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">{eyebrow}</span>
            <div className="h-px w-10 bg-accent-gold"></div>
          </div>
          <h1 className="section-heading text-gradient-gold mb-3">{title}</h1>
          <p className="text-xs text-brand-text">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 md:px-10 py-14 md:py-16">
        <div className="legal-content">
          {children}
        </div>
      </div>

      <Footer />
    </main>
  );
}