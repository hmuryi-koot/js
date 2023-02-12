// Ввод данных
const mounths = parseInt(prompt('Введите количество месяцев', 28))

// Подсчет данных
const MOUNTH_IN_YEAR = 12
const year = Math.trunc(mounths / MOUNTH_IN_YEAR)
const mounthsAfterCounts = mounths % MOUNTH_IN_YEAR

// Вывод данных
document.write(`
<div>Введенное количество месяце ${mounths}</div>
<div>Лет (года): ${year}, месяца (месяцев) ${mounthsAfterCounts}</div>
`)