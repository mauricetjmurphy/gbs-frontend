import { truncateText } from "./truncate";

export function formatBodyText(body: string[], amount: number = 150) {
  const truncatedBody = `${body[0]}. ${body[1]}`;
  return truncateText(truncatedBody, amount);
}
