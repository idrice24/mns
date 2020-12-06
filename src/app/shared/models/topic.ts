import { AppComment } from './app-comment';

// @idrice: I extended Topic with Comment Array-->
// This mean if HTML Or Component has a topic object, it has automatically his comments
// @Idrice: What is the goal of ? near property name
export interface Topic {
  content?: string;
  createdDate?: string;
  id?: number;
  publishedDate?: string;
  title?: string;
  updatedDate?: string;
  summary?: string;
  imageUrl?: string;
  rating?: number;
  category?: string;
  comments?: AppComment[]; // To store all comments for unique topic
  like?: number; // To get or set the number of like for unique Topic
  unlike?: number;
  verified?: boolean;

}

