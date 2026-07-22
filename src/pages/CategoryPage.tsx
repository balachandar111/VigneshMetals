import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { categoryList, getCategoryBySlug, getProductsByCategory } from '../data/products';

const PAGE_SIZE = 20;

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const category = slug ? getCategoryBySlug(slug) : undefined;
  const allProducts = useMemo(() => category ? getProductsByCategory(category.name) : [], [category]);

  // Reset pagination and search whenever the category changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  // Keep this page in sync with the Navbar search bar too
  useEffect(() => {
    const handleSearchEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      setSearchQuery(custom.detail ?? '');
      setVisibleCount(PAGE_SIZE);
    };
    window.addEventListener('vm-search-products', handleSearchEvent);
    return () => window.removeEventListener('vm-search-products', handleSearchEvent);
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = normalizedQuery ?
  allProducts.filter((p) =>
  p.shortName.toLowerCase().includes(normalizedQuery) ||
  p.name.toLowerCase().includes(normalizedQuery) ||
  p.material.toLowerCase().includes(normalizedQuery)
  ) :
  allProducts;

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!category) {
    return (
      <main className="font-body bg-body-bg min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-24 text-center">
          <h1 className="section-heading mb-4">Category Not Found</h1>
          <p className="text-brand-text text-sm mb-8">
            We couldn&rsquo;t find the collection you&rsquo;re looking for.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>);

  }

  return (
    <main className="font-body bg-body-bg">
      <Navbar />

      {/* Page Header */}
      <div className="relative bg-secondary pt-32 pb-14 md:pt-36 md:pb-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }}></div>
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center relative">
          <nav className="flex items-center justify-center gap-2 text-xs text-brand-text mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#collections" className="hover:text-primary transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-brand-dark">{category.name}</span>
          </nav>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-accent-gold"></div>
            <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Collection</span>
            <div className="h-px w-10 bg-accent-gold"></div>
          </div>
          <h1 className="section-heading text-gradient-gold mb-3">{category.name}</h1>
          <p className="text-xs text-brand-text">
            <span className="text-brand-dark font-semibold">{allProducts.length}</span> Handcrafted Pieces
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-[1500px] mx-auto px-5 md:px-10 py-14 md:py-16">
        {/* Search within category */}
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex items-center bg-white border border-brand-border px-3 py-2 w-full sm:w-72 focus-within:border-primary transition-colors">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value);setVisibleCount(PAGE_SIZE);}}
              placeholder={`Search in ${category.name}...`}
              className="text-xs text-brand-text outline-none w-full font-body bg-transparent"
            />
            <svg className="w-4 h-4 text-brand-text ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Jump to other categories */}
          <div className="flex flex-wrap gap-2">
            {categoryList.filter((c) => c.slug !== slug).map((c) =>
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="text-xs px-3 py-1.5 border border-brand-border text-brand-text hover:border-accent-gold hover:text-primary transition-colors">
              
                {c.name}
              </Link>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ?
        <div className="text-center py-16 border border-dashed border-brand-border">
            <p className="text-brand-text text-sm mb-3">
              No products found{normalizedQuery ? <> for &ldquo;{searchQuery}&rdquo;</> : ''} in {category.name}.
            </p>
            <button
            onClick={() => setSearchQuery('')}
            className="text-xs text-primary hover:text-primary-light underline underline-offset-2">
            
              Clear search
            </button>
          </div> :

        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {visibleProducts.map((product, i) =>
            <ProductCard
              key={product.id}
              product={product}
              index={i % PAGE_SIZE}
              onEnquire={handleScrollToContact} />

            )}
            </div>

            {hasMore &&
          <div className="text-center mt-12">
                <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="btn-outline inline-flex items-center gap-2">
              
                  Load More
                  <span className="text-xs opacity-70">
                    ({filteredProducts.length - visibleCount} remaining)
                  </span>
                </button>
              </div>
          }
          </>
        }
      </div>

      <Footer />
    </main>);

}