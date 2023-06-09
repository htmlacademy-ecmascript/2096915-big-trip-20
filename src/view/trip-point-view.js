import { createElement } from '../render.js';
import { humanizePointDate, humanizePointTime, humanizeDifferenceDate } from '../utils.js';
import { getDestinationById } from '../mock/destination.js';
import { getOfferById } from '../mock/offer.js';

function createSelectedOffers(offers) {
  return (
    offers.map((offer) => (`
    <li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`
    )).join(' ')
  );
}

function createTripPointTemplate(point) {
  const { type, destination, dateFrom, dateTo, basePrice, offers, isFavorite } = point;

  const date = humanizePointDate(dateFrom);
  const timeFrom = humanizePointTime(dateFrom);
  const timeTo = humanizePointTime(dateTo);
  const differenceTime = humanizeDifferenceDate(dateFrom, dateTo);
  const destinationPoint = getDestinationById(destination);
  const favorite = isFavorite ? 'event__favorite-btn--active' : '';

  const offersList = [];

  offers.forEach((id) => {
    offersList.push(getOfferById(id));
  });

  return /*html*/`
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${destinationPoint.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${timeFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${timeTo}</time>
          </p>
          <p class="event__duration">${differenceTime}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${createSelectedOffers(offersList)}
        </ul>
        <button class="event__favorite-btn ${favorite}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
}

export default class TripPointView {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createTripPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
