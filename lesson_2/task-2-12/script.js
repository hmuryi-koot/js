// Ввод данных
const coin_2 = parseInt(prompt('Введите количество монет (номиналом 2 копейки)', 5))
const coin_5 = parseInt(prompt('Введите количество монет (номиналом 5 копейки)', 4))
const coin_25 = parseInt(prompt('Введите количество монет (номиналом 25 копейки)', 2))
const coin_50 = parseInt(prompt('Введите количество монет (номиналом 50 копейки)', 1))
// 10 + 20 + 50 + 50 = 1.3

// Подсчет данных
const COIN_IN_HRYVNIA = 100

const allCoin_2 = coin_2 * 2
const allCoin_5 = coin_5 * 5
const allCoin_25 = coin_25 * 25
const allCoin_50 = coin_50 * 50
const allCoin = allCoin_2 + allCoin_5 + allCoin_25 + allCoin_50

const hryvnia = Math.trunc(allCoin / COIN_IN_HRYVNIA)
const century = allCoin % COIN_IN_HRYVNIA

// Вывод данных
document.write(`
<div>Введенное количество монет (номинал 2 коп.) ${coin_2}</div>
<div>Введенное количество монет (номинал 5 коп.) ${coin_5}</div>
<div>Введенное количество монет (номинал 25 коп.) ${coin_25}</div>
<div>Введенное количество монет (номинал 50 коп.) ${coin_50}</div>
<div>Суммарное количество монет ${allCoin}</div>
<div>Гривны: ${hryvnia}, монет: ${century}</div>
`)