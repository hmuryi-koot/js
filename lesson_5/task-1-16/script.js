/*
	Пользователь постепенно вводит прибыль магазина каждый день в течение N недель.
	Найти общую величину прибыли и вывести величину прибыли в течение каждой недели.
*/

// Ввод количества недель
const N = parseInt(prompt('Введите количество недель (N).', 1))
// Общая прибыль
let totalPrice = 0
// Ввод прибыли магазина за все дни 
for (let week = 1; week <= N; week++) {
	// Прибыль в течении недели
	let totalPriceInWeek = 0
	// Подсчет прибыли каждый день в течении недели
	for (let day = 1; day <= 7; day++) {
		totalPriceInWeek += parseInt(prompt(`Введите прибыль за ${day} день ${week} неденли.`))
	}
	// Вывод прибыли в конце недели
	document.write(`<div>За ${week} неделю вы заработали ${totalPriceInWeek} попугаев.</div>`)
	// Подсчет суммарной прибыли за все время
	totalPrice += totalPriceInWeek
}
// Вывод общей прибыли
document.write(`<br> <div>Общая прибыль равна ${totalPrice} попугаев.</div>`)