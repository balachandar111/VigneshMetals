import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryList, products } from '../data/products';
import ProductCard from './ProductCard';

const PREVIEW_COUNT = 5;

export default function ProductGrid() {
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]?.name ?? '');
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // Allow the Navbar search bar to filter products by keyword
    const handleSearchEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      setSearchQuery(custom.detail ?? '');
    };
    window.addEventListener('vm-search-products', handleSearchEvent);

    // Allow the CategorySection cards to switch the active category
    const handleCategoryEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom.detail) {
        setSelectedCategory(custom.detail);
        setShowAll(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('vm-filter-category', handleCategoryEvent);

    return () => {
      observer.disconnect();
      window.removeEventListener('vm-search-products', handleSearchEvent);
      window.removeEventListener('vm-filter-category', handleCategoryEvent);
    };
  }, []);

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const clearSearch = () => setSearchQuery('');

  const handleSelectCategory = (name: string) => {
    setSelectedCategory(name);
    setShowAll(false);
    setSearchQuery('');
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const searchResults = isSearching ?
  products.filter((p) =>
  p.shortName.toLowerCase().includes(normalizedQuery) ||
  p.name.toLowerCase().includes(normalizedQuery) ||
  p.material.toLowerCase().includes(normalizedQuery) ||
  p.category.toLowerCase().includes(normalizedQuery)
  ) :
  [];

  // Products belonging to the currently selected category only
  const categoryProducts = products.filter((p) => p.category === selectedCategory);
  const visibleProducts = showAll ? categoryProducts : categoryProducts.slice(0, PREVIEW_COUNT);
  const hasMore = !showAll && categoryProducts.length > PREVIEW_COUNT;
  const activeCategoryMeta = categoryList.find((c) => c.name === selectedCategory);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-body-bg relative overflow-hidden" id="products">
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
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
            <span className="text-sm text-brand-text tracking-wide">
              <span className="text-brand-dark font-semibold">{products.length}</span> Handcrafted Pieces
            </span>
          </div>
        </div>

        {isSearching ?
        // ---- Search results view: unified grid across every category ----
        <>
            <div className="mb-8 flex items-center gap-2">
              <span className="text-xs text-brand-text">
                Showing results for <span className="text-brand-dark font-medium">&ldquo;{searchQuery}&rdquo;</span>
                {' '}({searchResults.length})
              </span>
              <button
              onClick={clearSearch}
              className="text-xs text-primary hover:text-primary-light underline underline-offset-2">
              
                Clear
              </button>
            </div>

            {searchResults.length === 0 ?
          <div className="text-center py-16 border border-dashed border-brand-border">
                <p className="text-brand-text text-sm mb-3">No products found for &ldquo;{searchQuery}&rdquo;.</p>
                <button
              onClick={clearSearch}
              className="text-xs text-primary hover:text-primary-light underline underline-offset-2">
              
                  Clear search
                </button>
              </div> :

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {searchResults.map((product, i) =>
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              visible={visible}
              onEnquire={handleScrollToContact} />

            )}
            </div>
          }
          </> :

        // ---- Default view: only the selected category's products ----
        <>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categoryList.map((cat) =>
            <button
              key={cat.slug}
              onClick={() => handleSelectCategory(cat.name)}
              className={`text-xs md:text-sm px-4 py-2 border tracking-wide transition-colors duration-300 ${
              selectedCategory === cat.name ?
              'bg-primary text-white border-primary' :
              'border-brand-border text-brand-text hover:border-accent-gold hover:text-primary'}`
              }>
              
                {cat.name}
              </button>
            )}
            </div>

            <div className="flex items-center justify-between mb-5 gap-4">
              <h3 className="font-heading text-lg md:text-xl text-brand-dark">{selectedCategory}</h3>
              {activeCategoryMeta &&
            <Link
              to={`/category/${activeCategoryMeta.slug}`}
              className="flex-shrink-0 text-xs md:text-sm text-primary hover:text-primary-light font-medium tracking-wide inline-flex items-center gap-1 group">
              
                  {categoryProducts.length} Pieces
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
            }
            </div>

            {categoryProducts.length === 0 ?
          <div className="text-center py-16 border border-dashed border-brand-border">
                <p className="text-brand-text text-sm">No products found in this category yet.</p>
              </div> :

          <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {visibleProducts.map((product, i) =>
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                visible={visible}
                onEnquire={handleScrollToContact} />

              )}
                </div>

                {hasMore &&
            <div className="text-center mt-10">
                    <button
              onClick={() => setShowAll(true)}
              className="btn-outline inline-flex items-center gap-2">
              
                      View More
                      <span className="text-xs opacity-70">
                        ({categoryProducts.length - PREVIEW_COUNT} more)
                      </span>
                    </button>
                  </div>
            }
              </>
          }
          </>
        }
      </div>
    </section>);

}