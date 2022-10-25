import { DataTypes } from "sequelize";

export class Info_tagModel {
    static _model = null
    static _modelConfigs = {
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