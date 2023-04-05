/*
	<p>Дана последовательность оценок ученика. Подсчитать количество:</p>
	<ol style="padding-left:20px;">
		<li>двоек;</li>
		<li>количество хороших оценок (хорошо, отлично);</li> (7 - 10)
		<li>количество оценок, которые ниже среднего.</li> (<5)
	</ol>
*/

// Массив с оценками
const evaluations = [2, 5, 3, 6, 4, 6, 8, 9, 1, 10]

let badGrades = 0
let goodGrades = 0
let belowAverage = 0

let total = 0
for (let i = 0; i < evaluations.length; i++) {
	const evaluation = evaluations[i];
	total += evaluation
}

const gpa = total / evaluations.length


for (let i = 0; i < evaluations.length; i++) {
	const evaluation = evaluations[i];

	if (evaluation === 2) badGrades++
	if (evaluation > 6) goodGrades++
	if (evaluation < gpa) belowAverage++
}

document.write(`
<p>Оценки: ${evaluations}. Средний балл: ${gpa}</p>
<p>1) ${badGrades}</p>
<p>2) ${goodGrades}</p>
<p>3) ${belowAverage}</p>
`)