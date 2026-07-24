export interface DisplayProduct {
  /** Cloudinary public_id — unique, so it doubles as the React key */
  id: string;
  name: string;
  shortName: string;
  image: string;
  alt: string;
  material: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}