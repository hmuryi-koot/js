/*
С клавиатуры вводится номер месяца.
Вывести к какой поре года он относится.
*/

// Ввод данных 
const monthNumber = parseInt(prompt('Введите номер дня недели (1 - 12)'))

document.write(`${monthNumber} месяц - `)

if (monthNumber > 12 || monthNumber < 1 || isNaN(monthNumber)) document.write('некорректное значение')
else if (monthNumber === 12 || monthNumber >= 1 && monthNumber <= 2) document.write('зима')
else if (monthNumber <= 5) document.write('весна')
else if (monthNumber <= 8) document.write('лето')
else if (monthNumber <= 11) document.write('осень')