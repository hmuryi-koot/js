// Разработать класс MultChecker для проверки таблицы умножения
// Поля
// Проверяемое число (например, проверка части таблицы умножения на 7)
// Количество правильных ответов
// Количество неправильных ответов
// Методы
// Генерирование примера (метод случайным образом определяет второе число, первое фиксированное число)
// Проверка правильности указанного ответа
// render – вывод информации о тестировании на экран


/*
function MultChecker(checkNumber) {
   // Проверяемое число (например, проверка части таблицы умножения на 7)
   this.checkNumber = checkNumber
   this.randomNumber
   // Количество правильных ответов
   this.cntCorrect = 0
   // Количество неправильных ответов
   this.cntWrong = 0

   // Генерирование примера (метод случайным образом определяет второе число, первое фиксированное число)
   this.getRandomNumber = function (min = 1, max = 9) {
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
   }
   // Проверка правильности указанного ответа
   this.checkAnswer = function (answer) {
      return answer === this.checkNumber * this.randomNumber
   }
   // render – вывод информации о тестировании на экран
   this.render = function () {
      document.write(`Количество правильных ответов: ${this.cntCorrect} <br>Количество неправильных ответов: ${this.cntWrong}`)
   }

   this.start = function () {
      while (confirm('Играем?')) {
         this.getRandomNumber()
         const answer = parseInt(prompt(`${this.checkNumber} * ${this.randomNumber} = ?`))
         if (this.checkAnswer(answer)) {
            this.cntCorrect++
            alert('Верно!')
         }
         else {
            this.cntWrong++
            alert('Ошибка')
         }
      }
      this.render()
   }
}

const chk = new MultChecker(7)
chk.start()
*/

/*
function MultChecker(checkNumber) {
   // Проверяемое число (например, проверка части таблицы умножения на 7)
   this.checkNumber = checkNumber
   this.randomNumber
   // Количество правильных ответов
   this.cntCorrect = 0
   // Количество неправильных ответов
   this.cntWrong = 0


}
// Генерирование примера (метод случайным образом определяет второе число, первое фиксированное число)
MultChecker.prototype.getRandomNumber = function (min = 1, max = 9) {
   this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
}
// Проверка правильности указанного ответа
MultChecker.prototype.checkAnswer = function (answer) {
   return answer === this.checkNumber * this.randomNumber
}
// render – вывод информации о тестировании на экран
MultChecker.prototype.render = function () {
   document.write(`Количество правильных ответов: ${this.cntCorrect} <br>Количество неправильных ответов: ${this.cntWrong}`)
}

MultChecker.prototype.start = function () {
   while (confirm('Играем?')) {
      this.getRandomNumber()
      const answer = parseInt(prompt(`${this.checkNumber} * ${this.randomNumber} = ?`))
      if (this.checkAnswer(answer)) {
         this.cntCorrect++
         alert('Верно!')
      }
      else {
         this.cntWrong++
         alert('Ошибка')
      }
   }
   this.render()
}


const chk = new MultChecker(7)
chk.start()
*/


class MultChecker {
   constructor(checkNumber) {
      // Проверяемое число (например, проверка части таблицы умножения на 7)
      this.checkNumber = checkNumber
      this.randomNumber
      // Количество правильных ответов
      this.cntCorrect = 0
      // Количество неправильных ответов
      this.cntWrong = 0
   }

   // Генерирование примера (метод случайным образом определяет второе число, первое фиксированное число)
   getRandomNumber(min = 1, max = 9) {
      this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
   }
   // Проверка правильности указанного ответа
   checkAnswer(answer) {
      return answer === this.checkNumber * this.randomNumber
   }
   // render – вывод информации о тестировании на экран
   render() {
      document.write(`Количество правильных ответов: ${this.cntCorrect} <br>Количество неправильных ответов: ${this.cntWrong}`)
   }

   start() {
      while (confirm('Играем?')) {
         this.getRandomNumber()
         const answer = parseInt(prompt(`${this.checkNumber} * ${this.randomNumber} = ?`))
         if (this.checkAnswer(answer)) {
            this.cntCorrect++
            alert('Верно!')
         }
         else {
            this.cntWrong++
            alert('Ошибка')
         }
      }
      this.render()
   }
}

const chk = new MultChecker(7)
chk.start()