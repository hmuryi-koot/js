/*
	<p>Создать отдельные функции, которые для 4 чисел находят:</p>
	<ol style="padding-left:25px;">
		<li>сумму;</li>
		<li>произведение;</li>
		<li>среднее арифметическое;</li>
		<li>минимальное значение.</li>
	</ol>
*/

// Ввод данных
const userNumber_1 = parseFloat(prompt('Введите число 1'))
const userNumber_2 = parseFloat(prompt('Введите число 2'))
const userNumber_3 = parseFloat(prompt('Введите число 3'))
const userNumber_4 = parseFloat(prompt('Введите число 4'))

// Арифметические функции
// Сумма
function getSumm(a, b, c, d) {
	return a + b + c + d
}
// Произведение
function getMultiplication(a, b, c, d) {
	return a * b * c * d
}
// Среднее арифметическое
function getArithmeticMean(a, b, c, d) {
	return (a + b + c + d) / 4
}
// Минимальное значение
function getMin(a, b, c, d) {
	let min = a
	if (min > b) min = b
	if (min > c) min = c
	if (min > d) min = d
	return min
}

const summ = getSumm(userNumber_1, userNumber_2, userNumber_3, userNumber_4)
const multiplication = getMultiplication(userNumber_1, userNumber_2, userNumber_3, userNumber_4)
const arithmeticMean = getArithmeticMean(userNumber_1, userNumber_2, userNumber_3, userNumber_4)
const min = getMin(userNumber_1, userNumber_2, userNumber_3, userNumber_4)

// Вывод данных 
document.write(`
<p>Ваши числа: ${userNumber_1}, ${userNumber_2}, ${userNumber_3} и ${userNumber_4}</p>
<ol style="padding-left:25px;">
	<li>сумму - ${summ}</li>
	<li>произведение - ${multiplication}</li>
	<li>среднее арифметическое - ${arithmeticMean}</li>
	<li>минимальное значение - ${min}</li>
</ol>
`)