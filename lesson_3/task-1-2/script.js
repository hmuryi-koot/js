/* 
С клавиатуры вводится стоимость продукта и количество средств.
Если денег не хватает, то отказываем в покупке, иначе, если еще остаются деньги, то предлагаем купить лотерею за 4 грн.
*/

// Ввод данных
const productPrice = parseFloat(prompt(`Введите стоимость продукта`, 10))
const userMoney = parseFloat(prompt(`Введите количество ваших средств`, 20.10))

// Вывод
// Разница в цене товара и средств покупателя
const moneyDifference = userMoney - productPrice
// Цена лотереи
const priceOfLotteries = 4

if (moneyDifference >= 0) { // Если хватает денег на покупку (userMoney >= productPrice)
	document.write(`<p>Товар успешно приобретен. Сдача ${moneyDifference.toFixed(2)} грн.</p>`)

	if (moneyDifference >= priceOfLotteries) { // Если остались средства на лото
		// Количество лотерей, которые может позваолить себе купить. Гулять, так гулять 😉
		const quantityOfLotteries = Math.floor(moneyDifference / priceOfLotteries)
		document.write(`
								<p>Не желаете приобрести лотерею за ${priceOfLotteries} грн.? 
								Вы можете купить ${quantityOfLotteries} шт.</p>
							`)
	}

} else // Если не хватает денег
	document.write(`<p>Вам не хватает ${Math.abs(moneyDifference)} грн.</p>`)