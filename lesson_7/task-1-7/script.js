/*
	<p>
		Создать функцию, 
		создающую таблицу с указанным количеством строк и столбцов 
		(таблица заполняется заданным фиксированным сообщением).
	</p>
*/

// Ввод данных
const col = parseInt(prompt('Введите количество колонок таблицы'))
const row = parseInt(prompt('Введите количество строк таблицы'))
const text = prompt('Введите текст рыбу')

// Функции
/*
	Стоит ли тут так расписывать функции? И почему? 
*/
// Созданиен колонок
function creatingColumns(numberOfColumns, text) {
	// Переменная для колонок 1 ряда
	let columns = ''
	// заполнение колононками
	for (let col = 0; col < numberOfColumns; col++) {
		columns += `<td>${text}</td>`
	}
	// Возвращение колонок
	return columns
}
// Создание рядков
function creatingRows(numberOfRows, columns) {
	// Переменная для ряда
	let rows = ''
	// Заполнение рядами
	for (let row = 0; row < numberOfRows; row++) {
		rows += `<tr>${columns}</tr>`
	}
	return rows
}
// Создание таблицы
function creatingTable(numberOfColumns, numberOfRows, text) {
	const columns = creatingColumns(numberOfColumns, text)
	const rows = creatingRows(numberOfRows, columns)

	let table = `<table>
		<tbody>
			${rows}
		</tbody>
	</table>`

	return table
}

// Получение данных
const table = creatingTable(col, row, text)

// Вывод данных
document.write(table)