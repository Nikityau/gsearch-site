import {DataTypes} from "sequelize";

import {GameModel} from "../game.model.js";
import {PublisherModel} from "../publisher/publisher.model.js";

export class Games_publishersModel {
    static _gamesPubs = null

    static async define(sequelize) {
        Games_publishersModel._gamesPubs = sequelize.define('GamesPublishers', {
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
            publisher_id: {
                type: DataTypes.UUID,
                references: {
                    model: PublisherModel._pubModel,
                    key: 'id'
                }
            }
        })
    }

    static async create(obj) {
        const gamesPubs = await Games_publishersModel._gamesPubs.create(obj)

        await gamesPubs.save()

        return gamesPubs
    }
}