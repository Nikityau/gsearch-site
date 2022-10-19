import { DataTypes } from "sequelize";

import {GameModel} from "../../game.model.js";
import {DeveloperModel} from "../../developer/developer.model.js";

export class Games_developersModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'GamesDevelopers',
        model: {
            id: {
              type: DataTypes.UUID,
              primaryKey: true,
              defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,
                references: {
                    model: GameModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            },
            developer_id: {
                type: DataTypes.UUID,
                references: {
                    model: DeveloperModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined
    }
}