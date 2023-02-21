/*
Морской бой.
Вражеский корабль может находиться в одном из квадратов
(количество квадратов вводится с клавиатуры),
которые расположены линейно (один за другим) на реке.

Позиция корабля определяется компьютером случайным образом.
Игра проходит по правилам:
1) если пользователь стреляет в заданный квадрат (т.е. вводится номер квадрата), то корабль утоплен;
2) если корабль находится в соседнем по отношению к квадрату, где находится корабль, то корабль поврежден (об этом сообщаем пользователя).
За два выстрела попытаться потопить корабль.
*/

// Количество клеток речки. Вводится пользователем
const riverSize = parseInt(prompt('Введите количество клеток для реки'))
// Положение лодки
let shipPosition = Math.floor(Math.random() * (riverSize)) + 1

document.write(`
<p>Местонахождение корабля ${shipPosition}</p>
`)


// Выстрел
let shot = parseInt(prompt('Первый выстрел!'))
// Результаты первого выстрела
let diffShot = Math.abs(shipPosition - shot)

let resultMessage
let goNextShot = true

if (diffShot === 1) resultMessage = 'Ранили!'
else if (diffShot === 0) {
	resultMessage = 'УБИЛИ!'
	goNextShot = false
}
else resultMessage = 'Промах.'

if (goNextShot) { // Если первый выстрел не убил
	// Выстрел
	shot = parseInt(prompt(`${resultMessage} Второй выстрел!`))

	// Новая позиция
	const quantityPoints = Math.floor(Math.random() * (3)) - 1

	if (shipPosition + quantityPoints >= 1 && shipPosition + quantityPoints <= riverSize) shipPosition += quantityPoints

	// Результаты второго выстрела
	diffShot = Math.abs(shipPosition - shot)

	if (diffShot === 1) resultMessage = 'Ранили!'
	else if (diffShot === 0) resultMessage = 'УБИЛИ!'
	else resultMessage = 'Промах.'

	document.write(`
		<p>Местонахождение корабля ${shipPosition}</p>
	`)

}
alert(`${resultMessage} Конец игры.`)

