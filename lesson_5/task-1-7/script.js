/*
	Вывести на экран N абзацев (N вводится пользователем)
*/

const numbeOfParagraphs = parseInt(prompt('Введите количество абзацев'))

let text = ''

for (let i = 1; i <= numbeOfParagraphs; i++) {

	text += `<div style="margin-bottom:20px;"><h${i}>Заголовок ${i}</h${i}>`

	for (let j = 0; j < i; j++) {
		text += `<p>Раздел ${i}. Параграф ${j + 1}</p>`
	}

	text += '</div>'
}

document.write(text)