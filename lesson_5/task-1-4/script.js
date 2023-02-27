/*
	Вывести таблицу из 3 строк и 7 столбцов
*/

// Ячейка для рядов
let rows = ''

for (let i = 1; i <= 3; i++) { // Ряды
	// Ячейка для колонок
	let columns = ''
	for (let j = 1; j <= 7; j++) { // Колонки
		// Заполнение колонок
		columns += `<td>${j}</td>`
	}
	// Заполнение рядов
	rows += `<tr>${columns}</tr>`
}

document.write(`<table>${rows}</table>`)