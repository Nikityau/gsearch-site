import { DataTypes } from "sequelize";

import {GameModel} from "../game.model.js";
import {DeveloperModel} from "../developer/developer.model.js";

export class Games_developersModel {
    static _gamesDeveloper = null


    static async define(sequelize) {
        Games_developersModel._gamesDeveloper = sequelize.define('GamesDevelopers', {
            game_id: {
                type: DataTypes.UUID,
                references: {
                    model: GameModel._gameModel,
                    key: 'id'
                }
            },
            developer_id: {
                type: DataTypes.UUID,
                references: {
                    model: DeveloperModel._devModel,
                    key: 'id'
                }
            }
        })
    }

    static async create(obj) {
        const gamesDevs = await Games_developersModel._gamesDeveloper.create(obj)

        await gamesDevs.save()

        return gamesDevs
    }

    static async getAll() {
        const all = await Games_developersModel._gamesDeveloper.findAll();

        return all
    }
}