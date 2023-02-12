// Ввод данных 
const sm = parseFloat(prompt('Введите количество см', 0))

// Перевод
const m = sm / 100
const km = m / 1000

// Вывод данных
document.write(`
<div>${sm}см = ${m}м = ${km}км</div>
`)