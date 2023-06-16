// Разработать класс «Руководитель танцев»
// Поля
// Массив имен ребят
// Массив имен девушек
// Методы
// Метод случайного выбора имени парня
// Метод случайного выбора имени девушки
// Метод вывода пары для танцев
// Метод run, инициирующий через каждые 5 секунд вывода новой пары для танцев

class DanceManager {
   constructor() {
      // Массив имен ребят
      this.boysNames = ['Макс', 'Петя', 'Иван']
      // Массив имен девушек
      this.girlsNames = ['Аня', 'Яна', 'Оля']
   }

   getRandon(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
   }
   getRandomIdInArray(arr) {
      return arr[this.getRandon(0, arr.length - 1)]
   }
   // Метод случайного выбора имени парня
   getBoyName() {
      return this.getRandomIdInArray(this.boysNames)
   }
   // Метод случайного выбора имени девушки
   getGirlName() {
      return this.getRandomIdInArray(this.girlsNames)
   }
   // Метод вывода пары для танцев
   // getCoupleForDancing() {
   toString() {
      return `${this.getGirlName()} и ${this.getBoyName()}`
   }
   // Метод run, инициирующий через каждые 5 секунд вывода новой пары для танцев
   run() {
      this.intervalId = setInterval(() => {
         console.log(this.toString());
         // document.write(this)
      }, 2000)
   }
   stop() {
      clearInterval(this.intervalId)
   }
}

const manager = new DanceManager()
manager.run()

setTimeout(() => {
   manager.stop()
}, 3000);

