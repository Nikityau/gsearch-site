import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Game_tagModel} from "../../relations/game_tag/game_tag.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Games_tags_junctionModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'GamesTagsJunction',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            game_tag_id: {
                type: DataTypes.UUID,

            }
        },
        configs: undefined
    }
}

/*
references: {
    model: GameModel._modelConfigs.configs.tableName,
        key: 'id'
}

references: {
    model: Game_tagModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
