const clone = require('clone');

module.exports = function ({ object = {}, valueToSet, path }) {
  object = clone(object);

  const splitPath = path.split('.');
  let cloneObj = object;
  let index = 0;

  splitPath.forEach((chunk) => {
    const fieldKeyPart = splitPath[index + 1];

    chunk = chunk.replace('$', '');

    if (typeof cloneObj[chunk] === 'undefined') {
      const isArray = fieldKeyPart && fieldKeyPart.indexOf('$') > -1;
      cloneObj[chunk] = isArray ? [] : {};
    }

    if (index === splitPath.length - 1) {
      cloneObj[chunk] = valueToSet;
    }

    cloneObj = cloneObj[chunk];
    index += 1;
  });


  return object;
};
