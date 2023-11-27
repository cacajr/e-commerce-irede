module.exports = (sequelize, DataTypes) => {
    const usersProducts = sequelize.define('UserProduct', {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idSale: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }
    },
    {
        tableName: 'users_products',
        timestamps: false,  // remove the default createdAt/updatedAt
        underscored: true   // convert all camel case field in snake in query
    })
  
    usersProducts.associate = (models) => {
        models.Product.belongsToMany(models.User, {
            as: 'users',
            through: usersProducts,
            foreignKey: 'idProduct',
            otherKey: 'idUser',
        })

        models.User.belongsToMany(models.Product, {
            as: 'products',
            through: usersProducts,
            foreignKey: 'idUser',
            otherKey: 'idProduct',
        })

        usersProducts.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'idProduct'
        })

        usersProducts.belongsTo(models.Sale, {
            as: 'sale',
            foreignKey: 'idSale'
        })
    }

    return usersProducts
}