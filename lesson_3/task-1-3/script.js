/*
Случайным образом генерируется число от 1 до 5.
Попытайтесь угадать число за 2 попытки.
*/

// Минимальное число
const minRandomNumber = 1
// Максимальное число
const maxRandomNumber = 5
// Рандомное число от мин. до макс.
const randomNumber = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1) + minRandomNumber)

// 1 попытка
let inputValue = parseInt(prompt(`Случайным образом сгенерировано число от ${minRandomNumber} до ${maxRandomNumber}. \nПопытайтесь угадать его`))

if (randomNumber === inputValue) {
	alert(`Вы угадали число ${randomNumber}! Даже с первого раза!`)
} else {
	inputValue = parseInt(prompt(`${inputValue} - это не то число, которое я загадал. Попробуйте еще раз.`))

	if (randomNumber === inputValue) {
		alert(`Вы угадали число ${randomNumber}!`)
	} else {
		alert(`Вы не угадали число. А это число ${randomNumber}!`)
		document.write('Вы не угадали число.')
	}
}

document.write(`Случайное число ${randomNumber}, ваше число ${inputValue}`)