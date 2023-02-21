/*
Компьютер задает число от 1 до 10.
Два пользователя предоставляют свои ответы.
Выигрывает тот, у кого число находится ближе к заданному компьютером числу.
*/

// Число пользователя
const firstUserNumber = parseInt(prompt('Игрок 1.\nВведите число.'))
const secondUserNumber = parseInt(prompt('Игрок 2.\nВведите число.'))

// Случайное число от 1 до 10
const randomNumber = Math.floor(Math.random() * (10)) + 1

// Проверка на победу
const diffFirstUser = Math.abs(randomNumber - firstUserNumber)
const diffSecondtUser = Math.abs(randomNumber - secondUserNumber)

// Вывод сообщения о результате 
let res
if (isNaN(firstUserNumber) || isNaN(secondUserNumber)) res = 'Введены некорректные данные'
else if (diffFirstUser === diffSecondtUser) res = 'Ничья'
else if (diffFirstUser < diffSecondtUser) res = 'Игрок 1 победил!'
else res = 'Игрок 2 победил!'

document.write(`
<p>Случайное число - ${randomNumber}</p>
<p>Число первого игрока - ${firstUserNumber}</p>
<p>Число второго игрока - ${secondUserNumber}</p>
<p>${res}</p>
`)