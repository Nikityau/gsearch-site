import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {Age_ratingModel} from "../../relations/age_rating/age_rating.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Age_ratings_junctionModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'AgeRatingsJunction',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            age_rating_id: {
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
    model: Age_ratingModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
