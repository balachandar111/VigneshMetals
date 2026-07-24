export interface CategoryMeta {
  /** Display name shown in the UI */
  name: string;
  /**
   * URL slug used for the /category/:slug route. This must exactly match
   * the Cloudinary subfolder name inside your root folder (see
   * CLOUDINARY_ROOT_FOLDER below), e.g. vignesh-metals/brass-diyas/... 
   */
  slug: string;
  /** Shown on product cards since Cloudinary doesn't store product metadata */
  material: string;
}

// Cloudinary root folder that contains every category subfolder
// (vignesh-metals/brass-diyas/..., vignesh-metals/pooja-articles/..., etc.)
export const CLOUDINARY_ROOT_FOLDER = 'vignesh-metals';

// One entry per subfolder in your Cloudinary Media Library. `slug` must
// exactly match the folder name. That's it — no tags to remember to add.
export const categoryList: CategoryMeta[] = [
  { name: 'Brass Diyas', slug: 'brass-diyas', material: 'Pure Brass' },
  { name: 'Brass Kuthu Vilakku', slug: 'brass-kuthuvilaku', material: 'Pure Brass' },
  { name: 'Kamatchi Vilaku', slug: 'kamatchi-vilaku', material: 'Pure Brass' },
  { name: 'Brass & Copper Plates', slug: 'brass-copper-plates', material: 'Brass & Copper' },
  { name: 'Brass Utensils', slug: 'brass-utensils', material: 'Pure Brass' },
  { name: 'Copper Utensils', slug: 'copper-utensils', material: 'Pure Copper' },
  { name: 'Pooja Articles', slug: 'pooja-articles', material: 'Brass & Copper' },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categoryList.find((c) => c.slug === slug);
}
