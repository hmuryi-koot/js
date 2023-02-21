/*
Игра в кости. Правила игры:
1) пользователь может бросить кости не более двух раз (пользователь сам решает делать или не делать второй бросок);
2) если выпадает четное число, то количество баллов увеличивается на это число;
3) если выпадает нечетное число, то количество баллов уменьшается на это число;
4) выигрывает тот, у кого количество баллов больше.
*/

// Первый бросок
let randomDiceFirst = Math.floor(Math.random() * (6)) + 1
let randomDiceSecond = Math.floor(Math.random() * (6)) + 1

let diceRollFirstPlayer = randomDiceFirst
let diceRollSecondPlayer = randomDiceSecond

// Вывод данных
document.write(`
<p>Первый бросок</p>
<p>Игрок 1 - ${randomDiceFirst}. Итого ${diceRollFirstPlayer}.</p>
<p>Игрок 2 - ${randomDiceSecond}. Итого ${diceRollSecondPlayer}.</p>
`)
alert(`Первый игрок бросил кубик и выпало ${diceRollFirstPlayer}. \nВторой игрок бросил кубик и выпало ${diceRollSecondPlayer}`)

// Второй бросок
const retryFirstPlayer = prompt('Игрок 1\nЖелаете кинуть кубик еще раз?\т("Да" или "Нет")', 'Да').toUpperCase()
const retrySecoondPlayer = prompt('Игрок 2\nЖелаете кинуть кубик еще раз?\т("Да" или "Нет")', 'Нет').toUpperCase()

randomDiceFirst = Math.floor(Math.random() * (6)) + 1
randomDiceSecond = Math.floor(Math.random() * (6)) + 1

if (retryFirstPlayer === 'ДА') {
	diceRollFirstPlayer = randomDiceFirst % 2 === 0 ?
		diceRollFirstPlayer + randomDiceFirst :
		Math.max(diceRollFirstPlayer - randomDiceFirst, 0)
}
if (retrySecoondPlayer === 'ДА') {
	diceRollSecondPlayer = randomDiceSecond % 2 === 0 ?
		diceRollSecondPlayer + randomDiceSecond :
		Math.max(diceRollSecondPlayer - randomDiceSecond, 0)
}
// Вывод данных
document.write(`
<p>Второй бросок</p>
<p>Игрок 1 - ${randomDiceFirst}. Итого ${diceRollFirstPlayer}.</p>
<p>Игрок 2 - ${randomDiceSecond}. Итого ${diceRollSecondPlayer}.</p>
`)