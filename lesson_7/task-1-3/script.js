/*
	Создать функцию, которая по номеру дня позволяет выяснить, рабочий ли этот день.
*/

// Ввод номера дня
const dayNumber = parseInt(prompt('Введите номер дня (1 - 7)'))

// Функция проверки дня
function isWorkingDay(dayNumber) {
	return dayNumber <= 5
}
// Подготовка сообщения
const message = isWorkingDay(dayNumber) ? 'Рабочий' : 'Выходной'
// Вывод сообщения
alert(message)


/*
// Функция выбора месяца
function getInformationAboutTheDay(monthNumber) {
	switch (monthNumber) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5: return 'Рабочий'
		case 6:
		case 7: return 'Выходной'
		default: return 'Ошибка ввода'
	}
}

// Вывод месяца
alert(getInformationAboutTheDay(month))
*/