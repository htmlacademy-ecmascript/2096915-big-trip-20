import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';
const DIFF_FORMAT = 'HH[h] mm[m]';
const DATE_EDIT_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createIdGenerator() {
  let id = 1;
  return () => id++;
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getLastWord(offer) {
  const words = offer.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.toLowerCase();
}

dayjs.extend(utc);

function humanizePointDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizePointEditDate(date) {
  return date ? dayjs(date).format(DATE_EDIT_FORMAT) : '';
}

function humanizePointTime(time) {
  return time ? dayjs(time).format(TIME_FORMAT) : '';
}

function humanizeDifferenceDate(startDate, endDate) {
  const difference = (dayjs(endDate).diff(dayjs(startDate)));
  return dayjs(difference).utc().format(DIFF_FORMAT);
}

export { getRandomArrayElement, createIdGenerator, getRandomInteger, humanizePointDate, humanizePointTime, humanizeDifferenceDate, humanizePointEditDate, getLastWord };
