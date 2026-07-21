import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [lampRotation, setLampRotation] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      setLampRotation(Math.sin(elapsed / 2000) * 5);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleScrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] bg-hero-bg overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(135deg, #fff9ea 0%, #ffffff 50%, #fff9ea 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #6c1212, transparent)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #85641b, transparent)' }}
        />
        {/* Decorative dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #e8e8e1 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.5,
        }} />
      </div>

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-16 md:py-20">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-brand-text mb-6">
              <span>Home</span>
              <span>/</span>
              <span className="text-primary">Brass Oil Lamps</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary text-white text-xs px-4 py-2 mb-6 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
              Handcrafted Since 2000
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
              Traditional
              <span className="block text-gradient-gold">South Indian</span>
              Brass Oil Lamps
            </h1>

            <p className="text-brand-text text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Illuminate your sacred space with our exquisitely handcrafted brass oil lamps.
              Each piece is a timeless work of art, forged by master craftsmen using
              age-old techniques passed down through generations.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-10">
              {[
                { value: '500+', label: 'Designs' },
                { value: '10K+', label: 'Happy Customers' },
                { value: '25+', label: 'Years Legacy' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl text-primary">{stat.value}</div>
                  <div className="text-xs text-brand-text tracking-wider uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleScrollToProducts}
                className="btn-primary flex items-center gap-2"
              >
                Explore Collection
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={handleScrollToContact}
                className="btn-outline"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right: Animated Lamp Display */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {/* Glow background */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: 'none' }}
            >
              <div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(197,164,76,0.2) 0%, rgba(108,18,18,0.1) 50%, transparent 70%)',
                  animation: 'pulseGlow 3s ease-in-out infinite',
                }}
              />
            </div>

            {/* Main lamp image area */}
            <div
              className="relative z-10"
              style={{
                transform: `rotate(${lampRotation}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <div className="relative">
                {/* Hero product photo */}
                <img
                  src="/assets/images/vilaku.png"
                  alt="Handcrafted peacock design brass oil lamp with four lit wicks on a decorative brass stand"
                  className="w-64 h-96 md:w-80 md:h-[480px] object-contain drop-shadow-2xl"
                />

                {/* Floating particles around lamp */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-accent-gold opacity-60"
                    style={{
                      top: `${20 + i * 12}%`,
                      left: i % 2 === 0 ? `${-10 - i * 3}%` : `${110 + i * 2}%`,
                      animation: `float ${2 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Feature badges floating around */}
            <div
              className="absolute top-8 right-0 bg-white border border-brand-border shadow-product px-4 py-3 text-xs"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            >
              <div className="font-medium text-brand-dark">Pure Brass</div>
              <div className="text-brand-text">100% Authentic</div>
            </div>
            <div
              className="absolute bottom-16 left-0 bg-primary text-white px-4 py-3 text-xs"
              style={{ animation: 'float 3.5s ease-in-out 0.5s infinite' }}
            >
              <div className="font-medium">Handcrafted</div>
              <div className="opacity-80">Master Artisans</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#f2f2f2" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}