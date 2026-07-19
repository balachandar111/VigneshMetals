import { useEffect, useRef, useState } from 'react';

export default function CraftsmanshipSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.2 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const handleScrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
  {
    number: '01',
    title: 'Raw Brass Selection',
    description: 'We source only the finest quality brass alloy, carefully selected for its purity and workability.'
  },
  {
    number: '02',
    title: 'Traditional Casting',
    description: 'Using ancient lost-wax casting techniques, our artisans create the basic form of each lamp.'
  },
  {
    number: '03',
    title: 'Hand Engraving',
    description: 'Skilled craftsmen hand-engrave intricate traditional patterns and motifs onto each piece.'
  },
  {
    number: '04',
    title: 'Polishing & Finishing',
    description: 'Each lamp is meticulously polished to achieve the perfect golden brass finish.'
  }];


  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <div
            className={`relative transition-all duration-1000 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`
            }>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative overflow-hidden" style={{ borderRadius: '10px', height: '280px' }}>
                <img
                  src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&h=400&fit=crop&q=80"
                  alt="Master craftsman hand-engraving intricate patterns on a traditional South Indian brass oil lamp"
                  className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 text-xs font-medium">
                  25+ Years of Craftsmanship
                </div>
              </div>
              {/* Two smaller images */}
              <div className="relative overflow-hidden" style={{ borderRadius: '10px', height: '180px' }}>
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_113b338d8-1774614273934.png"
                  alt="Close-up of intricate brass work on a traditional Kuthu Vilakku oil lamp"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                
              </div>
              <div className="relative overflow-hidden" style={{ borderRadius: '10px', height: '180px' }}>
                <img
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1818dbc1e-1767263269401.png"
                  alt="Collection of traditional brass oil lamps displayed in a pooja room setting"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-5 shadow-drawer"
              style={{ animation: 'float 4s ease-in-out infinite' }}>
              
              <div className="font-heading text-3xl text-accent-gold">4.9</div>
              <div className="text-xs opacity-80 mt-1">Customer Rating</div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)]?.map((_, i) =>
                <svg key={i} className="w-3 h-3 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`
            }>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Our Story</span>
            </div>
            <h2 className="section-heading mb-6">
              The Art of
              <span className="block text-primary">Sacred Illumination</span>
            </h2>
            <p className="text-brand-text text-sm leading-relaxed mb-6">
              Founded in 2000 in the heart of Tamil Nadu, Vignesh Super Store has been preserving
              the ancient art of brass lamp making for over three decades. Our master craftsmen
              combine traditional techniques with meticulous attention to detail to create
              lamps that are not just objects, but sacred heirlooms.
            </p>
            <p className="text-brand-text text-sm leading-relaxed mb-8">
              Every lamp we create carries the essence of South Indian culture — from the
              iconic Kuthu Vilakku to the ornate Deepa Lakshmi, each piece is a testament
              to our unwavering commitment to authenticity and quality.
            </p>

            {/* Process Steps */}
            <div className="space-y-4">
              {steps?.map((step, i) =>
              <div
                key={step?.number}
                className={`flex gap-4 transition-all duration-500 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`
                }
                style={{ transitionDelay: `${400 + i * 100}ms` }}>
                
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white flex items-center justify-center text-xs font-medium">
                    {step?.number}
                  </div>
                  <div>
                    <div className="font-medium text-brand-dark text-sm mb-1">{step?.title}</div>
                    <div className="text-brand-text text-xs leading-relaxed">{step?.description}</div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleScrollToProducts}
              className="btn-primary mt-8 inline-flex items-center gap-2">
              
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>);

}