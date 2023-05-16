import { BasePrice, CITIES, TYPES, TimeTo } from '../const.js';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils.js';

const pointId = createIdGenerator();

function generatePoint () {
  return {
    id: pointId(),
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom: new Date(new Date().getTime()),
    dateTo: new Date(new Date().getTime() + getRandomInteger(TimeTo.MIN, TimeTo.MAX)),
    destination: getRandomArrayElement(CITIES),
    isFavorite: false,
    offers: [],
    type: getRandomArrayElement(TYPES)
  };
}

export { generatePoint };
