/*
	Морской бой.
	Компьютер случайно размещает одиночный корабль на поле размером N*M.
	Имея К снарядов пользователь пытается потопить корабль.
*/

// Ввод параметров игры
const N = parseInt(prompt('Введите количество колонок (N) в игровом поле'))
const M = parseInt(prompt('Введите количество рядов (M) в игровом поле'))
const K = parseInt(prompt('Введите количество снарядов (K) в игре'))

// Случайно размещаем корабль на поле
const randomN = 1 + Math.floor(Math.random() * N)
const randomM = 1 + Math.floor(Math.random() * M)

// Стрельба
for (let i = 0; i < K; i++) {
	const shotN = parseInt(prompt('Ваш выстрел.\nВведите номер колонки, в которую будете стрелять (N)'))
	const shotM = parseInt(prompt('Ваш выстрел.\nВведите номер ряда, в который будете стрелять (M)'))

	if (shotN === randomN && shotM === randomM) {
		alert('Победа')
		break
	} else {
		alert(`Промах. Попробуйте еще раз. Помни, что осталось ${K - i - 1}`)
	}
}

