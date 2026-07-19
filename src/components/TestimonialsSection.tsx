import { useEffect, useRef, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  product: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Subramaniam',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    review: 'The Kuthu Vilakku I purchased from Vignesh Metals is absolutely stunning. The craftsmanship is exceptional and it looks exactly like the pictures. My pooja room feels so much more divine now. Highly recommended!',
    product: 'Kuthu Vilakku – 5 Wick',
    avatar: 'P',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    review: 'Excellent quality brass lamp. The finish is perfect and the weight feels premium. Delivery was prompt and the packaging was very secure. Will definitely order more items from Vignesh Metals.',
    product: 'Deepa Lakshmi Lamp',
    avatar: 'R',
  },
  {
    id: 3,
    name: 'Meenakshi Iyer',
    location: 'Madurai, Tamil Nadu',
    rating: 5,
    review: 'I bought the Navagraha lamp as a housewarming gift and everyone was amazed by its beauty. The intricate detailing and the golden shine of the brass is breathtaking. Thank you Vignesh Metals!',
    product: 'Navagraha 9-Wick Lamp',
    avatar: 'M',
  },
  {
    id: 4,
    name: 'Venkatesh Pillai',
    location: 'Trichy, Tamil Nadu',
    rating: 5,
    review: 'Been searching for an authentic South Indian brass lamp for years. Finally found Vignesh Metals and I am so happy. The quality is outstanding and the price is very reasonable. The lamp lights up beautifully.',
    product: 'Temple Deepam – Large',
    avatar: 'V',
  },
  {
    id: 5,
    name: 'Lakshmi Narayanan',
    location: 'Bangalore, Karnataka',
    rating: 5,
    review: 'The hanging brass lamp I ordered is a masterpiece. The craftsmanship reminds me of the lamps in ancient temples. Customer service was excellent and delivery was faster than expected.',
    product: 'Hanging Temple Lamp',
    avatar: 'L',
  },
  {
    id: 6,
    name: 'Anand Krishnamurthy',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review: 'Ordered the Peacock design lamp for Diwali and it was the centerpiece of our celebration. The attention to detail is incredible. Every guest asked where I bought it. Vignesh Metals is truly the best!',
    product: 'Peacock Diya Stand',
    avatar: 'A',
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent-gold' : 'text-brand-border'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-secondary overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent-gold"></div>
            <span className="text-xs text-accent-gold tracking-widest uppercase font-medium">Customer Reviews</span>
            <div className="h-px w-12 bg-accent-gold"></div>
          </div>
          <h2 className="section-heading mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-heading text-xl text-brand-dark">4.9</span>
            <span className="text-brand-text text-sm">Based on 500+ reviews</span>
          </div>
        </div>

        {/* Testimonials Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto hide-scrollbar pb-4"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`flex-shrink-0 w-80 md:w-96 bg-white p-6 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${
                activeIndex === i ? 'ring-2 ring-primary shadow-product-hover' : 'shadow-product'
              }`}
              style={{ transitionDelay: `${i * 80}ms`, borderRadius: '10px' }}
            >
              {/* Quote icon */}
              <div className="text-accent-gold text-4xl font-heading leading-none mb-3">"</div>

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Review text */}
              <p className="text-brand-text text-sm leading-relaxed mt-3 mb-5 line-clamp-4">
                {testimonial.review}
              </p>

              {/* Product tag */}
              <div className="inline-flex items-center gap-1 bg-secondary px-3 py-1 text-xs text-brand-text mb-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-heading text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-brand-dark text-sm">{testimonial.name}</div>
                  <div className="text-xs text-brand-text flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {testimonial.location}
                  </div>
                </div>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-accent-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14l-4-4 1.414-1.414L11 13.172l6.586-6.586L19 8l-8 8z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 ${
                activeIndex === i
                  ? 'w-6 h-2 bg-primary' :'w-2 h-2 bg-brand-border hover:bg-primary'
              }`}
              style={{ borderRadius: '2px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
