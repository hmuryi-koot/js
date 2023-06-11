// Дан массив имен. 
// Используя соответствующую сортировку и бинарный поиск определить, есть ли в массиве имя Olga и под каким индексом.

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

namesList.sort()
console.log(namesList);
const binarySearch = (arr, searchElement) => {
   let start = 0, end = arr.length - 1

   while (start <= end) {
      const middle = Math.floor((end + start) / 2)
      if (arr[middle] === searchElement) return middle
      if (searchElement > arr[middle]) start = middle + 1
      else end = middle - 1
   }

   return -1
}


console.log(binarySearch(namesList, 'Olga'));





















