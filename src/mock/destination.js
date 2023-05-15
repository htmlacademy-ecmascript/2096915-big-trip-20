import { CITIES, DESCRIPTIONS, PHOTO_URL } from '../const.js';
import { getRandomArrayElement, createIdGenerator } from '../utils.js';

const idDestination = createIdGenerator();

function generateDestination() {
  const city = getRandomArrayElement(CITIES);

  return {
    id: idDestination(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: city,
    pictures: [
      {
        src: `${PHOTO_URL}${Math.random()}`,
        description: `${city} is beautiful`
      }
    ]
  };
}

export { generateDestination };
