// Получение случайного числа
const month = Math.floor(Math.random() * 12) + 1
const day = Math.floor(Math.random() * 7)

document.write(`
<div>Случайный день: ${day}.</div>
<div>Случайный месяц: ${month}.</div>
`)