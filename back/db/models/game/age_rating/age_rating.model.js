import {DataTypes} from "sequelize";

export class Age_ratingModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'AgeRating',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            rating_usa: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            rating_rars: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        configs: {
            tableName: 'AgeRatings'
        },
        include: []
    }
}