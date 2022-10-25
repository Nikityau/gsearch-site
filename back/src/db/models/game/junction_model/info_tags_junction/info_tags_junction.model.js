import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Info_tagModel} from "../../info_tag/info_tag.model.js";

export class Info_tags_junctionModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'InfoTagsJunctions',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,
                references: {
                    type: GameModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            },
            info_tag_id: {
                type: DataTypes.UUID,
                references: {
                    type: Info_tagModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined,
    }
}