'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_products', 
      { 
        idUser: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          references: {
            model: 'users',
            key: 'id_user',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          field: 'id_user'
        },
        idProduct: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          references: {
            model: 'products',
            key: 'id_product',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          field: 'id_product'
        },
        idSale: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          foreignKey: true,
          references: {
            model: 'sales',
            key: 'id_sale',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          field: 'id_sale'
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_products')
  }
}