// + Создать класс Напоминатель. 
// Каждые указанные количества секунд (использовать setInterval) 
// программа напоминает о каком-то событии (это просто текст) 
// и также выводится порядковый номер сколько раз напоминания уже было показано. 

// + Сделать так, чтобы нельзя было сделать одновременно несколько объектов-напоминателей. 

// Методы остановки таймера, метод изменения сообщения без остановки таймера.


class Reminder {

   // Сделать так, чтобы нельзя было сделать одновременно несколько объектов-напоминателей. 
   static check

   #NumberOfMessages = 0

   constructor(message, time) {
      if (Reminder.check)
         return Reminder.check

      this.message = message
      this.time = time

      Reminder.check = this
   }

   // ---
   get NumberOfMessage() {
      return this.#NumberOfMessages
   }
   set NumberOfMessage(newValue) {
      if (newValue < 0)
         throw new Error('Количество не может быть меньше нуля')

      this.#NumberOfMessages = newValue
   }
   // ---

   start() {
      this.timer = setInterval(() => {
         console.log(this.message, `Сообщение было показано ${++this.NumberOfMessage} раз`);
      }, this.time)
   }
   end() {
      clearInterval(this.timer)
      this.NumberOfMessage = 0
   }
   changeMessage(newMessage) {
      this.message = newMessage
   }
}


const a = new Reminder('Тест 1', 1000)
a.start()
const b = new Reminder('Тест b', 1200)

setTimeout(() => b.end(), 3000);

setTimeout(() => b.changeMessage('Новое сообщение'), 2000)

setTimeout(() => a.start(), 4000)