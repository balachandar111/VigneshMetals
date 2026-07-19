import { useEffect, useRef, useState } from 'react';

interface Category {
  name: string;
  image: string;
  alt: string;
  href: string;
  count: string;
}

const categories: Category[] = [
{
  name: 'Brass Diyas',
  image: "/assets/images/catalog/brass-diya-piyali-nanda-0.jpg",
  alt: 'Traditional brass diyas and oil lamps including Kuthu Vilakku, Kerala Vilakku and fancy diyas',
  href: '#products',
  count: '12+ Designs'
},
{
  name: 'Kamatchi & Temple Items',
  image: "/assets/images/catalog/kamatchi-kuber-kamatchi-0.jpg",
  alt: 'Kamatchi lamps, temple bells, kalasam and other temple utensils in brass and copper',
  href: '#products',
  count: '8+ Designs'
},
{
  name: 'Pooja Articles & Vessels',
  image: "/assets/images/catalog/br-cop-pooja-article-cop-p-pathiram-0.jpg",
  alt: 'Brass and copper pooja articles, chombu, agardans and pathiram vessels for daily rituals',
  href: '#products',
  count: '12+ Designs'
},
{
  name: 'Plates & Kitchenware',
  image: "/assets/images/catalog/br-cop-plates-cop-fancy-plate-0.jpg",
  alt: 'Brass and copper plates, trays, utensils and kitchenware for home and temple use',
  href: '#products',
  count: '12+ Designs'
}];


export default function CategorySection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} className="py-16 md:py-20 bg-secondary" id="collections">
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
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
          <h2 className="section-heading mb-4">Shop By Category</h2>
          <p className="text-brand-text max-w-xl mx-auto text-sm leading-relaxed">
            Discover our curated collection of traditional South Indian brass oil lamps,
            each category representing a unique style of sacred illumination.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) =>
          <button
            key={cat.name}
            onClick={() => handleClick(cat.href, cat.name)}
            className={`group relative overflow-hidden bg-white transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
            }
            style={{ transitionDelay: `${i * 100}ms`, borderRadius: '10px' }}>
            
              {/* Image */}
              <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                <img
                src={cat.image}
                alt={cat.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Label */}
              <div className="p-4 text-center">
                <div className="font-heading text-sm md:text-base text-brand-dark group-hover:text-primary transition-colors">
                  {cat.name}
                </div>
                <div className="text-xs text-brand-text mt-1">{cat.count}</div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}