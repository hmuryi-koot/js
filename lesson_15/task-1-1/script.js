// Даны два объекта. 
// Оба содержат массив целых чисел. 
// При этом в одном из них есть функция нахождения суммы, 
// а в другом – функция для нахождения произведения находящихся между заданными минимальным и максимальным значением.
// Использовать оба метода по обеим объектам (использовать call, apply)

const obj1 = {
   a: [1, 2, 3, 4, 5, 6],
   getSumm: function () {
      return this.a.reduce((acc, el) => acc + el)
   },
   // getSumm: () => this.a.reduce((acc, el) => acc + el) // Ошибка, т.к. в этой функции this = window (es6 - undefined)
}

const obj2 = {
   a: [7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
   getProduct: function (min, max) {
      if (this.a.find(el => el > min && el < max))
         return this.a.reduce((acc, el) => el > min && el < max ? acc + el : acc, 1)
      return 0
   },
   // getProduct: (min, max) => this.a.reduce((acc, el) => el > min && el < max ? acc + el : acc, 1) // Ошибка, т.к. в этой функции this = window (es6 - undefined)
}


const sum1 = obj1.getSumm()
// const product1_call = obj2.getProduct.call(obj1, 10, 40)
const product1_call = obj2.getProduct.call(obj1, 1, 4)
const product1_apply = obj2.getProduct.apply(obj1, [1, 4])
console.log('Для первого объекта', obj1.a, `\nСумма ${sum1}\nПроизведение (call): ${product1_call}\nПроизведение (apply): ${product1_apply}`);

const sum2_call = obj1.getSumm.call(obj2)
const sum2_apply = obj1.getSumm.apply(obj2)
const product2 = obj2.getProduct(1, 4)
console.log('Для второго объекта', obj2.a, `\nСумма (call) ${sum2_call}\nСумма (apply) ${sum2_apply}\nПроизведение: ${product2}`);


