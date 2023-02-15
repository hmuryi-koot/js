/* 
С клавиатуры вводятся имена двух детей и количество конфет. 
Вывести не экран имя того ребенка, у которого количество конфет больше, или вывести, что количество одинаковое.
*/

// Ввод данных 
// Имена
const firstChildName = prompt('Введите имя первого ребенка', 'Максим')
const secondChildName = prompt('Введите имя второго ребенка', 'Игорь')
// Кол-во конфет
const firstChildCandys = parseInt(prompt(`Введите количество конфет у первого ребенка`, 10))
const secondChildCandys = parseInt(prompt(`Введите количество конфет у второго ребенка`, 0))

// Вывод
if (firstChildCandys > secondChildCandys)
	document.write(`${firstChildName} имеет больше конфет.`)
else if (firstChildCandys < secondChildCandys)
	document.write(`${secondChildCandys} имеет больше конфет.`)
else
	document.write(`${firstChildName} и ${secondChildName} имеет одинаковое количество конфет.`)