// Ввод данных
const coins = parseInt(prompt('Введите количество монет', 245))

// Подсчет данных
const COIN_IN_HRYVNIA = 100
const hryvnia = Math.trunc(coins / COIN_IN_HRYVNIA)
const century = coins % COIN_IN_HRYVNIA

// Вывод данных
document.write(`
<div>Введенное количество монет ${coins}</div>
<div>Гривны ${hryvnia}</div>
<div>Монеты ${century}</div>
`)