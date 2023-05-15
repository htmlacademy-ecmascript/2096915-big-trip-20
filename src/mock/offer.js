import { Price } from '../const.js';
import { createIdGenerator, getRandomInteger } from '../utils.js';

const idOffer = createIdGenerator();

function generateOffer(type) {
  return {
    id: idOffer(),
    title: `${type} offer`,
    price: getRandomInteger(Price.MIN, Price.MAX)
  };
}

export { generateOffer };

