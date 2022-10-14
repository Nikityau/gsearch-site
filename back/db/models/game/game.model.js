import {Model, DataTypes} from 'sequelize'

import {Logger} from "../../../logger/logger.js";

export class GameModel {
    static _gameModel = null

    static async defineGameModel(sequelize) {
        GameModel._gameModel = sequelize.define('Game', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            subtitle: {
                type: DataTypes.STRING,
                allowNull: true
            },
            description: {
                type: DataTypes.TEXT
            }
        }, {
            tableName: 'Games'
        })
    }

    static async createGame(gameObj) {
        const newGame = await GameModel._gameModel.create({title: "Cyberpunk 2077"})

        await newGame.save()
    }

    static async updateGame(gameObj) {
        // find by id & upd
    }

    static async getAllGames() {
        try {
            const all = await GameModel._gameModel.findAll();
            Logger.success(`DB query: fetch all games`)

            return JSON.stringify(all)
        } catch (e) {
            Logger.error(`DB query error: ${e.message}`)
        }
    }

    static async getGamesByGenres(genres) {
        // find by genres
    }

    static async getGamesByDevs(devStudio) {
        // find by dev studio
    }

    static async getGamesByPubs(pubStudio) {
        // find by publisher studio
    }

    static async getGamesByRating(typeSearch) {
        // find by rating, up down
    }

    static async getGameByName(name) {
        // find by name
    }

    static async getGameById(id) {
        // find by id
    }
}