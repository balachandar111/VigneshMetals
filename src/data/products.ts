export interface Product {
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

export interface CategoryMeta {
  name: string;
  slug: string;
}

// Canonical list of categories and their URL slugs (used for /category/:slug routes)
export const categoryList: CategoryMeta[] = [
  { name: 'Brass Diyas', slug: 'brass-diyas' },
  { name: 'Kamatchi & Temple Items', slug: 'kamatchi-temple-items' },
  { name: 'Pooja Articles & Vessels', slug: 'pooja-articles-vessels' },
  { name: 'Plates & Kitchenware', slug: 'plates-kitchenware' },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categoryList.find((c) => c.slug === slug);
}

export function getSlugByCategory(name: string): string {
  return categoryList.find((c) => c.name === name)?.slug ?? '';
}

export const products: Product[] = [
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

export function getProductsByCategory(categoryName: string): Product[] {
  return products.filter((p) => p.category === categoryName);
}

export function getProductCountByCategory(categoryName: string): number {
  return getProductsByCategory(categoryName).length;
}