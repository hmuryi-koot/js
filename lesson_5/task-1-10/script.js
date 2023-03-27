/*
	Найти сумму всех нечетных чисел, находящихся между заданными пользователем числами
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
// const range = endRange - startRange

// Результат
let result = 0

// Нахождениен суммы
// for (let i = 2; i < range; i += 2) {
for (let i = startRange; i < endRange; i += 2) {
	// result += startRange + i
	result += i
}

document.write(`Вы ввели начало диапазона ${startUserRange} и конец диапазона ${endUserRange}.
Сумма всех нечетных чисел между заданными значениями диапазона равна ${result}`)