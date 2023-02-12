// Ввод данных
const letter = prompt('Введите букву в верхнем регистре', 'A').toUpperCase()

// Решение
const CAESAR_COEFFICIENT = 3
const unicode = letter.charCodeAt()
const newLatter = String.fromCharCode(unicode + CAESAR_COEFFICIENT)

document.write(`
<div>Введенная буква: ${letter}</div>
<div>Зашифрованная буква: ${newLatter}</div>
`)