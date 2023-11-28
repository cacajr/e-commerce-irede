'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users_products', [
      {
        id_user: 1,
        id_product: 1,
        id_sale: 1,
        quantity: 2,
        price: 999.99
      },
      {
        id_user: 1,
        id_product: 3,
        id_sale: 1,
        quantity: 1,
        price: 89.99
      },
      {
        id_user: 2,
        id_product: 3,
        id_sale: 2,
        quantity: 10,
        price: 89.99
      },
      {
        id_user: 3,
        id_product: 2,
        id_sale: 3,
        quantity: 5,
        price: 99.99
      },
      {
        id_user: 3,
        id_product: 1,
        id_sale: 3,
        quantity: 1,
        price: 999.99
      },
      {
        id_user: 3,
        id_product: 3,
        id_sale: 3,
        quantity: 3,
        price: 89.99
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users_products', null, {})
  }
}