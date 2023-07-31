// Сами решайте какие поля нужно защищать и какие корректные значения.
// У всех задача должна быть toString!!!

// Объект "Фирма" (использовать члены-классы)

// поля
// название фирмы;
// дата основания (год, месяц);
// услуги (название услуги, стоимость, срок исполнения);
// адреса филиалов (страна, город, улица, номер дома);

// методы
// + определение количества лет существования фирмы;
// + вывод всех филиалов фирмы в указанном городе;
// +/- вывод на экран услуг, которые могут быть выполнены за указанную сумму денег и указанный срок;

// Дата
class FoundingDate {
   #minYear = 1800
   #month
   #year

   constructor(month, year) {
      this.Month = month
      this.Year = year
   }

   // ---
   get Year() { return this.#year }
   set Year(newYear) {
      if (newYear < this.minYear)
         throw new Error('Неверный год')
      this.#year = newYear
   }
   // ---
   get Month() { return this.#month }
   set Month(newMonth) {
      if (newMonth < 1 || newMonth > 12)
         throw new Error('Неверный месяц')
      this.#month = newMonth
   }
   // ---
   get MinYear() { return this.#minYear }
   // ---
   getNumberYears() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.Year
   }
   toString() {
      return `Дата основания: ${this.Year} г. ${this.Month} месяц.`
   }

}
// Услуги
class Services {
   constructor(title, price, deadline) {
      this.title = title
      this.price = price
      this.deadline = deadline
   }
   isFeasibleService(price, deadline) {
      return this.price <= price && this.deadline <= deadline
   }

}
// Адрес
class Address {
   constructor(country, city, street, houseNumber) {
      this.country = country
      this.city = city
      this.street = street
      this.houseNumber = houseNumber
   }
   branchInTheCity(city) {
      return this.city.toLowerCase() === city.toLowerCase()
   }
}
// Фирма
class Firm {

   constructor(name, { month, year }, services, address) {
      this.name = name
      this.date = new FoundingDate(month, year) // композиция
      this.services = [...services] // агрегация
      this.address = [...address] // агрегация
   }

   getBranchesInCity(city) {
      return this.address.filter(el => el.branchInTheCity(city))
   }
   getServices(price, deadline) {
      return this.services.filter(el => el.isFeasibleService(price, deadline))
   }

}
// =====================
const services = [
   new Services('s-1', 1000, 10),
   new Services('s-2', 2000, 20),
   new Services('s-3', 300, 3),
   new Services('s-4', 4000, 14),
]
const address = [
   new Address('A', 'Aa', 'Aaa', 1),
   new Address('B', 'Bb', 'Bbb', 2),
   new Address('C', 'Cc', 'Ccc', 3),
   new Address('D', 'Dd', 'Ddd', 4),
   new Address('E', 'Ee', 'Eee', 5),
   new Address('A', 'Aa', 'Aaa', 6),
]

const firms = [
   new Firm('Firm 1', { month: 10, year: 1999 }, [services[0], services[1]], [address[0], address[1]]),
   new Firm('Firm 2', { month: 5, year: 2000 }, [services[2], services[3]], [address[2], address[3]]),
   new Firm('Firm 3', { month: 4, year: 2010 }, [services[1], services[3]], [address[4], address[5], address[0]]),
]

for (const firm of firms) {
   console.log(firm.date.getNumberYears());
   console.log(firm.getBranchesInCity('Aa'));
   console.log(firm.getServices(10000, 14));
}