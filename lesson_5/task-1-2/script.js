/*
	Создать 10 элементов для ввода цен продуктов
*/

// Ячейка для будущих полей ввода
let inputs = ''

// Цикл от 1 до 10
for (let i = 1; i <= 10; i++) {
	// Пополнение полей ввода
	inputs += `<div>Product #${i} <input type="text"></div>`
}
// Вывод данных 
document.write(inputs)