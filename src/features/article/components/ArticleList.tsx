import { nanoid } from "nanoid";
import React from "react";
import { Post } from "../../home/types";
import { ArticleSection } from "./ArticleSection";

type ArticleListProps = {
  article: Post | undefined;
};

type Section = {
  title: string;
  text: string;
};

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
