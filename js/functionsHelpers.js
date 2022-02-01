export const sum = (f, s) => {
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
  const DATE = new Date(date);
  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день
  return `${DATE.getFullYear()}:${DATE.getMonth() + 1}:${DATE.getDate()}`;
};

export const sorting = (data) => {
  //TODO: Отсортируйте массив строк по алфавиту
  return data.sort((a,b)=> a.localeCompare(b));
};
console.log(sorting([
  "ёж",
  "язь",
  "Евгений",
  "як",
  "август",
  "Ярик",
  "Анна",
  "йод"
]));