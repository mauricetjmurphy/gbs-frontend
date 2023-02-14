import React from "react";
import { nanoid } from "nanoid";

import { Card } from "../../home/types";

import { ArticleSection } from "./ArticleSection";

interface ArticleListProps {
  article: Card | undefined;
}

interface Section {
  title: string;
  text: string[];
}

export const ArticleParagraphList: React.FC<ArticleListProps> = (props) => {
  return (
    <>
      {props.article?.Body[0].text.map((item) => {
        return <ArticleSection key={nanoid()} text={item} />;
      })}
    </>
  );
};
