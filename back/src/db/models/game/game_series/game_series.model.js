import {DataTypes} from "sequelize";

export class Game_seriesModel {
    static _model = null
    static _modelConfigs = {
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