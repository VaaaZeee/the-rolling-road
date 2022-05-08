export type BadgeType = 'NEW' | 'DISCOUNT';

export interface Badge {
  name: string;
  type: BadgeType;
}

export interface BoardGame {
  id: string;
  name: string;
  brand: string;
  inStock: number;
  minPlayer: number;
  maxPlayer: number;
  age: number;
  playingTimeLower: number;
  playingTimeUpper: number;
  categories: string[];
  imageUrl: string;
  languages: string[];
  shortDescription: string;
  longDescription?: string;
  designers: string[];
  artists: string[];
  typeOfGame: string[];
  price: number;
  badge?: Badge;
}
