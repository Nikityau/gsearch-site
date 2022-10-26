import {DataTypes} from "sequelize";

import {IModel} from "../../../../model.interface/model.interface.js";

export class LanguageModel implements IModel {
    _model = null
    _modelConfigs = {
        modelName: 'Language',
        model: {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            lang: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lang_is_support_interface: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            lang_is_support_sound: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            lang_is_support_subs: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        configs: {
            tableName: 'Languages'
        },
        include: []
    }
}