import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import TripEventListView from './view/trip-event-list-view.js';
import { RenderPosition, render } from './render.js';

const siteTripMainElement = document.querySelector('.trip-main');
const siteFiltersMainElement = document.querySelector('.trip-controls');
const siteEventsMainElement = document.querySelector('.trip-events');

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new FilterView(), siteFiltersMainElement);
render(new SortView(), siteEventsMainElement);
render(new TripEventListView(), siteEventsMainElement);
