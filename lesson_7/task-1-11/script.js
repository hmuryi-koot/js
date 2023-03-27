/*
	Даны показания температур (произвольное количество).
	Разработайте функцию, которая позволит найти
	среднее значение для положительных показов температуры.
*/

// Ввод температуры
let temperatureReadings = parseFloat(prompt('Введите показание температуры.\nДля отмены ввода, нажмите "Отмена"'))
let qtyInp = 0, totalTemp = 0
// Если ввели температуру -> суммирую все показания ПОЛОЖИТЕЛЬНОЙ температцры, инкрементирую счетчик
while (!isNaN(temperatureReadings)) {
	if (isPositiveTemperature(temperatureReadings)) {
		totalTemp += totalTemp
		qtyInp++
	}
	temperatureReadings = parseFloat(prompt('Введите показание температуры.\nДля отмены ввода, нажмите "Отмена"'))
}

const averageValue = totalTemp
	? getAverageValue(qtyInp, totalTemp)
	: 0

// Вывод информации
document.write(`${qtyInp} положительных температур вы ввели. Их среднее значение равно ${averageValue}`)

// FUNCTIONS ===============================
function isPositiveTemperature(temperature) {
	return temperature > 0
}
function getAverageValue(qty, number) {
	return number / qty
}