/*
	<p>Дан массив, который сохраняет количество посетителей магазина в течение недели. Вывести на экран:</p>
	<ol style="padding-left:20px;">
		<li>номера дней, в течение которых количество посетителей было менее 20;</li>
		<li>номера дней, когда количество посетителей было минимальным;</li>
		<li>номера дней, когда количество посетителей было максимальным;</li>
		<li>общее количество клиентов в рабочие дни и отдельно общее количество дней в выходные.</li>
	</ol>
*/

// Создание массива с кол-вом посетителей в каждыйц день
const visitors = Array(7)
for (let i = 0; i < visitors.length; i++) {
	randomNumber = getRandom(0, 100)
	visitors[i] = randomNumber
}

// Вывести:
let dayNumber = []
let dayNumberWithMinVisitors = +Infinity
let dayNumberWithMaxVisitors = -Infinity
let numberOfVisitorsWorkingDay = 0
let numberOfVisitorsWeekends = 0

for (let i = 0; i < visitors.length; i++) {
	const visitorsInDay = visitors[i];

	// номера дней, в течение которых количество посетителей было менее 20
	if (visitorsInDay < 20) dayNumber.push(i + 1)

	// номера дней, когда количество посетителей было минимальным
	if (dayNumberWithMinVisitors > visitorsInDay) dayNumberWithMinVisitors = visitorsInDay

	// номера дней, когда количество посетителей было максимальным
	if (dayNumberWithMaxVisitors < visitorsInDay) dayNumberWithMaxVisitors = visitorsInDay

	// общее количество клиентов в рабочие дни и отдельно общее количество дней в выходные
	if (i < 5) numberOfVisitorsWorkingDay += visitorsInDay
	else numberOfVisitorsWeekends += visitorsInDay

	document.write(`
	<p>В <mark>${i + 1} день</mark> пришло <mark>${visitorsInDay} посетителей</mark></p>
	`)
}

document.write(`<br>
<p>Номера дней, в течение которых количество посетителей было менее 20: <mark>${dayNumber}</mark></p>
<p>Номера дней, когда количество посетителей было минимальным: <mark>${dayNumberWithMinVisitors}</mark></p>
<p>Номера дней, когда количество посетителей было максимальным: <mark>${dayNumberWithMaxVisitors}</mark></p>
<p>Общее количество клиентов в рабочие дни и отдельно общее количество дней в выходные. Рабочие: <mark>${numberOfVisitorsWorkingDay}</mark>. Выходные: <mark>${numberOfVisitorsWeekends}</mark></p>
`)



// <<===== HELPERS =====>>
// Рандомное число
function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}