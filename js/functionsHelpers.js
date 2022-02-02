export const sum = (f, s) => {
  const setOfNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (typeof f === 'string') f = f.replace(/[^0-9\.]/, '');
  if (typeof s === 'string') s = s.replace(/[^0-9\.]/, '');
  f = parseFloat(f);
  s = parseFloat(s);
  
  return (isNaN(f) || isNaN(s)) ? 0 : f + s;
};

export const countPrice = (price, discount) => {
  const discountedPrice = price - (price * discount) / 100;
  return (Math.ceil(discountedPrice * 100) / 100).toFixed(2);
};

export const findSuccess = (bankResponse) => {
  return bankResponse.toLowerCase().includes('success') ? "Yes" : "No";
};

export const dateToString = (date) => {
  const numOfDays = Math.floor(Date.now() / 1000 / 60 / 60 / 24);
  const YESTERDAY = new Date((numOfDays - 1) * 1000 * 60 * 60 * 24);
  const NOW = new Date(numOfDays * 1000 * 60 * 60 * 24);
  const TOMORROW = new Date((numOfDays + 1) * 1000 * 60 * 60 * 24);
  const DATE = new Date(date);

  if (DATE.getFullYear() == YESTERDAY.getFullYear() &&
    DATE.getMonth() == YESTERDAY.getMonth() &&
    DATE.getDate() == YESTERDAY.getDate()) return 'Вчера';

  if (DATE.getFullYear() == NOW.getFullYear() &&
    DATE.getMonth() == NOW.getMonth() &&
    DATE.getDate() == NOW.getDate()) return 'Сегодня';

  if (DATE.getFullYear() == TOMORROW.getFullYear() &&
    DATE.getMonth() == TOMORROW.getMonth() &&
    DATE.getDate() == TOMORROW.getDate()) return 'Завтра';

  return `${DATE.getFullYear()}:${DATE.getMonth() + 1}:${DATE.getDate()}`;
};

export const sorting = (data) => {
  return data.sort((a, b) => a.localeCompare(b));
};
