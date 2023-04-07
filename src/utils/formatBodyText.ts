import { truncateText } from "./truncate";

export function formatBodyText(body: string[]) {
  const truncatedBody = `${body[0]}. ${body[1]}`;
  return truncateText(truncatedBody, 150);
}
