// Ввод данных 
const s = parseInt(prompt('Введите количество секунд', 0))

// Перевод
const min = s / 60
const hour = min / 60

// Вывод данных
document.write(`
<div>${s} сек = ${min.toFixed(2)} мин = ${hour.toFixed(4)} час (часов)</div>
`)