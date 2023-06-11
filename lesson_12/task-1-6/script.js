// Дан массив имен. 
// Используя соответствующую сортировку и бинарный поиск определить, есть ли в массиве имя длиной 5 символов и под каким индексом.

const namesList = [
   'Maxim',
   'Anna',
   'Evgenii',
   'Vitalii',
   'Andrei',
   'Aleksandr',
   'Olga',
   'Yaroslav',
]

namesList.sort((a, b) => a.length - b.length)

console.log(namesList);

const binarySearch = (arr, searchElementLength) => {
   let start = 0, end = arr.length - 1

   while (start <= end) {
      const middle = Math.floor((end + start) / 2)
      if (arr[middle].length === searchElementLength) return middle
      if (searchElementLength > arr[middle].length) start = middle + 1
      else end = middle - 1
   }

   return -1
}

// Проблема в том, что оно находит не первый элемент с указанным условием.
console.log(binarySearch(namesList, 4));





















