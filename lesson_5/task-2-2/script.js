/*
	Используя циклы, вывести на экран 20 символов «о».
*/

let list = '<ol style="padding-left:30px">'
for (let i = 0; i < 20; i++) {
	list += '<li>o</li>'
}
list += '</ol>'

document.write(list)