module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Product', {
        idProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        picture: DataTypes.BLOB,
        name: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.DECIMAL(10,2),
        quantity: DataTypes.INTEGER
    },
    {
        tableName: 'products',
        timestamps: false,  // remove the default createdAt/updatedAt
        underscored: true   // convert all camel case field in snake in query
    })
  
    Products.associate = (models) => {
        Products.belongsToMany(models.User, { 
            through: 'UserProduct',
            foreignKey: 'idUser',
            otherKey: 'idProduct',
        })

        Products.hasMany(models.UserProduct, { 
            foreignKey: 'idProduct', 
            as: 'sales'
        })
    }

    return Products
}