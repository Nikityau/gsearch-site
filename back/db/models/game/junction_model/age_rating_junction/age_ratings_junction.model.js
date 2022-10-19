import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Age_ratingModel} from "../../age_rating/age_rating.model.js";

export class Age_ratings_junctionModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'AgeRatingsJunction',
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
            age_rating_id: {
                type: DataTypes.UUID,
                references: {
                    model: Age_ratingModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined
    }
}