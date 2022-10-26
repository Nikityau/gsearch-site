import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Info_tagModel} from "../../relations/info_tag/info_tag.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Info_tags_junctionModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'InfoTagsJunctions',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            info_tag_id: {
                type: DataTypes.UUID,

            }
        },
        configs: undefined,
    }
}

/*
references: {
    type: GameModel._modelConfigs.configs.tableName,
        key: 'id'
}

references: {
    type: Info_tagModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
