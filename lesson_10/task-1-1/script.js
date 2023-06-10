//  <p>Дана история цен на ценные бумаги за некоторый период (сгенерировать от 1 до 10000)</p>
// <ol style="padding-left:20px;">
//    <li>Сформировать новый массив, в котором есть только те, что больше 1000 уе.</li>
//    <li>Сформировать новий масив, в котором есть номера только тех, что больше 1000 уе.</li>
//    <li>Сформировать список из тех цен, которые больше чем предыдущее значение</li>
//    <li>Сформировать новий масив, что будет содержать значение цен в процентах по отношению к максимальному</li>
//    <li>Подсчитать количество изменений цен</li>
//    <li>Определить, есть ли цена менее 1000</li>
//    <li>Определять, все ли цены больше 1000</li>
//    <li>Подсчитать количество цен, более 1000</li>
//    <li>Подсчитать сумму цен, более 1000</li>
//    <li>Найти первую цену более 1000</li>
//    <li>Найти индекс первой цены, более 1000</li>
//    <li>Найти последнюю цену более 1000</li>
//    <li>Найти индекс последней цены, более 1000</li>
// </ol>


function getRandom(minV, maxV) {
   return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}
function getRandomArray(arraySize, minV, maxV) {
   // 1)
   // return new Array(arraySize).fill(0).map(el => el = getRandom(minV, maxV))

   // 2
   let arr = []
   for (let index = 0; index < arraySize; index++) {
      arr.push(getRandom(minV, maxV))
   }
   return arr
}

// История цен на ценные бумаги за некоторый период
const priceHistory = getRandomArray(10, 1, 10000)
console.log(`Исходный массив: ${priceHistory}`);

// 1 Сформировать новый массив, в котором есть только те, что больше 1000 уе.
const over100 = priceHistory.filter(price => price > 1000)
console.log(`1) : ${over100}`)

// 2 Сформировать новий масив, в котором есть номера только тех, что больше 1000 уе.
// === Вариант 1
// let indexOver100 = []
// for (let index = 0; index < priceHistory.length; index++) {
//    const price = priceHistory[index];
//    if (price > 1000) indexOver100.push(index)
// }
const indexOver100 = priceHistory.reduce(
   // === Вариант 2
   // (array,price,index) => price > 1000 ? [...array, index] : array, []
   // === Вариант 3
   (array, price, index) => {
      if (price > 1000) array.push(index)
      return array
   }, []
)
console.log(`2) : ${indexOver100}`)

// 3 Сформировать список из тех цен, которые больше чем предыдущее значение
// [2,3,2,1,4,3] => [3,4]
let b_over_a = []
for (let index = 1; index < priceHistory.length; index++) {
   if (priceHistory[index] > priceHistory[index - 1]) b_over_a.push(priceHistory[index])
}
console.log(`3) : ${b_over_a}`)

// 4 Сформировать новий масив, что будет содержать значение цен в процентах по отношению к максимальному
const maxValueInPriceList = Math.max(...priceHistory)
const percentageArray = priceHistory.map(price => price / maxValueInPriceList * 100)
console.log(`4) Max value: ${maxValueInPriceList}\nArray:`);
console.log(percentageArray);

// 5 Подсчитать количество изменений цен
let changes = 0
for (let index = 1; index < priceHistory.length; index++) {
   if (priceHistory[index] !== priceHistory[index - 1]) changes++
}
console.log(`5) : ${changes}`)

// 6 Определить, есть ли цена менее 1000
console.log(`6) : ${priceHistory.some(price => price < 1000)}`)

// 7 Определять, все ли цены больше 1000
console.log(`7) : ${priceHistory.every(price => price > 1000)}`)

// 8 Подсчитать количество цен, более 1000
const qntPriceOver1000 = priceHistory.reduce(
   (prevValue, price) => price > 1000 ? ++prevValue : prevValue,
   0
)
console.log(`8) : ${qntPriceOver1000}`)

// 9 Подсчитать сумму цен, более 1000
const summOver1000 = priceHistory.reduce(
   (summ, price) => price > 1000 ? summ + price : summ,
   0
)
console.log(`9) : ${summOver1000}`)

// 10 Найти первую цену более 1000
console.log(`10) : ${priceHistory.find(price => price > 1000)}`)

// 11 Найти индекс первой цены, более 1000
console.log(`11) : ${priceHistory.findIndex(price => price > 1000)}`)

// 12 Найти последнюю цену более 1000
console.log(`12) : ${priceHistory.findLast(price => price > 1000)}`)

// 13 Найти индекс последней цены, более 1000
console.log(`13) : ${priceHistory.findLastIndex(price => price > 1000)}`)