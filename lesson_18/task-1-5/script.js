// Отразить таблицу 3*4 со случайными числами (ее нужно динамически создать и вставить на страницу)

class NumberTable {
   constructor(col = 3, row = 4, minNumber = 0, maxNumber = 99) {
      this.col = col
      this.row = row
      this.minNumber = minNumber
      this.maxNumber = maxNumber
   }
   // Получение рандомного числа
   getRandom() {
      return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber
   }
   // Вывод таблицы
   render(element) {
      // Создание таблицы
      const table = document.createElement('table')
      // Создание и вставка всех рядов в таблицу
      for (let row = 0; row < this.row; row++) {
         // Ряд
         const trow = document.createElement('tr')
         // Создание одного ряда (всех колонок в 1 ряду)
         for (let col = 0; col < this.col; col++) {
            const tcol = document.createElement('td')
            // Получение рандомного числа и запись его в ячейку таблицы
            tcol.innerText = this.getRandom()
            // Вставка ячейки (колонки) в ряд
            trow.append(tcol)
         }
         // Вставка ряда в таблицу
         table.append(trow)
      }
      // Вставка таблицы в указанный элемент
      element.append(table)
   }

}

// Создание6 экземпляра класса
const test = new NumberTable()
// Нахождение элемента внутрь которого необходимо поместить таблицу
const render = document.querySelector('.render')
// Рендер
test.render(render)
