// Создать служебный автомобиль (водитель, марка, номер). 
// Создать класс таким образом, чтобы можно было создать только один экземпляр этого класса.


class Auto {

   static check

   constructor(driver, model, number) {
      if (Auto.check)
         return Auto.check

      this.driver = driver
      this.model = model
      this.number = number

      Auto.check = this
   }
}

let a = new Auto('driver 1', 'bmv 1', 1010)
console.log(a);
let b = new Auto('driver 2', 'bmw 2', 2020)
console.log(a, b);

