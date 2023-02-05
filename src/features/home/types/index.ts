export interface Section {
  title: string;
  text: string;
}

export interface Post {
  id: string;
  image_url: string;
  title: string;
  category: string;
  body: Section[];
  author: string;
  date: string;
}
