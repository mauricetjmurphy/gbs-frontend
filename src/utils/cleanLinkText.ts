export function cleanLinkText(text: string) {
  const regex = /\[\[([^\]|]+)\|([^\]|]+)(\.{3})?(\]\])?/g;
  return text.replace(regex, "$1");
}
