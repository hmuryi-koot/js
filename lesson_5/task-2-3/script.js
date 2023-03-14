/*
	Используя циклы, вывести на экран 20 символов «о».
*/

for (let i = 0; i < 7; i++) {
	let line = ''
	for (let j = 0; j < i; j++) {
		line += 'o'
	}
	document.write(`${line}<br>`)
}