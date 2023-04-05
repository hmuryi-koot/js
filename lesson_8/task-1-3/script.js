/*
	Дан массив имен учащихся. Выяснить, сколько раз встречается имя «Иван».
*/

// Массив имен
const names = ['Иван', 'Петя', 'Иван', 'Юля']
// счетчик
let cnt = 0
// Перебор массива 
for (let i = 0; i < names.length; i++) {
	const name = names[i]

	if (name == 'Иван') cnt++
}
// Вывод
document.write(`${cnt}`)