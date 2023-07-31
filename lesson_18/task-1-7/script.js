// Путешествие состоит из 3 этапов. 
// На каждом этапе пользователь может выбрать 
// один из видов транспорта (авто, автобус, самолет – выпадающий список), 
// питание (завтрак, обед, ужин – checkbоx) и 
// одного из 3-х гидов (использовать radio buttons). 
// Цены определите сами. Подсчитать общую стоимость.

class Travel {
   constructor(transports, foods, conductors) {
      this.transports = transports
      this.foods = foods
      this.conductors = conductors
   }
   // Транспорт
   // getTransport() {
   static getSelect(infObj) {
      // Создание селекта
      const select = document.createElement('select')
      // Создание опций
      for (const { name, price } of infObj) {
         const option = document.createElement('option')
         option.innerText = name
         option.dataset.price = price
         select.append(option)
      }
      // Вывод
      return select
   }
   // Питание и кондуктор
   // getElectionElements(arrayProperties, typeInput, name = '') {
   static getElectionElements(arrayProperties, typeInput, name = '') {
      // Оболочка
      const wrapper = document.createElement('div')
      wrapper.classList.add('choice')
      // Заполнение оболочки
      for (const { name: nameProp, price } of arrayProperties) {
         wrapper.append(
            Travel.getInputControl(nameProp, typeInput, price, name)
         )
      }
      // Вывод
      return wrapper
   }
   static getInputControl(labelText, type, price, name = '') {
      // Инпут
      const input = document.createElement('input')
      input.type = type
      input.dataset.price = price
      if (name) input.name = name

      // Лейбл
      const label = document.createElement('label')
      label.innerText = labelText
      label.classList.add('label')
      label.append(input)
      // Вывод
      return label
   }
   // Вывод
   render(element) {
      // Транспорт
      const transports = Travel.getSelect(this.transports)
      // Питание
      const foods = Travel.getElectionElements(this.foods, 'checkbox')
      // Гиды
      const conductors = Travel.getElectionElements(this.conductors, 'radio', 'gid-1')

      element.append(transports, foods, conductors)
   }
}

// -----
const transports = [
   {
      name: 'авто',
      price: 2000,
   },
   {
      name: 'автобус',
      price: 1000,
   },
   {
      name: 'самолет',
      price: 4000,
   },
]
const foods = [
   {
      name: 'завтрак',
      price: 10,
   },
   {
      name: 'обед',
      price: 20,
   },
   {
      name: 'ужин',
      price: 15,
   },
]
const conductors = [
   {
      name: 'гид 1',
      price: 100,
   },
   {
      name: 'гид 2',
      price: 200,
   },
   {
      name: 'гид 3',
      price: 300,
   },
]
// ==============
let renderElement = document.querySelector('.render')

const test = new Travel(transports, foods, conductors)
test.render(renderElement)

renderElement.append(
   Travel.getElectionElements(foods, 'checkbox')
)