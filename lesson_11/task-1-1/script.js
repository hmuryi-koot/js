// Найти суммы элементов в указанной области
// координаты 0 - 0
// координаты 0 - 1
// координаты 1 - 0
// координаты 1 - 1
// парных рядков
// непарных столбцов
// в парных рядах - непарных столбцов, у парных - непарные

const table = [
   [3, 2, 5, 1],
   [2, 2, 6, 8],
   [0, 4, 3, 6],
   [6, 1, 7, 9],
]

console.log('Исходынй массив')
console.log(table)

// 1) координаты 0 - 0
/* 
   x - нужное значение
   [
      [X, X, 0, 0],
      [X, X, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
   ]
*/

// === Вариант 1 ===
// let sum = 0
// for (let row = 0; row < 2; row++) {
//    for (let col = 0; col < 2; col++) {
//       sum += table[row][col]
//    }
// }
// console.log(sum);

// === Вариант 2 === Мудреный способ. Пробовал для практики
// const sum = table.reduce(
//    (sumRow, row, i) => {
//       if (i < 2) {
//          console.log(`sumRow: ${sumRow}, col: ${row}`);
//          return sumRow + row.reduce(
//             (sumCol, col, i) => {
//                if (i < 2) {
//                   console.log(`sumCol: ${sumCol}, col: ${col}`);
//                   return sumCol + col
//                }
//                return sumCol
//             }, 0)
//       } else return sumRow
//    }, 0
// )
// console.log(sum);

// === Вариант 3 === Мудреный способ. Пробовал для практики
// const sum = table.reduce(
//    (sumRow, row, i) =>
//       i >= 2 ? sumRow :
//          sumRow + row.reduce(
//             (sumCol, col, i) => i < 2 ? sumCol + col : sumCol,
//             0),
//    0)
// console.log(sum)

// === Вариант 4 ===
// let sum_1 = 0
// Находим центр таблицы (с округлением в меньшую сторону)
// const middleRow = Math.floor(table.length / 2)
// const middleCol = Math.floor(table[0].length / 2)
// // Находим сумму
// for (let row = 0; row < middleRow; row++) {
//    for (let col = 0; col < middleCol; col++) {
//       sum_1 += table[row][col]
//    }
// }
// console.log(`1) Сумма с координатами 0 - 0: ${sum_1}`);

// === Вариант 5 ===
const getSumInMatrixArea = (matrix, xStart, xEnd, yStart, yEnd, xStep = 1, yStep = 1) => {
   let sum = 0
   for (let x = xStart; x < xEnd; x += xStep) {
      for (let y = yStart; y < yEnd; y += yStep) {
         sum += matrix[x][y]
      }
   }
   return sum
}
// Находим центр таблицы (с округлением в меньшую сторону)
const middleRow = Math.floor(table.length / 2)
const middleCol = Math.floor(table[0].length / 2)
// Получение суммы
const sum_1 = getSumInMatrixArea(table, 0, middleRow, 0, middleCol)
console.log(`1) Сумма с координатами 0 - 0: ${sum_1}`)

// 2) координаты 0 - 1
/* 
   x - нужное значение
   [
      [0, 0, X, X],
      [0, 0, X, X],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
   ]
*/
const sum_2 = getSumInMatrixArea(table, 0, middleRow, middleCol, table.length)
console.log(`2) Сумма с координатами 0 - 0: ${sum_2}`)

// 3) координаты 1 - 0
/* 
   x - нужное значение
   [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [X, X, 0, 0],
      [X, X, 0, 0],
   ]
*/
const sum_3 = getSumInMatrixArea(table, middleRow, table.length, 0, middleCol)
console.log(`3) Сумма с координатами 0 - 0: ${sum_3}`)

// 4) координаты 1 - 1
/* 
   x - нужное значение
   [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, X, X],
      [0, 0, X, X],
   ]
*/
const sum_4 = getSumInMatrixArea(table, middleRow, table.length, middleCol, table.length)
console.log(`4) Сумма с координатами 0 - 0: ${sum_4}`)

// 5) парных рядков (c учетом, что нулевой индекс - 1 ряд, тогда четные ряды с 1 и 3 индексом. Т.е. нечетн. индексы = четные ряды (в человеческом понимании))
/* 
   x - нужное значение
   [
      [0, 0, 0, 0],
      [X, X, X, X],
      [0, 0, 0, 0],
      [X, X, X, X],
   ]
*/
const evenRows = getSumInMatrixArea(table, 1, table.length, 0, table.length, 2)
console.log(`5) Сумма четный рядов (с учетом того, что первый ряд идет под номером 1, а не 0): ${evenRows}`)

// 6) непарных столбцов
/* 
   x - нужное значение
   [
      [X, 0, X, 0],
      [X, 0, X, 0],
      [X, 0, X, 0],
      [X, 0, X, 0],
   ]
*/
const oddColumns = getSumInMatrixArea(table, 0, table.length, 0, table.length, 1, 2)
console.log(`6) Сумма нечетных столбцов (такая же история): ${oddColumns}`)

// 7) в парных рядах - непарных столбцов, у парных - непарные
/*
   x - нужное значение
   [
      [0, 0, 0, 0],
      [X, 0, X, 0],
      [0, 0, 0, 0],
      [X, 0, X, 0],
   ]
*/
const mixSumm = getSumInMatrixArea(table, 1, table.length, 0, table.length, 2, 2)
console.log(`8) Сумма в парных рядах - непарных столбцов, у парных - непарные: ${mixSumm}`)