type Section = {
  title: string;
  text: string;
};

export type Post = {
  id: string;
  image_url: string;
  title: string;
  category: string;
  body: Section[];
  author: string;
  date: string;
};
