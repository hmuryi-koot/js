// Сами решайте какие поля нужно защищать и какие корректные значения.
// У всех задача должна быть toString!!!

// Создайте класс TMoney для работы с денежными суммами.
// Сумма должна храниться в виде долларового эквивалента.
// Реализовать методы добавления/изъятия денежной суммы,
// указывая необходимую сумму в гривнах,
// и определение курса доллара, при котором сумма в гривнах увеличится на 100. 
// Курс доллара сохранять в отдельном поле.

class TMoney {
   #exchangeRate = 37
   #balance

   constructor(balance) {
      this.balance = balance
      this.balanceDollar = this.grivnaToDollar(this.#balance)
   }

   // available Funds
   get balance() {
      return this.#balance
   }
   set balance(newValue) {
      if (newValue < 0)
         throw new Error('Некорректное значение')
      this.#balance = newValue
   }
   // DOLLAR TO GRIVNA
   get exchangeRate() {
      return this.#exchangeRate
   }
   set exchangeRate(newValue) {
      if (newValue <= 0)
         throw new Error('Неверное значение')
      this.#exchangeRate = newValue
   }
   // --------
   grivnaToDollar(grn) {
      return grn / this.#exchangeRate
   }
   addFunds(funds) {
      this.balance += funds
   }
   withdrawalFunds(funds) {
      if (funds > this.balance)
         throw new Error('Невозможно изьять средств больше, чем есть на счету')
      this.balance -= funds
   }
   newExchangeRate() {
      return (this.balance + 100) / this.balanceDollar
   }
   toString() {
      return `Средства в наличии: ${this.balance}grn, ${this.balanceDollar.toFixed(2)}$`
   }
}


const a = new TMoney(3700)
document.write(a, '<br>')
a.addFunds(10)
document.write(a, '<br>')

a.withdrawalFunds(50)
document.write(a, '<br>')

document.write(`При наличии баланса в ${a.balance} грн. необходим курс доллара ${a.newExchangeRate()}, чтобы сумма увеличилась на 100 грн.`)