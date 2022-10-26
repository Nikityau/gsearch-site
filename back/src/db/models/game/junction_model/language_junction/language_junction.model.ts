import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {LanguageModel} from "../../relations/language/language.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Language_junctionModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'LanguageJunction',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            lang_id: {
                type: DataTypes.UUID,

            }
        }
    }
}

/*
references: {
    model: GameModel._modelConfigs.configs.tableName,
        key: 'id'
}

references: {
    model: LanguageModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
