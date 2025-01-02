type FeaturedCollctionPhotoSrc = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

type FeaturedCollectionPhoto = {
  type: "Photo";
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: FeaturedCollctionPhotoSrc;
  liked: boolean;
  alt: string;
};

export type FeaturedPhotoCollectionType = {
  page: number;
  per_page: number;
  photos: Array<FeaturedCollectionPhoto>;
  total_results: number;
  next_page: string;
  id: string;
};
