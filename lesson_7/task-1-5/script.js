/*
	Создать функцию, которая для 3 заданных чисел
	находит одновременно несколько результатов:

	количество четных,
	количество положительных,
	количество больше 100.
*/

// Ввод данных
const userNumber_1 = parseFloat(prompt('Введите число 1'))
const userNumber_2 = parseFloat(prompt('Введите число 2'))
const userNumber_3 = parseFloat(prompt('Введите число 3'))

// Функции
// Количество четных
function isEven(number) {
	return number % 2 === 0
}
function getQuantityEven(...numbers) {
	let qty = 0

	for (let i = 0; i < numbers.length; i++) {
		if (isEven(numbers[i])) qty++
	}

	return qty
}
// Количество положительных
// function getPositiveNumbers(...arguments) {
// 	let qty = 0
// 	for (let i = 0; i < arguments.length; i++) {
// 		if (arguments[i] > 0) qty++
// 	}
// 	return qty
// }
function isPositive(number) {
	return number > 0
}
function getPositiveNumbers(...numbers) {
	let qty = 0
	for (let i = 0; i < numbers.length; i++) {
		if (isPositive(numbers[i])) qty++
	}
	return qty
}
// Количество больше 100
function getBigNumbers(...arguments) {
	let qty = 0
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > 100) qty++
	}
	return qty
}

// Получение данных
const quantityEven = getQuantityEven(userNumber_1, userNumber_2, userNumber_3)
const positiveNumbers = getPositiveNumbers(userNumber_1, userNumber_2, userNumber_3)
const bigNumbers = getBigNumbers(userNumber_1, userNumber_2, userNumber_3)

// Вывод данных
document.write(`
<p>Ваши числа: ${userNumber_1}, ${userNumber_2} и ${userNumber_3}</p>
<ol style="padding-left:25px;">
	<li>количество четных - ${quantityEven}</li>
	<li>количество положительных - ${positiveNumbers}</li>
	<li>количество больше 100 - ${bigNumbers}</li>
</ol>
`)