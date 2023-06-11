// Дан массив 30 случайных целых чисел. Подсчитать сколько было обменов при сортировке смешением.

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
// const arr = [5, 3, 4, 2, 1]

const cocktailSort = (arr) => {
   // Счетчик шаков цикла
   let cntSteps = 0
   // Счетчик смен позиций
   let cntChange = 0

   let leftI = 0
   let rightI = arr.length - 1

   while (leftI < rightI) {
      for (let i = leftI; i < rightI; i++) {
         if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            cntChange++
         }
         cntSteps++
      }
      rightI--

      for (let i = rightI; i > leftI; i--) {
         if (arr[i] < arr[i - 1]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            cntChange++
         }
         cntSteps++
      }
      leftI++


   }

   return [cntSteps, cntChange]
}

const [cntSteps, cntChange] = cocktailSort(arr)
console.log(`Количество повторений цикла: ${cntSteps}.\nКоличество обменов переменных при сортировке: ${cntChange}\nМассив:`);
console.log(arr);





