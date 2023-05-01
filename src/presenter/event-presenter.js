import TripEventListView from '../view/trip-event-list-view.js';
import TripEventItemView from '../view/trip-event-item-view.js';
import FormEventEditView from '../view/form-event-edit-view.js';
import EventEditHeaderView from '../view/event-edit-header-view.js';
import EventEditDetailsView from '../view/event-edit-details-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class EventPresenter {
  tripEventListComponent = new TripEventListView();
  tripEventItemComponent = new TripEventItemView();
  formEventEditComponent = new FormEventEditView();

  constructor({eventContainer}) {
    this.eventContainer = eventContainer;
  }

  init() {
    render(this.tripEventListComponent, this.eventContainer);
    render(this.tripEventItemComponent, this.tripEventListComponent.getElement());
    render(this.formEventEditComponent, this.tripEventItemComponent.getElement());
    render(new EventEditHeaderView(), this.formEventEditComponent.getElement());
    render(new EventEditDetailsView(), this.formEventEditComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.tripEventListComponent.getElement());
    }
  }
}
