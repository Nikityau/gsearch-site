import {DataTypes} from 'sequelize'

import {IModel} from "../../model.interface/model.interface.js";

import {ModelHOM} from "../../model.HOM/model.HOM.js";

export class GameModel implements IModel{
    _model = null
    _modelConfigs = {
        modelName: 'Game',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
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
                allowNull: true,
                defaultValue: null
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
            },
        },
        configs: {
            tableName: 'Games'
        },
        include: []
    }
}

export const GameModelHOM = new ModelHOM(new GameModel())