// Создать класс, 
// позволяющий выполнять следующие операции над массивами: 
// - нахождение количества положительных, 
// - количества отрицательных, 
// - количество вхождений некоторого числа 
// (статические методы)

class MyArray {

   static getCntPositive(...elements) {
      return elements.reduce((acc, el) => el > 0 ? acc + 1 : acc, 0)
   }
   static getCntNegative(...elements) {
      return elements.reduce((acc, el) => el < 0 ? acc + 1 : acc, 0)
   }
   static getCntNumber(searchNumber, ...elements) {
      return elements.reduce((acc, el) => el === searchNumber ? acc + 1 : acc, 0)
   }
}

const arr = [1, 0, -1, 2, -4, 1]

console.log(
   'Позитив',
   MyArray.getCntPositive(...arr),
   MyArray.getCntPositive(1, 2, -3)
);


console.log(
   'Негатив',
   MyArray.getCntNegative(...arr),
   MyArray.getCntNegative(1, 2, -3)
);

console.log(
   'Вхождений единицы',
   MyArray.getCntNumber(1, ...arr),
   MyArray.getCntNumber(1, 1, 2, -3)
);