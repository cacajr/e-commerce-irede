'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', 
      { 
        idSale: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          field: 'id_sale'
        },
        date: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: 'pending',
          allowNull: false
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales')
  }
}