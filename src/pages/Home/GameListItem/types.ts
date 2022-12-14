import { Game } from "../../../api/types/game";

export interface GameListItemProps {
  id: string;
  image: string;
  title: string;
  year: number;
  rating: number;
  favorite: boolean;
  toggleFavorite(id: string, favorite: boolean): Promise<void>;
}
