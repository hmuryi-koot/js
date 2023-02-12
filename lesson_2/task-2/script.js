// Ввод данных
const a = parseFloat(prompt('Введите переменную a', 0))
const b = parseFloat(prompt('Введите переменную b', 0))

// Подсчет
const summa = a + b
const product = a * b
const quotient = a / b

// Вывод данных
document.write(`
<figure>
<table>
	<caption>Урок 2. Задание 1.</caption> 
	<tbody>
 		<tr>
 			<th colspan="2">Переменные</th>
 			<th rowspan="2"><div>Сумма</div><div>a + b</div></th>
 			<th rowspan="2"><div>Произведение</div><div>a * b</div></th>
 			<th rowspan="2"><div>Частное</div><div>a / b</div></th>
 		</tr>
		<tr>
			<th>a</th>
			<th>b</th>
		</tr>
		<tr>
			<td style="background-color:#692b79">${a}</td>
			<td style="background-color:#692b79">${b}</td>
			<td>${summa.toFixed(2)}</td>
			<td>${productOfNumbers.toFixed(2)}</td>
			<td>${quotient.toFixed(2)}</td>
		</tr>
	</tbody>
</table>
</figure>
`)