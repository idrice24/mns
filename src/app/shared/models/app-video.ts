

export interface AppVideo {
  id: number;
  year: number;
  subtitle: string;
  title: string;
  publishedDate: string;
  items: AppVideoItem[];
  name: string;
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
}

