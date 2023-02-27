/*
	Вывести таблицу с одной строчкой и 7 столбцами.
*/

let columns = ''

for (let index = 1; index <= 7; index++) {
	columns += `<td>${index}</td>`
}

document.write(`<table><tr>${columns}</tr></table>`)