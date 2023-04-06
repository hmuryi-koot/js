/*
	Пользователь вводит количество элементов.
	Создать массив, в котором первая половина заполнена 1-ками, а вторая заполнена 7-ками.
*/

// Ввод количества элементов
const cnt = parseInt(prompt('Введите количество элементов массива'))
const half = Math.round(cnt / 2)
// Создть массив
// arr.fill(value, start, end)
const arr = new Array(cnt).fill(1, 0, half).fill(7, half)

// Вывод данных
// console.log(arr);
document.write(arr)