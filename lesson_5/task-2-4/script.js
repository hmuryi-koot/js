/*
	Используя циклы, вывести на экран 20 символов «о».
*/

for (let i = 1; i < 8; i++) {
	let line = ''
	for (let j = 7; j > 0; j--) {
		line += j <= i ? 'o' : '-'
		console.log(line, 1);
	}
	document.write(`${line}<br>`)
}


/*
		 о
		оо
	  ооо
	 оооо
	ооооо
  оооооо
 ооооооо

*/