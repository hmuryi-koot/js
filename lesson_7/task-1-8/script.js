/*
	Создать функцию, 
	которая случайным образом выводит на экран одно из 4 изображений 
	(пути к изображениям передаются в функцию)
*/

// Получение рандомного числа в диапазоне
function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Получение пути к картинке
function getSrc(numberImg) {
	switch (numberImg) {
		case 1: return 'путь 1'
		case 2: return 'путь 2'
		case 3: return 'путь 3'
		case 4: return 'путь 4'
	}
}
// Создание картинки
function cerateImg(src) {
	return `<img src="${src}" alt="${src}">`
}

const randomNumber = getRandom(1, 4)
const src = getSrc(randomNumber)
// Вывод картинки
const img = cerateImg(src)
document.write(img)