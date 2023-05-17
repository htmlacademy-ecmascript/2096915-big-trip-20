import { DESCRIPTIONS, MAX_PICTURES_COUNT, PHOTO_URL, CITIES } from '../const.js';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils.js';

const idDestination = createIdGenerator();

function generatePicture() {
  return {
    src: `${PHOTO_URL}${Math.random()}`,
    description: getRandomArrayElement(DESCRIPTIONS)
  };
}

function generateDestination(city) {
  return {
    id: idDestination(),
    description: getRandomArrayElement(DESCRIPTIONS),
    name: city,
    pictures: Array.from({ length: getRandomInteger(0, MAX_PICTURES_COUNT) }, generatePicture)
  };
}

function getDestinations() {
  const destinations = [];
  for (let i = 0; i < CITIES.length; i++) {
    destinations[i] = generateDestination(CITIES[i]);
  }
  return destinations;
}

const allDestinations = getDestinations();

function getDestinationById(id) {
  const destination = allDestinations.find((element) => element.id === id);
  return destination;
}

export { getDestinationById };
