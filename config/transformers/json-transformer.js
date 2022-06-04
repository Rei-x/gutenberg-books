const transform = (content) =>
  `module.exports = ${JSON.stringify(JSON.parse(content))}`;

module.exports = {
  process: (content) => {
    return {
      code: transform(content),
    };
  },
  default: transform,
};
