// Дана информация о прибыли К магазинов в течение недели.Найти :
// общая прибыль каждого массива за неделю
// общая прибыль всех магазинов по дням(общая прибыль всех магазинов за понедельник, за вторник и т.д.)
// общая прибыль за рабочие дни
// общая прибыль за выходные дни
// максимальная прибыль за среду
// сформировать общий список(одномерный массив) со значением, которые больше 200
// отсортировать каждую неделю по росту
// отсортировать недели(строки) по убыванию максимального элемента в этой неделе(строке), то есть при сравнении строк нужно сравнивать максимальные элементы в каждой из этих строк
// упорядочить недели(строки) по убыванию суммы элементов в строке(т.е.при сравнении двух строк нужно найти сумму каждой из строк и сравнивать эти суммы, на основе этих сумм будет понятно, какой из элементов должен идти раньше)

// =========================================================

// Дана информация о прибыли К магазинов в течение недели
/*
   [
   магазин 0 - [пн, вт, ..., вс],
   магазин 1 - [пн, вт, ..., вс],
   ...
   магазин К - [пн, вт, ..., вс]
   ]
*/

// const numberOfStores = parseInt(prompt('Введите количество магазинов:', 5))
const numberOfStores = 5

// Генерация рандомного числа в диапазоне
function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
// Генерация прибыли за неделю для магазина
function getWeeklyProfit(minProfit, maxProfit) {
   let weeklyProfit = []
   for (let day = 0; day < 7; day++) {
      weeklyProfit.push(getRandom(minProfit, maxProfit))
   }
   return weeklyProfit
}
// Генерация списков магазинов с прибылью за каждый день недели
function getStoresProfitList(numberOfStores, minProfit, maxProfit) {
   let storesList = []
   for (let store = 0; store < numberOfStores; store++) {
      storesList.push(getWeeklyProfit(minProfit, maxProfit))
   }
   return storesList
}
// Получение списка прибыли каждого магазина за неделю
const storesProfit = getStoresProfitList(numberOfStores, 0, 10)

console.log('Список прибыли магазинов:')
console.log(storesProfit)

// ======================================================================

// общая прибыль каждого массива за неделю

// === Вариант 1 ===
// const totalProfit = storesProfit.reduce(
//    (arr, store) => [
//       ...arr,
//       store.reduce((sum, dayProfit) => sum + dayProfit)
//    ], []
// )

// === Вариант 2 ===
// const totalProfit = storesProfit.reduce(
//    (arr, store) => {
//       arr.push(store.reduce((sum, dayProfit) => sum + dayProfit))
//       return arr
//    }, []
// )

// === Вариант 3 ===
// let totalProfit = []
// for (const storeProfit of storesProfit) {
//    totalProfit.push(storeProfit.reduce((sum, dayProfit) => sum + dayProfit, 0))
// }

// === Вариант 4 ===
// let totalProfit = []
// for (const storeProfit of storesProfit) {
//    let summ = 0
//    for (const dayProfit of storeProfit) {
//       summ += dayProfit
//    }
//    totalProfit.push(summ)
// }

// === Вариант 5 ===
const totalProfit = storesProfit.map(store => store.reduce((sum, profit) => sum + profit, 0))
console.log(`1) общая прибыль каждого массива за неделю: ${totalProfit}`)

// общая прибыль всех магазинов по дням(общая прибыль всех магазинов за понедельник, за вторник и т.д.)
/* 
   Прохожу по каждому магазину и создаю новый массив с суммой, чтобы не пробегать по всем магазинам по несколько раз
                   i = 0          i = 1          i = 2
   [     
      [1,1,1]  =>  [1, 1 ,1]
      [1,1,1]                 =>  [2, 2 ,2]
      [1,1,1]                                =>  [3, 3 ,3
   ]
*/
let totalProfit_2 = new Array(7).fill(0)
for (const store of storesProfit) {
   for (let day = 0; day < store.length; day++) {
      const profit = store[day]
      totalProfit_2[day] += profit
   }
}
console.log(`2) общая прибыль всех магазинов по дням (0-пн, 1-вт, ..., 6-вс): ${totalProfit_2}`)

// общая прибыль за рабочие дни
const totalPriceForWorkDays = storesProfit.reduce(
   (totalSum, store) =>
      totalSum + store.reduce((sum, day, i) => i < 5 ? sum + day : sum), // 0 не обязателен, т.к. 1 значение - понедельник
   0
)
console.log(`3) общая прибыль за рабочие дни: ${totalPriceForWorkDays}`)

