// / Склад. 
// База хранящихся на складе товаров: 
// - название товара, 
// - единица измерения, 
// - количество, 
// - фирма производитель (название, регистрационный номер). 
// Организовать 
// - регистрацию/отгрузку товаров, 
// - фильтрацию по названию товара, 
// - фильтрацию по названию фирмы

class Storage {
   constructor(data) {
      this.data = data
   }

   addProduct(product, manufacturer) {
      this.data.push({
         product,
         manufacturer
      })
   }
   removeProduct(productName) {
      this.data = this.data.filter(({ product: { name } }) => name !== productName)
   }
   filterManufacturersName(searchName) {
      return this.data.filter(({ manufacturer: { name } }) => name === searchName)
   }
   filterProductsName(searchName) {
      return this.data.filter(({ product: { name } }) => name === searchName)
   }
}

const products = [
   {
      product: {
         name: 'pr 1', unit: 'kg', qnt: 10,
      },
      manufacturer: {
         name: 'man 1', regNumb: 1,
      }
   },
   {
      product: {
         name: 'pr 2', unit: 'kg', qnt: 11,
      },
      manufacturer: {
         name: 'man 2', regNumb: 2,
      }
   }, {
      product: {
         name: 'pr 1', unit: 'kg', qnt: 14,
      },
      manufacturer: {
         name: 'man 3', regNumb: 3,
      }
   },
]

const storage = new Storage(products)
console.log('Старт', storage.data);
storage.addProduct({
   name: 'nn',
   unit: 'kg',
   qnt: 10
}, {
   name: 'man 1',
   regNumb: 1
})
console.log('Добавление', storage.data);
console.log('Фильтр мануф.', storage.filterManufacturersName('man 1'));
console.log('Фильтр прод..', storage.filterProductsName('pr 1'));
storage.removeProduct('pr 1')
console.log('Удаление', storage.data);






// --- Тест 1
// console.log(Manufacturer.filterName(products, 'man 2'));
// console.log(Product.filterName(products, 'pr 1'));
// --- Тест 2
// const a = [
//    { id: 1 },
//    { id: 2 },
//    { id: 3 },
// ]
// console.log(a.findIndex(({ id: e }) => e == 0));