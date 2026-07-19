import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    {
      heading: 'INFORMATION',
      links: [
        { label: 'Our Story', href: '#about' },
        { label: 'Craftsmanship', href: '#craftsmanship' },
        { label: 'Blog', href: '#' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
    {
      heading: 'COLLECTIONS',
      links: [
        { label: 'Kuthu Vilakku', href: '#products' },
        { label: 'Deepa Lakshmi', href: '#products' },
        { label: 'Hanging Lamps', href: '#products' },
        { label: 'Temple Lamps', href: '#products' },
        { label: 'Festival Special', href: '#products' },
      ],
    },
    {
      heading: 'CUSTOMER SERVICES',
      links: [
        { label: 'Shipping Policy', href: '#' },
        { label: 'Returns & Refunds', href: '#' },
        { label: 'Custom Orders', href: '#contact' },
        { label: 'Wholesale Enquiry', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-brand-border">
      {/* CTA Banner */}
      <div className="bg-primary text-white py-10 md:py-14">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10 text-center">
          <h2 className="font-heading text-2xl md:text-3xl mb-4">
            Illuminate Your Sacred Space
          </h2>
          <p className="text-white/80 text-sm mb-6 max-w-xl mx-auto">
            Discover our complete collection of authentic South Indian brass oil lamps.
            Each piece crafted with love and tradition.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleNavClick('#products')}
              className="bg-white text-primary px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-secondary transition-colors"
            >
              Shop Collection
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="border border-white text-white px-6 py-3 text-xs font-medium tracking-wider uppercase hover:bg-white hover:text-primary transition-colors"
            >
              Custom Order
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12">
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
                  <div className="font-heading text-xl text-primary">Vignesh Metals</div>
                  <div className="text-[10px] tracking-widest text-brand-text uppercase">Traditional Brass Crafts</div>
                </div>
              </div>
              <p className="text-brand-text text-xs leading-relaxed mb-6">
                Preserving the ancient art of South Indian brass lamp making since 1985.
                Handcrafted with love, tradition, and the finest quality brass.
              </p>
              {/* Contact quick info */}
              <div className="space-y-2">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-brand-text hover:text-primary transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 98765 43210
                </a>
                <a href="mailto:vigneshsuperstores@gmail.com" className="flex items-center gap-2 text-xs text-brand-text hover:text-primary transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  vigneshsuperstores@gmail.com
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h3 className="font-heading text-sm text-brand-dark mb-5 tracking-wide">{col.heading}</h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-xs text-brand-text hover:text-primary transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-brand-border py-5">
        <div className="max-w-[1500px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text">
            &copy; {year} Vignesh Metals. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNavClick('#')} className="text-xs text-brand-text hover:text-primary transition-colors">Privacy Policy</button>
            <span className="text-brand-border">|</span>
            <button onClick={() => handleNavClick('#')} className="text-xs text-brand-text hover:text-primary transition-colors">Terms & Conditions</button>
            <span className="text-brand-border">|</span>
            <button onClick={() => handleNavClick('#')} className="text-xs text-brand-text hover:text-primary transition-colors">Disclaimer</button>
          </div>
          <div className="flex items-center gap-2">
            {/* Payment icons */}
            {['Visa', 'MC', 'UPI', 'GPay'].map((pay) => (
              <div key={pay} className="border border-brand-border px-2 py-1 text-[10px] text-brand-text">
                {pay}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}