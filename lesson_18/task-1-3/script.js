// Пользователь задает год рождения. Определить количество лет пользователя.

class CalculateYears {
   #currentYear = new Date().getFullYear()

   // Событие подсчета
   calculateYears(e) {
      // const input = e.target
      // ИЛИ
      this.input
      const value = this.input.value
      const fullYear = this.CurrentYear - value

      this.result.innerText = value ? `Вам : ${fullYear} лет` : 'Тут отобразится ваш возраст'
   }
   createElements() {
      // Заголовок
      this.title = document.createElement('h3')
      this.title.classList.add('title')
      this.title.innerText = 'Подсчет количества лет'
      // Инпут
      this.input = document.createElement('input')
      this.input.setAttribute('placeholder', 'Введите год рождения')
      this.input.classList.add('input')
      this.input.addEventListener('input', this.calculateYears.bind(this))
      // Вывод результата
      this.result = document.createElement('div')
      this.calculateYears()
   }
   // Вывод элементов
   render(elementSelector) {
      this.createElements()

      const renderWrapper = document.querySelector(elementSelector)
      renderWrapper.append(
         this.title,
         this.input,
         this.result
      )
   }
   // ---
   get CurrentYear() {
      return this.#currentYear
   }
}


const test = new CalculateYears()
test.render('.render')