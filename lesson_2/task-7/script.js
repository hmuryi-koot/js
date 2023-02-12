// Ввод данных 
// Первый товар
const firstProduct = parseFloat(prompt('Введите количество первого товара', 1))
const firstPrice = parseFloat(prompt('Введите стоимость первого товара', 1))
// Второй товар
const secondProduct = parseFloat(prompt('Введите количество второго товара', 1))
const secondPrice = parseFloat(prompt('Введите стоимость второго товара', 1))
// Третий товар
const thirdProduct = parseFloat(prompt('Введите количество третьего товара', 1))
const thirdPrice = parseFloat(prompt('Введите стоимость третьего товара', 1))

// Подсчет данных
const firstTotalPrice = firstProduct * firstPrice
const secondTotalPrice = secondProduct * secondPrice
const thirdTotalPrice = thirdProduct * thirdPrice
const allTotalPrice = firstTotalPrice + secondTotalPrice + thirdTotalPrice

document.write(`
<article class="check">
	<h4>Магазин "У Максима"</h4>
	<figure class="table-container">
		<table>
			<caption>Список товаров</caption>
			<tbody>
				<tr>
					<th>Товар</th>
					<th>Количество товара</th>
					<th>Стоимость одного товара</th>
					<th>Стоимость всех товаров</th>
				</tr>
				<tr>
					<td>Первый товар</td>
					<td>${firstProduct}</td>
					<td>${firstPrice}</td>
					<td>${firstProduct * firstPrice}</td>
				</tr>
				<tr>
					<td>Второй товар</td>
					<td>${secondProduct}</td>
					<td>${secondPrice}</td>
					<td>${secondProduct * secondPrice}</td>
				</tr>
				<tr>
					<td>Третий товар</td>
					<td>${thirdProduct}</td>
					<td>${thirdPrice}</td>
					<td>${thirdProduct * thirdPrice}</td>
				</tr>
			</tbody>
		</table>
	</figure>
	<div><b>Итого:</b> ${allTotalPrice}</div>
</article>
`)