export interface Card {
  id: string;
  image_url?: string;
  title: string;
  category: string;
  body: Section[];
  author: string;
  date: string;
}

export interface Section {
  title: string;
  text: string;
}
