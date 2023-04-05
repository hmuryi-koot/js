/*
	<p>Дана последовательность платежек в течение года. Найти суммарное количество денег за:</p>
	<ol style="padding-left:20px;">
		<li>за весь год;</li>
		<li>в первой половине года;</li>
		<li>во второй половине года;</li>
		<li>за лето;</li>
		<li>за ІІ квартал;</li>
		<li>за четные месяцы (с четными номерами);</li>
		<li>за месяцы, начальные в сезоне (весна, лето, осень, зима).</li>
	</ol>
*/

const payments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let moneyPerYear = 0
let moneyFirstHalf = 0
let moneySecondHalf = 0
let moneySummer = 0
let moneySecondQuarter = 0
let moneyFourMonths = 0
let moneyStartSeason = 0

for (let i = 0; i < payments.length; i++) {
	const payment = payments[i];

	// За год
	moneyPerYear += payment
	// в первой половине года
	if (i < 6) moneyFirstHalf += payment
	// во второй половине года
	else moneySecondHalf += payment
	// за лето (5-7)
	if (i >= 5 && i <= 7) moneySummer += payment
	// за ІІ квартал (0 1 2 3 [ 4 5 6 7 ] 8 9 10 11)
	if (i >= 4 && i <= 7) moneySecondQuarter += payment
	// за четные месяцы (с четными номерами)
	if ((i + 1) % 2 === 0) moneyFourMonths += payment
	// за месяцы, начальные в сезоне (весна, лето, осень, зима) 
	// (1 2 [3] 4 5 [6] 7 8 [9] 10 11 [12])
	if ((i + 1) % 3 === 0) moneyStartSeason += payment
}

document.write(`
<p>Суммы за каждый месяц: ${payments}</p>
<p>1) ${moneyPerYear}</p>
<p>2) ${moneyFirstHalf}</p>
<p>3) ${moneySecondHalf}</p>
<p>4) ${moneySummer}</p>
<p>5) ${moneySecondQuarter}</p>
<p>6) ${moneyFourMonths}</p>
<p>7) ${moneyStartSeason}</p>
`)