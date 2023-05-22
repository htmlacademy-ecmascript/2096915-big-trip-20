import { createElement } from '../render.js';
import { getDestinationById } from '../mock/destination.js';
import { getAllOffersByType } from '../mock/offer.js';
import { getLastWord } from '../utils.js';

function createPhotoElement(photos) {
  return photos.map((photo) => (`<img class="event__photo" src="${photo.src}" alt="${photo.description}">`)).join(' ');
}

function createOfferElement(allOffers, createdOffer) {
  return allOffers.map((offer) => {
    const classOfferElement = getLastWord(offer.title);
    const isChecked = createdOffer.includes(offer.id) ? 'checked' : '';

    return (`<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${classOfferElement}-1" type="checkbox" name="event-offer-${classOfferElement}" ${isChecked}>
    <label class="event__offer-label" for="event-offer-${classOfferElement}-1">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </label>
  </div>`);
  })
    .join(' ');
}

function createEventEditDetailsTemplate(point) {
  const { type, destination, offers } = point;

  const description = getDestinationById(destination).description;
  const photos = getDestinationById(destination).pictures;
  const offersForm = getAllOffersByType(type);

  return /*html*/`
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${createOfferElement(offersForm, offers)}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${createPhotoElement(photos)}
          </div>
        </div>
      </section>
    </section>`;
}

export default class EventEditDetailsView {
  constructor({ point }) {
    this.point = point;
  }

  getTemplate() {
    return createEventEditDetailsTemplate(this.point);
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
