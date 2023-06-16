// Поля
// Массив объектов (графических изображений и ссылок на сайты)
// методы
// Метод случайного выбора объекта (графического изображения и ссылки)
// Метод вывода случайного баннера



class Banner {
   constructor() {
      // Массив объектов (графических изображений и ссылок на сайты)
      this.arr = [
         {
            img: 'img1.png',
            url: 'g.com',
         },
         {
            img: 'img2.png',
            url: 'g.com',
         },
         {
            img: 'img3.png',
            url: 'g.com',
         },
      ]
   }

   // Метод случайного выбора объекта (графического изображения и ссылки)
   getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
   }
   getRandomImg() {
      const randimId = this.getRandomNumber(0, this.arr.length - 1)
      return this.arr[randimId]
   }
   // Метод вывода случайного баннера
   // outputBanner() {
   toString() {
      const { img, url } = this.getRandomImg()
      return `<a href="${url}"><img src="${img}"></a>`
   }
}

const banner = new Banner()
document.write(banner)