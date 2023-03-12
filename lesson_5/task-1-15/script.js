/*
	Пользователя постепенно вводит показатели температуры в течение года.
	Найти среднюю температуру.
*/

// Температура
let temperature = 0
// Подсчет суммарной температуры за все месяца
for (let month = 1; month <= 12; month++) {
	temperature += parseFloat(prompt(`Введите показатели температуры в ${month} месяце`))
}
// Подсчет средней температуры 
const averageTemperature = temperature / 12
// Вывод данных
document.write(`<mark>${averageTemperature.toFixed(2)}</mark> °C - cредняя температура за 12 месяцев.`)