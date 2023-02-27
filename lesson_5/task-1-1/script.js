/*
 Вывести с использованием циклов маркированный список со случайными числами (1-100).
 Количество случайных чисел вводится пользователем.
*/

// Количество повторений
const numberOfLoopRepetitions = parseInt(prompt('Введите количество пунктов в списке.'))
// Будущие списки меню
let listItems = ''
// Цикл
for (let i = 0; i < numberOfLoopRepetitions; i++) {
	// Получение рандомного числа
	const randomNumber = Math.floor(Math.random() * 99 + 1)
	// Запоминание рандомного числа
	listItems += `<li>${randomNumber}</li>`
}
// Вывод данных
document.write(`<ol style="padding-left:20px;">${listItems}</ol>`)



/*
// Начало для работы цикла
let numberUser = true
// Будущие списки меню
let listItems = ''

// Цикл
while (numberUser) {
	// Ввод данных
	numberUser = parseInt(prompt('Введите число от 1 до 100.\nНичего не вводите для окончания списка.'))
	// Если ввели нужное число, то выводим его
	if (numberUser) listItems += `<li>${numberUser}</li>`
}

// Вывод данных
document.write(`<ol>${listItems}</ol>`)
*/