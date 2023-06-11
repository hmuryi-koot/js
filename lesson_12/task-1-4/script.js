// Для рассмотренных методов сортировки попытаться вывести этапы сортировки путем вывода соответствующих таблиц по образцу.
// То есть, каждый раз после обмена элементов вывести текущее состояние массива на экран.

const arr_1 = [4, 5, 2, 3, 1]
const arr_2 = [...arr_1], arr_3 = [...arr_1]

// Пузырьки
const bubbleSort = (arr) => {
   console.log(`Старт сортировки методом "Пузырьки".\nИсходный массив: ${arr}`);
   let endIndex = arr.length
   let change
   do {
      change = false
      for (let i = 0; i < endIndex; i++) {
         if (arr[i - 1] > arr[i]) {
            console.log(`Этап смены элементов\n${arr[i - 1]} (индекс ${i - 1}) и ${arr[i]} (индекс ${i})`);
            console.log(arr);
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            change = true
            console.log(arr);
            console.log('================');
         }
      }
      endIndex--
   } while (change)
}

// Смещение cocktailSort
const cocktailSort = (arr) => {
   console.log(`Старт сортировки методом "Смещение".\nИсходный массив: ${arr}`);
   let leftI = 0, rightI = arr.length - 1
   while (leftI < rightI) {
      // Слева направо
      for (let i = leftI; i < rightI; i++) {
         if (arr[i] > arr[i + 1]) {
            console.log(`Идем слева направо. Этап смены элементов\n${arr[i + 1]} (индекс ${i + 1}) и ${arr[i]} (индекс ${i})`);
            console.log(arr);
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            console.log(arr);
            console.log('================');
         }
      }
      rightI--
      // Справо налево
      for (let i = rightI; i > leftI; i--) {
         if (arr[i] < arr[i - 1]) {
            console.log(`Идем справа налево. Этап смены элементов\n${arr[i - 1]} (индекс ${i - 1}) и ${arr[i]} (индекс ${i})`);
            console.log(arr);
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
            console.log(arr);
            console.log('================');
         }
      }
      leftI++
   }
}

// Включение includesSort
const includesSort = (arr) => {
   console.log(`Старт сортировки методом "Включение".\nИсходный массив: ${arr}`);
   for (let i = 1; i < arr.length; i++) {
      let tmp = arr[i]
      let prevIndex = i - 1

      while (prevIndex >= 0 && tmp < arr[prevIndex]) {
         console.log(`Этап смещения элемента\n${arr[prevIndex + 1]} (индекс ${prevIndex + 1}) и ${arr[prevIndex]} (индекс ${prevIndex})`);
         console.log(arr);
         arr[prevIndex + 1] = arr[prevIndex]
         prevIndex--
         console.log(arr);
         console.log('================');
      }
      console.log(`Присваиваем ${prevIndex + 1}-му элементу массива значение ${tmp}`);
      arr[prevIndex + 1] = tmp
   }
}


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
bubbleSort(arr_1)
console.log('Результат:');
console.log(arr_1);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
cocktailSort(arr_2)
console.log('Результат:');
console.log(arr_2);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
includesSort(arr_3)
console.log('Результат:');
console.log(arr_3);