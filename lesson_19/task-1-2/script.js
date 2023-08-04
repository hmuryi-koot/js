// Дан список спортсменов. 
// Нужно сформировать список тех, кто будет участвовать в соревновании. 
// При этом есть два столбца. 
// В одном отражены все спортсмены, в другом – список избранных. 
// При нажатии на зелёную стрелку спортсмен перемещается в список для соревнований. 
// При нажатии на красную стрелку спортсмен перемещается в общий перечень.

class List {
   constructor(title, initialItems) {
      this.title = title
      this.initialItems = initialItems
   }
   getList() {
      // Создание элементов
      const list = document.createElement('div')
      this.ul = document.createElement('ul')
      const title = document.createElement('h3')

      // Добавление классов
      list.classList.add('list')
      this.ul.classList.add('list__items')
      title.classList.add('list__title')
      // Создание элементов
      for (const itemText of this.initialItems) {
         const item = document.createElement('li')
         const button = document.createElement('button')
         const span = document.createElement('span')

         button.classList.add('item__button')
         item.classList.add('list__item')

         item.classList.add('item')
         span.innerText = itemText

         item.append(span, button)

         this.ul.append(item)
      }

      title.innerText = this.title
      list.append(title, this.ul)

      return list
   }

   addItem(item) {
      this.ul.append(item)
   }
}
class Sort {
   constructor(firstList, secondList) {
      // Создание экземпляров списков
      this.firstList = firstList
      this.secondList = secondList
   }
   moving(e) {
      const target = e.target
      const otherListWrapper = target.closest('.list') !== this.firstList ? this.firstList : this.secondList
      const button = target.closest('.item__button')
      if (!button) return

      const item = button.closest('.list__item')
      const otherList = otherListWrapper.querySelector('.list__items')
      otherList.append(item)
   }
   sListEvent() { }
   render(element) {
      const wrapper = document.createElement('div')
      wrapper.classList.add('wrapper')

      // Добавление событий
      this.firstList.addEventListener('click', this.moving.bind(this))
      this.secondList.addEventListener('click', this.moving.bind(this))
      // Вывод
      wrapper.append(this.firstList, this.secondList)
      element.append(wrapper)
   }
}

const render = document.querySelector('.render')
new Sort(
   new List('Список 1', ['1-1', '1-2']).getList(),
   new List('Список 2', ['2-1', '2-2', '2-3']).getList()
).render(render)