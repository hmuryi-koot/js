// Ввод данных
const wage = parseFloat(prompt('Введите зп', 1000))
const livingWage = parseInt(prompt('Введите прожиточный минимум. По условию ЗП меньше.', 1200))
// Подсчет соц. пом.
const socialAssistance = Math.max(0, livingWage - wage)

// Вывод данных
document.write(`
<div>Ваша ЗП ${wage}</div>
<div>Ваш прожиточный минимум ${livingWage}</div>
<div>Социальная помощь ${socialAssistance}</div>
`)