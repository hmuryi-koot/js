// Дан массив 30 случайных целых чисел. Подсчитать сколько было обменов при сортировке включениями.

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

// Самостоятельная проба
const includesSort = (arr) => {
   let cntChange = 0

   for (let i = 1; i < arr.length; i++) {
      let key = arr[i]
      let prevIndex = i - 1

      while (prevIndex >= 0 && arr[prevIndex] > key) {
         arr[prevIndex + 1] = arr[prevIndex]
         prevIndex--
         cntChange++
      }
      arr[prevIndex + 1] = key
   }

   return cntChange
}

const cntChange = includesSort(arr)
console.log(`Количество обменов переменных при сортировке: ${cntChange}\nМассив:`);
console.log(arr);
