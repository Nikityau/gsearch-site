import { DataTypes } from "sequelize";

import {GameModel} from "../../game.model.js";
import {GenreModel} from "../../genre/genre.model.js";

export class Genre_junctionModel {
    static _model = null
    static _modelConfigs = {
        modelName: 'GenresJunction',
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
            genre_id: {
                type: DataTypes.UUID,
                references: {
                    model: GenreModel._modelConfigs.configs.tableName,
                    key: 'id'
                }
            }
        },
        configs: undefined
    }
}