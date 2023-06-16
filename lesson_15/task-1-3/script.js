// Создать объект "Авто".

// Поля(свойства)
// - Маркa
// - Размер бака
// - Количество имеющихся литров
// - Количество мест
// - Количество пассажиров

// Методы (действия)
// - Заправка на указанное количество литров
// - Вывод количества пассажиров
// - Добавление пассажиров
// - Высадка пассажиров

const auto = {
   // - Маркa
   brand: 'bmw',
   // - Размер бака
   tankSize: 50,
   // - Количество имеющихся литров
   litersAvailable: 10,
   // - Количество мест
   numberOfSeats: 5,
   // - Количество пассажиров
   numberOfPassengers: 2,

   // - Заправка на указанное количество литров
   refueling: function (liters) {
      const allLiters = this.litersAvailable + liters
      this.litersAvailable = allLiters > this.tankSize ? this.tankSize : allLiters
   },
   // - Вывод количества пассажиров
   getNumberOfPassengers: function () {
      return this.numberOfPassengers
   },
   // - Добавление пассажиров
   addPassengers: function () {
      if (this.numberOfPassengers < this.numberOfSeats)
         this.numberOfPassengers++
   },
   // - Высадка пассажиров
   disembarkationOfPassengers: function () {
      if (this.numberOfPassengers > 0)
         this.numberOfPassengers--
   },
}

console.log(auto);
console.log(auto.getNumberOfPassengers());
auto.addPassengers()
console.log(auto.getNumberOfPassengers());
auto.disembarkationOfPassengers()
console.log(auto.getNumberOfPassengers());
auto.refueling(600)
console.log(auto.litersAvailable);