'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Suliano Wayne',
        email: 'suwa@hotmail.com',
        password: '12345'
      },
      {
        name: 'Carlos Junior',
        email: 'cacajr@gmail.com',
        password: '123456'
      },
      {
        name: 'Pedro Pascal',
        email: 'pp@uol.com',
        password: '6987489'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
