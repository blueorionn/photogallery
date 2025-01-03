export type PhotoCollectionMediaSrc = {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
};

export type PhotoCollectionMedia = {
  type: "Photo" | "Video";
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: PhotoCollectionMediaSrc;
  liked: boolean;
  alt: string;
};

export type PhotoCollectionType = {
  page: number;
  per_page: number;
  media: Array<PhotoCollectionMedia>;
  total_results: number;
  next_page: string;
  id: string;
};
