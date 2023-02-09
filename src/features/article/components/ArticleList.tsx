import { nanoid } from "nanoid";
import React from "react";

import { Card } from "../../home/types";

import { ArticleSection } from "./ArticleSection";

interface ArticleListProps {
  article: Card | undefined;
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
