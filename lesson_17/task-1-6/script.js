// Даны два класса 
// 1) MultChecker (класс для проверки таблицы умножения – 
// рандомно генерируемые числа, которые нужно перемножать), 
// 2) AddChecker (класс для проверки сложения – 
// рандомно генерируемые числа в заданном диапазоне, которые нужно добавлять).

// Оба класса посылают результаты тестирования объекта класса Hystory, который сохраняет историю тестирования в массиве в виде объектов
// Пример.
// testsList= [
//     {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//     {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]

// Можно создать отдельный класс TestData, описывающий один такой тест и включающий эти поля.

// Разработать класс TestManager, который используя эти классы с помощью таймера периодически генерирует какие-то N задач 
// (рандомно выбираем, что опрашивать: сложение или умножение) и проводит опрос. 
// Результаты тестирования добавляются в History. 
// Сделать так, чтоб объект такового класса можно было сделать только один. Когда эти N задачи сделаны, вывести всю историю на экран

// Произведение
class MultChecker {
   getRandom() { return Math.floor(Math.random() * 9) + 1 }
   start() {
      const a = this.getRandom()
      const b = this.getRandom()
      const correctAnswer = a * b

      const userAnswer = parseInt(prompt(`Введите результат \n${a}*${b}=?`))

      Hystory.Test = Hystory.getResultString(a, b, '*', userAnswer, correctAnswer)
   }
}
// Сложение
class AddChecker {
   constructor(min, max) {
      this.min = min
      this.max = max
   }
   getRandom() { return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min }
   start() {
      const a = this.getRandom()
      const b = this.getRandom()
      const correctAnswer = a + b

      const userAnswer = parseInt(prompt(`Введите результат \n${a}+${b}=?`))

      Hystory.Test = Hystory.getResultString(a, b, '+', userAnswer, correctAnswer)
   }
}
// История
class Hystory {
   static #Test = []

   static getResultString(firstNum, secondNum, opration, userAnswer, correctAnswer) {
      return {
         firstNum,
         secondNum,
         opration,
         userAnswer,
         correctAnswer
      }
   }

   static set Test(resObj) {
      Hystory.#Test.push(resObj)
   }
   static get Test() {
      return Hystory.#Test
   }
}

// const multChecker = new MultChecker()
// const addChecker = new AddChecker(1, 10)
// multChecker.start(42)
// addChecker.start()
// console.log(Hystory.Test);

class TestData {
   constructor(minVAdd, maxVAdd) {
      this.multChecker = new MultChecker()
      this.addChecker = new AddChecker(minVAdd, maxVAdd)
   }
   start() {
      this.multChecker.start()
      this.addChecker.start()
   }
}

// const test = new TestData(1, 10)
// test.start()

class TestManager {
   #QntAttempts = 0
   constructor(numberAttempts, minVAdd, maxVAdd, time = 100) {
      this.numberAttempts = numberAttempts
      this.time = time
      this.multChecker = new MultChecker()
      this.addChecker = new AddChecker(minVAdd, maxVAdd)
   }
   // ---
   set QntAttempts(value) {
      this.#QntAttempts = value
   }
   get QntAttempts() {
      return this.#QntAttempts
   }
   // ---
   getRandom() {
      return Math.floor(Math.random() * 2)
   }
   start() {
      this.interval = setInterval(() => {
         if (this.getRandom())
            this.multChecker.start()
         else
            this.addChecker.start()

         this.QntAttempts++

         if (this.QntAttempts >= this.numberAttempts) {
            clearInterval(this.interval)
            console.log(Hystory.Test);
         }
      }, this.time)
   }

}

const testManager = new TestManager(2, 2, 10)
testManager.start()