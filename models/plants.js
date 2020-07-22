module.exports = (sequelize, DataTypes) => {
    const Plant = sequelize.define("Plant", {
        commonName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
        },
        water_amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0.5,
        },
        water_frequency: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        prune: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        prune_frequency: {
            type: DataTypes.INTEGER,
            defaultValue: 20,
        },
        rotate_frequency: {
            type: DataTypes.INTEGER,
            defaultValue: 20,
        },
        repot_frequency: {
            type: DataTypes.INTEGER,
            defaultValue: 20,
        },
    });
    Plant.associate = (models) => {
        Plant.belongsTo(models.Room, {
            foreignKey: { allowNull: false },
        });   
    };

    return Plant;
}

