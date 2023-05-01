import TripEventListView from '../view/trip-event-list-view.js';
import FormEventEditView from '../view/form-event-edit-view.js';
import EventEditHeaderView from '../view/event-edit-header-view.js';
import EventEditDetailsView from '../view/event-edit-details-view.js';
import TripPointView from '../view/trip-point-view.js';
import { render } from '../render.js';

export default class EventPresenter {
  tripEventListComponent = new TripEventListView();
  eventEditComponent = new FormEventEditView();

  constructor({eventContainer}) {
    this.eventContainer = eventContainer;
  }

  init() {
    render(this.tripEventListComponent, this.eventContainer);
    render(this.eventEditComponent, this.tripEventListComponent.getElement());
    render(new EventEditHeaderView(), this.eventEditComponent.getElement());
    render(new EventEditDetailsView(), this.eventEditComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.tripEventListComponent.getElement());
    }
  }
}
