export const truncateString = (string: string) => {
  const maxLength = 60;
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }
  return string;
};
