import { BasePrice, CITIES, TYPES } from '../const.js';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils.js';

const pointId = createIdGenerator();

function generatePoint () {
  return {
    id: pointId(),
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: getRandomArrayElement(CITIES),
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TYPES)
  };
}

export { generatePoint };
