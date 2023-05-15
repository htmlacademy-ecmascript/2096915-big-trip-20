const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const createIdGenerator = () => {
  let id = 1;
  return () => id++;
};

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export { getRandomArrayElement, createIdGenerator, getRandomInteger };
