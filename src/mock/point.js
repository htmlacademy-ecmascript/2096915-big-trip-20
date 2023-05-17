import { BasePrice, CITIES, TYPES, TimeTo } from '../const.js';
import { getRandomArrayElement, createIdGenerator, getRandomInteger } from '../utils.js';
import { getIdsOffersByType } from './offer.js';

const pointId = createIdGenerator();


function generatePoint() {
  const pointType = getRandomArrayElement(TYPES);
  const offerIds = getIdsOffersByType(pointType);

  return {
    id: pointId(),
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom: new Date(new Date().getTime()),
    dateTo: new Date(new Date().getTime() + getRandomInteger(TimeTo.MIN, TimeTo.MAX)),
    destination: getRandomInteger(1, CITIES.length),
    isFavorite: getRandomInteger(0, 1),
    offers: offerIds.slice(0, offerIds.length - getRandomInteger(0, offerIds.length)),
    type: pointType
  };
}

export { generatePoint };
