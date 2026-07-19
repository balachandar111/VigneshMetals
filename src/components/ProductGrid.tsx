import { useEffect, useRef, useState } from 'react';

interface Product {
  id: number;
  name: string;
  shortName: string;
  image: string;
  hoverImage: string;
  alt: string;
  badge?: string;
  material: string;
  size: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const categoryTabs = ["All", "Brass Diyas", "Kamatchi & Temple Items", "Pooja Articles & Vessels", "Plates & Kitchenware"];

const products: Product[] = [
{
  id: 1,
  name: 'Piyali Nanda – Brass Diyas',
  shortName: 'Piyali Nanda',
  image: "/assets/images/catalog/brass-diya-piyali-nanda-0.jpg",
  hoverImage: "/assets/images/catalog/brass-diya-piyali-nanda-0.jpg",
  alt: 'Piyali Nanda handcrafted pure brass pooja item from the brass diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 2,
  name: 'Devdas Jothi – Brass Diyas',
  shortName: 'Devdas Jothi',
  image: "/assets/images/catalog/brass-diya-devdas-jothi-1.jpg",
  hoverImage: "/assets/images/catalog/brass-diya-devdas-jothi-1.jpg",
  alt: 'Devdas Jothi handcrafted pure brass pooja item from the brass diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 3,
  name: 'Rose Piyali – Brass Diyas',
  shortName: 'Rose Piyali',
  image: "/assets/images/catalog/brass-diya-rose-piyali-2.jpg",
  hoverImage: "/assets/images/catalog/brass-diya-rose-piyali-2.jpg",
  alt: 'Rose Piyali handcrafted pure brass pooja item from the brass diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 4,
  name: 'Tomato Nanda – Brass Diyas',
  shortName: 'Tomato Nanda',
  image: "/assets/images/catalog/brass-diya-tomato-nanda-3.jpg",
  hoverImage: "/assets/images/catalog/brass-diya-tomato-nanda-3.jpg",
  alt: 'Tomato Nanda handcrafted pure brass pooja item from the brass diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 5,
  name: 'Kuber Kamatchi – Kamatchi Lamps',
  shortName: 'Kuber Kamatchi',
  image: "/assets/images/catalog/kamatchi-kuber-kamatchi-0.jpg",
  hoverImage: "/assets/images/catalog/kamatchi-kuber-kamatchi-0.jpg",
  alt: 'Kuber Kamatchi handcrafted pure brass pooja item from the kamatchi lamps collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 6,
  name: 'Kamatchi Gold – Kamatchi Lamps',
  shortName: 'Kamatchi Gold',
  image: "/assets/images/catalog/kamatchi-kamatchi-gold-1.jpg",
  hoverImage: "/assets/images/catalog/kamatchi-kamatchi-gold-1.jpg",
  alt: 'Kamatchi Gold handcrafted pure brass pooja item from the kamatchi lamps collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 7,
  name: 'Astalaxmi – Kamatchi Lamps',
  shortName: 'Astalaxmi',
  image: "/assets/images/catalog/kamatchi-astalaxmi-2.jpg",
  hoverImage: "/assets/images/catalog/kamatchi-astalaxmi-2.jpg",
  alt: 'Astalaxmi handcrafted pure brass pooja item from the kamatchi lamps collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 8,
  name: 'Box Kamatchiamman Vilakku – Kamatchi Lamps',
  shortName: 'Box Kamatchiamman Vilakku',
  image: "/assets/images/catalog/kamatchi-box-kamatchiamman-vilakku-3.jpg",
  hoverImage: "/assets/images/catalog/kamatchi-box-kamatchiamman-vilakku-3.jpg",
  alt: 'Box Kamatchiamman Vilakku handcrafted pure brass pooja item from the kamatchi lamps collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 9,
  name: 'Cop P Pathiram – Pooja Articles',
  shortName: 'Cop P Pathiram',
  image: "/assets/images/catalog/br-cop-pooja-article-cop-p-pathiram-0.jpg",
  hoverImage: "/assets/images/catalog/br-cop-pooja-article-cop-p-pathiram-0.jpg",
  alt: 'Cop P Pathiram handcrafted pure copper pooja item from the pooja articles collection',
  material: 'Pure Copper',
  size: 'Multiple Sizes',
  category: 'Pooja Articles & Vessels'
},
{
  id: 10,
  name: 'Br P Pathiram – Pooja Articles',
  shortName: 'Br P Pathiram',
  image: "/assets/images/catalog/br-cop-pooja-article-br-p-pathiram-1.jpg",
  hoverImage: "/assets/images/catalog/br-cop-pooja-article-br-p-pathiram-1.jpg",
  alt: 'Br P Pathiram handcrafted pure brass pooja item from the pooja articles collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Pooja Articles & Vessels'
},
{
  id: 11,
  name: 'Fancy P Manai – Pooja Articles',
  shortName: 'Fancy P Manai',
  image: "/assets/images/catalog/br-cop-pooja-article-fancy-p-manai-2.jpg",
  hoverImage: "/assets/images/catalog/br-cop-pooja-article-fancy-p-manai-2.jpg",
  alt: 'Fancy P Manai handcrafted pure brass pooja item from the pooja articles collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Pooja Articles & Vessels'
},
{
  id: 12,
  name: 'Casting P Pathram – Pooja Articles',
  shortName: 'Casting P Pathram',
  image: "/assets/images/catalog/br-cop-pooja-article-casting-p-pathram-3.jpg",
  hoverImage: "/assets/images/catalog/br-cop-pooja-article-casting-p-pathram-3.jpg",
  alt: 'Casting P Pathram handcrafted pure brass pooja item from the pooja articles collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Pooja Articles & Vessels'
},
{
  id: 13,
  name: 'Step Deep – Fancy Diyas',
  shortName: 'Step Deep',
  image: "/assets/images/catalog/fancy-diyas-step-deep-0.jpg",
  hoverImage: "/assets/images/catalog/fancy-diyas-step-deep-0.jpg",
  alt: 'Step Deep handcrafted pure brass pooja item from the fancy diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 14,
  name: 'Pan Deep Leaf – Fancy Diyas',
  shortName: 'Pan Deep Leaf',
  image: "/assets/images/catalog/fancy-diyas-pan-deep-leaf-1.jpg",
  hoverImage: "/assets/images/catalog/fancy-diyas-pan-deep-leaf-1.jpg",
  alt: 'Pan Deep Leaf handcrafted pure brass pooja item from the fancy diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 15,
  name: 'Crystal Deep Pillar – Fancy Diyas',
  shortName: 'Crystal Deep Pillar',
  image: "/assets/images/catalog/fancy-diyas-crystal-deep-pillar-2.jpg",
  hoverImage: "/assets/images/catalog/fancy-diyas-crystal-deep-pillar-2.jpg",
  alt: 'Crystal Deep Pillar handcrafted pure brass pooja item from the fancy diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 16,
  name: 'Crystal Deep Pillar – Fancy Diyas',
  shortName: 'Crystal Deep Pillar',
  image: "/assets/images/catalog/fancy-diyas-crystal-deep-pillar-3.jpg",
  hoverImage: "/assets/images/catalog/fancy-diyas-crystal-deep-pillar-3.jpg",
  alt: 'Crystal Deep Pillar handcrafted pure brass pooja item from the fancy diyas collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 17,
  name: 'Cop Kalasam – Temple Utensils',
  shortName: 'Cop Kalasam',
  image: "/assets/images/catalog/temple-utensils-cop-kalasam-0.jpg",
  hoverImage: "/assets/images/catalog/temple-utensils-cop-kalasam-0.jpg",
  alt: 'Cop Kalasam handcrafted pure copper pooja item from the temple utensils collection',
  material: 'Pure Copper',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 18,
  name: 'Icckapoora Thattu – Temple Utensils',
  shortName: 'Icckapoora Thattu',
  image: "/assets/images/catalog/temple-utensils-icckapoora-thattu-1.jpg",
  hoverImage: "/assets/images/catalog/temple-utensils-icckapoora-thattu-1.jpg",
  alt: 'Icckapoora Thattu handcrafted pure brass pooja item from the temple utensils collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 19,
  name: 'Nagas Bell – Temple Utensils',
  shortName: 'Nagas Bell',
  image: "/assets/images/catalog/temple-utensils-nagas-bell-2.jpg",
  hoverImage: "/assets/images/catalog/temple-utensils-nagas-bell-2.jpg",
  alt: 'Nagas Bell handcrafted pure brass pooja item from the temple utensils collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 20,
  name: 'Temple Bell – Temple Utensils',
  shortName: 'Temple Bell',
  image: "/assets/images/catalog/temple-utensils-temple-bell-3.jpg",
  hoverImage: "/assets/images/catalog/temple-utensils-temple-bell-3.jpg",
  alt: 'Temple Bell handcrafted pure brass pooja item from the temple utensils collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Kamatchi & Temple Items'
},
{
  id: 29,
  name: 'Box Kuthu Vilakku – Kuthu & Kerala Vilakku',
  shortName: 'Box Kuthu Vilakku',
  image: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-box-kuthu-vilakku-0.jpg",
  hoverImage: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-box-kuthu-vilakku-0.jpg",
  alt: 'Box Kuthu Vilakku handcrafted pure brass pooja item from the kuthu & kerala vilakku collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 30,
  name: 'Kerala Vilakku – Kuthu & Kerala Vilakku',
  shortName: 'Kerala Vilakku',
  image: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kerala-vilakku-1.jpg",
  hoverImage: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kerala-vilakku-1.jpg",
  alt: 'Kerala Vilakku handcrafted pure brass pooja item from the kuthu & kerala vilakku collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 31,
  name: 'Kerela Jaad – Kuthu & Kerala Vilakku',
  shortName: 'Kerela Jaad',
  image: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kerela-jaad-2.jpg",
  hoverImage: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kerela-jaad-2.jpg",
  alt: 'Kerela Jaad handcrafted pure brass pooja item from the kuthu & kerala vilakku collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 32,
  name: 'Kd Fancy – Kuthu & Kerala Vilakku',
  shortName: 'Kd Fancy',
  image: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kd-fancy-3.jpg",
  hoverImage: "/assets/images/catalog/kuthu-vilakku-kerala-vilakku-kd-fancy-3.jpg",
  alt: 'Kd Fancy handcrafted pure brass pooja item from the kuthu & kerala vilakku collection',
  material: 'Pure Brass',
  size: 'Multiple Sizes',
  category: 'Brass Diyas'
},
{
  id: 33,
  name: 'Cop Fancy Plate – Plates & Trays',
  shortName: 'Cop Fancy Plate',
  image: "/assets/images/catalog/br-cop-plates-cop-fancy-plate-0.jpg",
  hoverImage: "/assets/images/catalog/br-cop-plates-cop-fancy-plate-0.jpg",
  alt: 'Cop Fancy Plate handcrafted pure copper pooja item from the plates & trays collection',
  material: 'Pure Copper',
  size: 'Multiple Sizes',
  category: 'Plates & Kitchenware'
},
{
  id: 34,
  name: 'Cop Tope Cover – Plates & Trays',
  shortName: 'Cop Tope Cover',
  image: "/assets/images/catalog/br-cop-plates-cop-tope-cover-1.jpg",
  hoverImage: "/assets/images/catalog/br-cop-plates-cop-tope-cover-1.jpg",
  alt: 'Cop Tope Cover handcrafted pure copper pooja item from the plates & trays collection',
  material: 'Pure Copper',
  size: 'Multiple Sizes',
  category: 'Plates & Kitchenware'
},
];


export default function ProductGrid() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Allow other components (e.g. CategorySection) to set the active filter
    const handleCategoryEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail) setActiveCategory(custom.detail);
    };
    window.addEventListener('vm-filter-category', handleCategoryEvent);

    // Allow the Navbar search bar to filter products by keyword
    const handleSearchEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      setSearchQuery(custom.detail ?? '');
      setActiveCategory('All');
    };
    window.addEventListener('vm-search-products', handleSearchEvent);

    return () => {
      observer.disconnect();
      window.removeEventListener('vm-filter-category', handleCategoryEvent);
      window.removeEventListener('vm-search-products', handleSearchEvent);
    };
  }, []);

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const clearSearch = () => setSearchQuery('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = products.
  filter((p) => activeCategory === 'All' || p.category === activeCategory).
  filter((p) =>
  !normalizedQuery ||
  p.shortName.toLowerCase().includes(normalizedQuery) ||
  p.name.toLowerCase().includes(normalizedQuery) ||
  p.material.toLowerCase().includes(normalizedQuery) ||
  p.category.toLowerCase().includes(normalizedQuery)
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden" id="products">
      {/* Ambient backdrop accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, #6c1212 0%, transparent 70%)' }}></div>

      <div className="max-w-[1500px] mx-auto px-5 md:px-10 relative">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }>
          
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Our Collection</span>
            </div>
            <h2 className="section-heading text-gradient-gold">Brass Oil Lamps</h2>
            {normalizedQuery &&
            <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-brand-text">
                  Showing results for <span className="text-brand-dark font-medium">&ldquo;{searchQuery}&rdquo;</span>
                </span>
                <button
                onClick={clearSearch}
                className="text-xs text-primary hover:text-primary-light underline underline-offset-2">
                
                  Clear
                </button>
              </div>
            }
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
            <span className="text-sm text-brand-text tracking-wide">
              <span className="text-brand-dark font-semibold">{filteredProducts.length}</span> Handcrafted Pieces
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1 md:gap-2 mb-10 border-b border-brand-border">
          {categoryTabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveCategory(tab)}
            className={`relative text-xs md:text-sm px-3 md:px-4 py-3 font-medium tracking-wide transition-colors duration-300 ${
            activeCategory === tab ?
            'text-primary' :
            'text-brand-text hover:text-brand-dark'}`
            }>
            
              {tab}
              <span
              className={`absolute left-0 right-0 -bottom-px h-[2px] transition-transform duration-300 origin-left ${
              activeCategory === tab ? 'scale-x-100' : 'scale-x-0'}`
              }
              style={{ background: 'linear-gradient(90deg, #6c1212, #c9a84c)' }}>
            </span>
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ?
        <div className="text-center py-16 border border-dashed border-brand-border">
            <p className="text-brand-text text-sm mb-3">
              No products found{normalizedQuery ? <> for &ldquo;{searchQuery}&rdquo;</> : ''}.
            </p>
            <button
            onClick={() => {clearSearch();setActiveCategory('All');}}
            className="text-xs text-primary hover:text-primary-light underline underline-offset-2">
            
              Clear search & filters
            </button>
          </div> :

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
          {filteredProducts.map((product, i) =>
          <div
            key={product.id}
            className={`group cursor-pointer transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
            }
            style={{ transitionDelay: `${i * 80}ms` }}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}>
            
              {/* Artifact Display Frame */}
              <div
              className="relative overflow-hidden bg-warm-cream border border-brand-border transition-all duration-300 group-hover:border-accent-gold group-hover:shadow-product-hover group-hover:-translate-y-1"
              style={{ borderRadius: '4px' }}>
                
                {/* Image Container */}
                <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
                  <img
                  src={product.image}
                  alt={product.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  hoveredId === product.id ? 'scale-110' : 'scale-100'}`
                  } />
                

                  {/* Subtle vignette for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Corner brackets – signature "museum artifact" reveal */}
                  {(['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'] as const).
                map((pos, idx) =>
                <span
                  key={idx}
                  className={`absolute w-4 h-4 md:w-5 md:h-5 m-2 border-accent-gold transition-all duration-300 ${pos} ${
                  hoveredId === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`
                  }>
                </span>
                )}

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                    {product.isNew &&
                  <span className="bg-primary text-white text-[10px] font-medium tracking-wider uppercase px-2 py-1 shadow-sm">New</span>
                  }
                    {product.isBestseller &&
                  <span className="brass-shine text-white text-[10px] font-medium tracking-wider uppercase px-2 py-1 shadow-sm">Bestseller</span>
                  }
                  </div>

                  {/* Hover Action */}
                  <div
                  className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                  }>
                    <button
                    onClick={handleScrollToContact}
                    className="w-full bg-warm-cream/95 backdrop-blur-sm text-primary text-xs font-medium tracking-wide py-2.5 px-3 flex items-center justify-center gap-1.5 border border-accent-gold hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-3 px-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] text-accent-gold uppercase tracking-widest font-medium">{product.material}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-border"></span>
                  <span className="text-[10px] text-brand-text uppercase tracking-wider">{product.size}</span>
                </div>
                <h3 className="font-heading text-sm md:text-base text-brand-dark leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {product.shortName}
                </h3>
              </div>
            </div>
          )}
        </div>
        }

        {/* View All */}
        <div className="text-center mt-14">
          <button
            onClick={handleScrollToContact}
            className="btn-outline inline-flex items-center gap-2 group">
            View All Products
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>);

}