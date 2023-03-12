/*
	Игровой автомат.
	Случайно выбираем изображение в 3 позициях.
	Выбор каждой позиции выбирается как одно из четырех изображений.
	Вывести эти изображения и сообщить выигрыш пользователя
	(
		три первых изображения 100 грн,
		три вторых – 200,
		три третьих – 500,
		три четвертых изображения – 1000грн
	).
	Используйте циклы и switch (для выбора изображения по номеру).
*/


// 🎃🎁🍾🎪

let option_1 = 0, option_2 = 0, option_3 = 0, option_4 = 0
let emoji = ''
let result = ''

for (let i = 0; i < 3; i++) {
	// Случайное число
	const randomNumber = Math.floor(Math.random() * 4)
	// Подбор результата
	switch (randomNumber) {
		case 0:
			emoji += "🎃"
			option_1++
			break;
		case 1:
			emoji += "🎁"
			option_2++
			break;
		case 2:
			emoji += "🍾"
			option_3++
			break;
		case 3:
			emoji += "🎪"
			option_4++
			break;
	}
}
// Подсчет итоговых очков
switch (3) {
	case option_1:
		result = 100
		break;
	case option_2:
		result = 200
		break;
	case option_3:
		result = 500
		break;
	case option_4:
		result = 1000
		break;

	default: result = 0
		break;
}
// Вывод условий и результатов игры
document.write(`
<ul>
	<li>🎃 - 100 очков.</li>
	<li>🎁 - 200 очков.</li>
	<li>🍾 - 500 очков.</li>
	<li>🎪 - 1000 очков.</li>
</ul>
<div style="font-size:100px;">${emoji}</div>
<div style="font-size:30px;">Ваш выйгры составляет <mark>${result}</mark> очков.</div>
`)
