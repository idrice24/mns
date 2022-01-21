export interface Image {
  src?: string;
  thumbnailImageSrc?: string;
  alt?: string;
  title?: string;
  publishedDate?: Date;
  id?: number;
  summary?: string;
}

// @Idrice not french in code !!
export interface AppNews {
  nom?: string;
  email: string;
  prenom: string;
}
