// Ввод данных 
const inputSeconds = parseInt(prompt('Введите количество секунд', 0))

const ONE_HOUR_IN_SECONDS = 3600
const ONE_MINUTE_IN_SECONDS = 60
const ONE_HOUR_IN_MINUTES = 60

// Перевод
const hours = Math.floor(inputSeconds / ONE_HOUR_IN_SECONDS)
const min = Math.floor(inputSeconds / ONE_MINUTE_IN_SECONDS) - (hours * ONE_HOUR_IN_MINUTES)
const seconds = inputSeconds % ONE_MINUTE_IN_SECONDS

// Вывод данных
document.write(`
<div>Вы ввели ${inputSeconds} сек., что равно ${hours} ч. ${min} мин. ${seconds} сек.</div>
`)