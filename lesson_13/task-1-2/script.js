// Пусть x(0)=x(1)=1, x(i)=x(i-1)+2x(i-2), i=2, 3, ... Определить x(n). Решить с использованием рекрсивных и нерекурсивных алгоритмов

const math_r = (i) => i === 0 || i === 1 ? 1 : math_r(i - 1) + 2 * math_r(i - 2)

console.log(math_r(4))
// console.log(math_r(10))

function math_c(i) {
   let x_1 = 1
   let x_2 = 1
   let x = 0

   for (let k = 2; k <= i; k++) {
      x = x_1 + 2 * x_2
      x_2 = x_1
      x_1 = x
   }

   return x
}

console.log(math_c(4))
// console.log(math_c(10))