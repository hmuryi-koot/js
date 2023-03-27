/*
	Найти сумму 5 нечетных чисел, находящихся между заданными пользователем числами
*/

// Получение начала и конца диапазона от пользоватенля
const startUserRange = parseInt(prompt('Введите начало диапазона чисел'))
const endUserRange = parseInt(prompt('Введите конец диапазона чисел'))

// Получение начала (минимальное из значений) и конец (максимального из значений) диапазона
let startRange = Math.min(startUserRange, endUserRange)
const endRange = Math.max(startUserRange, endUserRange)

// Установка первого значения нечетным числом? которое было до диапазона.
// if (startRange % 2 === 0) startRange--
startRange += startRange % 2 + 1

// Получение всего диапазона
const range = endRange - startRange

// Результат
let result = 0

// for (let i = startRange, j = 0; i < range && j < 5; i += 2, j++) {
// result += i
// }
for (let i = 0; i < 5; i++) {
	result += i * 2 + startRange
}

document.write(`Вы ввели начало диапазона ${startUserRange} и конец диапазона ${endUserRange}.
Сумма всех нечетных чисел между заданными значениями диапазона равна ${result}`)
