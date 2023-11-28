'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        date: '2023-10-15 09:03:31.250557-03'
      },
      {
        date: '2023-11-22 22:50:31.250557-03'
      },
      {
        date: '2023-11-26 14:30:31.250557-03'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {})
  }
}