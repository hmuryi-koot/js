// Тренажер добавления. 
// Каждые 10 секунд пользователю задают случайный пример добавления двух цифр и делается проверка.

const getRandom = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

setInterval(
   () => {
      const a = getRandom(1, 10)
      const b = getRandom(1, 10)
      const c = a + b
      const userResult = parseInt(prompt(`Сколько будет ${a} + ${b}?`))

      if (c === userResult) alert('Верный ответ')
      else alert('Неверный ответ')
   },
   // 10000
   2000
)


