import {DataTypes} from "sequelize";
import {GameModel} from "../../game.model.js";
import {LanguageModel} from "../../language/language.model.js";

export class Language_junctionModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'LanguageJunction',
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
            lang_id: {
                type: DataTypes.UUID,
                references: {
                    model: LanguageModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        }
    }
}