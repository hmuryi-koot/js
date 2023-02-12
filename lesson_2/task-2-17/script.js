// Ввод данных
const letter = prompt('Введите букву в верхнем регистре', 'A').toUpperCase()

// const letter = 'A'

// A - 65
// 23
// x - 88

// Решение
const CAESAR_COEFFICIENT = 3
const unicode = letter.charCodeAt()
const fixUnicode = unicode < 88 ? unicode : unicode - 23 - CAESAR_COEFFICIENT

const newLatter = String.fromCharCode(fixUnicode + CAESAR_COEFFICIENT)

document.write(`
<div>Введенная буква: ${letter}</div>
<div>Зашифрованная буква: ${newLatter}</div>
`)