import React from "react";
import { nanoid } from "nanoid";

import { Card } from "../../home/types";

import { ArticleSection } from "./ArticleSection";

interface ArticleListProps {
  article: Card | undefined;
}

export const ArticleParagraphList: React.FC<ArticleListProps> = (props) => {
  return (
    <>
      {props.article?.body.paragraphs.map((item) => {
        return <ArticleSection key={nanoid()} text={item} />;
      })}
    </>
  );
};
