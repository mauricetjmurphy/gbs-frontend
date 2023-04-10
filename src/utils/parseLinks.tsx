import React, { ReactNode } from "react";
import * as linkify from "linkifyjs";

/*
The parseLinks function is a utility function that takes a string as 
input and returns an array of React elements. It processes the input 
string to identify and parse two types of links: custom links and 
standard URLs.

Custom links follow a specific markup syntax, [[text|url]], where 
"text" is the display text for the link and "url" is the actual 
URL to which the link points. The function uses a regular expression 
to find and replace these custom links with appropriate React 
anchor elements.
*/

const customLinkPattern = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

interface CustomLinkPart {
  type: "link";
  label: string;
  href: string;
  index: number;
}

interface Token {
  isLink: boolean;
  toString(): string;
  toHref(): string;
}

type ParsedElement = string | CustomLinkPart;

const parseCustomLinks = (text: string): ParsedElement[] => {
  let lastIndex = 0;
  const parts: ParsedElement[] = [];
  let match: RegExpExecArray | null;

  while ((match = customLinkPattern.exec(text)) !== null) {
    const [matchedString, label, href] = match;
    const index = match.index;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push({
      type: "link",
      label,
      href,
      index,
    });
    lastIndex = index + matchedString.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const parseLinks = (text: string): ReactNode[] => {
  const customLinkParts = parseCustomLinks(text);
  return customLinkParts.flatMap((part, index) => {
    if (typeof part === "string") {
      const tokens: Token[] = linkify.tokenize(part);
      return tokens.map((token, subIndex) => {
        if (token.isLink) {
          return (
            <a
              key={`${index}-${subIndex}`}
              href={token.toHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {token.toString()}
            </a>
          );
        } else {
          return token.toString();
        }
      });
    } else {
      return (
        <a
          key={part.index}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part.label}
        </a>
      );
    }
  });
};

export default parseLinks;
