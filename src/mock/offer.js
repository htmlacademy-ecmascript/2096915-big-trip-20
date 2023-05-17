import { OFFERS, MAX_OFFERS_COUNT, Price, TYPES } from '../const.js';
import { createIdGenerator, getRandomArrayElement, getRandomInteger } from '../utils.js';

const idOffer = createIdGenerator();

function generateOfferDescription() {
  return {
    id: idOffer(),
    title: getRandomArrayElement(OFFERS),
    price: getRandomInteger(Price.MIN, Price.MAX)
  };
}

function generateOffers(type) {
  return {
    type: type,
    offers: Array.from({ length: getRandomInteger(1, MAX_OFFERS_COUNT) }, generateOfferDescription)
  };
}

function getOffers() {
  const offers = [];
  for (let i = 0; i < TYPES.length; i++) {
    offers[i] = generateOffers(TYPES[i]);
  }
  return offers;
}

const allOffers = getOffers();

function getIdsOffersByType(type) {
  const offersId = [];
  allOffers.forEach((offer) => {
    if (offer.type === type) {
      offer.offers.forEach((element) => offersId.push(element.id));
    }
  });
  return offersId;
}

function getOfferById(id) {
  let offerItem;
  allOffers.forEach((offer) => {
    offer.offers.forEach((item) => {
      if (item.id === id) {
        offerItem = item;
      }
    });
  });
  return offerItem;
}

export { getIdsOffersByType, getOfferById };

