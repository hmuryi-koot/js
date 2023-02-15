/*
С клавиатуры вводится номер дня недели.
Вывести на экран название дня.
*/

// Ввод данных 
const dayOfTheWeekNumber = parseInt(prompt('Введите номер дня недели (1 - 7)'))

document.write('Введенное значение - ')

if (dayOfTheWeekNumber === 7) document.write('вс')
else if (dayOfTheWeekNumber === 6) document.write('сб')
else if (dayOfTheWeekNumber === 5) document.write('пт')
else if (dayOfTheWeekNumber === 4) document.write('чт')
else if (dayOfTheWeekNumber === 3) document.write('ср')
else if (dayOfTheWeekNumber === 2) document.write('вт')
else if (dayOfTheWeekNumber === 1) document.write('пн')
else document.write('неверное значение')
