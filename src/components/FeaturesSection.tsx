import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#6c1212" strokeWidth="1.5" />
        <path d="M24 10 C24 10 18 16 18 22 C18 26 20.5 28.5 24 30 C27.5 28.5 30 26 30 22 C30 16 24 10 24 10Z" fill="#6c1212" />
        <path d="M16 32 L32 32 L34 40 L14 40 Z" fill="#c9a84c" />
        <path d="M14 40 L34 40 L36 44 L12 44 Z" fill="#85641b" />
      </svg>
    ),
    title: 'Pure Brass',
    description: 'All our lamps are crafted from 100% pure brass, ensuring longevity, authentic golden sheen, and traditional quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 6 L28 18 L42 18 L30 26 L34 38 L24 30 L14 38 L18 26 L6 18 L20 18 Z" stroke="#6c1212" strokeWidth="1.5" fill="none" />
        <path d="M24 12 L26.5 20 L35 20 L28 25 L30.5 33 L24 28 L17.5 33 L20 25 L13 20 L21.5 20 Z" fill="#c9a84c" opacity="0.6" />
      </svg>
    ),
    title: 'Master Crafted',
    description: 'Each lamp is hand-crafted by skilled artisans with decades of experience in traditional South Indian metalwork.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#6c1212" strokeWidth="1.5" />
        <path d="M16 24 L21 29 L32 18" stroke="#6c1212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Quality Assured',
    description: 'Every piece undergoes strict quality checks before dispatch. We guarantee satisfaction with every purchase.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M24 4 L28 14 L40 14 L30 22 L34 34 L24 26 L14 34 L18 22 L8 14 L20 14 Z" stroke="#6c1212" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="20" r="4" fill="#c9a84c" opacity="0.8" />
      </svg>
    ),
    title: 'Heritage Design',
    description: 'Our designs are inspired by ancient temple architecture and traditional South Indian art forms dating back centuries.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <path d="M8 36 L24 8 L40 36 Z" stroke="#6c1212" strokeWidth="1.5" fill="none" />
        <path d="M14 36 L34 36 L36 42 L12 42 Z" fill="#c9a84c" opacity="0.6" />
        <path d="M20 28 L24 20 L28 28 Z" fill="#6c1212" opacity="0.4" />
      </svg>
    ),
    title: 'Safe Packaging',
    description: 'Each lamp is carefully packed with protective materials to ensure it reaches you in perfect condition, anywhere in India.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#6c1212" strokeWidth="1.5" />
        <path d="M24 14 L24 24 L32 28" stroke="#6c1212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Pan India delivery within 5-7 business days. Express delivery available for festivals and special occasions.',
  },
];

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-warm-cream" id="craftsmanship">
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-gold"></div>
            <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Why Choose Us</span>
            <div className="h-px w-12 bg-accent-gold"></div>
          </div>
          <h2 className="section-heading mb-4">The Vignesh Metals Difference</h2>
          <p className="text-brand-text max-w-2xl mx-auto text-sm leading-relaxed">
            For over 38 years, Vignesh Metals has been the trusted name for authentic
            South Indian brass oil lamps. Our commitment to quality and tradition sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features?.map((feature, i) => (
            <div
              key={feature?.title}
              className={`bg-white p-6 md:p-8 group hover:shadow-product-hover transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, borderRadius: '10px' }}
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-110 inline-block">
                {feature?.icon}
              </div>
              <h3 className="font-heading text-lg text-brand-dark mb-3">{feature?.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{feature?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
