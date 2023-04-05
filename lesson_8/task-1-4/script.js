/*
	<p>Дана последовательность номеров автомобилей. Подсчитать количество номеров, которые:</p>
	<ol style="padding-left:20px;">
		<li>начинаются с буквы «А»;</li>
		<li>первая и последняя буквы совпадают;</li>
		<li>состоят из более ниш 5 символов.</li>
	</ol>
*/

// Массив с номерами
const carNumbers = ['A123A', 'A12345B', 'G123G', '123456F']

let firstLetter = 0
let firstAndLastLetter = 0
let longNumber = 0
// Перебор массива
for (let i = 0; i < carNumbers.length; i++) {
	const carNumber = carNumbers[i];

	if (carNumber[0] === 'A') firstLetter++
	if (carNumber[0] === carNumber[carNumber.length - 1]) firstAndLastLetter++
	if (carNumber.length > 5) longNumber++
}

document.write(`
<p>${carNumbers}</p>
<p>1) ${firstLetter}</p>
<p>2) ${firstAndLastLetter}</p>
<p>3) ${longNumber}</p>
`)