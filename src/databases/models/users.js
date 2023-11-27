module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'users',
        timestamps: false,  // remove the default createdAt/updatedAt
        underscored: true   // convert all camel case field in snake in query
    })
  
    Users.associate = (models) => {
        Users.belongsToMany(models.Product, { 
            through: 'UserProduct', 
            foreignKey: 'idProduct',
            otherKey: 'idUser',
        })
    }

    return Users
}