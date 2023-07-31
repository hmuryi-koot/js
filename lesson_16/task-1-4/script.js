// Сами решайте какие поля нужно защищать и какие корректные значения.
// У всех задача должна быть toString!!!

// Создать класс TBankomat, моделирующий работу банкомата.
// Класс должен содержать поля хранения количества купюр каждого из номиналов от 5 до 100 бел. руб. 
// Реализовать способы нахождения наибольшей и малой сумм, которые может выдать банкомат, и способ снятия некой суммы.

class TBankomat {

   #denomination_5
   #denomination_10
   #denomination_20
   #denomination_100

   constructor() {
      this.Denomination_5 = 10
      this.Denomination_10 = 5
      this.Denomination_20 = 5
      this.Denomination_100 = 2
   }

   // --- 5
   get Denomination_5() {
      return this.#denomination_5
   }
   set Denomination_5(newCnt) {
      if (newCnt < 0)
         throw new Error('Не может быть меньше нуля')
      this.#denomination_5 = newCnt
   }
   // --- 10
   get Denomination_10() {
      return this.#denomination_10
   }
   set Denomination_10(newCnt) {
      if (newCnt < 0)
         throw new Error('Не может быть меньше нуля')
      this.#denomination_10 = newCnt
   }
   // --- 20
   get Denomination_20() {
      return this.#denomination_20
   }
   set Denomination_20(newCnt) {
      if (newCnt < 0)
         throw new Error('Не может быть меньше нуля')
      this.#denomination_20 = newCnt
   }
   // --- 5
   get Denomination_100() {
      return this.#denomination_100
   }
   set Denomination_100(newCnt) {
      if (newCnt < 0)
         throw new Error('Не может быть меньше нуля')
      this.#denomination_100 = newCnt
   }

   // ================
   getMaxAmount() {
      return this.Denomination_5 * 5 + this.Denomination_10 * 10 + this.Denomination_20 * 20 + this.Denomination_100 * 100
   }
   getMinAmount() {
      if (this.Denomination_5) return 5
      else if (this.Denomination_10) return 10
      else if (this.Denomination_20) return 20
      else if (this.Denomination_100) return 100
      else 0
   }
   withdrawalAmount(price) {
      let total = []

      if (price % 5 !== 0 || this.getMinAmount() > price || this.getMaxAmount() < price)
         throw new Error('Нет такой суммы')

      while (price) {
         const _5 = Math.floor(price / 5)
         const _10 = Math.floor(price / 10)
         const _20 = Math.floor(price / 20)
         const _100 = Math.floor(price / 100)

         if (_100) {
            total.push(`${_100} по 100`)
            price -= _100 * 100
         }
         else if (_20) {
            total.push(`${_20} по 20`)
            price -= _20 * 20
         }
         else if (_10) {
            total.push(`${_10} по 10`)
            price -= _10 * 10
         }
         else if (_5) {
            total.push(`${_5} по 5`)
            price -= _5 * 5
         }
      }

      return total
   }

}


const a = new TBankomat()
console.log(a.getMaxAmount());
console.log(a.getMinAmount());
console.log(a.withdrawalAmount(95));

