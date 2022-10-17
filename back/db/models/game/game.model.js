import {Model, DataTypes} from 'sequelize'

import {DeveloperModel} from "./developer/developer.model.js";
import {ImageModel} from "../image/image.model.js";
import {VideoModel} from "../video/video.model.js";
import {AchievementModel} from "./achievement/achievement.model.js";
import {FactModel} from "./fact/fact.model.js";

import {Logger} from "../../../logger/logger.js";

export class GameModel {
    static _gameModel = null

    static async defineModel(sequelize) {
        GameModel._gameModel = sequelize.define('Game', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            subtitle: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            preview_image: {
                type: DataTypes.STRING,
                allowNull: true
            },
            release_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: 0
            },
            download_number: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            is_dlc: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            original_game_id: {
                type: DataTypes.UUID,
                allowNull: true,
                defaultValue: null,
            }
        }, {
            tableName: 'Games'
        })
    }

    static async modelHasMany(model, {foreignKey, asWhat}) {
        GameModel._gameModel.hasMany(model, {foreignKey: foreignKey, as: asWhat})
    }

    static async belongsToMany(model, {foreignKey, asWhat, through}) {
        GameModel._gameModel.belongsToMany(model, {
            foreignKey: foreignKey,
            as: asWhat,
            through: through
        })
    }

    static async create(gameObj) {
        const newGame = await GameModel._gameModel.create(gameObj)

        await newGame.save()

        return newGame
    }

    static async updateGame(gameObj) {
        // find by id & upd
    }

    static async getAll() {
        try {
            const all = await GameModel._gameModel.findAll({
                include: [
                    {
                        model: ImageModel._imageModel,
                        attributes: ['id', 'url'],
                        as: 'images',
                    },
                    {
                        model: VideoModel._videoModel,
                        attributes: ['id', 'url'],
                        as: 'videos',
                    },
                    {
                        model: AchievementModel._achievementModel,
                        attributes: ['id', 'title', 'icon', 'aim'],
                        as: 'achievements',
                    },
                    {
                        model: FactModel._factModel,
                        attributes: ['id', 'fact'],
                        as: 'game_facts'
                    },
                    {
                        model: DeveloperModel._devModel,
                        as: 'developers',
                        through: {
                            attributes: ['game_id', 'developer_id']
                        }
                    }
                ]
            });
            Logger.success(`DB query: fetch all games`)

            return JSON.stringify(all, null, 2)
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