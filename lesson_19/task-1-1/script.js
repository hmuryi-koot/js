/**
 * labels = 'discount' || 'top' || ''
 */


class Card {
   constructor(title, imgSrc, price, labels) {
      this.title = title
      this.imgSrc = imgSrc
      this.price = price
      this.labels = labels
   }
   // Получение лейблов на скидку...
   getLabels() {
      const labels = document.createElement('div')
      labels.classList.add('card__labels')
      for (const { type, text } of this.labels) {
         const label = document.createElement('a')
         label.classList.add('card__label')

         switch (type) {
            case 'discount':
               label.classList.add('card__label_discount')
               label.href = 'discountUrl'
               break;

            case 'top':
               label.classList.add('card__label_top')
               label.href = 'topUrl'
               break;
         }

         label.innerText = text
         labels.append(label)
      }

      return labels
   }
   // Событие
   clickCard(e) {
      const card = e.target.closest('.card')
      if (!card) return

      card.classList.toggle('card--selected')
   }
   // Получение краточки
   getCard() {
      // Создание элементов
      const card = document.createElement('article')
      const title = document.createElement('a')
      const labels = this.getLabels()
      const picture = document.createElement('div')
      const img = document.createElement('img')
      const price = document.createElement('div')
      // Добавление классов
      card.classList.add('card')
      title.classList.add('card__title')
      picture.classList.add('card__picture')
      img.classList.add('card__img')
      price.classList.add('card__price')
      // Наполнение элементов информацией
      title.innerText = this.title
      title.href = '#'
      price.innerText = this.price
      img.src = this.imgSrc
      // Добавление события клик на краточку
      card.addEventListener('click', this.clickCard.bind(this))
      // Вставка элементов
      picture.append(img)
      card.append(
         labels,
         picture,
         title,
         price
      )

      return card
   }
}


const render = document.querySelector('.render')
const card_1 = new Card(
   'Ноутбук ...',
   '01.jpg',
   '1000$',
   [
      { type: 'discount', text: 'Акция' },
      { type: 'top', text: 'ТОП ПРОДАЖ' }
   ]
)
const card_2 = new Card(
   'Ноутбук 2 ...',
   '01.jpg',
   '2000$',
   [
      { type: 'discount', text: 'Акция' }
   ]
)
render.append(card_1.getCard(), card_2.getCard(), card_1.getCard(), card_2.getCard(), card_1.getCard(), card_2.getCard())