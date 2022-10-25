import {DataTypes} from "sequelize";

export class LanguageModel {
    static _model = null
    static _modelConfigs = {
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