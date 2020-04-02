export const truncateText = (text: string, limit: number) => {
  if (!text) {
    return "";
  }
  if (text.length < limit) {
    return text;
  }
  let words = text.slice(0, limit).split(" ");
  words.pop();
  return words.join(" ") + "…";
};
