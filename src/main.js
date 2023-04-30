import TripInfoView from './view/trip-info-view.js';
import { RenderPosition, render } from './render.js';

const siteTripMainElement = document.querySelector('.trip-main');

render(new TripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
