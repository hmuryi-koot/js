// Разработать функцию, в которую передают объект (день, месяц, год). Определить, какой будет год через N месяцев.

function getYear({ month: m, year: y }, n) {
   return y + Math.trunc((n + m - 1) / 12)
}

const date = {
   day: 1,
   month: 1,
   year: 2000,
}

console.log(getYear(date, 12));



// const date = {
//    day: 1,
//    month: 1,
//    year: 2000,
//    getYear: function (n) { return this.year + Math.trunc((n + this.month - 1) / 12) }
// }

// console.log(date.getYear(12));