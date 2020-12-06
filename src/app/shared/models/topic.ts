import { TopicComment } from './app-comment';

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
  comment?: TopicComment[]; // Comments for the topic
  like?: number;
  unlike?: number;
  verified?: boolean;

}

