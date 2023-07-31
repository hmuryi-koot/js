// Сделать конвертер валют (курсы валют – константы в скрипте)

class CreateInputRow {
   constructor(labelText, value = 0) {
      this.labelText = labelText
      this.value = value
   }
   getInputRow() {
      const label = document.createElement('label')
      label.classList.add('label')

      const span = document.createElement('span')
      span.innerText = this.labelText

      const input = document.createElement('input')
      input.value = this.value
      input.type = 'number'

      label.append(span, input)

      return { label, input }
   }
}
class CreateButton {
   constructor(text, func) {
      this.text = text
      this.func = func
   }
   getButton() {
      const button = document.createElement('button')
      button.type = 'button'
      button.innerText = this.text
      button.addEventListener('click', this.func)
      button.classList.add('btn')

      return button
   }
}

class CurrencyConverter {
   #dollar = 3.046
   #euro = 3.32

   constructor() {
      this.initialPrice = new CreateInputRow('Сумма в рублях').getInputRow()
      this.euroPrice = new CreateInputRow('Сумма в евро').getInputRow()
      this.dollarPrice = new CreateInputRow('Сумма в долларах').getInputRow()

      this.button = new CreateButton('Конвертировать', this.convert.bind(this)).getButton()
   }
   convert() {
      // Получвем рубли
      const rub = parseFloat(this.initialPrice.input.value)
      // Получаем валюту
      const dollar = rub * this.Dollar
      const euro = rub * this.Euro
      // Выводим валюту
      this.dollarPrice.input.value = dollar
      this.euroPrice.input.value = euro
   }
   render(element) {
      element.append(
         this.initialPrice.label,
         this.button,
         this.euroPrice.label,
         this.dollarPrice.label
      )
   }
   // ---
   get Dollar() { return this.#dollar }
   get Euro() { return this.#euro }
}

document.write('<div class="render"></div>')

new CurrencyConverter()
   .render(
      document.querySelector('.render')
   )