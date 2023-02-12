// Ввод данных
const min = parseInt(prompt('Введите количество минут', 50))
const sec = parseInt(prompt('Введите количество секунд', 100))

// Подсчет данных
const currentDate = new Date();
const currentSec = currentDate.getSeconds()
const currentMin = currentDate.getMinutes()

// Установка нового времени
currentDate.setMinutes(currentMin + min)
currentDate.setSeconds(currentSec + sec)

// Получение новых значений
const newSec = currentDate.getSeconds()
const newMin = currentDate.getMinutes()

// Вывод данных
document.write(`
<div>Текущие минуты ${currentMin}</div>
<div>Текущие секунды ${currentSec}</div>
==========================================
<div>Введенные минуты ${min}</div>
<div>Введенные секунды ${sec}</div>
==========================================
<div>Новые минуты ${newMin}</div>
<div>Новые секунды ${newSec}</div>
`)