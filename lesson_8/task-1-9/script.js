/*
	Морское сражение.
	Пользователь вводит количество ячеек одномерного массива
	и количество одиночных кораблей.

	Компьютер произвольно размещает эти одиночные корабли
	в массиве по один в ячейке
	(
		если в ячейке 0, то ячейка пуста, если
		1 – это значит, что там есть корабль.
	)
	Пользователь вводит номер ячейки, куда стреляет. Игра продолжается до тех пор, пока не будут утоплены все корабли.
*/

// Пользователь вводит количество ячеек одномерного массива
const cells = parseInt(prompt('Введите количество ячеек'))
// количество одиночных кораблей
let ships = parseInt(prompt(`Введите количество кораблей\nНе более ${cells} штук`))

// Игровое поле
const playingField = new Array(cells).fill(0)

// Компьютер произвольно размещает эти одиночные корабли в массиве по один в ячейке
const getRandom = function (min = 0, max = cells - 1) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// Получение ячейки без бомбы
const getCell = function (field) {

	// 1)
	let randoNumber = getRandom()
	while (field[randoNumber] !== 0)
		randoNumber = getRandom()

	// 2)
	// let randoNumber
	// do {
	// 	randoNumber = getRandom()
	// } while (field[randoNumber] !== 0)

	return randoNumber
}

// Выстовляем каждый корабль
for (let i = 0; i < ships; i++) {
	const cell = getCell(playingField)
	playingField[cell] = 1
}

// Провожу выстрели по цели
do {
	const userShot = parseInt(prompt(`Ваш выстрел! Введите номер ячейки (0 - ${cells - 1}) \nОсталось ${ships} кораблей \n${playingField}`))
	// Если попал - обнуляем ячейку
	if (playingField[userShot] === 1) {
		playingField[userShot] = 0
		ships--
	}
} while (ships)