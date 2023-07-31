// Заранее задан в скрипте массив со списком желаний. 
// После загрузки страницы случайным образом выбираются 3 
// и отображаются в отдельных div (их нужно создать и добавить на страницу)

class Wishes {
   #wishesList = [
      '1 желание',
      '2 желание',
      '3 желание',
      '4 желание',
      '5 желание',
      '6 желание',
      '7 желание',
   ]
   constructor(quantityWishes) {
      this.quantityWishes = quantityWishes
      this.reset()
   }
   // ---
   get WishesList() {
      return this.#wishesList
   }
   // ---
   // Получение случайного id
   getRandomId() {
      return Math.floor(Math.random() * (this.wishesList.length - 1))
   }

   // Создание и получение дива с указанным текстом
   getDiv(text) {
      const div = document.createElement('div')
      div.classList.add('item')
      div.innerText = text

      return div
   }
   getWishes() {
      const randomElem = this.wishesList[this.getRandomId()] ?? 'Больше нет желаний'
      this.wishesList = this.wishesList.filter(el => el !== randomElem)

      return randomElem
   }
   // Запуск игры
   play(element) {

      for (let index = 0; index < this.quantityWishes; index++) {
         // получение случайного желания
         const wishes = this.getWishes()
         // Получение дива с желанием
         const divWithWishes = this.getDiv(wishes)
         // Вставление желания
         element.append(divWithWishes)
      }
   }
   // Обновление
   reset() {
      this.wishesList = [...this.WishesList]
   }
}

let render = document.querySelector('.render')

const test = new Wishes(3)
test.play(render)
test.play(render)
test.play(render) 