// ПЕРЕСМОТРЕТЬ КОД


// Пользователь задает количество оценок и нажимает кнопку «get table». 
// В результате формируется таблица из input, куда пользователь вводит оценки. 
// После этого нажимает кнопку “get sum” и находит среднее значение.

class Rating {
   // ----------------
   // Получение инпута
   get Input() {
      const input = document.createElement('input')
      input.type = 'number'
      return input
   }
   get Hr() {
      return document.createElement('hr')
   }
   get Button() {
      const button = document.createElement('button')
      button.type = 'button'
      button.classList.add('btn')

      return button
   }
   // ----------------
   // Формирование суммы
   setSumm() {
      // 1 ---
      // // Получение всех инпутов
      // const inputs = this.table.querySelectorAll('input')
      // // Сумма
      // let summ = 0
      // // Получение суммы
      // for (const input of inputs) {
      //    summ += +input.value
      // }
      // 2 ---
      const inputs = Array.from(this.table.querySelectorAll('input'))
      const average = inputs.reduce((acc, input) => acc + parseInt(input.value), 0) / inputs.length

      // Вывод
      const div = document.createElement('div')
      div.innerText = `average = ${average.toFixed(2)}`

      this.inner.append(div)
   }
   // Создание таблицы
   getTable() {
      const table = document.createElement('table')
      // Создание ряда
      const tr = document.createElement('tr')

      // Цикл для заполнения
      for (let row = 0; row < columns; row++) {
         // Колонка
         const td = document.createElement('td')
         // Вставка инпута
         td.append(this.Input)
         tr.append(td)
      }
      // Вствака рядов
      table.append(tr)

      return table
   }
   // Формирование таблицы по нажатию 
   setTable() {
      // Получение значения из инпута
      const columns = parseInt(this.startInput.value) ?? 0

      // Очистка вывода
      this.inner.innerHTML = ''

      // Если нет колонок, то прекратить выполнение
      if (!columns || isNaN(columns)) return

      // Получение таблицы
      this.table = this.getTable()
      this.inner.append(this.table)

      // Создание кнопки для подсчета српеднего значения
      const summBtn = this.Button
      summBtn.innerText = 'get summ'
      summBtn.addEventListener('click', this.setSumm.bind(this))

      // Вставка разделительной линии и кнопки
      this.inner.append(
         this.Hr,
         summBtn
      )
   }

   // Рендер стартовых элементов
   render(element) {
      // Оболочка для верхней части
      this.header = document.createElement('div')

      // Создание лейбла
      const label = document.createElement('label')
      label.innerText = 'Price number'
      label.classList.add('label')

      // Инпут
      this.startInput = this.Input

      // Втсавка инпута внутрь лейбоа
      label.append(this.startInput)

      // Кнопка
      const button = this.Button
      button.innerText = 'get table'
      button.addEventListener('click', this.setTable.bind(this))

      // Вставка элементов в верхнюю часть
      this.header.append(
         label,
         button,
      )

      // Оболочка для нижней части
      this.inner = document.createElement('div')

      // Вставка всех элементов внутрь указанного элемента
      element.append(
         this.header,
         this.Hr,
         this.inner
      )
   }
}

const render = document.querySelector('.render')
new Rating().render(render)