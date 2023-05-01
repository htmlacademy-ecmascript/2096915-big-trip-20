import { createElement } from '../render.js';

function createTripEventItemTemplate() {
  return `
    <li class="trip-events__item">
    </li>`;
}

export default class TripEventItemView {
  getTemplate() {
    return createTripEventItemTemplate();
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
