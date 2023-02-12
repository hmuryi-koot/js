// Ввод данных
const year = parseInt(prompt('Введите год', 1901))

// Подсчет данных
const century = Math.ceil(year / 100)

// Вывод данных
document.write(`
<div>Введенный год ${year}</div>
<div>Век ${century} н.э.</div>
`)