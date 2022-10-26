import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class AchievementModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Achievement',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            aim: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        configs: {
            tableName: 'Achievements'
        }
    }
}