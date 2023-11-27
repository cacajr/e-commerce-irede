module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sale', {
        idSale: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true // this attribute contains default value in DB
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true // this attribute contains default value in DB
        }
    },
    {
        tableName: 'sales',
        timestamps: false,  // remove the default createdAt/updatedAt
        underscored: true   // convert all camel case field in snake in query
    })
  
    Sales.associate = (models) => {
        Sales.hasMany(models.UserProduct, { 
            foreignKey: 'idSale', 
            as: 'sales'
        })
    }

    return Sales
}