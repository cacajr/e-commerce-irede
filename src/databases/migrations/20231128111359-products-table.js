'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', 
      { 
        idProduct: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          field: 'id_product'
        },
        picture: {
          type: Sequelize.BLOB,
          allowNull: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
}