// Сами решайте какие поля нужно защищать и какие корректные значения.
// У всех задача должна быть toString!!!

// Создать класс TDate для работы с датами в формате "день.месяц.год".
// Дата представляется структурой с тремя полями.
// Реализовать методы увеличения/уменьшения даты на определенное количество дней, месяцев или лет.
// Ввод и вывод дать реализовать с помощью метода toString.

class TDate {
   #_day
   #_month
   #_yar
   #_minYear = 1700

   constructor(dateString) {
      const date = dateString.split('.').reverse();

      [this.year, this.month, this.day] = date.map(el => parseInt(el));
   }

   // Получение количество дней в указаном месяце и году
   getDayInMonth(month = this.month, year = this.year) {
      const monthWith_31_days = [1, 3, 5, 7, 8, 10, 12]
      let day

      if (monthWith_31_days.includes(month)) day = 31
      else if (month === 2) {
         if (this.isLeapYear(year)) day = 29
         else day = 28
      } else day = 30

      return day
   }
   // Проверка на високосный год
   isLeapYear(year) {
      return (year % 100 !== 0 || year % 400 === 0) && year % 4 === 0
   }

   incrementDays(days) {
      let allDays = days + this.day
      while (allDays > this.getDayInMonth()) {
         allDays -= this.getDayInMonth()
         // this.month++ // !!! Поменять
         this.incrementMonth(1)
      }
      this.day = allDays
   }
   decrementDays(days) {
      let allDays = this.day - days
      while (allDays < 1) {
         allDays += this.getDayInMonth()
         this.decrementMonths(1)
      }
      this.day = allDays
   }
   incrementMonth(months) {
      this.month = (months - 1) % 12 + 1
      this.year += Math.floor((months - 1) / 12)
   }
   decrementMonths(months) {
      let allMonths = this.month - months
      while (allMonths < 1) {
         this.year--
         allMonths += 12
      }
      this.month = allMonths
   }
   incrementYear(years) { this.year += years }
   decrementYear(years) { this.year -= years }

   // GET
   get day() { return this.#_day }
   get month() { return this.#_month }
   get year() { return this.#_yar }
   get minYear() { return this.#_minYear }
   // SET
   set day(numberDay) {
      if (numberDay <= 0 && numberDay > this.getDayInMonth())
         throw new Error('Invalid day entered')

      this.#_day = numberDay
   }
   set month(numberMonth) {
      if (numberMonth < 0 && numberMonth > 12)
         throw new Error('Invalid month entered')

      this.#_month = numberMonth
   }
   set year(numberYear) {
      if (numberYear < this.minYear)
         throw new Error('Invalid year entered')

      this.#_yar = numberYear
   }
   // ------
   toString() {
      return `${this.day}.${this.month}.${this.year}`
   }
}


const date = new TDate('16.06.2023')

document.write(date, ' Изначальная дата<br>')
date.incrementDays(5)
document.write(date, ' + 5 дней <br>')
date.decrementDays(21)
document.write(date, ' - 21 день<br>')

date.incrementMonth(8)
document.write(date, ' + 8 месяцев <br>')
date.decrementMonths(1)
document.write(date, ' - 1 месяц<br>')
date.decrementMonths(20)
document.write(date, ' - 20 месяцев<br>')

date.incrementYear(20)
document.write(date, ' + 20 лет<br>')
date.decrementYear(20)
document.write(date, ' - 20 лет<br>')