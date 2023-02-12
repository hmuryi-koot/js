// Ввод данных
const x = parseFloat(prompt('Введите перпеменную x', 23.56))

// Подсчет данных
const whole = Math.trunc(x)
const fractional = x % 1

// Вывод данных
document.write(`
<div>Введенное число ${x}</div>
<div>Целая часть ${whole}</div>
<div>Дробная часть ${fractional}</div>
`)