// Дан массив 30 случайных целых чисел. Подсчитать сколько было обменов при сортировке пузырем.

// ЦИКЛ ДЛЯ J=0 ДО N-1 ШАГ 1
// F=0
// ЦИКЛ ДЛЯ I=0 ДО N-1-J ШАГ 1
//   ЕСЛИ A[I] > A[I+1] ТО ОБМЕН A[I],A[I+1]:F=1
// СЛЕДУЮЩЕЕ I
// ЕСЛИ F=0 ТО ВЫХОД ИЗ ЦИКЛА
// СЛЕДУЮЩЕЕ J

// Получение рандомного числа
const getRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
// Генерация массива
const getArray = (sizeArray, minValue, maxValue) => {
   let arr = []
   for (let i = 0; i < sizeArray; i++) {
      arr.push(getRandom(minValue, maxValue))
   }
   return arr
}

const arr = getArray(30, 1, 100)
// Копия массива для теста
const arr_2 = [...arr], arr_3 = [...arr]

// Пузырьковый метод сортировки (Проба самостоятельно написать код)
const bubbleSort_1 = (arr) => {
   let cntSteps = 0
   let cntChange = 0
   for (let j = 0; j < arr.length; j++) {
      // Если массив отсортирован, то прекратить выполнение функции
      let exit = true
      // Условие для цикла
      const numberOfRepetitions = arr.length - j
      for (let i = 1; i < numberOfRepetitions; i++) {
         if (arr[i - 1] > arr[i]) {
            // Cмена местами значений
            let tmp = arr[i - 1]
            arr[i - 1] = arr[i]
            arr[i] = tmp
            // Если была хоть 1 смена в массиве, то стоит его перепроверить
            exit = false
            cntChange++
         }
         cntSteps++
      }
      // Если не было сортировки за цикл, то цикл отсортирован
      // if (exit) return
      if (exit) break
   }
   // Подсчет статистики
   return [cntSteps, cntChange]
}

// Код с урока
const bubbleSort_2 = (arr) => {
   let change
   let cntSteps = 0
   let cntChange = 0
   do {
      change = false
      for (let i = 1; i < arr.length; i++) {
         if (arr[i - 1] > arr[i]) {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            change = true
            cntChange++
         }
         cntSteps++
      }
   } while (change)
   // Подсчет статистики
   return [cntSteps, cntChange]
}

// Гибрид 1 и второго кода
const bubbleSort_3 = (arr) => {
   // Условие для продолжения сортировки
   let change
   // Количество повторений 1 прохода.
   // После одного прохода по циклу самое большое (маленькое) число становится на свое место.
   // Тем самым нет смысла его перепроверять. Поэтому, после каждого прохождения стоит уменьшать количество итераций в цикле
   let lastValue = arr.length
   // Счетчик шаков цикла
   let cntSteps = 0
   // Счетчик смен позиций
   let cntChange = 0
   do {
      change = false
      for (let i = 1; i < lastValue; i++) {
         if (arr[i - 1] > arr[i]) {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            change = true
            cntChange++
         }
         cntSteps++
      }
      // Постфиксный декремент для уменьшения количества итераций
      lastValue--
   } while (change)
   // Подсчет статистики
   return [cntSteps, cntChange]
}

// Итог: код, который дали на уроке не оптимизирован
const [cntSteps_1, cntChange_1] = bubbleSort_1(arr)
console.log(`Количество повторений цикла: ${cntSteps_1}.\nКоличество обменов переменных при сортировке: ${cntChange_1}\nМассив:`);
console.log(arr);
const [cntSteps_2, cntChange_2] = bubbleSort_2(arr_2)
console.log(`Количество повторений цикла: ${cntSteps_2}.\nКоличество обменов переменных при сортировке: ${cntChange_2}\nМассив:`);
console.log(arr_2);
const [cntSteps_3, cntChange_3] = bubbleSort_3(arr_3)
console.log(`Количество повторений цикла: ${cntSteps_3}.\nКоличество обменов переменных при сортировке: ${cntChange_3}\nМассив:`);
console.log(arr_3);

