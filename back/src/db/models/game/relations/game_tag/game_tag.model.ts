import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class Game_tagModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'GameTag',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            tag_title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        configs: {
            tableName: 'GamesTags'
        },
        include: []
    }
}