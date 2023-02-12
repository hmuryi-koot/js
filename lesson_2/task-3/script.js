// Получение дат
const currentDate = new Date();
const desiredtDate = new Date("2010-01-26");

// Получение дня
const currentDay = currentDate.getDate()
const desiredtDay = desiredtDate.getDate()

// Получение месяца
const currentMonth = currentDate.getMonth() + 1
const desiredtMonth = desiredtDate.getMonth() + 1

// Получение года
const currentYear = currentDate.getFullYear()
const desiredtYear = desiredtDate.getFullYear()

// Разница в годах 
const year = currentYear - desiredtYear

document.write(`
<div>Текущая дата: ${currentDay}.${currentMonth}.${currentYear}</div>
<div>Дата рождения: ${desiredtDay}.${desiredtMonth}.${desiredtYear}</div>
<div>Прошло ${year} лет (года).</div>
`)