// Калькулятор

// Создание инпута
class CreateInput {
   constructor(label, type = 'number', value = 0) {
      this.label = label
      this.type = type
      this.value = value
   }
   getElement() {

      const label = document.createElement('label')

      const span = document.createElement('label')
      span.innerText = this.label
      span.style.marginRight = '10px'

      const input = document.createElement('input')
      input.type = this.type
      input.value = this.value

      label.append(span, input)

      return label
   }
}
// Создание кнопки
class CreateButton {
   constructor(text, func) {
      this.text = text
      this.func = func
   }
   getElement() {
      const button = document.createElement('button')
      button.innerText = this.text
      button.type = 'button'
      button.style.cssText = 'padding: 10px 15px; background-color: tomato;'
      button.addEventListener('click', this.func)

      return button
   }
}
// Калькулятор
class Calculator {
   constructor() {
      this.firstLabel = new CreateInput('First number').getElement()
      this.secondLabel = new CreateInput('Second number').getElement()
      this.resultLabel = new CreateInput('Result').getElement()

      this.firstInput = this.firstLabel.querySelector('input')
      this.secondInput = this.secondLabel.querySelector('input')
      this.resInput = this.resultLabel.querySelector('input')

      this.addButton = new CreateButton('Сумма', this.sum.bind(this)).getElement()
      this.subButton = new CreateButton('Вычитание', this.sub.bind(this)).getElement()
      this.multButton = new CreateButton('Умножение', this.mult.bind(this)).getElement()
      this.divButton = new CreateButton('Деление', this.div.bind(this)).getElement()
   }
   // ----
   sum() {
      const res = parseInt(this.firstInput.value) + parseInt(this.secondInput.value)
      this.resInput.value = res
   }
   sub() {
      const res = parseInt(this.firstInput.value) - parseInt(this.secondInput.value)
      this.resInput.value = res
   }
   mult() {
      const res = parseInt(this.firstInput.value) * parseInt(this.secondInput.value)
      this.resInput.value = res
   }
   div() {
      const res = parseInt(this.firstInput.value) / parseInt(this.secondInput.value)
      this.resInput.value = res
   }
   // ----
   getRow(...element) {
      const div = document.createElement('div')
      div.append(...element)
      div.style.marginBottom = '20px'
      return div
   }
   render(element) {
      const buttonsRow = this.getRow(this.addButton, this.subButton, this.multButton, this.divButton)
      buttonsRow.style.display = 'flex'
      buttonsRow.style.gap = '15px'

      element.append(
         this.getRow(this.firstLabel),
         this.getRow(this.secondLabel),
         buttonsRow,
         this.getRow(this.resultLabel),
      )
   }
}

document.write('<div class="render"></div>')
const renderDiv = document.querySelector('.render')

const calc = new Calculator()

calc.render(renderDiv)

// renderDiv.append(firstNumber.getElement())