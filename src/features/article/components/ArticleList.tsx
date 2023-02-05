import { nanoid } from "nanoid";
import React from "react";

import { type Post } from "../../home/types";

import { ArticleSection } from "./ArticleSection";

interface ArticleListProps {
  article: Post | undefined;
}

interface Section {
  title: string;
  text: string;
}

export const ArticleList = ({ article }: ArticleListProps) => {
  return (
    <>
      {article?.body.map((item: Section) => {
        return (
          <ArticleSection key={nanoid()} title={item.title} text={item.text} />
        );
      })}
    </>
  );
};
