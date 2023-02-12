// Ввод данных
const day = Math.min(parseInt(prompt('Введите номер дня недели (1-7)', 7)), 7)

// Подсчет данных
const currentDate = new Date()
const currentDay = currentDate.getDate()

const newDay = currentDate.setDate(currentDay + day)

const options = { weekday: 'long' };
const dayOfTheWeek = new Intl.DateTimeFormat('ru-RU', options).format(currentDate)

// Вывод данных
document.write(`
<div>Номер дня, который вы ввели ${day}</div>
<div>День недели через ${day} дня (дней) - ${dayOfTheWeek}</div>
`)