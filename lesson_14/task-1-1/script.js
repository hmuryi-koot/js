// Описать массив объектов – сайтов разработанных компанией с такими свойствами
// Свойства
// - название компании на время разработки (название периодически меняют)
// - владелец компании
// - спонсоры (массив спонсоров)
//        * фамилия спонсора
//        * имя спонсора
//        * сумма вложений спонсора
// - год выпуска
// - стоимость сайта

// Найти:
// 1) общая стоимость всех сайтов
// 2) количество сайтов, сделанных между 2000 и 2009 гг.
// 3) количество сайтов, где сумма спонсорских вложений была больше 100000
// 4) создать общий список всех спонсоров (пока могут повторяться, просто собрать все в массив)
// 5) найти год, когда прибыль была самой большой
// 6) упорядочить список по убыванию прибыли
// 7) Создать 2 отдельных списка с копиями объектов, содержащих сайты с стоимостью до 10000 и более 10000

// Описать массив объектов – сайтов разработанных компанией с такими свойствами
const sitesDevelopedByCompany = [
   {
      // название компании на время разработки (название периодически меняют)
      name: 'Company 1',
      // владелец компании
      owner: 'Владелец 1',
      // - спонсоры (массив спонсоров)
      sponsors: [
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 1',
            // имя спонсора
            name: 'Имя спонсора 1',
            // сумма вложений спонсора
            amount: 100000000000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 2',
            // имя спонсора
            name: 'Имя спонсора 2',
            // сумма вложений спонсора
            amount: 2000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 3',
            // имя спонсора
            name: 'Имя спонсора 3',
            // сумма вложений спонсора
            amount: 3000,
         },
      ],
      // год выпуска
      yearIssue: 2000,
      // стоимость сайта
      price: 1000
   },
   {
      // название компании на время разработки (название периодически меняют)
      name: 'Company 2',
      // владелец компании
      owner: 'Владелец 2',
      // - спонсоры (массив спонсоров)
      sponsors: [
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 1',
            // имя спонсора
            name: 'Имя спонсора 1',
            // сумма вложений спонсора
            amount: 1000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 2',
            // имя спонсора
            name: 'Имя спонсора 2',
            // сумма вложений спонсора
            amount: 2000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 3',
            // имя спонсора
            name: 'Имя спонсора 3',
            // сумма вложений спонсора
            amount: 3000,
         },
      ],
      // год выпуска
      yearIssue: 2002,
      // стоимость сайта
      price: 2000
   },
   {
      // название компании на время разработки (название периодически меняют)
      name: 'Company 3',
      // владелец компании
      owner: 'Владелец 3',
      // - спонсоры (массив спонсоров)
      sponsors: [
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 1',
            // имя спонсора
            name: 'Имя спонсора 1',
            // сумма вложений спонсора
            amount: 1000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 2',
            // имя спонсора
            name: 'Имя спонсора 2',
            // сумма вложений спонсора
            amount: 2000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 3',
            // имя спонсора
            name: 'Имя спонсора 3',
            // сумма вложений спонсора
            amount: 3000,
         },
      ],
      // год выпуска
      yearIssue: 2003,
      // стоимость сайта
      price: 3000
   },
   {
      // название компании на время разработки (название периодически меняют)
      name: 'Company 4',
      // владелец компании
      owner: 'Владелец 4',
      // - спонсоры (массив спонсоров)
      sponsors: [
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 1',
            // имя спонсора
            name: 'Имя спонсора 1',
            // сумма вложений спонсора
            amount: 1000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 2',
            // имя спонсора
            name: 'Имя спонсора 2',
            // сумма вложений спонсора
            amount: 2000,
         },
         {
            // фамилия спонсора
            surname: 'Фамилия спонсора 3',
            // имя спонсора
            name: 'Имя спонсора 3',
            // сумма вложений спонсора
            amount: 3000,
         },
      ],
      // год выпуска
      yearIssue: 2004,
      // стоимость сайта
      price: 4000
   },
]

// Найти:
// 1) общая стоимость всех сайтов
// 1) -----
// let totalPrice = 0
// for (const site of sitesDevelopedByCompany) {
//    totalPrice += site.price
// }
// console.log(totalPrice);
// 2) -----
const totalPrice = sitesDevelopedByCompany.reduce((sum, site) => sum + site.price, 0)
console.log(`1) ${totalPrice}`);

// 2) количество сайтов, сделанных между 2000 и 2009 гг.
// 1) -----
// let cnt = 0
// for (const site of sitesDevelopedByCompany) {
//    if (site.yearIssue >= 2000 && site.yearIssue <= 2009) cnt++
// }
// 1) -----
// let cnt = 0
// for (const site of sitesDevelopedByCompany) {
//    cnt = (site.yearIssue >= 2000 && site.yearIssue <= 2009) ? ++cnt : cnt
// }
// 3) ----
const cnt = sitesDevelopedByCompany.reduce((cnt, site) =>
   site.yearIssue >= 2000 && site.yearIssue <= 2009 ? cnt + 1 : cnt
   , 0)

console.log(`2) ${cnt}`);

// 3) количество сайтов, где сумма спонсорских вложений была больше 100000
// 1) ----
// let cnt_3 = 0
// for (const site of sitesDevelopedByCompany) {
//    let totalSum = 0
//    for (const sponsor of site.sponsors) {
//       totalSum += sponsor.amount
//    }
//    if (totalSum > 100000) cnt_3++
// }
// 2) ----
let cnt_3 = 0
for (const site of sitesDevelopedByCompany) {
   const totalSum = site.sponsors.reduce((sum, sponsor) => sum + sponsor.amount, 0)
   if (totalSum > 100000) cnt_3++
}
// 3) ----
// const cnt_3 = sitesDevelopedByCompany.reduce((cnt, site) => {
//    const totalSum = site.sponsors.reduce((sum, sponsor) => sum + sponsor.amount, 0)
//    return totalSum > 100000 ? cnt + 1 : cnt
// }, 0)
console.log(`3) ${cnt_3}`);

// 4) создать общий список всех спонсоров (пока могут повторяться, просто собрать все в массив)
// 1) ----
let sponsors = []
for (const site of sitesDevelopedByCompany) {
   for (const sponsor of site.sponsors) {
      sponsors.push(`${sponsor.surname} ${sponsor.name}`)
   }
}
console.log('4)'); console.log(sponsors);

// 5) найти год, когда прибыль была самой большой
const biggestPrice = sitesDevelopedByCompany.reduce((prevSite, site) => site.price > prevSite.price ? site : price).yearIssue
console.log(`5) ${biggestPrice}`);

// 6) упорядочить список по убыванию прибыли
sitesDevelopedByCompany.sort((a, b) => b.price - a.price)
console.log('6)'); console.log(sitesDevelopedByCompany);

// 7) Создать 2 отдельных списка с копиями объектов, содержащих сайты с стоимостью до 10000 и более 10000
// const before = sitesDevelopedByCompany.filter(site => site.price <= 2000)
// const after = sitesDevelopedByCompany.filter(site => site.price > 2000)
const before = JSON.parse(JSON.stringify(sitesDevelopedByCompany.filter(site => site.price <= 10000)))
const after = JSON.parse(JSON.stringify(sitesDevelopedByCompany.filter(site => site.price > 10000)))
console.log('7)');
console.log(before);
console.log(after);
// sitesDevelopedByCompany[0].price = 0
// console.log(before);
// console.log(after);
