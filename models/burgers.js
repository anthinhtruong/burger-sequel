module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger",{
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
});
return burger;
}