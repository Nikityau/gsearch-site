import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class Age_ratingModel implements IModel {
    _model = null
    _modelConfigs = {
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