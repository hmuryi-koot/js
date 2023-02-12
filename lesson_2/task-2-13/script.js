// Ввод данных
const days = parseInt(prompt('Введите количество дней', 15))

// Подсчет данных
const DAYS_IN_WEEK = 7
const week = Math.floor(days / DAYS_IN_WEEK)

// Вывод данных
document.write(`
<div>Введенное количество дней ${days}</div>
<div>Полных недель: ${week}</div>
`)