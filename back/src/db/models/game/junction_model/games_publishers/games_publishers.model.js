import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {PublisherModel} from "../../publisher/publisher.model.js";

export class Games_publishersModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'GamesPublishers',
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
            publisher_id: {
                type: DataTypes.UUID,
                references: {
                    model: PublisherModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined
    }
}