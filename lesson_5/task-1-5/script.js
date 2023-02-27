/*
	Вывести таблицу.
*/


let rows = ''

for (let row = 0, value = 1; row < 3; row++) { // Ряды
	let columns = ''
	for (let column = 0; column < 3; column++, value++) { // Колонки
		columns += `<td>${value}</td>`
	}
	rows += `<tr>${columns}</tr>`
}

document.write(`<table>${rows}</table>`)