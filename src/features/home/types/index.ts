export interface Card {
  Id: string;
  Image_url?: string;
  Title: string;
  Category: string;
  Body: Section[];
  Author: string;
  Date: string;
}

export interface Section {
  title: string;
  text: string;
}
