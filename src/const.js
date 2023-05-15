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

export { TYPES, CITIES, DESCRIPTIONS, PHOTO_URL, BasePrice, Price };