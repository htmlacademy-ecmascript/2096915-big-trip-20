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

  constructor({eventContainer, pointsModel}) {
    this.eventContainer = eventContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    render(this.tripEventListComponent, this.eventContainer);
    render(this.tripEventItemComponent, this.tripEventListComponent.getElement());
    render(this.formEventEditComponent, this.tripEventItemComponent.getElement());
    render(new EventEditHeaderView({point: this.boardPoints[0]}), this.formEventEditComponent.getElement());
    render(new EventEditDetailsView({point: this.boardPoints[0]}), this.formEventEditComponent.getElement());

    for (let i = 1; i < this.boardPoints.length; i++) {
      render(new TripPointView({point: this.boardPoints[i]}), this.tripEventListComponent.getElement());
    }
  }
}
