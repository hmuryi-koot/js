// Ввод переменных
const products = prompt('Введите количество товара', 1)
const price = parseFloat(prompt('Введите стоимость одного товара ($)', 100))

const VAT_PERCENT = 0.05

// Подсчет общей стоимости
const totalPrice = parseFloat(products) * price
const vat = totalPrice * VAT_PERCENT

// Вывод данных
document.write(`
<div>Количество товара: ${products}</div>
<div>Стоимость товара: ${price} $</div>
<div>Общая стоимость товаров: ${totalPrice.toFixed(2)} $</div>
<div>НДС: ${vat.toFixed(2)} $ (${VAT_PERCENT * 100}%)</div>
`)