const a = parseFloat(prompt('Введите переменную a', 0))
const b = parseFloat(prompt('Введите переменную b', 0))

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
			<td>${(a + b).toFixed(2)}</td>
			<td>${(a * b).toFixed(2)}</td>
			<td>${(a / b).toFixed(2)}</td>
		</tr>
	</tbody>
</table>
</figure>
`)