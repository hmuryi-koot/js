/*
	Даны показания температур (произвольное количество).
	Разработать функцию, которая позволит подсчитать количество
	отрицательных показателей температуры.
*/

// Ввод температуры
let temperatureReadings = parseFloat(prompt('Введите показание температуры.\nДля отмены ввода, нажмите "Отмена"'))
let cntNegativeTemperature = 0
// Если ввели температуру -> проводим вычисления и спрашиваем еще раз
while (!isNaN(temperatureReadings)) {
	if (isNegativeTemperature(temperatureReadings)) cntNegativeTemperature++
	temperatureReadings = parseFloat(prompt('Введите показание температуры.\nДля отмены ввода, нажмите "Отмена"'))
}
// Вывод информации
document.write(`${cntNegativeTemperature} негативных температур вы ввели`)
// FUNCTIONS
function isNegativeTemperature(temperature) {
	return temperature < 0
}