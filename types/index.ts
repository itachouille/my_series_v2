export interface Show {
  adult?: boolean;
  backdropPath?: string;
  genre_ids?: number[];
  apiId: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  posterPath?: string;
  first_air_date?: string;
  title: string;
  vote_average?: number;
  vote_count?: number;
  season?: number;
  episode?: number;
  userId?: string;
}

export interface CollectionProps {
  results: Show[];
}

export interface SerieProps {
  title: string;
  apiId: number;
  backdropPath?: string;
  posterPath?: string;
  season?: number;
  episode?: number;
  userId?: string;
}
