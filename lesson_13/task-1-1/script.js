// Пусть x(0)=1, x(i)=x(i-1)+2i, где i=1,2,... . Определить x(10). Решить с использованием рекрсивных и нерекурсивных алгоритмов

const math_r = (i) => i === 0 ? 1 : math_r(i - 1) + 2 * i

// console.log(math_r(3))
console.log(math_r(10))


function math_c(i) {
   let x = 1

   for (let k = 1; k <= i; k++)
      x = x + 2 * k

   return x
}

// console.log(math_r(3))
console.log(math_r(10))