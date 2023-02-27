/*
	Вывести 3 таблицы (по 3 строки и 3 столбца в каждой) по образцу.
*/

for (let table = 0, value = 1; table < 3; table++) {
	let rows = ''
	for (let row = 0; row < 3; row++) {
		let columns = ''
		for (let column = 0; column < 3; column++, value++) {
			columns += `<td style="padding: 20px;">${value}</td>`
		}
		rows += `<tr>${columns}</tr>`
	}
	document.write(`<table style="margin-bottom:20px; background-color:#e1e1e1; color: #000;">${rows}</table>`)
}