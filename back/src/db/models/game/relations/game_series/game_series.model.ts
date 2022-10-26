import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class Game_seriesModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'GameSeries',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_series: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        configs: {
            tableName: 'GamesSeries'
        },
        include: []
    }
}