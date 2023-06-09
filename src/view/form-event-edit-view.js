import { createElement } from '../render.js';

function createFormEventEditTemplate() {
  return `
    <form class="event event--edit" action="#" method="post">
    </form>`;
}

export default class FormEventEditView {
  getTemplate() {
    return createFormEventEditTemplate();
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
