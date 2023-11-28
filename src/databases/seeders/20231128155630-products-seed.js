'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        picture: null,
        name: 'Nike Air Jordan',
        category: 'Tênis',
        price: 999.99,
        quantity: 50
      },
      {
        picture: null,
        name: 'Nike Jordan',
        category: 'Camisa',
        price: 99.99,
        quantity: 10
      },
      {
        picture: null,
        name: 'Adidas Messi Edition',
        category: 'Camisa',
        price: 89.99,
        quantity: 20
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
}
