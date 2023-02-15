/*
С клавиатуры вводится возраст человека. 
Вывести на экран кем он является (ребенок в садике, школьник, студент, работник, пенсионер).
*/

// Ввод возраста
const userAge = parseInt(prompt('Введите возраст ребенка'))

// Возрастные метки 
// const child  
const schoolboy = 6
const student = 17
const worker = 22
const pensioner = 65

// Условия
// if (userAge < 0 || isNaN(userAge)) { // Некорректное число
// 	document.write('Некорректное число')
// } else if (userAge < schoolboy) { // Дет.сад
// 	document.write('ребенок')
// } else if (userAge < student) { // Школьник
// 	document.write('школьник')
// } else if (userAge < worker) { // Cтудент
// 	document.write('студент')
// } else if (userAge < pensioner) { // Работник
// 	document.write('работник')
// } else { // Пенсионер
// 	document.write('пенсионер')
// }


if (userAge < 0 || isNaN(userAge)) { // Некорректное число
	document.write('Некорректное число')
} else {
	// Получение статуса пользователя по возрасту 
	const userStatus = userAge < schoolboy ? 'ребенок' :
		userAge < student ? 'школьник' :
			userAge < worker ? 'студент' :
				userAge < pensioner ? 'работник' :
					'пенсионер'

	// Вывод
	document.write(`Человек в возрасте ${userAge} лет (года) - ${userStatus}.`)
}