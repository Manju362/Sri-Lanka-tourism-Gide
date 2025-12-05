export interface HistoricalPlace {
  id: string;
  name: string;
  nameEn: string;
  nameSi: string;
  location: string;
  description: string;
  history: string;
  legends: string[];
  imageUrl: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  category: 'temple' | 'fortress' | 'ancient-city' | 'natural' | 'cultural';
}

export interface SriLankanFood {
  id: string;
  name: string;
  nameEn: string;
  nameSi: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
  category: 'main' | 'snack' | 'dessert' | 'beverage';
  spiceLevel?: 'mild' | 'medium' | 'spicy';
}

export interface CulturalInfo {
  id: string;
  title: string;
  titleSi: string;
  description: string;
  imageUrl: string;
  category: 'religion' | 'festival' | 'tradition' | 'art';
}
