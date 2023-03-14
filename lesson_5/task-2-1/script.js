/*
	Вивести на екран
	A B C D E
	B C D E F
	C D E F G
	D E F G H
	E F G H 
*/

for (let i = 65; i < 70; i++) {

	let text = ''
	for (let j = 0; j < 5; j++) text += String.fromCharCode(i + j)

	document.write(`<p>${text}</p>`)
}