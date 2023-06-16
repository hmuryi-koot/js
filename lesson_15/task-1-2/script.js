// Создать объект «Тир». В массиве хранятся 1, если в этом квадрате есть заяц и 0 в противном случае.
// Поля(свойства)
// Массив, в котором хранится поле с зайцами
// Методы (действия)
// Метод выстрела (задается позиция выстрела)
// Вывод игрового поля

const shootingRange = {
   // Массив, в котором хранится поле с зайцами
   arr: [0, 1, 0, 0, 0, 0, 0, 0],

   // Метод выстрела (задается позиция выстрела)
   shot: function (position) {
      if (this.arr[position] === 1) {
         alert('Попал!')
         this.arr[position] = 0
      } else
         alert('Промазал!')
   },
   // Вывод игрового поля
   toString: function () {
      return this.arr.join(', ')
   },
   go: function () {
      while (this.arr.includes(1) && confirm('go?')) {
         const position = parseInt(prompt('Введиет номер'))
         this.shot(position)
      }
   }
}


shootingRange.go()
document.write(shootingRange)
