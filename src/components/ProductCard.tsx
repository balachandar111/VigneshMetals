import type { DisplayProduct } from '../types/product';

interface ProductCardProps {
  product: DisplayProduct;
  index?: number;
  visible?: boolean;
  onEnquire: () => void;
}

export default function ProductCard({ product, index = 0, visible = true, onEnquire }: ProductCardProps) {
  return (
    <div
      className={`group relative overflow-hidden bg-white transition-all duration-700 ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`
      }
      style={{ transitionDelay: `${index * 60}ms`, borderRadius: '10px' }}>
      
      {/* Image */}
      <div className="relative overflow-hidden" style={{ paddingBottom: '100%' }}>
        <img
        src={product.image}
        alt={product.alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isNew &&
          <span className="bg-primary text-white text-[9px] font-medium tracking-wider uppercase px-1.5 py-0.5 shadow-sm">New</span>
          }
          {product.isBestseller &&
          <span className="brass-shine text-white text-[9px] font-medium tracking-wider uppercase px-1.5 py-0.5 shadow-sm">Bestseller</span>
          }
        </div>

        {/* Enquire button revealed on hover */}
        <button
        onClick={onEnquire}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white text-primary text-[11px] font-medium tracking-wide py-2 px-4 flex items-center justify-center gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
        style={{ borderRadius: '20px' }}>
          <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Enquire
        </button>
      </div>

      {/* Label */}
      <div className="p-4 text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <span className="text-[9px] text-accent-gold uppercase tracking-widest font-medium">{product.material}</span>
        </div>
        <div className="font-heading text-sm md:text-base text-brand-dark group-hover:text-primary transition-colors line-clamp-2">
          Multi Size Available
        </div>
      </div>
    </div>
  );
}