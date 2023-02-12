// Ввод данных
const price = parseFloat(prompt('Введите плату', 1000))
// Налог
const TAX_PERCENT = 20
// Подсчет данных
const tax = price * TAX_PERCENT / 100
const getPrice = price - tax

// Вывод данных
document.write(`
<div>Начислено ${price}$</div>
<div>Налог ${TAX_PERCENT}%</div>
<div>Получено ${getPrice}$</div>
`)