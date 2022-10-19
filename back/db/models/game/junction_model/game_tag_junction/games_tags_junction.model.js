import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Game_tagModel} from "../../game_tag/game_tag.model.js";

export class Games_tags_junctionModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'GamesTagsJunction',
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
            game_tag_id: {
                type: DataTypes.UUID,
                references: {
                    model: Game_tagModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined
    }
}