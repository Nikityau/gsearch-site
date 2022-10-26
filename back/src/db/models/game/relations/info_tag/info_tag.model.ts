import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class Info_tagModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'InfoTag',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            tag_title: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            tag_icon: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: null
            }
        },
        configs: {
            tableName: 'InfoTags'
        },
        include: []
    }
}