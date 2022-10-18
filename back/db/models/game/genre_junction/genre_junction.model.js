import { DataTypes } from "sequelize";

import {GameModel} from "../game.model.js";
import {GenreModel} from "../genre/genre.model.js";

export class Genre_junctionModel {
    static _junction = null

    static async define(sequelize) {
        Genre_junctionModel._junction = sequelize.define('GenreJunction', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            game_id: {
                type: DataTypes.UUID,
                references: {
                    model: GameModel._gameModel,
                    key: 'id'
                }
            },
            genre_id: {
                type: DataTypes.UUID,
                references: {
                    model: GenreModel._genreModel,
                    key: 'id'
                }
            }
        })
    }

    static async create(obj) {
        const junction = await Genre_junctionModel._junction.create(obj);

        await junction.save()

        return junction
    }
}