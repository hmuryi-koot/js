// Личная библиотека. 

// Картотека домашней библиотеки: 

// данные книги 
//+    - авторы 
//+       - пиб, 
//+       - год рождения, 
//+    - краткое описание, 
//+    - название книги, 
//+    - жанр, 
//+    - издательство 
//+       - название, 
//+       - регистрационный номер, 
//+       - год задвижения. 

// Реализовать 
//+ - разделы библиотеки (специальная литература, хобби, домашнее хозяйство и т.д.) 
//? - происхождение книги 
// - наличие в настоящее время. 

// Организовать 
//+    - добавление книг
//+    - извлечение книг и 
//+    - выбор книг по названию, 
//+                по ФИО автора, 
//+                по издательству.

const books = [
   {
      author: {
         fullName: 'Волчкова А.А.', yearOfBirth: 1999,
      },
      description: 'Описание',
      title: 'Четвертый этаж',
      genre: 'Роман',
      publishingHouse: {
         name: 'AABC', registrationNumber: 111, yearOfFoundation: 1999
      }
   },
   {
      author: {
         fullName: 'Кинг С.', yearOfBirth: 1800,
      },
      description: 'Описание',
      title: 'Сияние',
      genre: 'Ужасы',
      publishingHouse: {
         name: 'AABC', registrationNumber: 111, yearOfFoundation: 1999
      }
   },
   {
      author: {
         fullName: 'Кинг С.', yearOfBirth: 1800,
      },
      description: 'Описание',
      title: 'It',
      genre: 'Еще что-то',
      publishingHouse: {
         name: 'Вук', registrationNumber: 123, yearOfFoundation: 1000
      }
   },
]

class Author {

   #FullName
   #YearOfBirth

   constructor({ fullName, yearOfBirth }) {
      this.FullName = fullName
      this.YearOfBirth = yearOfBirth
   }

   // --- get
   get FullName() {
      return this.#FullName
   }
   get YearOfBirth() {
      return this.#YearOfBirth
   }
   // --- set
   set FullName(newV) {
      if (newV.length <= 0) throw new Error('Неверное ФИО')
      this.#FullName = newV
   }
   set YearOfBirth(newV) {
      if (typeof newV !== 'number') throw new Error('Неверное год. Ожидалось число')
      this.#YearOfBirth = newV
   }
}
class PublishingHouse {
   #Name
   #RegistrationNumber
   #YearOfFoundation

   constructor({ name, registrationNumber, yearOfFoundation }) {
      this.Name = name
      this.RegistrationNumber = registrationNumber
      this.YearOfFoundation = yearOfFoundation
   }

   // ---
   get Name() {
      return this.#Name
   }
   get RegistrationNumber() {
      return this.#RegistrationNumber
   }
   get YearOfFoundation() {
      return this.#YearOfFoundation
   }
   // ---
   set Name(newV) {
      if (newV.length <= 0) throw new Error('Неверное имя')
      this.#Name = newV
   }
   set RegistrationNumber(newV) {
      if (newV === 0) throw new Error('Неверное регистрайионный номер')
      this.#RegistrationNumber = newV
   }
   set YearOfFoundation(newV) {
      if (typeof newV !== 'number') throw new Error('Неверное год. Ожидалось число')
      this.#YearOfFoundation = newV
   }
}
class Book {
   constructor({ author, description, title, genre, publishingHouse }) {
      this.author = new Author(author)
      this.description = description
      this.title = title
      this.genre = genre
      this.publishingHouse = new PublishingHouse(publishingHouse)
   }
}
class Library {
   #bookList = []

   constructor(userBooks = []) {

      this.addBook(...userBooks)
   }

