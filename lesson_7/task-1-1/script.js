/*
	Создать функцию, которая по номеру месяца возвращает время года, к которой относится этот месяц.
*/

// Ввод номера месяца
const month = parseInt(prompt('Введите номер месяца (1 - 12)'))

// Функция выбора месяца
function getSeason(monthNumber) {
	switch (monthNumber) {
		case 12:
		case 1:
		case 2: return 'Зима'
		case 3:
		case 4:
		case 5: return 'Весна'
		case 6:
		case 7:
		case 8: return 'Лето'
		case 9:
		case 10:
		case 11: return 'Осень'
		default: return 'Ошибка ввода'
	}
}

// Вывод месяца
alert(getSeason(month))