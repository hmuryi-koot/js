/*
	Дана последовательность цен товаров и названий (в отдельных массивах).
	Вывести на экран те, которые может позволить себе пользователь (количество денег задается).
	Пример хранения данных

	let productsPrices = [1000, 20, 31]
	let productsTitles = [‘cheese’, ‘juice’, ‘bread’]
*/

const productsPrices = [1000, 20, 31]
const productsTitles = ['cheese', 'juice', 'bread']

const userMoney = parseFloat(prompt('Введите сумму, которая у вас есть'))

function getProduct(userMoney, productsPrices, productsTitles) {

	const products = []

	for (let i = 0; i < productsPrices.length; i++) {
		const productPrice = productsPrices[i]

		if (userMoney >= productPrice)
			products.push(productsTitles[i])
	}

	return products
}

document.write(`
<p>Вы можете себе позволить ${getProduct(userMoney, productsPrices, productsTitles)}</p>
`)