   // Добавлениен книги
   addBook(...newBook) {
      const book = newBook.map(book => new Book(book))
      this.BookList.push(...book)
   }
   // Удаление книгни
   removeBook(bookTitle) {
      this.BookList = this.BookList.filter(({ title }) => title !== bookTitle)
   }
   // Получение списка книг по названию
   getBooksByTitle(bookTitle) {
      return this.BookList.filter(({ title }) => title === bookTitle)
   }
   // Получение списка книг по ФИО автора
   getBooksByAuthor(fullName) {
      return this.BookList.filter(({ author }) => author.FullName === fullName)
   }
   // Получение списка книг по издательству
   getBooksByPublishingHouse(name) {
      return this.BookList.filter(({ publishingHouse }) => publishingHouse.Name === name)
   }
   // Получение списка жанров
   getGenreList() {
      return this.BookList.reduce((genreList, { genre }) => {
         if (!genreList.includes(genre)) genreList.push(genre)
         return genreList
      }, [])
   }
   // Получение списка книг по жанрам
   getBooksByGenre(genre) {
      return this.BookList.filter(book => book.genre === genre)
   }
   // Наличие в настоящее время
   availabilityOfABook(bookTitle) {
      return this.BookList.some(({ title }) => title === bookTitle)
   }
   // ---
   set BookList(newBookList) {
      if (!Array.isArray(newBookList))
         throw new Error('Ожидался массив')

      this.#bookList = newBookList
   }
   get BookList() {
      return this.#bookList
   }
}


// console.log(Library.bookList);
const userLib_1 = new Library(books)

// Добавление книги
userLib_1.addBook(
   {
      author: {
         fullName: 'Волчкова А.А.', yearOfBirth: 1999,
      },
      description: 'Описание',
      title: 'Четвертый этаж 2',
      genre: 'Роман',
      publishingHouse: {
         name: 'AABC', registrationNumber: 111, yearOfFoundation: 1999
      }
   }
)
// Добавление книги
userLib_1.addBook(
   {
      author: {
         fullName: 'eee А.А.', yearOfBirth: 1999,
      },
      description: 'Описание',
      title: 'Лето в ',
      genre: 'Фентези',
      publishingHouse: {
         name: 'ADS', registrationNumber: 111, yearOfFoundation: 1999
      }
   },
   {
      author: {
         fullName: 'Волчкова А.А.', yearOfBirth: 1999,
      },
      description: 'Описание',
      title: 'Шестерка воронов',
      genre: 'Роман',
      publishingHouse: {
         name: 'AABC', registrationNumber: 111, yearOfFoundation: 1999
      }
   }
)
// Просмотр списка
console.log('Просмотр списка', userLib_1.BookList);
// Удаление книги по названию
userLib_1.removeBook('It')
// Просмотр списка
console.log('Просмотр списка', userLib_1.BookList);
// Получение списка по названию
console.log('Получение списка по названию', userLib_1.getBooksByTitle('Шестерка воронов'));
// Добавление книги
userLib_1.addBook(
   {
      author: {
         fullName: 'Волчкова А.А.', yearOfBirth: 1999,
      },
      description: 'Описание',
      title: 'Шестерка воронов',
      genre: 'Роман',
      publishingHouse: {
         name: 'AABC', registrationNumber: 111, yearOfFoundation: 1999
      }
   }
)
// Получение списка по названию
console.log('Получение списка по названию', userLib_1.getBooksByTitle('Шестерка воронов'));
// Получение списка по ФИО
console.log('Получение списка по ФИО', userLib_1.getBooksByAuthor('Волчкова А.А.'));
// Получение списка по названию издательства
console.log('Получение списка по названию издательства', userLib_1.getBooksByPublishingHouse('ADS'));
// Получение списка жанров
console.log('Получение списка жанров', userLib_1.getGenreList());
// Получение книг по жанру
console.log('Получение книг по жанру Роман', userLib_1.getBooksByGenre('Роман'));
const genreList = userLib_1.getGenreList()
for (const genre of genreList) {
   document.write(`========<br>Жанр: <mark>${genre}</mark> <br>Список книг:<br>`)
   for (const { title } of userLib_1.getBooksByGenre(genre)) {
      document.write(`${title}<br>`);
   }
}
console.log('Наличие книги по названию', userLib_1.availabilityOfABook('Шестерка воронов'));