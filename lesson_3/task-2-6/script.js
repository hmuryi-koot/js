/*
Охота. Заяц находится в левом верхнем углу поля. Поле состоит из двух строчек и двух столбцов.
За один шаг заяц может прыгнуть в любую из свободных ячеек.
Пользователь ставит ловушку, указывая номер строки и столбца ячейки.
Если заяц попадает в ловушку, пользователь выиграл и получил 100 баллов.
Если пользователь поймает зайца во второй попытке, то получает 50 баллов.
*/

// Ввод ячейки ловушки
let trapPositionRow = parseInt(prompt('Введите номер рядка для ловушки (1 - 2)'))
let trapPositionCol = parseInt(prompt('Введите номер колонки для ловушки (1 - 2)'))

// Очки за победу
let points = 100

let massage = 'Победа!'

// Прыжок зайца
// Новые координаты
let randomPositionRow = Math.floor(Math.random() * (2)) + 1
let randomPositionCol = Math.floor(Math.random() * (2)) + 1
// Установка новых координат
let newRabbitPositionRow = Math.max(Math.min(randomPositionRow, 2))
let newRabbitPositionCol = Math.max(Math.min(randomPositionCol, 2))

// Если промах
if (
	newRabbitPositionRow !== trapPositionRow &&
	newRabbitPositionCol !== trapPositionCol
) {
	alert('Промах! Заяц убежал.\nПопробуйте еще раз')

	// Ввод ячейки ловушки
	trapPositionRow = parseInt(prompt('Введите номер рядка для ловушки (1 - 2)'))
	trapPositionCol = parseInt(prompt('Введите номер колонки для ловушки (1 - 2)'))

	// Прыжок зайца
	// Новые координаты
	randomPositionRow = Math.floor(Math.random() * (2)) + 1
	randomPositionCol = Math.floor(Math.random() * (2)) + 1
	// Установка новых координат
	newRabbitPositionRow = Math.max(Math.min(randomPositionRow, 2))
	newRabbitPositionCol = Math.max(Math.min(randomPositionCol, 2))

	// Очки за победу
	points = 50

	// Если промах
	if (
		newRabbitPositionRow !== trapPositionRow &&
		newRabbitPositionCol !== trapPositionCol
	) massage = 'Поражение!'
}

// Вывод сообщения
document.write(massage)