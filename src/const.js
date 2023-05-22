const TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const CITIES = [
  'Geneva',
  'Amsterdam',
  'Vena',
  'Madrid',
  'Dubai',
  'Manchester',
  'Barcelona',
  'Rome',
  'Paris'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra. ',
  'Aliquam id orci ut lectus varius viverra. ',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. ',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. ',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. ',
  'Aliquam erat volutpat. ',
  'Nunc fermentum tortor ac porta dapibus. ',
  'In rutrum ac purus sit amet tempus.'
];

const PHOTO_URL = 'https://loremflickr.com/248/152?random=';

const BasePrice = {
  MIN: 1000,
  MAX: 5000
};

const Price = {
  MIN: 100,
  MAX: 500
};

const TimeTo = {
  MIN: 0,
  MAX: 300 * 60000
};


const PicturesCount = {
  MIN: 1,
  MAX: 5
};

const MAX_OFFERS_COUNT = 5;

const OFFERS = [
  'Add luggage',
  'Switch to comfort class',
  'Add meal',
  'Choose seats',
  'Travel by train',
  'Order Uber',
  'Rent a car',
  'Add breakfast',
  'Book tickets',
  'Lunch in city'
];

export { TYPES, CITIES, DESCRIPTIONS, PHOTO_URL, BasePrice, Price, TimeTo, MAX_OFFERS_COUNT, PicturesCount, OFFERS };
