export const removeUndefinedFromObject = (obj: Record<string, any>) =>
  Object.keys(obj).forEach(
    (key) => (obj[key] === undefined || obj[key] === "") && delete obj[key]
  );
