import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class RatingModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Rating',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            site: {
                type: DataTypes.STRING,
                allowNull: false
            },
            site_icon: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: true
            },
            users_rating: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            critics_rating: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            critic_url: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Ratings'
        }
    }
}