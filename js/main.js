import { sorting, countPrice, sum, findSuccess, dateToString} from './functionsHelpers.js';

const calcData = [
  [-1, 1],
  [5, {}],
  [15, "123,5"],
  ["15%", 15],
  ["x0001", 3],
  [true, "+"]
];

const discountData = [
  [100, 10],
  [0.4, 10],
  [15.22, 15]
];

const bankResult = [
  "purchaseFailed",
  "refusedRespone",
  "insufficientFunds",
  "Success",
  "Not Success",
  "Some success response",
  "SomeSuccessResponse"
];

const dates = [
  "2020-11-06T08:13:51.376Z",
  "2021-11-07T08:13:51.376Z",
  "2021-11-08T08:13:51.376Z",
  "2021-11-09T08:13:51.376Z",
  "2021-11-10T08:13:51.376Z",
  "2021-11-11T08:13:51.376Z",
  "2021-11-12T08:13:51.376Z",
  "2021-11-13T08:13:51.376Z",
  "2022-11-14T08:13:51.376Z"
];

const forSorting = [
  "ёж",
  "язь",
  "Евгений",
  "як",
  "август",
  "Ярик",
  "Анна",
  "йод"
];

let res = `
<div class="box">
  <ul class="calc-data">
    Сумма:
    ${calcData.map(([f,s])=>  {
      return "<li>" + sum(f,s) + "</li>";
    }).join('')}
  </ul>
  <ul class="discount-data">
    Цена товара:
    ${discountData.map( ([price, discount])=> {
      return '<li>' + countPrice(price, discount) + '</li>';
    }).join('')}
  </ul>
  <ul class="bank-result">
    Поиск в строке:
    ${bankResult.map( (str)=> {
      return '<li>' + findSuccess(str) + '</li>';
    }).join('')}
  </ul>
  <ul class="dates">
    Обработка дат:
    ${dates.map( (dateStr)=> {
      return '<li>' + dateToString(dateStr) + '</li>';
    }).join('')}
  </ul>
  <ul class="for-sorting">
    Сортировка строк:
    ${sorting(forSorting).map( (str) => {
      return '<li>' + str + '</li>';
    }).join('')}
  </ul>
</div>`;
document.body.insertAdjacentHTML('afterbegin', res);