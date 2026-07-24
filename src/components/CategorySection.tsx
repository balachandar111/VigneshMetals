import { useEffect, useRef, useState } from 'react';
import { categoryList } from '../data/categories';
import { useCategoryCovers } from '../hooks/useCloudinaryProducts';

export default function CategorySection() {
  const [visible, setVisible] = useState(false);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { covers, loading: coversLoading } = useCategoryCovers();

  const categories = categoryList.map((cat) => ({
    name: cat.name,
    image: covers[cat.slug] || '',
    alt: `${cat.name} handcrafted ${cat.material} collection`,
    href: '#products',
    count: 'View Collection'
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string, categoryName: string) => {
    window.dispatchEvent(new CustomEvent('vm-filter-category', { detail: categoryName }));
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-secondary relative overflow-hidden" id="collections">
      {/* Ambient backdrop accents, matching ProductGrid */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #6c1212 0%, transparent 70%)' }}></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}></div>

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-gold"></div>
            <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Browse By Type</span>
            <div className="h-px w-12 bg-accent-gold"></div>
          </div>
          <h2 className="section-heading text-gradient-gold mb-4">Shop By Category</h2>
          <p className="text-brand-text max-w-xl mx-auto text-sm leading-relaxed">
            Discover our curated collection of traditional South Indian brass oil lamps,
            each category representing a unique style of sacred illumination.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-7">
          {categories.map((cat, i) =>
          <button
            key={cat.name}
            onClick={() => handleClick(cat.href, cat.name)}
            className={`group text-left transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
            }
            style={{ transitionDelay: `${i * 100}ms` }}
            onMouseEnter={() => setHoveredCat(cat.name)}
            onMouseLeave={() => setHoveredCat(null)}>
            
              {/* Artifact Display Frame — matches ProductGrid card styling */}
              <div
              className="relative overflow-hidden bg-warm-cream border border-brand-border transition-all duration-300 group-hover:border-accent-gold group-hover:shadow-product-hover group-hover:-translate-y-1.5"
              style={{
                borderRadius: '4px',
                boxShadow: hoveredCat === cat.name ? '0 0 0 3px rgba(201,168,76,0.15)' : undefined
              }}>
                
                {/* Image */}
                <div className="relative overflow-hidden bg-warm-cream" style={{ paddingBottom: '100%' }}>
                  {coversLoading || !cat.image ?
                <div className="absolute inset-0 animate-pulse bg-warm-cream" /> :

                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  hoveredCat === cat.name ? 'scale-110' : 'scale-100'}`
                  } />

                }
                

                  {/* Vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Corner brackets – same "museum artifact" reveal as ProductGrid */}
                  {(['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'] as const).
                map((pos, idx) =>
                <span
                  key={idx}
                  className={`absolute w-4 h-4 md:w-5 md:h-5 m-2 border-accent-gold transition-all duration-300 ${pos} ${
                  hoveredCat === cat.name ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`
                  }>
                </span>
                )}

                  {/* Category name overlaid on the image, revealed on hover */}
                  <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredCat === cat.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`
                  }>
                    <div className="flex items-center gap-1.5 text-white text-xs font-medium tracking-wide">
                      Browse Collection
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="pt-3 px-0.5 text-center">
                <div className="font-heading text-sm md:text-base text-brand-dark group-hover:text-primary transition-colors duration-300">
                  {cat.name}
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <span className="w-1 h-1 rounded-full bg-accent-gold"></span>
                  <span className="text-[10px] text-brand-text uppercase tracking-widest">{cat.count}</span>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}