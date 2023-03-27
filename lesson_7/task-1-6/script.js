/*
	Создать отдельные функции, которые переводят:
		Сантиметры в дюйма; 1 = 0,393701 дюйм
		Килограммы в фунты; 1 = 2.20462 фунтов
		Километры в миле. 1 = 0,621371 миль
*/

// Ввод данных
const centimeters = parseFloat(prompt('Введите сантиметры'))
const kilograms = parseFloat(prompt('Введите килограммы'))
const kilometers = parseFloat(prompt('Введите километры'))

// Функции
// Сантиметры в дюймы
function centimetersToInches(centimeters) {
	return centimeters * 0.393701
}
// Килограммы в фунты
function kilogramsToPounds(kilograms) {
	return kilograms * 2.20462
}
// Сантиметры в дюймы
function kilometersToMiles(kilometers) {
	return kilometers * 0.393701
}

// Получение данных
const inches = centimetersToInches(centimeters)
const pounds = kilogramsToPounds(kilograms)
const miles = kilometersToMiles(kilometers)

// Вывод данных
document.write(`
<ol style="padding-left:25px;">
	<li>${centimeters} см = ${inches.toFixed(6)} дюйм</li>
	<li>${kilograms} кг = ${pounds.toFixed(6)} фунт</li>
	<li>${kilometers} км = ${miles.toFixed(6)} миль</li>
</ol>
`)