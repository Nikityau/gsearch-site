import {DataTypes} from "sequelize";

import {GameModel} from "../../game.model.js";
import {GenreModel} from "../../relations/genre/genre.model.js";

import {IModelJunction} from "../../../../model.interface/modelJunction.interface.js";

export class Genre_junctionModel implements IModelJunction {
    _model = null
    _modelConfigs = {
        modelName: 'GenresJunction',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,

            },
            genre_id: {
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
    model: GenreModel._modelConfigs.configs.tableName,
        key: 'id'
}*/
