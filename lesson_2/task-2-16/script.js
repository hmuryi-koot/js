// Ввод данных
const month = Math.min(parseInt(prompt('Введите номер месяца', 10)), 12)
const qtyMonths = Math.min(parseInt(prompt('Введите количество месяцев', 10)), 12)

// Подсчет данных
const options = { month: "long" };

const currentDate = new Date()
currentDate.setMonth(month - 1)
const currentMonth = currentDate.getMonth()

const currentMonthString = new Intl.DateTimeFormat('ru-RU', options).format(currentDate)

// Установка нового месяца
currentDate.setMonth(currentMonth + qtyMonths)
// Получение нового месяца
const newMonth = currentDate.getMonth() + 1

const newMonthString = new Intl.DateTimeFormat('ru-RU', options).format(currentDate)

// Вывод данных
document.write(`
<div>Номер месяца, который вы ввели ${month} (${currentMonthString})</div>
<div>Количество месяцев, которое вы ввели ${qtyMonths}</div>
<div>Новый месяц ${newMonth} (${newMonthString})</div>
`)