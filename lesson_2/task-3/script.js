// Ввод данных
const yearOfBirth = parseFloat(prompt('Введите ваш год рождения', 2000))

// Получение дат
const currentDate = new Date();
// const desiredtDate = new Date("2010-01-26")

// Получение дня
const currentDay = currentDate.getDate()
// const desiredtDay = desiredtDate.getDate()

// Получение месяца
const currentMonth = currentDate.getMonth() + 1
// const desiredtMonth = desiredtDate.getMonth() + 1

// Получение года
const currentYear = currentDate.getFullYear()
// const desiredtYear = desiredtDate.getFullYear()

// Разница в годах 
const year = currentYear - yearOfBirth

document.write(`
<div>Текущая дата: ${currentDay}.${currentMonth}.${currentYear}</div>
<div>Дата рождения: 01.01.${yearOfBirth}</div>
<div>Вам ${year} лет (года).</div>
`)