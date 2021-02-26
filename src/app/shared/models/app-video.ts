
import { AppComment } from './app-comment';

export interface AppVideo {
  id: number;
  year: number;
  subtitle: string;
  title: string;
  publishedDate: string;
  items: AppVideoItem[];
  comments?: AppComment[]; // To store all comments for unique video
  name: string;
  likeButton: number;
  unlikeButton: number;
}
// @Idrice: His own file  should be created
export interface AppVideoItem {
  id: number;
  name: string;
  publishedDate: string;
  title: string;
  link: string;
  subtitle: string;
  top: number;
  comments: AppComment[];
  likeButton: number;
  unlikeButton: number;
}

