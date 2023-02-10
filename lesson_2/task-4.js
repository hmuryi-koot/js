// Ввод переменных
const products = parseInt(prompt('Введите количество товара', 1))
const price = parseFloat(prompt('Введите стоимость одного товара ($)', 100))

// Подсчет общей стоимости
const totalPrice = products * price
const nds = totalPrice * 0.05

// Вывод данных
document.write(`
<div>Количество товара: ${products}</div>
<div>Стоимость товара: ${price} $</div>
<div>Общая стоимость товаров: ${totalPrice.toFixed(2)} $</div>
<div>НДС: ${nds.toFixed(2)} $</div>
`)