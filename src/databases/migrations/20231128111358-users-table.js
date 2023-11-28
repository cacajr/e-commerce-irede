'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', 
      { 
        idUser: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          field: 'id_user'
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}