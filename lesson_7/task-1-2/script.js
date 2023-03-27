/*
	Создать функцию, которая по номеру месяца возвращает его имя.
*/

// Ввод номера месяца
const month = parseInt(prompt('Введите номер месяца (1 - 12)'))

// Функция выбора месяца
function getMonthName(monthNumber) {
	switch (monthNumber) {
		case 1: return 'Январь'
		case 2: return 'Февраль'
		case 3: return 'Март'
		case 4: return 'Апрель'
		case 5: return 'Май'
		case 6: return 'Июнь'
		case 7: return 'Июль'
		case 8: return 'Август'
		case 9: return 'Сентябрь'
		case 10: return 'Октябрь'
		case 11: return 'Ноябрь'
		case 12: return 'Декабрь'
		default: return 'Ошибка ввода'
	}
}

// Вывод месяца
alert(getMonthName(month))