// общая прибыль за выходные дни
// === Вариант 1 ===
// const totalSummForWeekend = storesProfit.reduce(
//    (totalSum, store) =>
//       totalSum + store.reduce((sum, day, i) => i > 4 ? sum + day : sum, 0),
//    0
// )

// === Вариант 2 ===
// const totalSummForWeekend = storesProfit.reduce(
//    (totalSum, store) => {
//       let sum = 0
//       for (let i = 5; i < 7; i++) sum += store[i]
//       return sum + totalSum
//    },
//    0
// )

// === Вариант 3 ===
let totalSummForWeekend = 0
for (const store of storesProfit) {
   for (let i = 5; i < 7; i++) {
      totalSummForWeekend += store[i]
   }
}
console.log(`4) общая прибыль за выходные дни: ${totalSummForWeekend}`)

// максимальная прибыль за среду
const profitInWednesday = storesProfit.reduce(
   (sum, store) => sum > store[2] ? sum : store[2],
   0
)
console.log(`5) максимальная прибыль за среду: ${profitInWednesday}`)

// сформировать общий список(одномерный массив) со значением, которые больше 200 (7 для моего случая)
// === Вариант 1 ====
// let arr_over_7 = []
// for (const store of storesProfit) {
//    for (const dayProfit of store) {
//       if (dayProfit > 7) arr_over_7.push(dayProfit)
//    }
// }

// === Вариант 2 ====
// const arr_over_7 = storesProfit.flat(Infinity).filter(profit => profit > 7)

// === Вариант 3 ====
let arr_over_7 = []
for (const store of storesProfit) {
   if (store.find(dayProfit => dayProfit > 7))
      arr_over_7.push(store.filter(dayProfit => dayProfit > 7))
}
console.log(`6) сформировать общий список(одномерный массив) со значением, которые больше 7: ${arr_over_7}`)

// отсортировать каждую неделю по росту (Отсортировать дни в каждой неделе?) 
// Создаю новый массив, чтобы не менять существующий, хотя по заданию сказано его отсортировать
let copyStoresProfit = JSON.parse(JSON.stringify(storesProfit))
for (const store of copyStoresProfit) {
   store.sort((a, b) => a - b)
}
console.log(`7) отсортировать каждую неделю по росту:`)
console.log(copyStoresProfit);

// отсортировать недели(строки) по убыванию максимального элемента в этой неделе(строке), то есть при сравнении строк нужно сравнивать максимальные элементы в каждой из этих строк
console.log(`8) отсортировать недели(строки) по убыванию максимального элемента в этой неделе(строке):`)
// Создаю новый массив, чтобы не менять существующий, хотя по заданию сказано его отсортировать
copyStoresProfit = JSON.parse(JSON.stringify(storesProfit))
// Массив с максимальными значениями
const maxProfitsList = copyStoresProfit.map(week => Math.max(...week))
console.log(`Новый массив с максимальными значениями из предыдущего массива:`)
console.log(maxProfitsList)

function sortTwoArray(arr_1, arr_2) {
   for (let i = 0; i < arr_1.length; i++) {
      for (let j = arr_1.length - 1; j > i; j--) {
         if (arr_1[i] < arr_1[j]) {
            [arr_1[i], arr_1[j]] = [arr_1[j], arr_1[i]];
            [arr_2[i], arr_2[j]] = [arr_2[j], arr_2[i]];
         }
      }
   }

}
sortTwoArray(maxProfitsList, copyStoresProfit)

console.log('Отсортированные массивы')
console.log(maxProfitsList, copyStoresProfit)

// упорядочить недели(строки) по убыванию суммы элементов в строке(т.е.при сравнении двух строк нужно найти сумму каждой из строк и сравнивать эти суммы, на основе этих сумм будет понятно, какой из элементов должен идти раньше)
// Получение массива из суммы
copyStoresProfit = JSON.parse(JSON.stringify(storesProfit))
const sumList = copyStoresProfit.map(week => week.reduce((sum, profit) => sum + profit))

console.log(`9) упорядочить недели(строки) по убыванию суммы элементов в строке:`)
console.log(`Новый массив с суммой выручки за каждую неделю:`)
console.log(sumList);
sortTwoArray(sumList, copyStoresProfit)
console.log('Отсортированные массивы')
console.log(sumList, copyStoresProfit);


