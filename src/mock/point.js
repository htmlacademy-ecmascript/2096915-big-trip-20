import { BasePrice } from '../const.js';
import { createIdGenerator, getRandomInteger } from '../utils.js';

const pointId = createIdGenerator();

function generatePoint (type, destinationId, offerId) {
  return {
    id: pointId(),
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: destinationId,
    isFavorite: false,
    offers: [offerId],
    type
  };
}

export { generatePoint };
