import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class GenreModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Genre',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            genre: {
                type: DataTypes.STRING,
                unique: true
            },
            icon: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            }
        },
        configs: {
            tableName: 'Genres'
        },
        include: []
    }
}